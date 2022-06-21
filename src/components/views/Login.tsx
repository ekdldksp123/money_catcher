/**
 * 
 * 로그인 
 *
 * @author punchlips97
 * @since 2022.06.21 Tue 01:23:10
 * 
 */
import React from 'react';

import { FormBtn } from '@/atom/ButtonGroup';
import classNames from 'classnames/bind';

import styles from '@/molecules/FormGroup.module.scss';

const Login:React.FC = () => {
    const cn = classNames.bind(styles);

	return (
        <section className={cn('container-center')}>
            
            <section className={cn('form')}>
                <h1 className={cn('title')}>Login</h1>
                <input placeholder='ID' type='text' />
                <input placeholder='Password' type='password' />
                <FormBtn>Submit</FormBtn>
            </section>
        </section>
    );
};

export default Login;

