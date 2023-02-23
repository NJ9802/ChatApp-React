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
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import icon from "../assets/react.svg";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";

const ChatRoom = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: { sm: "flex" },
        flexGrow: { sm: 1 },

        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 2px)" },
      }}
    >
      <ChatContainer>
        <div as={ConversationHeader}>
          <ChatHeader />
        </div>
        <div as={MessageList}>
          <MessagesList />
        </div>

        <div as={MessageInput}>
          <Box
            sx={{
              "& .cs-message-input": {
                border: "none",
                p: "15px 10px",
              },
            }}
          >
            <MessageInput
              style={{
                backgroundColor: colors.primary[400],
              }}
              placeholder="Type message here"
            />
          </Box>
        </div>
      </ChatContainer>
    </Box>
  );
};

export default ChatRoom;
