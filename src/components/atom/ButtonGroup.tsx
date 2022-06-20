import styled from '@emotion/styled';

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

export const ConfirmBtn = styled.button`
    outline:none;
    height: 40px;
    text-align: center;
    width: 130px;
    border-radius:40px;
    background: #fff;
    border: 2px solid #1ECD97;
    color:#1ECD97;
    letter-spacing:1px;
    text-shadow:0;
    font:{
        size:12px;
        weight:bold;
    }
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        color:white;
        background: #1ECD97;
    }
    &:active {
        letter-spacing: 2px ;
    }
    &:after {
        content:"CONFIRM";
    }
`;

export const SendBtn = styled.button`
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }

    &:focus {
        outline: none;
    }
`;