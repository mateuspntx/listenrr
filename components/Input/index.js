import PropTypes from 'prop-types';

import { InputStyle } from './styles';

const Input = ({ type, name, ...rest }) => {
  return <InputStyle type={type} id={name} {...rest}></InputStyle>;
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rest: PropTypes.any,
};

export default Input;
