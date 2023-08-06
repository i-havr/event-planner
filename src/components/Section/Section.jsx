import PropTypes from 'prop-types';
import * as SC from './Section.styled';

export const Section = ({ children }) => {
  return <SC.Section>{children}</SC.Section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
