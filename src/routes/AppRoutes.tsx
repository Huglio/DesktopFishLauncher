import { Route, Routes } from 'react-router-dom';
import IntroductionPage from '../pages/Sales/Introduction';
import ValidateInvitePage from '../pages/Sales/ValidateInvite';
import ActivationPage from '../pages/Sales/Activation';
import HomePage from '../pages/Private/Home';
import CreateInvitePage from '../pages/Private/CreateInvite';
import Breadcrumb from '../components/molecules/Breadcrumb';
import ProtectedRoutes from './ProtectedRoutes';
import SaleRoutes from './SaleRoutes';
import PageNotFound from '../pages/Error/PageNotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SaleRoutes />}>
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/validate-invite" element={<ValidateInvitePage />} />
        <Route path="/activation" element={<ActivationPage />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/"
          element={
            <Breadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Criar convite', path: '/create-invite' },
              ]}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/create-invite" element={<CreateInvitePage />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
