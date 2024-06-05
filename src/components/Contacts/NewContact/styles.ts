import styled from 'styled-components';
import { colors } from '../../../styles';

export const Container = styled.div`
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 2px solid black;
    display: flex;
    gap: 32px;
    justify-content: space-between;
`

export const Form = styled.form`
    display: flex;
    gap: 32px;
`

export const Field = styled.input`
    padding: 8px;
    border-radius: 8px;
`

export const NewContactBtn = styled.button`
    background-color: ${colors.blue};
    justify-self: end;
`