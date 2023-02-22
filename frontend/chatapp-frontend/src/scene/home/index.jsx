import Navbar from "../../components/Navbar";
import { Box } from "@mui/material";
import ConversationIndex from "../../components/ConversationIndex";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <ConversationIndex />
    </Box>
  );
};

export default Home;
