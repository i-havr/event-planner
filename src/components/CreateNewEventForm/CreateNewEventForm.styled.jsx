import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 40px 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.form};

  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > svg {
    position: absolute;
  }
`;

export const InputFileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > svg {
    position: absolute;
    width: 44px;
    height: 44px;
    right: 2px;
    top: 30px;
    padding: 10px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const LabelFile = styled.label`
  height: 56px;
  margin-bottom: 20px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  z-index: 1;
`;

export const InputFilePlaceholder = styled.span`
  position: absolute;
  top: 40px;
  left: 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.colors.black};
  color: ${p => p.theme.lineHeights.secondary};
  z-index: 0;
`;

export const LabelTitle = styled.span`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: 1;
  letter-spacing: 0.4px;
  color: ${p => p.theme.colors.secondary};
`;

export const Input = styled.input`
  height: 56px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.secondary};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};

  &::placeholder {
    font-family: 'Poppins-Regular';
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.secondary};
    color: ${p => p.theme.colors.black};
  }
`;

export const Textarea = styled.textarea`
  height: 156px;
  padding: ${p => p.theme.space[4]}px 32px ${p => p.theme.space[4]}px 12px;
  font-family: 'Poppins-Regular';
  font-size: ${p => p.theme.fontSizes.m}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.form};
  resize: none;

  &::placeholder {
    font-family: 'Poppins-Regular';
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.black};
  }
`;

// export const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: inherit;
//   padding: 15px 12px;
//   font-family: inherit;
//   font-size: ${p => p.theme.fontSizes.m}px;
//   line-height: 1;
//   color: ${p => p.theme.colors.black};
//   border: ${p => p.theme.borders.none};
//   border-radius: ${p => p.theme.radii.button};
//   background-color: ${p => p.theme.colors.white};
//   box-shadow: ${p => p.theme.shadows.normal};

//   &:hover {
//     cursor: pointer;
//   }

//   & > svg {
//     transition: transform ease-out 300ms;
//   }
// `;
