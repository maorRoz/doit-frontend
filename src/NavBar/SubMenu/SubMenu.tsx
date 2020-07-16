import React, { useState, useCallback } from 'react';
import Popper from '@material-ui/core/Popper';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { MenuItem } from '../types';
import { SubMenuLayout, SubMenuItemLayout } from './style';

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
        {item.subItems && (
          <>
            <ChevronRight />
            <Popper
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              placement='right-start'
              onMouseOver={() => setHoveringMenu(true)}
              onMouseLeave={handleMouseLeave}
            >
              <SubMenu items={[item?.subItems[0]]} />
            </Popper>
          </>
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
