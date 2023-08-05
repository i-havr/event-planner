import PropTypes from 'prop-types';

import * as SC from './Button.styled';

export const Button = ({
  type = 'submit',
  children,
  actionHandler,
  disabled = false,
}) => {
  return (
    <SC.Button type={type} disabled={disabled} onClick={actionHandler}>
      {children}
    </SC.Button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};
