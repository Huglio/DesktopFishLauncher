import { Route, Routes } from 'react-router-dom';
import IntroductionPage from '../pages/Introduction';
import ValidateInvitePage from '../pages/ValidateInvite';
import ActivationPage from '../pages/Activation';
import HomePage from '../pages/Home';
import CreateInvitePage from '../pages/CreateInvite';

export default function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/validate-invite" element={<ValidateInvitePage />} />
        <Route path="/activation" element={<ActivationPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/create-invite" element={<CreateInvitePage />} />
      </Route>
    </Routes>
  );
}
