import { Link } from 'react-router-dom';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/BackButton';
import { EventForm } from '../../components/EventForm';
import { HiArrowLeft } from 'react-icons/hi';
import * as SC from './CreateEventPage.styled';

export default function CreateEventPage() {
  return (
    <SC.CreateEventPage>
      <Section>
        <Container>
          <Link to="/">
            <BackButton aria-label="Back button">
              <HiArrowLeft size={16} />
              {'Back'}
            </BackButton>
          </Link>
          <SC.Title>Create new event</SC.Title>
          <EventForm />
        </Container>
      </Section>
    </SC.CreateEventPage>
  );
}
