import { useContext, useState } from "react";
import {
  Avatar,
  ConversationList,
  Search,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ColorModeContext, tokens } from "../theme";
import ConversationIndex from "./ConversationIndex";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";

import icon from "../assets/react.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ConversationListSideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box height="100vh">
      <Sidebar
        position="left"
        scrollable={false}
        style={{ borderRight: "1px solid" }}
      >
        <Box
          sx={{
            display: { sm: "none", md: "block" },
            backgroundColor: colors.primary[400],
            p: "14px",
          }}
        >
          <Box display="flex" m="10px" justifyContent="space-between">
            <Avatar name="Profile Picture" src={icon} />
            <Box display="flex">
              <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
                  )}
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <Groups3OutlinedIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <Badge color="secondary" variant="dot">
                    <DonutLargeIcon />
                  </Badge>
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={handleOpenUserMenu}>
                  <MoreVertOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Search placeholder="Search..." />
        </Box>
        <div as={ConversationList}>
          <ConversationIndex />
        </div>
      </Sidebar>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default ConversationListSideBar;
