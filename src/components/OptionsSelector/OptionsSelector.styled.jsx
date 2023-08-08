import styled from 'styled-components';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter-icon.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/sort-icon.svg';

//WRAPPER CONTAINER

export const OptionsSelector = styled.div`
  position: relative;
  width: 100%;
  font-family: 'Poppins-Medium';
`;

//TITLE

export const Title = styled.span`
  display: block;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${p => p.theme.colors.secondary};
`;

//BUTTON

export const ButtonLanguages = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  padding: 15px 12px;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};

  &:hover {
    cursor: pointer;
  }

  & > svg {
    transition: transform ease-out 300ms;
  }
`;

export const ButtonOptions = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  margin-top: ${p => p.theme.space[3]}px;
  padding: 15px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  background-color: ${p => p.theme.colors.white};

  outline: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
  }

  & > svg {
    transition: transform ease-out 300ms;
  }
`;

export const ButtonSort = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 15px 16px;
  font-family: 'Poppins-Medium';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.button};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.normal};
  outline: none;

  border-bottom: ${props => props.open && '1px solid #ACA7C3'};
  padding: ${props => props.open && '15px 16px 14px 16px;'};

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }

  &:hover {
    cursor: pointer;
  }

  & > svg {
    transition: transform ease-out 300ms;
  }
`;

//LIST

export const LanguagesMenu = styled.ul`
  position: absolute;
  top: 50px;
  width: inherit;
  padding: 15px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.normal};
  z-index: 10;
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  width: inherit;
  padding: 0 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.normal};
  z-index: 10;
`;

export const SortMenu = styled.ul`
  position: absolute;
  width: 150px;
  padding: 0 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.button};
  box-shadow: ${p => p.theme.shadows.normal};
  z-index: 10;
`;

//LIST ITEM

export const Language = styled.li`
  padding: 2px 0;
  line-height: 1.25;
  color: ${p => p.theme.colors.muted};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover {
    color: ${p => p.theme.colors.black};
    border-bottom: 1px solid ${p => p.theme.colors.black};
    cursor: pointer;
  }
`;

export const Option = styled.li`
  padding: 16px 0;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.text};

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  }

  &:hover {
    color: ${p => p.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const SortOption = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 9px 16px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 1;
  color: ${p => p.theme.colors.muted};

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  }

  &:hover {
    color: ${p => p.theme.colors.secondary};
    border-bottom-color: ${p => p.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const StyledFilterIcon = styled(FilterIcon)`
  pointer-events: none;
  & > path {
    stroke: ${props => (props.selectedoption ? '#7B61FF' : '#3F3F3F')};
  }
`;

export const StyledSortIcon = styled(SortIcon)`
  & > path {
    stroke: ${props => (props.selectedoption ? '#7B61FF' : '#3F3F3F')};
  }
  pointer-events: none;
`;

export const StyledArrowUp = styled(AiOutlineArrowUp)`
  position: absolute;
  top: 36%;
  right: 16px;
  color: ${p => p.theme.colors.secondary};
  pointer-events: none;
`;

export const StyledArrowDown = styled(AiOutlineArrowDown)`
  position: absolute;
  top: 36%;
  right: 16px;
  color: ${p => p.theme.colors.secondary};
  pointer-events: none;
`;
