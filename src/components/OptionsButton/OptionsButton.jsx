import PropTypes from 'prop-types';
import * as SC from './OptionsButton.styled';

export const OptionsButton = ({ children, view, ...allyProps }) =>
  view === 'option' ? (
    <SC.OptionButton type="button" {...allyProps}>
      {children}
    </SC.OptionButton>
  ) : (
    <SC.AddButton type="button" {...allyProps}>
      {children}
    </SC.AddButton>
  );

OptionsButton.defaultProps = {
  onClick: () => null,
  children: null,
};

OptionsButton.propTypes = {
  view: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
