/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { ContainerCenter } from '@/layout/ContainerGroup';
import { Form, Input, Title } from '@/molecules/FormGroup';

const SignUpView:React.FC = () =>
{
	const router = useRouter();

	return (
		<ContainerCenter>
			<Form css={form}>
				<Title css={title}>SignUp</Title>
				<Input
					css={input}
					name='name'
					placeholder='Name'
					type='text'
				/>
				<Input
					css={input}
					name='name'
					placeholder='Phone Number'
					type='text'
				/>
				<Input
					css={input}
					name='name'
					placeholder='ID'
					type='text'
				/>
				<Input
					css={input}
					name='name'
					placeholder='Password'
					type='text'
				/>
			</Form>
		</ContainerCenter>
	);
};

export default SignUpView;

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