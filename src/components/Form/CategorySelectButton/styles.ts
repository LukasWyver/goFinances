import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7,
})`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    border-radius: 5px;
    padding: ${RFValue(16)}px ${RFValue(18)}px;
    background-color: ${({theme}) => theme.colors.shape};
`;

export const Category = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(14)}px;

`;

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(20)}px;
`;