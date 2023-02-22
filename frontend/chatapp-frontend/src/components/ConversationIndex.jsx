import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ConversationList,
  Conversation,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

import icon from "../assets/react.svg";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ConversationIndex = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style = {
    conversationList: {
      height: "calc(100vh - 114px)",
    },
    conversationItem: { backgroundColor: colors.primary[900] },
  };
  return (
    <Box
      sx={{
        "& .cs-conversation__name": {
          color: colors.grey[100],
        },
        "& .cs-conversation__info": {
          color: colors.grey[300],
        },
        "& .cs-conversation__last-activity-time": {
          minWidth: "40px",
          color: colors.grey[100],
        },
        "& .cs-conversation__unread": {
          backgroundColor: colors.greenAccent[400],
          color: colors.grey[900],
          m: "2px 10px 0 0",
        },
      }}
    >
      <ConversationList style={style.conversationList}>
        <Conversation
          style={style.conversationItem}
          name="Lilly"
          lastSenderName="Lilly"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Lilly" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>
        <Conversation
          style={style.conversationItem}
          name="Joe"
          lastSenderName="Joe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Joe" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Emily"
          lastSenderName="Emily"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Emily" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Kai"
          lastSenderName="Kai"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Kai" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Akane"
          lastSenderName="Akane"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Akane" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Eliot"
          lastSenderName="Eliot"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Eliot" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Zoe"
          lastSenderName="Zoe"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Zoe" />
        </Conversation>

        <Conversation
          style={style.conversationItem}
          name="Patrik"
          lastSenderName="Patrik"
          info="Yes i can do it for you"
          lastActivityTime="43 min"
          unreadCnt={3}
        >
          <Avatar src={icon} name="Patrik" />
        </Conversation>
      </ConversationList>
    </Box>
  );
};

export default ConversationIndex;
