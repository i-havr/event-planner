import PropTypes from 'prop-types';

import * as SC from './Button.styled';

export const Button = ({ type = 'submit', children, actionHandler }) => {
  return (
    <SC.Button type={type} onClick={actionHandler}>
      {children}
    </SC.Button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};
