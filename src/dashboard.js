import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material-ui custom themes
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif'
});

export default class Dashboard extends Component {
  render() {
    console.log(' this.props.backside inputchange: ',  this.props )
    return (
      <MuiThemeProvider>

      <div>
      	
      	<DboardHead />
        <SearchBar 
          clickSearch = { this.props.clickSearch }
          inputChange = { this.inputChange } />
        <UserProfile />

      	
      </div>
      </MuiThemeProvider>
    );
  }
}
