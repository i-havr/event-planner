import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const CreateEvent = lazy(() =>
  import('./pages/CreateEventPage/CreateEventPage')
);
const EventDetails = lazy(() =>
  import('./pages/EventDetailsPage/EventDetailsPage')
);
const EditEvent = lazy(() => import('./pages/EditEventPage/EditEventPage'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/event/:eventId/edit" element={<EditEvent />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
