import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthPage from './pages/AuthPage/AuthPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PlanningPage from './pages/PlanningPage/PlanningPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Password from './components/Password/Password';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ProtectedComponent from './hoc/ProtectedComponent';
import { initUser } from './redux/session/operations';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(initUser(history));
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={AuthPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password" component={Password} />
        <ProtectedComponent path="/dashboard" component={DashboardPage} />
        <ProtectedComponent path="/planning" component={PlanningPage} />
        <ProtectedComponent path="/contacts" component={ContactsPage} />
        {/* <ProtectedComponent path="*" /> */}
      </Switch>
    </>
  );
}

export default App;
