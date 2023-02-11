import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface TypeProps { 
    type: 'positive' | 'negative',
}

export const Container = styled.View`
    border-radius: 5px;
    padding: ${RFValue(17)}px ${RFValue(24)}px;
    background-color: ${({theme}) => theme.colors.shape};    
    margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const AmountScrollView = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
  })`
    margin-top: 2px;
  `;

export const Amount = styled.Text<TypeProps>`    
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme, type }) => type != 'negative' ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(19)}px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CategoryIcon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-left: ${RFValue(17)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.text};
`;


