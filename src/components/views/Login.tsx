/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

import { FormBtn } from '@/atom/ButtonGroup';
import { ContainerCenter } from '@/layout/ContainerGroup';
import { Form, Input, Title } from '@/molecules/FormGroup';

const Login:React.FC = () => (
	<ContainerCenter>
		<Form css={form}>
			<Title css={title}>Login</Title>
			<Input css={input} placeholder='ID' type='text' />
			<Input css={input} placeholder='Password' type='password' />
			<FormBtn>Submit</FormBtn>
		</Form>
	</ContainerCenter>
);

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