import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransactions: string;
  type:  'up' | 'down' | 'total';
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
}

export default function HighlightCard({ title, amount, lastTransactions, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type}/>
      </Header>

      <Content>
        <Amount type={type}>R$ {amount}</Amount>
        <LastTransaction type={type}>{lastTransactions}</LastTransaction>
      </Content>
    </Container>
  );
}