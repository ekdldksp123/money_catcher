import styled from '@emotion/styled';

export const Form = styled.section`
    z-index: 11;
    margin-top: 40px;
    width: 35vw;
    height: 55vh;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1em 1.5em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormWithShadow = styled.section`
    z-index: 11;
    margin-top: 40px;
    width: 35vw;
    height: 55vh;
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1em 1.5em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`;

export const Title = styled.h1`
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 50px;
    color: #24CAEA;
    text-align: center;
`;

export const Label = styled.label`
    position: relative;
    top: 20%;
    font-weight: bold;
    font-size: 1.35rem;
    color: #616161;
`;

export const Input = styled.input`
    width: 80% !important;
    padding-left: 25px !important;
    margin-bottom: 20px;
    height: 30px;
    transition: background-color 0.2s ease 0s;
    background:  repeat scroll 0 0 transparent;
    border-radius: 10px;
    border: none;
    border-right: 0px; 
    border-top: 0px; 
    boder-left: 0px; 
    boder-bottom: 0px;
    color: F5F5F5;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 1rem;
    padding: 5px 8px;
    background-color: #F5F5F5;
    
    &:focus {
        background: none repeat scroll 0 0 F5F5F5;
        border-color: F5F5F5;
        outline-width: 0;
        color: #616161;
        font-weight: bold;
    }

    &:focus {
        color: #616161;
        font-weight: bold;

        &::placeholder {
            color: #616161;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: 616161;
        font-weight: bold;
    }
`;

export const TextArea = styled.textarea`
    width: 92% !important;
    padding: 15px 0 0 25px !important;
    margin-bottom: 20px;
    height: 250px;
    border-bottom-colors: none;
    border-left-colors: none;
    border-right-colors: none;
    border-top-colors: none;
    background: none repeat scroll 0 0 transparent;
    border-color: F5F5F5;
    border-image: none;
    border-radius: 20px 20px 20px 20px;
    border-style: solid solid solid solid;
    border-width: 1px 1px 1px 1px;
    color: F5F5F5;
    font-weight: bold;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;

    &:focus {
        background: none repeat scroll 0 0 F5F5F5;
        border-color: F5F5F5;
        outline-width: 0;
        color: #fff;
        font-weight: bold;
    }

    &:focus {
        color: #fff;
        font-weight: bold;

        &::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: F5F5F5;
        font-weight: bold;
    }
`;