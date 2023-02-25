import { Avatar, ConversationHeader, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { tokens } from "../theme";
import { useState } from "react";
import icon from "../assets/react.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ChatHeader = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        "& .cs-conversation-header": {
          border: "none",
          backgroundColor: colors.primary[400],
        },
        "& .cs-button--arrow": {
          color: colors.grey[200],
        },

        "& .cs-conversation-header__user-name": {
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
        },

        "& .cs-conversation-header__info": {
          backgroundColor: colors.primary[400],
          color: colors.grey[300],
        },

        "& .cs-typing-indicator__text": {
          color: colors.grey[200],
        },

        "& .cs-typing-indicator__dot,": {
          backgroundColor: colors.grey[200],
        },

      }}
    >
      <ConversationHeader>
        <Box display="flex" alignItems="center" as={ConversationHeader.Back}>
          <Link to="/">
            <ConversationHeader.Back />
          </Link>
        </Box>
        <Avatar src={icon} name="Emily" />
        <ConversationHeader.Content
          userName="Emily"
          info={
            <TypingIndicator
              style={{
                backgroundColor: "transparent",
              }}
              content="typing"
            />
          }
        />
        <ConversationHeader.Actions>
          <Box
            sx={{
              "& button": { color: colors.grey[200] },
            }}
          >
            <IconButton>
              <LocalPhoneOutlinedIcon />
            </IconButton>

            <IconButton>
              <VideoCallOutlinedIcon />
            </IconButton>

            <IconButton onClick={handleOpenUserMenu}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Box>
        </ConversationHeader.Actions>
      </ConversationHeader>
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

export default ChatHeader;
