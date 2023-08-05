import PropTypes from 'prop-types';

import { useState, useEffect, useRef } from 'react';
import {
  categoryTypes,
  priorityLevels,
  sortMethods,
} from '../../assets/constants';
import { HiOutlineChevronDown } from 'react-icons/hi';
import * as SC from './InputSelector.styled';

export const InputSelector = ({
  optionsName,
  name,
  value,
  placeholder,
  required,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [listType, setListType] = useState(null);
  const optionSelectorRef = useRef(null);

  const handleCheckOptionList = options => {
    switch (options) {
      case 'priorityLevels':
        setListType(priorityLevels.list);
        break;

      case 'categoryTypes':
        setListType(categoryTypes.list);
        break;

      case 'sortMethods':
        setListType(sortMethods.list);
        break;

      default:
        return;
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleBackdropClick = event => {
    if (
      optionSelectorRef.current &&
      !optionSelectorRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    handleCheckOptionList(optionsName);
    document.addEventListener('click', handleBackdropClick);
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [optionsName]);

  return (
    <SC.InputSelector ref={optionSelectorRef}>
      <SC.Input type="text" name={name} onFocus={handleMenuToggle} />
      {/* {selectedOption}
        <HiOutlineChevronDown
          style={isOpen && { transform: 'rotate(180deg)' }}
          size={18}
        />
      </SC.Input> */}

      {isOpen && (
        <SC.Menu>
          {listType.map((option, index) => (
            <SC.Option key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </SC.Option>
          ))}
        </SC.Menu>
      )}
    </SC.InputSelector>
  );
};

InputSelector.propTypes = {
  optionsName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};
