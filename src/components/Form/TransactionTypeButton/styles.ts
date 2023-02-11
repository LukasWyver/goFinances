import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: 'up' | 'down';
}

interface ContainerProps { 
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
   width: 49%;
   padding: ${RFValue(16)}px;

   flex-direction: row;
   align-items: center;
   justify-content: center;
   
   border-radius: 5px;
   border-style: solid;
   border-color: ${({ theme }) => theme.colors.text};
   border-width: ${({isActive}) => isActive ? 0 : 1.5 }px;

   ${({ isActive, type  }) => isActive && type === 'up' && css`background-color: ${({theme}) => theme.colors.success_light}`};
   ${({ isActive, type  }) => isActive && type === 'down' && css` background-color: ${({theme}) => theme.colors.attention_light}`};
`;

export const Icon = styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)}px;
    color: ${({ theme, type }) => type != 'down' ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
    margin-left: ${RFValue(12)}px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`;