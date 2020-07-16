import React, { useState, useCallback } from 'react';
import Popper from '@material-ui/core/Popper';
import { MenuItem } from '../types';
import { SubMenuLayout, SubMenuItemLayout, RightArrow } from './style';

const SubMenuItem = ({ item }: { item: MenuItem }) => {
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
    <>
      <SubMenuItemLayout
        hovered={hoveringMenu}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <div>{item.name}</div>
        <RightArrow show={Boolean(item.subItems)} />

        {item.subItems && (
          <Popper
            style={{ marginTop: '2px' }}
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            placement='right-start'
            onMouseEnter={() => setHoveringMenu(true)}
            onMouseLeave={handleMouseLeave}
          >
            <SubMenu items={[item?.subItems[0]]} />
          </Popper>
        )}
      </SubMenuItemLayout>
    </>
  );
};

export type SubMenuProps = {
  items: MenuItem[];
};

export const SubMenu = ({ items }: SubMenuProps) => {
  return (
    <SubMenuLayout>
      {items.map((item, index) => (
        <SubMenuItem key={index} item={item} />
      ))}
    </SubMenuLayout>
  );
};
