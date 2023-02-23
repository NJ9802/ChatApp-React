import {
  Avatar,
  Message,
  MessageList,
  MessageSeparator,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Box, useTheme } from "@mui/material";
import icon from "../assets/react.svg";
import { tokens } from "../theme";

const MessagesList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 178.9px)", sm: "calc(100vh - 133.9px)" },

        "& .cs-message-list": {
          backgroundColor: colors.primary[700],
        },

        "& .cs-message-separator": {
          backgroundColor: colors.primary[700],
          color: colors.greenAccent[500],
        },

        "& .cs-message-separator:before, .cs-message-separator:after": {
          backgroundColor: colors.greenAccent[500],
        },

        "& .cs-typing-indicator__text": {
          color: colors.grey[200],
        },

        "& .cs-typing-indicator__dot,": {
          backgroundColor: colors.grey[200],
        },
      }}
    >
      <MessageList
        typingIndicator={
          <TypingIndicator
            style={{
              backgroundColor: colors.primary[700],
            }}
            content="Emily is typing"
          />
        }
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
    </Box>
  );
};

export default MessagesList;
