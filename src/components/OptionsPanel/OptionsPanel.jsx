import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  categoryFilter,
  sortEventsOption,
} from '../../redux/filter/filter-slice';

import { useWindowWidth } from '../../hooks';
import { OptionsButton } from '../OptionsButton';
import { OptionsSelector } from '../OptionsSelector';
import { categoryTypes, sortMethods } from '../../assets';
import { ReactComponent as AddIcon } from '../../assets/icons/add-icon.svg';
import * as SC from './OptionsPanel.styled';

export const OptionsPanel = () => {
  const [selectedSort, setSelectedSort] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { isScreenMobile } = useWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedSort) {
      dispatch(sortEventsOption(selectedSort));
    }

    if (selectedCategory) {
      dispatch(categoryFilter(selectedCategory));
    }
  }, [dispatch, selectedCategory, selectedSort]);

  return (
    <SC.Wrapper>
      <OptionsSelector
        title={'Business'}
        selectorView="sortMethods"
        options={categoryTypes}
        setOption={setSelectedCategory}
      />

      <OptionsSelector
        title={'Sort by'}
        selectorView="sortMethods"
        options={sortMethods}
        setOption={setSelectedSort}
      />

      <Link to="/create">
        <OptionsButton aria-label="Add new event">
          <AddIcon />
          {!isScreenMobile && 'Add new event'}
        </OptionsButton>
      </Link>
    </SC.Wrapper>
  );
};
