/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { FormBtn } from '@/atom/ButtonGroup';
import { ContainerCenter } from '@/layout/ContainerGroup';
import { Form, Input, Title } from '@/molecules/FormGroup';
import Link from 'next/link';

const Login:React.FC = () => {
	const router = useRouter();

	const [ id, setId ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');

	const onSubmit = () =>
	{
		if (id === 'user' && password === '123456') router.push({ pathname: '/signup' });
		else
		{
			setId('');
			setPassword('');
			alert('회원 정보가 없습니다.');
		}
	};

	return (
		<ContainerCenter>
			<Form css={form}>
				<Title css={title}>Login</Title>
				<Input
					css={input}
					id='id'
					placeholder='ID'
					type='text'
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
				<Input
					css={input}
					id='password'
					placeholder='Password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<FormBtn onClick={() => onSubmit()}>Submit</FormBtn>
				<Link href='/signup'>회원 가입하기</Link>
			</Form>
		</ContainerCenter>
	);
};

export default Login;

const title = css`
    @media (max-width: 600px) {
        margin-left: 10px;
    }
`;

const form = css`
    @media (max-width: 600px) {
        margin-left: 25px;
        margin-top: 25px;
        width: 250px;
        height: 75vh;
        padding: 0.5em 1em 0.5em 1em;

        overflow-y: auto;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

const input = css`
    @media (max-width: 600px) {
        width: 85% !important;
    }
`;