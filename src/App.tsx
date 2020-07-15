import React from 'react';
import { NavBar } from './NavBar/NavBar';

export const App = () => (
  <NavBar
    items={[
      {
        name: 'Hello',
        subItems: [
          {
            name: 'child',
            subItems: [
              { name: 'child child', subItems: [{ name: 'child child child' }] }
            ]
          },
          { name: 'child2' }
        ]
      },
      { name: 'World1111111', subItems: [{ name: 'child2' }] },
      { name: 'Wtf' }
    ]}
  />
);

export default App;
