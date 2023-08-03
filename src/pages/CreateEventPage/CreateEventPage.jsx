import { useWindowWidth } from '../../hooks';
import { BackButton } from '../../components/BackButton';
import { CreateNewEventForm } from '../../components/CreateNewEventForm';
import { HiArrowLeft } from 'react-icons/hi';
import * as SC from './CreateEventPage.styled';

export default function CreateEventPage() {
  const { isScreenMobile, isScreenTablet, isScreenDesktop } = useWindowWidth();

  return (
    <SC.CreateEventPage>
      <SC.Section>
        <BackButton aria-label="Back button">
          <HiArrowLeft size={16} />
          {'Back'}
        </BackButton>
        <SC.Title>Create new event</SC.Title>
        <CreateNewEventForm />
      </SC.Section>
    </SC.CreateEventPage>
  );
}
