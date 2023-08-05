import PropTypes from 'prop-types';
import * as SC from './BackButton.styled';

export const BackButton = ({ children, ...allyProps }) => {
  return (
    <SC.BackButton type="submit" {...allyProps}>
      {children}
    </SC.BackButton>
  );
};

BackButton.defaultProps = {
  onClick: () => null,
  children: null,
};

BackButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
