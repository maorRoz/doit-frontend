import React, { useState } from 'react';
import Popper from '@material-ui/core/Popper';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { MenuItem } from './types';
import { SubMenuLayout } from './style';

export type SubMenuProps = {
  items: MenuItem[];
  width?: number;
};

export const SubMenu = ({ items, width }: SubMenuProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveringMenu, setHoveringMenu] = useState(false);
  return (
    <SubMenuLayout
      width={width}
      // @ts-expect-error
      onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
      onMouseLeave={() =>
        setTimeout(() => {
          !hoveringMenu && setAnchorEl(null);
        }, 100)
      }
    >
      {items.map((item, index) => (
        <>
          <div style={{ display: 'flex' }}>
            <div key={index}>{item.name}</div>
            {item.subItems && <ChevronRight />}
          </div>

          {item.subItems && (
            <Popper
              style={{ marginTop: '2px' }}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              placement='right'
              onMouseEnter={() => setHoveringMenu(true)}
              onMouseLeave={() => {
                setHoveringMenu(false);
                setAnchorEl(null);
              }}
            >
              <SubMenu items={item.subItems} />
            </Popper>
          )}
        </>
      ))}
    </SubMenuLayout>
  );
};
