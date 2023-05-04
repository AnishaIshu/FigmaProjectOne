import styled from 'styled-components'

export const Main = styled.div`
    background-color: #fff;
    border: 1px solid #fff;
    box-shadow: 0px 0px 9px;
    width: 80%;
    height: 80vh;
    margin: 5.7rem 9rem 5rem 11.5rem;
    border-radius: 10px;
    padding: 2px;

    .tags{
        display: flex;
        flex-direction: column;
        gap: 7em;
        p{
            transform: rotate(90deg);
        }
    }

    .dashes{
        display: flex;
        flex-direction: column;
        gap: 7em;
        p{
            transform: rotate(90deg);
            width: 100px;
            height: 3px;
            background-color: #00004d;
        }
    }
`;

export const ButtonClick = styled.button`
    border: 1px solid gray;
    padding: 5px;
    width: 6rem;
    height: 2.5rem;
    background: #00004d;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
`;