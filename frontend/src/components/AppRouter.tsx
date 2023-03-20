import { Routes, Route } from 'react-router-dom';
import AvtorsPage from '../pages/AvtorsPage';

import Home from '../pages/Home';
import ModernPage from '../pages/ModernPage';
import NoMatch from '../pages/NoMatch';
import Printers from '../pages/Printers';
import UsersPage from '../pages/UsersPage';

const AppRouter = () => {
  return (
    <Routes>
        <Route index element={ <Home /> }/>
        <Route path='printers' element={ <Printers /> }/>
        <Route path='UsersPage' element={ <UsersPage />} />
        <Route path='ModernPage' element={ <ModernPage />} />
        <Route path='AvtorsPage' element={ <AvtorsPage />} />
        <Route path='*' element={ <NoMatch /> }/>
    </Routes>
  )
}
export default AppRouter
