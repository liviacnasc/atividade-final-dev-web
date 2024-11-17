import { IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import React, { useState } from 'react'

const ContextMenu = (items) => {
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    const handleClick = (event) => {
      setAnchor(event.currentTarget);
    };
    const handleClose = () => {
      setAnchor(null);
    };

    return (
      <div>
        <IconButton
          id="basic-button"
          onClick={handleClick}
        >
          <MenuList/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
        >
            {items.map((item) => 
                <MenuItem onClick={item.onClick} >{item.title}</MenuItem>
            )}
        </Menu>
      </div>
    );
}

export default ContextMenu