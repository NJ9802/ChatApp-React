import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import ConversationIndex from "../../components/ConversationIndex";
import {
  MainContainer,
  Sidebar,
  ChatContainer,
} from "@chatscope/chat-ui-kit-react";
import ChatRoom from "../../components/ChatRoom";
import { useState } from "react";
import ConversationListSideBar from "../../components/ConversationListSideBar";

const Home = () => {
  // Set initial message input value to an empty string
  const [messageInputValue, setMessageInputValue] = useState("");

  return (
    <Box>
      <Box display={{ sm: "none" }}>
        <Navbar />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: { xs: "calc(100vh - 114px)", sm: "100vh" },
          position: "relative",
        }}
      >
        <MainContainer responsive>
          <div as={Sidebar}>
            <ConversationListSideBar />
          </div>
          <div as={ChatContainer} style={{ display: "flex", flexGrow: 1 }}>
            <ChatRoom />
          </div>
        </MainContainer>
      </Box>
      <Box display={{ sm: "none" }}>
        <ConversationIndex />
      </Box>
    </Box>
  );
};

export default Home;
