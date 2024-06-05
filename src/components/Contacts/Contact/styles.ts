import styled from 'styled-components';
import { colors } from '../../../styles';

export const Contact = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;

    input:disabled {
        border: 1px solid transparent;
        border-bottom: 1px solid black;
        border-radius: 0;
        background-color: transparent;
    }
`

export const Form = styled.form`
    display: flex;
    gap: 32px;
`

export const FieldContainer = styled.div``

export const Label = styled.label`
    margin-bottom: 4px;
    margin-left: 8px;
    font-size: 0.8rem;
    display: block;
`

export const Field = styled.input`
    background-color: ${colors.gray};
    border: 1px solid black;
    border-radius: 8px;
    padding: 8px;
`

export const Buttons = styled.ul`
    button {
        width: 75px;
    }
`

export const Delete = styled.button`
    margin-right: 16px;
    background-color: ${colors.red};
`

export const Edit = styled.button`
    background-color: ${colors.yellow};
`

export const Save = styled.button`
    margin-right: 16px;
    background-color: ${colors.green}
`

export const Cancel = styled.button`
    background-color: ${colors.red}
`