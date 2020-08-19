import { InputStyle } from './styles';

const Input = ({ name, ...rest }) => {
  return (
    <InputStyle type="text" id={name} {...rest}></InputStyle>
  )
}

export default Input;