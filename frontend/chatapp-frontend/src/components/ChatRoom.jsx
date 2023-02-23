import {
  ChatContainer,
  ConversationHeader,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import icon from "../assets/react.svg";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";

const ChatRoom = ({ home = false }) => {
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

        {home ? (
          <div as={MessageList}>
            <Box
              sx={{
                height: {
                  xs: "calc(100vh - 178.9px)",
                  sm: "calc(100vh - 133.9px)",
                },

                backgroundColor: colors.primary[700],
                color: colors.grey[200],
              }}
            >
              <MessageList.Content
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                This is custom content placed instead of message list
              </MessageList.Content>
            </Box>
          </div>
        ) : (
          <div as={MessageList}>
            <MessagesList />
          </div>
        )}

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
