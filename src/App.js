import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";

import { Root, Header, Nav, Content, presets } from "./Layout";
import Routes from './components/Routes';
import SideNavigation from './components/SideNavigation';
import "./styles.css";

// add presets.create{}() to config props in Root to change the behavior, looking and layout
// <Root config={presets.createCozyLayout()}> ...
//function App() {
class App extends Component {
  render() {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <Root config={presets.createContentBasedLayout()}>
        <CssBaseline />
        <Header menuIcon={<MenuIcon/>}>
          <Typography variant="h6">UD Sensors</Typography>
        </Header>
        <Nav>
          <SideNavigation />
        </Nav>
        <Content>
          <main>
            <Routes />
          </main>
        </Content>
      </Root>
    </MuiThemeProvider>
  );
  }
}

export default App;
