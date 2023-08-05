// import { LanguageSelector } from '../LanguageSelector';
import { OptionsSelector } from '../OptionsSelector';
import { SearchInput } from '../SearchInput';
import { useWindowWidth } from '../../hooks';
import { languagesList } from '../../assets';
import * as SC from './Header.styled';

export const Header = () => {
  const { isScreenMobile } = useWindowWidth();
  return (
    <SC.Header>
      {isScreenMobile ? (
        <>
          <SC.ContentWrapper>
            <SC.Logo>Event Planner</SC.Logo>
            <OptionsSelector options={languagesList} selectorView="languages" />
          </SC.ContentWrapper>
          <SearchInput />
        </>
      ) : (
        <>
          <SC.Logo>Event Planner</SC.Logo>
          <SC.ContentWrapper>
            <SearchInput />
            <OptionsSelector options={languagesList} selectorView="languages" />
          </SC.ContentWrapper>
        </>
      )}
    </SC.Header>
  );
};
