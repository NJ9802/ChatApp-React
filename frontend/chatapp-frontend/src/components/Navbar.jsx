import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Badge,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  useTheme,
  Link,
  Tabs,
  Tab,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { ColorModeContext, tokens } from "../theme";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styles = {
    tabs: {
      first: {
        fontSize: 12,
        minWidth: 10,
        width: 10,
      },
      labels: {
        fontSize: 12,
        color: colors.grey[100],
      },
      icons: {
        fontSize: 20,
        color: colors.grey[100],
      },
    },
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: colors.primary[400],
          color: colors.grey[100],
          backgroundImage: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" underline="none">
              <Box
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer", color: colors.grey[100] }}
              >
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                  }}
                >
                  CHATAPP
                </Typography>
              </Box>
            </Link>

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              CHATAPP
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                "& button": { color: colors.grey[200] },
              }}
            >
              <Box>
                <IconButton onClick={colorMode.toggleColorMode}>
                  {theme.palette.mode === "dark" ? (
                    <LightModeOutlinedIcon />
                  ) : (
                    <DarkModeOutlinedIcon />
                  )}
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <PhotoCameraOutlinedIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <SearchOutlinedIcon />
                </IconButton>
              </Box>
              <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <MoreVertOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        sx={{
          "& .MuiButtonBase-root": {
            minHeight: "30px !important",
            p: "2px 15px",
            height: "50px !important",
          },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
          textColor="secondary"
          indicatorColor="secondary"
          centered
          sx={{
            height: "50px !important",
            minHeight: "30px !important",
            backgroundColor: colors.primary[400],
          }}
        >
          <Tab
            sx={styles.tabs.first}
            icon={<Groups3OutlinedIcon style={styles.tabs.icons} />}
            iconPosition="end"
          />
          <Tab
            sx={styles.tabs.labels}
            icon={
              <Badge badgeContent={10} color="secondary">
                <ChatOutlinedIcon style={styles.tabs.icons} />
              </Badge>
            }
            iconPosition="end"
            label="Chats"
          />
          <Tab
            sx={styles.tabs.labels}
            icon={<Badge color="secondary" variant="dot"></Badge>}
            iconPosition="end"
            label="Estados"
          />
          <Tab
            sx={styles.tabs.labels}
            icon={<Badge color="secondary" variant="dot" invisible></Badge>}
            iconPosition="end"
            label="Llamadas"
          />
        </Tabs>
      </Box>
    </Box>
  );
}
export default Navbar;
