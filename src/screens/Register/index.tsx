import React, {useState} from 'react';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import Button from '../../components/Form/Button';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import Input from '../../components/Form/Input';

export default function Register() {
  const [ transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder='Nome'/>
          <Input placeholder='Preço'/>

          <TransactionTypes>
            <TransactionTypeButton 
            onPress={() => handleTransactionTypeSelect('up')}
            isActive={transactionType === 'up'}
            title='Receita' 
            type='up' 
            />
            <TransactionTypeButton 
            onPress={() => handleTransactionTypeSelect('down')}
            isActive={transactionType === 'down'}
            title='Despesas' 
            type='down' 
            />
          </TransactionTypes>
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  );
}