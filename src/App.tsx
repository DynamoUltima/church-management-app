import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
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
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider >
  );
}

export default App;
