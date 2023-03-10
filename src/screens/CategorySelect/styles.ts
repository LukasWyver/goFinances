import styled from "styled-components/native";
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

interface CategoryProps{
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${Platform.OS === 'ios' ? RFValue(113) : RFValue(85)}px;
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

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ isActive, theme}) => isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(24)}px;
`;
