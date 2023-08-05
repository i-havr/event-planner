import styled from 'styled-components';

export const TimePickerWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  display: flex;
  justify-content: start;
  width: 240px;
  height: 160px;
  padding-left: 20px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.form};
  box-shadow: ${p => p.theme.shadows.normal};
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: calc(160px / 3 + 4px);
    left: 16px;
    right: 0;
    width: calc(240px - 32px);
    height: calc(160px / 3 - 8px);

    border-top: 1px solid ${p => p.theme.colors.muted};
    border-bottom: 1px solid ${p => p.theme.colors.muted};
  }

  &::after {
    content: ':';
    position: absolute;
    top: 68px;
    left: calc((240px - 24px) / 3);
    font-family: 'Poppins-SemiBold';
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.secondary};
    color: ${p => p.theme.colors.text};
  }

  & > #keen-slider {
    width: calc(100% / 3 - 40px);
  }

  & #keen-slider > [class*=' number-slide'].selected {
    font-family: 'Poppins-SemiBold';
    color: ${p => p.theme.colors.text};
  }

  & #keen-slider [class^='number-slide'],
  & #keen-slider [class*=' number-slide'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-family: 'Poppins-Medium';
    font-size: ${p => p.theme.fontSizes.m}px;
    line-height: ${p => p.theme.lineHeights.secondary};
    color: ${p => p.theme.colors.muted};
  }

  & #keen-slider:has(.number-slide-minute1) {
    width: calc(240px / 3);
    margin-left: 24px;
  }
`;
