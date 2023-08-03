import { useWindowWidth } from '../../hooks';
import { OptionsPanel } from '../../components/OptionsPanel';
import * as SC from './HomePage.styled';
import { EventsList } from '../../components/EventsList';

export default function HomePage() {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <SC.Home>
      <SC.Section>
        {isScreenMobile && <OptionsPanel />}
        {isScreenTablet && (
          <SC.OptionsWrapper>
            <OptionsPanel />
            <SC.Title>My events</SC.Title>
          </SC.OptionsWrapper>
        )}

        {isScreenDesktop && (
          <SC.OptionsWrapper>
            <OptionsPanel />
            <SC.Title>My events</SC.Title>
          </SC.OptionsWrapper>
        )}
        <EventsList />
      </SC.Section>
    </SC.Home>
  );
}
