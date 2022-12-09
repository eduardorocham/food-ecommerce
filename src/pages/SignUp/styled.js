import styled from "styled-components";

export const SignUpArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 60vh;

    h1 {
        margin-bottom: 20px;
    }

    form {
        width: 300px;
        height: fit-content;
        background-color: #feccda;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            display: block;
            width: 100%;
            background-color: transparent;
            padding: 10px 20px;
            border: 0;
            border-bottom: 1px solid #999;
            outline: 0;
            margin-bottom: 15px;
        }

        button {
            width: fit-content;
            padding: 5px 10px;
            background-color: #f64c03;
            border: 0;
            cursor: pointer;
            border-radius: 5px;
            color: #FFF;

            &:hover {
                background-color: #c94005;
            }
        }
    }

    a {
        margin-top: 35px;
        font-size: 13px;
        color: #000;

        &:hover {
            text-decoration: underline;
        }
    }
`;