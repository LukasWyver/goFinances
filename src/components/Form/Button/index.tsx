import { Container, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    title: string;
}
 
  export default function Button({title, ...rest}: Props) {
    return (
      <Container {...rest} activeOpacity={0.7}>
            <Title>{title}</Title>
      </Container>
    );
  }