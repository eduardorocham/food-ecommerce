import styled from "styled-components";

export const FoodsArea = styled.div`
    .input-area {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 40px 0;

        .input-looking {
            width: 50%;
            display: flex;
            align-items: center;

            input {
                width: 100%;
                outline: 0;
                padding: 5px;
            }
        }

        select {
            width: 25%;
        }
    }

    .warning-area {
        height: 30vh;
        text-align: center;
        font-weight: 700;
    }
`

