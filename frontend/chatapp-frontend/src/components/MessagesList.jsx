import {
  Avatar,
  Message,
  MessageList,
  MessageSeparator,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Box, useTheme } from "@mui/material";
import { Fragment } from "react";
import icon from "../assets/react.svg";
import { tokens } from "../theme";
import { messageData } from "../data/mockupData";

const MessagesList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let todayDate = "";

  const handleTodayDate = (date) => {
    todayDate = date;

    // Change to real date.
    return <MessageSeparator content={`Saturday, ${date} November 2019`} />;
  };

  return (
    <Box
      backgroundColor="transparent !important"
      sx={{
        height: { xs: "calc(100vh - 178.9px)", sm: "calc(100vh - 133.9px)" },

        "& .cs-message-list": {
          backgroundColor: "transparent",
        },

        "& .cs-message-separator": {
          borderRadius: "5px 5px 5px 5px ",
          mx: "auto",
          my: '20px',
          maxWidth: "250px",
          p: "2px 10px 0 10px",
          backgroundColor: "#c6e3fa",
          color: "#5b6873",
        },

        "& .cs-message-separator:before, .cs-message-separator:after": {
          backgroundColor: "#5b6873",
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
              backgroundColor: "transparent",
            }}
            content="Emily is typing"
          />
        }
      >
        {messageData.map((data) => (
          <Fragment key={data.key}>
            {data.date !== todayDate && handleTodayDate(data.date)}

            <Message model={data}>
              <Avatar src={icon} name={data.sender} />
            </Message>
          </Fragment>
        ))}
      </MessageList>
    </Box>
  );
};

export default MessagesList;
