import React, { useRef, useState } from 'react';
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

  return (
    <NavBarItemLayout
      // @ts-expect-error
      ref={ref}
      // @ts-expect-error
      onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
      onMouseLeave={() =>
        setTimeout(() => {
          !hoveringMenu && setAnchorEl(null);
        }, 100)
      }
    >
      <div>{item.name}</div>
      {item.subItems && (
        <Popper
          style={{ marginTop: '2px' }}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement='bottom'
          onMouseEnter={() => setHoveringMenu(true)}
          onMouseLeave={() => {
            setHoveringMenu(false);
            setAnchorEl(null);
          }}
        >
          <SubMenu items={item.subItems} width={ref?.current?.clientWidth} />
        </Popper>
      )}
    </NavBarItemLayout>
  );
};
