import {
  ChatContainer,
  ConversationHeader,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
import lightWallpaper from "../assets/lightWallpaper.jpg";
import darkWallpaper from "../assets/darkWallpaper.jpg";

const ChatRoom = ({ home = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: { sm: "flex" },
        flexGrow: { sm: 1 },
        height: { xs: "calc(100vh - 56px)", sm: "100vh" },
      }}
    >
      <ChatContainer
        style={{
          backgroundImage:
            theme.palette.mode === "dark"
              ? `url(${darkWallpaper})`
              : `url(${lightWallpaper})`,
        }}
      >
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

                backgroundColor: "transparent",
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
                <Box
                  sx={{
                    m: "auto",
                    p: "20px",
                    borderRadius: "8px",
                    maxWidth: "450px",
                    backgroundColor: colors.primary[400],
                  }}
                >
                  <Typography sx={{ my: "20px" }} variant="h2" fontWeight="500">
                    Welcome to ChatApp
                  </Typography>

                  <Typography sx={{ my: "20px" }} variant="h5">
                    ChatApp was developed using the MERN Stack, with Material UI
                    and Chat UI Kit React as the CSS Frameworks, making it fully
                    responsive and adaptable to any device.
                  </Typography>

                  <Typography sx={{ my: "20px" }} variant="h6" fontWeight="500">
                    Developed by Nelson Javier
                  </Typography>
                  
                  <Typography sx={{ my: "20px" }} variant="h6" fontWeight="500">
                    Links to my Social Media
                  </Typography>
                </Box>
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
                backgroundColor: "transparent",
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
