import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isTitle':
          // eslint-disable-next-line no-case-declarations
          const regTitle = /^(?![,.\-' ])[a-zA-Zа-яА-Яіїєґ',.\- 0-9]*$/u;

          regTitle.test(String(value).toLowerCase())
            ? setTitleError(false)
            : setTitleError(true);
          break;

        case 'isDescription':
          // eslint-disable-next-line no-case-declarations
          const regDescription = /^(?![,.\-' ])[a-zA-Zа-яА-Яіїєґ',.\- 0-9]*$/u;
          regDescription.test(String(value).toLowerCase())
            ? setDescriptionError(false)
            : setDescriptionError(true);
          break;

        case 'isLocation':
          // eslint-disable-next-line no-case-declarations
          const regLocation = /^(?![,.\-' ])[a-zA-Zа-яА-Яіїєґ',.\- 0-9]*$/u;
          regLocation.test(String(value).toLowerCase())
            ? setLocationError(false)
            : setLocationError(true);
          break;

        default:
          return;
      }
    }
  }, [validations, value]);

  useEffect(() => {
    if (titleError || descriptionError || locationError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [descriptionError, locationError, titleError]);

  return {
    titleError,
    descriptionError,
    locationError,
    validForm,
  };
};
