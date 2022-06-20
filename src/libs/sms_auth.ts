import * as superagent from 'superagent';

import * as crypto from 'crypto';

// https://api.ncloud-docs.com/docs/ai-application-service-sens-smsv2
interface MessageData {
  type: 'SMS' | 'LMS' | 'MMS';
  from: string; // 발신번호
  content: string; // 메시지내용
  messages: Messages[];
  reserveTime?: string; // 메시지 발송 예약 일시 (yyyy-MM-dd HH:mm)
  scheduleCode?: string; // 등록하려는 스케줄 코드
}
interface Messages {
  to: string; // 받는사람 전화번호
  // 개별적으로 보낼 메시지내용 ->messages 내에 subject, content를 정의하지 않으면 기본 subject, content로 지정된 값으로 발송
  content?: string;
  subject?: string;
}
export interface TextMessagingContent {
  userPhoneNumberList: string[];
  content: string;
}
export class TextMessagingShared
{
	private apiUrl: string = '';

	private sendNumber: string = '';

	private NCP_accessKey: string = '';

	private NCP_secretKey: string = '';

	private NCP_serviceID: string = '';

	constructor()
	{
		this.apiUrl = 'https://sens.apigw.ntruss.com/sms/v2';
		this.sendNumber = process.env.SEND_PHONE_NUMBER as string;
		this.NCP_accessKey = process.env.ACCESS_KEY as string;
		this.NCP_secretKey = process.env.SECRET_KEY as string;
		this.NCP_serviceID = process.env.SERVICE_ID as string;
	}

	async sendMessage(textMessagingContent: TextMessagingContent)
	{
		// 해더세팅을 위한 인증키 생성
		const { signature, timestamp } = this.makeSignature();

		const url = `${this.apiUrl}/services/${this.NCP_serviceID}/messages`;
		const sendBody: MessageData = {
			content: textMessagingContent.content.replace('<br>', '\n'),
			from: this.sendNumber,
			messages: textMessagingContent.userPhoneNumberList.map((phoneNumber): Messages => ({
				subject: '펀드고',
				to: phoneNumber
			})),
			type: 'LMS'
		};

		const response: superagent.Response = await superagent
			.post(url)
			.send(sendBody)
			.set('Content-Type', 'application/json; charset=utf-8')
			.set('x-ncp-iam-access-key', this.NCP_accessKey)
			.set('x-ncp-apigw-timestamp', timestamp)
			.set('x-ncp-apigw-signature-v2', signature.toString());

		return `메시지 전송 완료 [status]:${response.status} [statusCode]:${response.statusCode} text: [${
			response.text
		}] phones : ${JSON.stringify(sendBody.messages)}`;
	}

	// 네이버 인증키 생성
	// https://api.ncloud-docs.com/docs/common-ncpapi#%EC%9D%B8%EC%A6%9D%ED%82%A4-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
	private makeSignature(): { signature: string; timestamp: string }
	{
		const url = `/sms/v2/services/${this.NCP_serviceID}/messages`;
		const method = 'POST'; // method
		const space = ' '; // one space
		const newLine = '\n'; // new line
		const message = [];
		const timestamp = Date.now().toString();
		const hmac = crypto.createHmac('sha256', this.NCP_secretKey);

		message.push(method);
		message.push(space);
		message.push(url);
		message.push(newLine);
		message.push(timestamp);
		message.push(newLine);
		message.push(this.NCP_accessKey);
		return {
			signature: hmac.update(message.join('')).digest('base64'),
			timestamp
		};
	}

	async sendAuthMessage(users: string[], authNumber: string)
	{
		await this.sendMessage({
			content: `Show Me the Money 인증번호입니다 [${authNumber}] 를 입력해주세요.`,
			userPhoneNumberList: users
		});
	}
}