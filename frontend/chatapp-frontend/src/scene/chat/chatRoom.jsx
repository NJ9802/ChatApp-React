import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import {
  Box,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";
import icon from "../../assets/react.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useState } from "react";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ChatRoom = () => {
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
        height: { xs: "calc(100vh - 54px)", sm: "100vh" },

        "& .cs-conversation-header": {
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
      }}
    >
      <ChatContainer>
        <ConversationHeader>
          <Box display="flex" alignItems="center" as={ConversationHeader.Back}>
            <Link to="/">
              <ConversationHeader.Back />
            </Link>
          </Box>
          <Avatar src={icon} name="Emily" />
          <ConversationHeader.Content
            userName="Emily"
            info="Active 10 mins ago"
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
        <MessageList
          typingIndicator={<TypingIndicator content="Emily is typing" />}
        >
          <MessageSeparator content="Saturday, 30 November 2019" />

          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "single",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "localSender",
              direction: "outgoing",
              position: "single",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "first",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "normal",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "normal",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "last",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "first",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "normal",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "normal",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "last",
            }}
          />

          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "first",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "last",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>

          <MessageSeparator content="Saturday, 31 November 2019" />

          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "single",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "localSender",
              direction: "outgoing",
              position: "single",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "first",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "normal",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "normal",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "last",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "first",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "normal",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "normal",
            }}
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              direction: "outgoing",
              position: "last",
            }}
          />

          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "first",
            }}
            avatarSpacer
          />
          <Message
            model={{
              message: "Hello my friend",
              sentTime: "15 mins ago",
              sender: "Emily",
              direction: "incoming",
              position: "last",
            }}
          >
            <Avatar src={icon} name={"Emily"} />
          </Message>
        </MessageList>
        <MessageInput placeholder="Type message here" />
      </ChatContainer>
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

export default ChatRoom;
