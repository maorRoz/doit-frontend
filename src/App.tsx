import React from 'react';
import { NavBar } from './NavBar/NavBar';
import items from './menus.json';

export const App = () => <NavBar items={items} />;

export default App;
