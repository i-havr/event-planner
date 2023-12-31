import { useSelector, useDispatch } from 'react-redux';
import { searchFilter } from '../../redux/filter/filter-slice';
import { selectSearchFilter } from '../../redux/filter/filter-selectors';

import { RiSearchLine } from 'react-icons/ri';
import { ReactComponent as CrossIcon } from '../../assets/icons/cross-icon.svg';
import * as SC from './SearchInput.styled';

export const SearchInput = () => {
  const filter = useSelector(selectSearchFilter);

  const dispatch = useDispatch();

  return (
    <SC.InputWrapper>
      <SC.SearchInput
        type="text"
        autoComplete="off"
        name="filter"
        value={filter}
        placeholder="Search by keywords"
        onChange={event => dispatch(searchFilter(event.currentTarget.value))}
      />
      <RiSearchLine size={22} style={{ left: '15px', top: '13px' }} />
      {filter && (
        <CrossIcon
          style={{ right: '12px', top: '12px', cursor: 'pointer' }}
          onClick={() => dispatch(searchFilter(''))}
        />
      )}
    </SC.InputWrapper>
  );
};
