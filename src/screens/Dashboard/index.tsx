import React from 'react';
import { ScrollView } from 'react-native';
import HighlightCard from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from './styles';



export default function Dashboard() {
  const transactions = [
    {
      title: 'entradas',
      icon: 'arrow-up-circle',
      amount: 17400.00,
      lastTransactions: "13 de janeiro",
    },
    {
      title: 'saídas',
      icon: 'arrow-down-circle',
      amount: 1259.00,
      lastTransactions: "13 de janeiro",
    },
    {
      title: 'total',
      icon: 'dollar-sign',
      amount: 16141.00,
      lastTransactions: "13 de janeiro",
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://github.com/lukaswyver.png' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard title='entradas' amount="17400.00" lastTransactions="Última entrada dia 13 de janeiro" type="up"/>
        <HighlightCard title='saídas' amount="1241.00" lastTransactions="Última saída dia 02 de fevereiro" type="down"/>
        <HighlightCard title='total' amount="16500.00" lastTransactions="01 à 16 de fevereiro" type="total"/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionCard title="Desenvolvimento de Site" amount="1100.000" type="up" category="Vendas" date="13/01/2022"/>
        <TransactionCard title="Hamburgueria Pizzy" amount="59.90" type="down" category="Alimentação" date="01/02/2022"/>
      </Transactions>
    </Container>
  );
}