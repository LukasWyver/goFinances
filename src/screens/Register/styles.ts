import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({theme}) => theme.colors.primary};
    
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;    
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    padding: ${RFValue(24)}px;
    justify-content: space-between;
`;
export const Fields = styled.View``;

export const TransactionTypes = styled.View`
    flex-direction: row;
    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(16)}px;
    justify-content: space-between;
`;

