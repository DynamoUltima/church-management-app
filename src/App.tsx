import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
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
            <Route path="/members" component={Members} />
            {/* <Route path="/edit-member" component={EditMember} /> */}
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider >
  );
}

export default App;
