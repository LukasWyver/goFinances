import React from 'react';
import {
    Container,
    Title,
    AmountScrollView,
    Amount,
    Footer,
    Category,
    CategoryIcon,
    CategoryName,
    Date,
} from './styles';

interface Props {
    title: string;
    amount: string;
    type:  'up' | 'down';
    category: string;
    date: string;
  }
  
export function TransactionCard({title, amount, type, category, date}: Props) {
    return (
        <Container>
            <Title>{title}</Title>

            <AmountScrollView>
                <Amount type={type}>
                    R$ {type === 'down' && '-'}
                    {amount}
                </Amount>
            </AmountScrollView>

            <Footer>
                <Category>
                    <CategoryIcon name="dollar-sign" />
                    <CategoryName>{category}</CategoryName>
                </Category>

                <Date>{date}</Date>
            </Footer>
        </Container>
    );
}