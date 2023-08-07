import PropTypes from 'prop-types';
import * as SC from './OptionsButton.styled';

export const OptionsButton = ({
  children,
  actionHandler,
  view,
  ...allyProps
}) =>
  view === 'option' ? (
    <SC.OptionButton type="button" onClick={actionHandler} {...allyProps}>
      {children}
    </SC.OptionButton>
  ) : (
    <SC.AddButton type="button" onClick={actionHandler} {...allyProps}>
      {children}
    </SC.AddButton>
  );

OptionsButton.defaultProps = {
  onClick: () => null,
  children: null,
};

OptionsButton.propTypes = {
  children: PropTypes.node,
  actionHandler: PropTypes.func,
  view: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
};
