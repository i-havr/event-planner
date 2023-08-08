import { useValidation } from './useValidation';
import { useState } from 'react';

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = event => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  return {
    value,
    setValue,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
