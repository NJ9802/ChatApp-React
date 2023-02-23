import {
  ConversationList,
  Search,
  Sidebar,
} from "@chatscope/chat-ui-kit-react";
import { Box, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import ConversationIndex from "./ConversationIndex";

const ConversationListSideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Sidebar
      position="left"
      scrollable={false}
      style={{ borderRight: "1px solid" }}
    >
      <Box
        sx={{
          display: { sm: "none", md: "block" },
          backgroundColor: colors.primary[400],
          p: "14px",
        }}
      >
        <Search placeholder="Search..." />
      </Box>
      <div as={ConversationList}>
        <ConversationIndex />
      </div>
    </Sidebar>
  );
};

export default ConversationListSideBar;
