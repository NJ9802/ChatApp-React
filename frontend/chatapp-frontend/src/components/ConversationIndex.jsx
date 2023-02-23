import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ConversationList,
  Conversation,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

import icon from "../assets/react.svg";
import { Box, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import { conversationData } from "../data/mockupData";

const ConversationIndex = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const style = {
    conversationItem: { backgroundColor: "transparent" },
  };
  return (
    <Box
      sx={{
        height: { xs: "calc(100vh - 168px)", sm: "100vh" },
        backgroundColor: colors.primary[700],

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
      <ConversationList>
        {conversationData.map((data) => (
          <div key={data.name} as={Conversation}>
            <Link to="/chat" style={{ textDecoration: "none" }}>
              <Conversation
                style={style.conversationItem}
                name={data.name}
                lastSenderName={data.lastSenderName}
                info={data.info}
                lastActivityTime={data.lastActivityTime}
                unreadCnt={data.unreadCnt}
              >
                <Avatar src={icon} name={data.name} />
              </Conversation>
            </Link>
          </div>
        ))}
      </ConversationList>
    </Box>
  );
};

export default ConversationIndex;
