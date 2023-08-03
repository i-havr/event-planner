import { useWindowWidth } from '../../hooks';
import { OptionsButton } from '../OptionsButton';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/sort-icon.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/add-icon.svg';
import * as SC from './OptionsPanel.styled';

export const OptionsPanel = () => {
  const { isScreenMobile } = useWindowWidth();
  return (
    <SC.Wrapper>
      <OptionsButton view="option" aria-label="Filter by business">
        {!isScreenMobile && 'Business'}
        <FilterIcon />
      </OptionsButton>
      <OptionsButton view="option" aria-label="Sort">
        {!isScreenMobile && 'Sort by'}
        <SortIcon />
      </OptionsButton>
      <OptionsButton aria-label="Add new event">
        <AddIcon />
        {!isScreenMobile && 'Add new event'}
      </OptionsButton>
    </SC.Wrapper>
  );
};
