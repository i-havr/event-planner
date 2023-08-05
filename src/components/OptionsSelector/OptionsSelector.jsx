import PropTypes from 'prop-types';

import { useState, useEffect, useRef } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';
import * as SC from './OptionsSelector.styled';

export const OptionsSelector = ({
  options,
  selectorView,
  title,
  setOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    selectorView === 'languages' ? 'EN' : ''
  );
  const [isOpen, setIsOpen] = useState(false);
  const [listType] = useState(options.list);
  const optionSelectorRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setOption(option);
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
    document.addEventListener('click', handleBackdropClick);
    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  return (
    <SC.OptionsSelector
      ref={optionSelectorRef}
      style={{
        width: selectorView === 'languages' ? '69px' : '100%',
        marginBottom: selectorView === 'languages' ? '0px' : '20px',
      }}
    >
      {selectorView === 'languages' ? (
        <SC.ButtonLanguages type="button" onClick={handleMenuToggle}>
          {selectedOption}
          <HiOutlineChevronDown
            style={isOpen && { transform: 'rotate(180deg)' }}
            size={18}
          />
        </SC.ButtonLanguages>
      ) : (
        <>
          <SC.Title>{title}</SC.Title>
          <SC.ButtonOptions
            style={{ color: isOpen && '#7B61FF' }}
            type="button"
            onClick={handleMenuToggle}
          >
            {!isOpen
              ? selectedOption
                ? selectedOption
                : 'Select'
              : selectedOption
              ? selectedOption
              : `Select ${title}`}
            <HiOutlineChevronDown
              style={isOpen && { transform: 'rotate(180deg)' }}
              size={18}
            />
          </SC.ButtonOptions>
        </>
      )}

      {isOpen && selectorView === 'languages' && (
        <SC.LanguagesMenu>
          {listType.map((option, index) => (
            <SC.Language key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </SC.Language>
          ))}
        </SC.LanguagesMenu>
      )}

      {isOpen && selectorView !== 'languages' && (
        <SC.Menu>
          {listType.map((option, index) => (
            <SC.Option key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </SC.Option>
          ))}
        </SC.Menu>
      )}
    </SC.OptionsSelector>
  );
};

OptionsSelector.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  setOption: PropTypes.func,
  title: PropTypes.string,
  selectorView: PropTypes.string,
};
