import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Tooltip,
  Drawer,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { allUsers, loggedInUser } from "../selectors";
import { selectUser } from "../slices/userSlice";

function DrawerList() {
  const users = useSelector(allUsers);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUser] = useState(users);

  useEffect(() => {
    setFilteredUser(() => users.filter((user) => user.email.includes(search)));
  }, [search, users]);

  return (
    <div>
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search by email"
        size="small"
      />

      <List
        dense
        subheader={
          <ListSubheader component="div">Search Results</ListSubheader>
        }
      >
        {filteredUser.map((user) => (
          <ListItemButton
            key={user.id}
            onClick={() => dispatch(selectUser(user))}
          >
            <ListItemText primary={user.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}

function SideDrawer() {
  const [showDrawer, setShowDrawer] = useState(false);
  const _loggedInUser = useSelector(loggedInUser);

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

      <span className="text-blue-600 text-2xl">Next Chat App</span>

      <span className="text-blue-600">Welcome {_loggedInUser.name}</span>

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
