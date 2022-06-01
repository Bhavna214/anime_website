import './App.css';
import { Header, Sidebar, Main, MyProfile } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Watch1 from './components/Watch/Watch1';
import Login from './components/Login/Login';
import { useAppContext } from './context/appContext';

function App() {
  const {appState} = useAppContext()

  console.log(appState)

  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/'>
          <div className="home">
            <Header />
            <div className="app">
              <Sidebar />
              <Main />
            </div>
          </div>
        </Route>

        <Route path='/watch'>
        <div className="home">
            <Header />
            <div className="app">
              <Sidebar />
              <Watch1 />
            </div>
          </div>
        </Route>

        <Route path='/MyProfile'>
          <Header/>
          <div className="app">
            <Sidebar />
            <MyProfile/>
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
