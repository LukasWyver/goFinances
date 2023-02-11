import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import { TransactionCard, TransactionCardDataProps } from '../../components/TransactionCard';
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
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardDataProps { 
  id: number;
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: 1,
      title: "Desenvolvimento de Site",
      type: "positive",
      amount: "1100.000",
      category: {
        name: "Vendas",
        icon: "dollar-sign"
      },
      date: "13/01/2023",
    },
    {
      id: 2,
      title: "Pizzaria e Chopperia",
      type: "negative",
      amount: "49.90",
      category: {
        name: "Compras",
        icon: "coffee"
      },
      date: "04/02/2023",
    },
    {
      id: 3,
      title: "Ingresso de Cinema",
      type: "negative",
      amount: "60.00",
      category: {
        name: "Compras",
        icon: "shopping-bag"
      },
      date: "11/02/2023",
    }
];

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
        <HighlightCard title='entradas' amount="17400.00" lastTransactions="Última entrada dia 13 de janeiro" type="up" />
        <HighlightCard title='saídas' amount="1241.00" lastTransactions="Última saída dia 02 de fevereiro" type="down" />
        <HighlightCard title='total' amount="16500.00" lastTransactions="01 à 16 de fevereiro" type="total" />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item })=> <TransactionCard data={item}/>}        
        />
      </Transactions>
    </Container>
  );
}