import React, { PureComponent } from 'react';
import './Home.css';
import { Title } from '../framework/components/Title/Title';
import {
  AppBody,
  AppFooter,
  AppHeader,
  AppLayout
} from '../framework/layouts';

class App extends PureComponent {
  render() {
    return (
      <AppLayout>
        <AppHeader>
          <Title.h1>The Movie list</Title.h1>
        </AppHeader>
        <AppBody>
          Home body
        </AppBody>
        <AppFooter>
          Home Footer
        </AppFooter>
      </AppLayout>
    );
  }
}

export default App;
