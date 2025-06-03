import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import InvitePage from '../pages/Invite';

export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/invite" element={<InvitePage />} />
      </Route>
    </Routes>
  );
}
