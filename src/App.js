import React from 'react';
import './App.css';
import { ThemeProvider, createTheme, Arwes, Heading, Row } from 'arwes';
import Puffs from 'arwes/lib/Puffs';
import Advertisement from './Advertisement';
import AdList from './AdList';
import background from './assets/background-large.jpg';
import pattern from './assets/glow.png';
import Loading from 'arwes/lib/Loading';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={createTheme()}>
        <Arwes background={background} pattern={pattern}>
          <Puffs>
            <div>
              <Loading />
              <Heading node='h1' class="heading">Start Here</Heading>
              <Row>
                <AdList />
              </Row>
            </div>
          </Puffs>
        </Arwes>
      </ThemeProvider>
    );
  }
}

export default App;