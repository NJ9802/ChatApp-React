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
