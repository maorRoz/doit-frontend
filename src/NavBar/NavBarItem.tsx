import React, { useRef, useState, useCallback } from 'react';
import Popper from '@material-ui/core/Popper';
import { MenuItem } from './types';
import { SubMenu } from './SubMenu';
import { NavBarItemLayout } from './style';

export type NavBarItemProps = {
  item: MenuItem;
};

export const NavBarItem = ({ item }: NavBarItemProps) => {
  const ref = useRef<{ clientWidth?: number }>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveringMenu, setHoveringMenu] = useState(false);

  const handleMouseOver = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveringMenu(false);
    setAnchorEl(null);
  }, []);

  return (
    <NavBarItemLayout
      hovered={hoveringMenu}
      // @ts-expect-error
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div>{item.name}</div>
      {item.subItems && (
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement='bottom-start'
          onMouseOver={() => setHoveringMenu(true)}
          onMouseLeave={handleMouseLeave}
        >
          <SubMenu items={item.subItems} />
        </Popper>
      )}
    </NavBarItemLayout>
  );
};
