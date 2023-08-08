import PropTypes from 'prop-types';

import { useState, useEffect, useRef } from 'react';
import { useWindowWidth } from '../../hooks';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import * as SC from './OptionsSelector.styled';

export const OptionsSelector = ({
  editType,
  prevValue,
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
  const [isFirstEdit, setIsFirstEdit] = useState(true);
  const optionSelectorRef = useRef(null);

  const { isScreenMobile } = useWindowWidth();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option, arrowDirection = '') => {
    if (selectorView === 'sortMethods') {
      setSelectedOption(`${option} ${arrowDirection}`);
      setOption(`${option} ${arrowDirection}`);
    } else {
      setSelectedOption(option);
    }

    selectorView !== 'languages' &&
      selectorView !== 'sortMethods' &&
      setOption(option.trim());
    // setOption(option.slice(0, -1).trim());

    setIsOpen(false);
    setIsFirstEdit(false);
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
        width: selectorView === 'languages' && '69px',
        marginBottom: selectorView === 'languages' && '0px',
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
      ) : selectorView !== 'sortMethods' ? (
        <>
          <SC.Title>{title}</SC.Title>

          <SC.ButtonOptions
            style={{ color: isOpen && '#7B61FF' }}
            type="button"
            onClick={handleMenuToggle}
          >
            {editType && isFirstEdit
              ? prevValue
              : !isOpen
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
      ) : (
        <SC.ButtonSort
          open={isOpen}
          style={{
            left: isScreenMobile && isOpen && '0px',
            justifyContent: isScreenMobile && isOpen && 'space-between',
            width: isOpen && '150px',
            paddingLeft: isScreenMobile && isOpen && '16px',
            paddingRight: isScreenMobile && isOpen && '16px',
            color: isOpen ? '#7B61FF' : selectedOption && '#7B61FF',
            borderBottomLeftRadius: isOpen && '0px',
            borderBottomRightRadius: isOpen && '0px',
            borderBottom: isOpen && `1px solid "#ACA7C3"`,
            position: isScreenMobile && isOpen && 'absolute',
            zIndex: isScreenMobile && isOpen && '2',
          }}
          type="button"
          onClick={handleMenuToggle}
        >
          {!isScreenMobile
            ? !isOpen
              ? selectedOption
                ? selectedOption.slice(0, -1).trim()
                : `${title}`
              : selectedOption
              ? selectedOption.slice(0, -1).trim()
              : `${title}`
            : ''}

          {isOpen && isScreenMobile ? `${title}` : ''}

          {isOpen && selectedOption ? null : options.name === 'sortMethods' ? (
            !isScreenMobile && !isOpen && selectedOption ? null : (
              <SC.StyledSortIcon selectedoption={selectedOption} />
            )
          ) : !isScreenMobile && !isOpen && selectedOption ? null : (
            <SC.StyledFilterIcon selectedoption={selectedOption} />
          )}
        </SC.ButtonSort>
      )}

      {!isScreenMobile && selectedOption ? (
        options.name === 'sortMethods' ? (
          selectedOption.includes('↑') ? (
            <SC.StyledArrowUp />
          ) : (
            <SC.StyledArrowDown />
          )
        ) : null
      ) : null}

      {isOpen && selectorView === 'languages' && (
        <SC.LanguagesMenu>
          {listType.map((option, index) => (
            <SC.Language key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </SC.Language>
          ))}
        </SC.LanguagesMenu>
      )}

      {isOpen &&
        selectorView !== 'languages' &&
        selectorView !== 'sortMethods' && (
          <SC.Menu>
            {listType.map((option, index) => (
              <SC.Option key={index} onClick={() => handleOptionSelect(option)}>
                {option}
              </SC.Option>
            ))}
          </SC.Menu>
        )}

      {isOpen && selectorView === 'sortMethods' && (
        <SC.SortMenu
          style={{
            borderTopLeftRadius: isOpen && '0px',
            borderTopRightRadius: isOpen && '0px',
            position: isScreenMobile && isOpen && 'absolute',
            top: isScreenMobile && isOpen && '100%',
            left: isScreenMobile && isOpen && '0px',
          }}
        >
          {listType.map((option, index) => (
            <SC.SortOption
              key={index}
              onClick={() =>
                handleOptionSelect(option, index % 2 === 0 ? '↑' : `↓`)
              }
            >
              {option}
              {options.name === 'sortMethods' ? (
                index % 2 === 0 ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )
              ) : null}
            </SC.SortOption>
          ))}
        </SC.SortMenu>
      )}
    </SC.OptionsSelector>
  );
};

OptionsSelector.propTypes = {
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
  editType: PropTypes.bool,
  prevValue: PropTypes.string,
  setOption: PropTypes.func,
  title: PropTypes.string,
  selectorView: PropTypes.string,
};
