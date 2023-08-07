import { Link } from 'react-router-dom';
// import { OptionsSelector } from '../OptionsSelector';
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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <SC.Logo>Event Planner</SC.Logo>
            </Link>
            <OptionsSelector options={languagesList} selectorView="languages" />
          </SC.ContentWrapper>
          <SearchInput />
        </>
      ) : (
        <>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SC.Logo>Event Planner</SC.Logo>
          </Link>
          <SC.ContentWrapper>
            <SearchInput />
            <OptionsSelector options={languagesList} selectorView="languages" />
          </SC.ContentWrapper>
        </>
      )}
    </SC.Header>
  );
};
