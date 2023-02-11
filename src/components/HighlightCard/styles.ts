import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';

interface TypeProps {
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
    border-radius: 5px;
    width: ${RFValue(300)}px;    
    padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
    ${({ type }) => type != 'total' && css`margin-right: ${RFValue(16)}px;`};
    background-color: ${({ theme, type }) => type != 'total' ? theme.colors.shape : theme.colors.secondary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;


export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    color: ${({ theme, type }) => type != 'total' ? theme.colors.title : theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    text-transform: capitalize;
`;

export const Icon = styled(Feather)<TypeProps>`
    ${({ type }) => type === 'up' && css` color: ${({ theme }) => theme.colors.success};`};
    ${({ type }) => type === 'down' && css` color: ${({ theme }) => theme.colors.attention};`};
    ${({ type }) => type === 'total' && css` color: ${({ theme }) => theme.colors.shape};`};
    font-size: ${RFValue(40)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(32)}px;
    margin-top: ${RFValue(38)}px;
    color: ${({ theme, type }) => type != 'total' ? theme.colors.title : theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    color: ${({ theme, type }) => type != 'total' ? theme.colors.text : theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
