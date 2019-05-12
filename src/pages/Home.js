import React, { PureComponent } from 'react';
import { Title } from '../framework/components';
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
          The movie list is an open source demo project made with love by gatsbimantico.
        </AppFooter>
      </AppLayout>
    );
  }
}

export default App;
