import { LanguageSelector } from '../LanguageSelector';
import { SearchInput } from '../SearchInput';
import { useWindowWidth } from '../../hooks';
import * as SC from './Header.styled';

export const Header = () => {
  const { isScreenMobile } = useWindowWidth();
  return (
    <SC.Header>
      {isScreenMobile ? (
        <>
          <SC.ContentWrapper>
            <SC.Logo>Event Planner</SC.Logo>
            <LanguageSelector />
          </SC.ContentWrapper>
          <SearchInput />
        </>
      ) : (
        <>
          <SC.Logo>Event Planner</SC.Logo>
          <SC.ContentWrapper>
            <SearchInput />
            <LanguageSelector />
          </SC.ContentWrapper>
        </>
      )}
    </SC.Header>
  );
};
