import styled from '@emotion/styled';

export const Form = styled.section`
    z-index: 11;
    margin-left: 80px;
    margin-top: 40px;
    width: 35vw;
    height: 75vh;
    background-color: #fff;
    opacity: 0.8;
    border-radius: 1.5rem;
    padding: 1em 1.5em;
    z-index: 2;

    transition: .8s;
    &:hover {
        opacity: 0.9;
        transform: scale(1.01);
    }
`;

export const Title = styled.h1`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 50px;
    color: F5F5F5;
    text-decoration: underline;
`;

export const Input = styled.input`
    width: 90% !important;
    padding-left: 25px !important;
    margin-bottom: 20px;
    height: 30px;
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

export const StyledModalBody = styled.div`
    padding-top: 25px;
    text-align: center;
    font-size: 20px;
    color: #808080;
    width: 100%;
    height: 80px;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 15px 25px 15px 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #1ECD97;
    font-size: 25px;
`;

export const StyledModal = styled.div`
    display: flex;
    overflow-y: auto !important;
    flex-direction: column;
    background: white;
    width: 350px;
    height: 200px;
    border-radius: 25px;
    padding-bottom: 20px;
`;

export const StyledModalTitle = styled.div`
    display: relative;
    margin: 0 auto;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;
export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.a`
    color: white;
    text-decoration: none;
`;

export const StyledModalFooter = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;