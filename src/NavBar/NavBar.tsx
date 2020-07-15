import React from 'react';
import { NavBarLayout, NavBarHeader } from './style';
import { MenuItem } from './types';
import { NavBarItem } from './NavBarItem';

export type NavBarProps = {
  items: MenuItem[];
};

export const NavBar = ({ items }: NavBarProps) => (
  <NavBarLayout>
    <NavBarHeader>
      {items.map((item, index) => (
        <NavBarItem key={index} item={item} />
      ))}
    </NavBarHeader>
  </NavBarLayout>
);
