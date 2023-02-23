import { Routes, Route } from "react-router-dom";
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
      <Navbar />
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          height: { xs: "calc(100vh - 114px)", sm: "100vh" },
          position: "relative",
        }}
      >
        <MainContainer style={{ border: "none" }} responsive>
          <div as={Sidebar}>
            <ConversationListSideBar />
          </div>
          <div as={ChatContainer} style={{ display: "flex", flexGrow: 1 }}>
            <Routes>
              <Route index path="/" element={<ChatRoom home={true} />} />
              <Route index path="/chat" element={<ChatRoom />} />
            </Routes>
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
