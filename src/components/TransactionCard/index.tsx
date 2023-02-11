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

interface Category {
    name: string;
    icon: string;
}

export interface TransactionCardDataProps { 
    type: 'positive' | 'negative',
    title: string;
    amount: string;
    category: Category;
    date: string;
}

interface TransactionCardProps {
    data:  TransactionCardDataProps;
}

export function TransactionCard({ data, }: TransactionCardProps) {
    return (
        <Container>
            <Title>{data.title}</Title>

            <AmountScrollView>
                <Amount type={data.type}>
                    {data.type != 'positive' ? '- R$': 'R$' }
                    {data.amount}
                </Amount>
            </AmountScrollView>

            <Footer>
                <Category>
                    <CategoryIcon name={data.category.icon} />
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    );
}