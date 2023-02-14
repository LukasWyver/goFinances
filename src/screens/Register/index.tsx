import React, {useState} from 'react';
import { 
  Alert,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
 } from 'react-native';
 import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from './styles';
import Button from '../../components/Form/Button';
import InputForm from '../../components/Form/InputForm';
import TransactionTypeButton from '../../components/Form/TransactionTypeButton';
import CategorySelectButton from '../../components/Form/CategorySelectButton';

import CategorySelect from '../CategorySelect';

interface FormData { 
  [name: string]: string;
}

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  price: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
  .required('Preço é obrigatório')
})

export default function Register() {
  const [ transactionType, setTransactionType] = useState('');
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false);

  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState:{ errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)
  }

  function handleRegister(form: FormData){
    if(!transactionType) return Alert.alert('Selecione o tipo da transação')

    if(category.key === 'category') return Alert.alert('Selecione a categoria')

    
    const data = {
      name: form.name, 
      price: form.price,
      transactionType,
      category: category.key,
    }

    console.log(data)
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCorrect={false}    
              autoCapitalize="sentences"
              error={errors.name && errors?.name.message}
            />
            <InputForm
              name="price"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.price && errors?.price.message}
            />

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

            <CategorySelectButton
              onPress={handleOpenSelectCategoryModal}            
              title={category.name}
            />
          </Fields>

          <Button 
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}