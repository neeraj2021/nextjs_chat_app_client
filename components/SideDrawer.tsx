import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Button,
  Tooltip,
  IconButton,
  Drawer,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Skeleton,
} from "@mui/material";

function DrawerList() {
  const [search, setSearch] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search by name or email"
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClick}>
              <SearchIcon className="text-blue-600" />
            </IconButton>
          ),
        }}
      />

      <List
        dense
        subheader={
          <ListSubheader component="div">Search Results</ListSubheader>
        }
      >
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <ListItemButton>
          <ListItemText primary="First User" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="First User" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="First User" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="First User" />
        </ListItemButton>
      </List>
    </div>
  );
}

function SideDrawer() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setShowDrawer(open);
    };

  return (
    <div className="bg-white px-4 flex justify-between items-center">
      <Tooltip title="Search user to chat" arrow placement="bottom">
        <Button onClick={toggleDrawer(true)} startIcon={<SearchIcon />}>
          Search User
        </Button>
      </Tooltip>

      <span className="text-blue-600">Next Chat App</span>

      <IconButton>
        <NotificationsIcon />
      </IconButton>

      <Drawer
        open={showDrawer}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: "240px", padding: "5px" },
        }}
      >
        <DrawerList />
      </Drawer>
    </div>
  );
}

export default SideDrawer;
