import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    margin: ${RFValue(7)}px;
    font-size: ${RFValue(12)}px;
    color: ${({theme}) => theme.colors.attention};
    font-family: ${({theme}) => theme.fonts.regular};
`;