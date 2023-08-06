import { useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Section } from '../../components/Section';
import { Container } from '../../components/Container';
import { BackButton } from '../../components/BackButton';
import { EventForm } from '../../components/EventForm';
import { HiArrowLeft } from 'react-icons/hi';
import * as SC from './EditEventPage.styled';

export default function EditEventPage() {
  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <SC.EditEventPage>
      <Section>
        <Container>
          <Link to={goBack}>
            <BackButton aria-label="Back button">
              <HiArrowLeft size={16} />
              {'Back'}
            </BackButton>
          </Link>
          <SC.Title>Edit event</SC.Title>
          <EventForm editType={true} />
        </Container>
      </Section>
    </SC.EditEventPage>
  );
}
