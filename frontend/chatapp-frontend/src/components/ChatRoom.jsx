import {
  Avatar,
  ChatContainer,
  ConversationHeader,
  InputToolbox,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ChatHeader from "./ChatHeader";
import lightWallpaper from "../assets/lightWallpaper.jpg";
import darkWallpaper from "../assets/darkWallpaper.jpg";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { useRef, useState } from "react";
import { messageData } from "../data/mockupData";
import icon from "../assets/react.svg";

const ChatRoom = ({ home = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const inputRef = useRef();
  const msgListRef = useRef();
  const [msgInputValue, setMsgInputValue] = useState("");
  const [messages, setMessages] = useState([...messageData]);

  let todayDate = "";

  const handleTodayDate = (date) => {
    todayDate = date;

    // Change to real date.
    return <MessageSeparator content={`Saturday, ${date} November 2019`} />;
  };

  const handleSend = (message) => {
    setMessages([
      ...messages,
      {
        message,
        direction: "outgoing",
        key: message,
        date: "8",
      },
    ]);
    setMsgInputValue("");
    inputRef.current.focus();
    msgListRef.current.scrollToBottom();
  };

  return (
    <Box
      sx={{
        display: { sm: "flex" },
        flexGrow: { sm: 1 },
        height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 40px)" },
        backgroundColor: colors.primary[700],
        color: colors.grey[100],
      }}
    >
      {home ? (
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
            ChatApp was developed using the MERN Stack, with Material UI and
            Chat UI Kit React as the CSS Frameworks, making it fully responsive
            and adaptable to any device.
          </Typography>

          <Typography sx={{ my: "20px" }} variant="h6" fontWeight="500">
            Developed by Nelson Javier
          </Typography>

          <Typography sx={{ my: "20px" }} variant="h6" fontWeight="500">
            Links to my Social Media
          </Typography>
        </Box>
      ) : (
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

          {/* {home ? (
          <div as={MessageList}>
            <Box
              sx={{
                height: {
                  xs: "calc(100vh - 178.9px)",
                  sm: "calc(100vh - 173.9px)",
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
          </div> */}
          {/* ) : ( */}
          <div as={MessageList}>
            <Box
              backgroundColor="transparent !important"
              sx={{
                height: {
                  xs: "calc(100vh - 178.9px)",
                  sm: "calc(100vh - 173.9px)",
                },

                "& .cs-message-list": {
                  backgroundColor: "transparent",
                },

                "& .cs-message-separator": {
                  borderRadius: "5px 5px 5px 5px ",
                  mx: "auto",
                  my: "20px",
                  maxWidth: "250px",
                  p: "2px 10px 0 10px",
                  backgroundColor: "#c6e3fa",
                  color: "#5b6873",
                },

                "& .cs-message-separator:before, .cs-message-separator:after": {
                  backgroundColor: "#5b6873",
                },
              }}
            >
              <MessageList scrollBehavior="auto" ref={msgListRef}>
                {messages.map((data) => (
                  <div as={Message} key={data.key}>
                    {data.date !== todayDate && handleTodayDate(data.date)}

                    <Message model={data}>
                      <Avatar src={icon} name={data.sender} />
                    </Message>
                  </div>
                ))}
              </MessageList>
            </Box>{" "}
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
              <Box display="flex" alignItems="center">
                <MessageInput
                  onSend={handleSend}
                  onChange={setMsgInputValue}
                  value={msgInputValue}
                  ref={inputRef}
                  style={{
                    backgroundColor: "transparent",
                    flexGrow: 1,
                  }}
                  placeholder="Type message here"
                  sendButton={false}
                  attachButton={false}
                />
                <Box>
                  <InputToolbox
                    style={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <IconButton
                      sx={{ mr: "10px", backgroundColor: colors.primary[400] }}
                    >
                      <AttachFileOutlinedIcon />
                    </IconButton>

                    <IconButton
                      onClick={() => handleSend(msgInputValue)}
                      disabled={msgInputValue.length === 0}
                      sx={{ mr: "10px", backgroundColor: colors.primary[400] }}
                    >
                      <SendOutlinedIcon />
                    </IconButton>
                  </InputToolbox>
                </Box>
              </Box>
            </Box>
          </div>
        </ChatContainer>
      )}
    </Box>
  );
};

export default ChatRoom;
