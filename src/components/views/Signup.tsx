/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { FormBtn } from '@/atom/ButtonGroup';
import { ContainerCenter } from '@/layout/ContainerGroup';
import { Form, Input, Label, Select, SelectBox, SelectGroup, Title } from '@/molecules/FormGroup';

const SignUpView:React.FC = () => {
	const router = useRouter();
	const onSubmit = () => router.push({ pathname: '/main' });
	return (
		<ContainerCenter>
			<Form css={responsive_form}>
				<Title css={responsive_title}>SignUp</Title>
				<Input
					css={responsive_input}
					name='id'
					placeholder='ID'
					type='text'
				/>
				<Input
					css={responsive_input}
					name='password'
					placeholder='Password'
					type='text'
				/>
				<Input
					css={responsive_input}
					name='name'
					placeholder='Name'
					type='text'
				/>
				<SelectBox> 
					<Select css={responsive_select} placeholder='BirthYear'>
						<option>BirthYear</option>
						<option>1997</option>
					</Select>
				</SelectBox>
				<SelectBox> 
					<Select css={responsive_select} placeholder='Gender'>
						<option>Gender</option>
						<option>Male</option>
						<option>Female</option>
						<option>Unknown</option>
					</Select>
				</SelectBox>
				<SelectBox> 
					<Select css={responsive_select} placeholder='Address'>
						<option>Address</option>
						<option>서울</option>
						<option>경기도</option>
						<option>강원도</option>
						<option>경상도</option>
					</Select>
				</SelectBox>
				<FormBtn onClick={() => onSubmit()}>SignUp</FormBtn>
			</Form>
		</ContainerCenter>
	);
};

export default SignUpView;

const responsive_title = css`
    @media (max-width: 600px) {
        margin-left: 10px;
    }
`;

const responsive_form = css`
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

const responsive_input = css`
    @media (max-width: 600px) {
        width: 85% !important;
    }
`;


const responsive_label = css`
    @media (max-width: 1200px) {
        font-size: 1.25rem;
    }
`

const responsive_select = css`
    @media (max-width: 1200px) {
        font-size: 1.15rem;
        & option {
            font-size: 1.1rem;
        }
    }
`
