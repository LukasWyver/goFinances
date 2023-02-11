import React from 'react';
import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface Props  extends TouchableOpacityProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean;
}

export default function TransactionTypeButton({ 
    title, 
    type, 
    isActive, 
    ...rest }:Props) {
    return (
        <Container 
            activeOpacity={.7} 
            isActive={isActive}
            type={type} 
            {...rest} 
        >
            <Icon 
                type={type} 
                name={icons[type]}
            />

            <Title>
                {title}
            </Title>
        </Container>
    );
}