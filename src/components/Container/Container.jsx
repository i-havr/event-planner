import PropTypes from 'prop-types';
import * as SC from './Container.styled';

export const Container = ({ children }) => {
  return <SC.Container>{children}</SC.Container>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
