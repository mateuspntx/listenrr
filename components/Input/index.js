import { InputStyle } from './styles';

const Input = ({ type, name, ...rest }) => {
  return <InputStyle type={type} id={name} {...rest}></InputStyle>;
};

export default Input;
