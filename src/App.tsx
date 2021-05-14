import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Attendance from './pages/attendance';
import Dashboard from './pages/dashboard';
import EditMember from './pages/editMember';
import Members from './pages/members';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Nunito',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700
    

  }

})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/attendance" component={Attendance} />
            <Route path="/members/edit-member" component={EditMember} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider >
  );
}

export default App;
