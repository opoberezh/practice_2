import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({text}) => {
  return <TodoWrapper>
  <Text textAlign="center" marginBottom="20px">
    TODO #1
  </Text>
  <Text>{text}</Text>
  <DeleteButton type="button">
    <RiDeleteBinLine size={24} />
  </DeleteButton>
</TodoWrapper>
};
