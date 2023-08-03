import { useState, useEffect, useRef } from 'react';
import { languagesList } from '../../assets';
import { HiOutlineChevronDown } from 'react-icons/hi';
import * as SC from './LanguageSelector.styled';

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);
  const languageSelectorRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = language => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleBackdropClick = event => {
    if (
      languageSelectorRef.current &&
      !languageSelectorRef.current.contains(event.target)
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
    <SC.LanguageSelector ref={languageSelectorRef}>
      <SC.Button onClick={handleMenuToggle}>
        {selectedLanguage}
        <HiOutlineChevronDown
          style={isOpen && { transform: 'rotate(180deg)' }}
          size={18}
        />
      </SC.Button>

      {isOpen && (
        <SC.LanguageMenu>
          {languagesList.map((language, index) => (
            <SC.Language
              key={index}
              onClick={() => handleLanguageSelect(language)}
            >
              {language}
            </SC.Language>
          ))}
        </SC.LanguageMenu>
      )}
    </SC.LanguageSelector>
  );
};
