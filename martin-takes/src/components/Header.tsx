import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar
        sx={{
          background: "#252525"
        }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <svg
              width="151"
              height="45"
              viewBox="0 0 151 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C0 1.34315 1.34315 0 3 0H148C149.657 0 151 1.34315 151 3V42C151 43.6569 149.657 45 148 45H3C1.34314 45 0 43.6569 0 42V3Z"
                fill="url(#paint0_linear_25_109)"
              />
              <path d="M1.82056 2H149V42.8193H1.82056V2Z" fill="black" />
              <path
                d="M8.16614 32.4784V14.5697H22.2117V18.4328H12.9248V22.4239H20.4464V26.1592H12.9248V32.4784H8.16614ZM24.2452 18.0747V14.2883H28.9015V18.0747H24.2452ZM24.322 32.4784V19.6609H28.8503V32.4784H24.322ZM30.7951 35.1647C30.7951 34.6531 30.9742 34.2011 31.3324 33.8088C31.7076 33.4336 32.2022 33.1692 32.8163 33.0157V31.7109C31.6394 31.5062 31.051 30.9434 31.051 30.0224C31.051 28.8455 31.8441 28.0865 33.4303 27.7454V26.4406C32.3728 25.8437 31.8441 24.9567 31.8441 23.7799C31.8441 22.4495 32.3813 21.3579 33.4559 20.5051C34.5474 19.6523 35.8522 19.2259 37.3702 19.2259C38.6835 19.2259 39.7836 19.4733 40.6705 19.9679C41.5574 20.4625 42.1544 21.1959 42.4614 22.1681H43.6894C43.7406 21.2641 43.9197 20.6245 44.2267 20.2493C44.5507 19.857 45.0454 19.6609 45.7106 19.6609H46.4525V22.8845H44.7639C44.4058 22.8845 44.1499 22.9697 43.9964 23.1403C43.86 23.2938 43.7576 23.6349 43.6894 24.1636L43.6127 24.4707C43.4251 25.6646 42.8281 26.6368 41.8218 27.3872C40.8155 28.1377 39.5107 28.5129 37.9075 28.5129C36.7818 28.5129 35.8352 28.3424 35.0676 28.0012C34.556 28.1889 34.3001 28.4703 34.3001 28.8455C34.3001 29.1013 34.3939 29.2804 34.5815 29.3828C34.7692 29.468 35.0762 29.5107 35.5026 29.5107H41.259C42.6746 29.5107 43.8088 29.8859 44.6616 30.6364C45.5144 31.3868 45.9408 32.3164 45.9408 33.425C45.9408 34.6531 45.5059 35.6338 44.636 36.3672C43.7832 37.1006 42.6661 37.4673 41.2845 37.4673H34.0187C31.8696 37.4673 30.7951 36.6998 30.7951 35.1647ZM39.7495 23.9846C39.7495 23.3194 39.5704 22.7992 39.2122 22.4239C38.8711 22.0317 38.4106 21.8355 37.8307 21.8355C37.2679 21.8355 36.8159 22.0317 36.4748 22.4239C36.1336 22.7992 35.9631 23.3194 35.9631 23.9846C35.9631 24.6497 36.1251 25.1614 36.4492 25.5196C36.7903 25.8778 37.2508 26.0569 37.8307 26.0569C38.4106 26.0569 38.8711 25.8778 39.2122 25.5196C39.5704 25.1444 39.7495 24.6327 39.7495 23.9846ZM35.4258 34.5251H40.3379C41.2248 34.5251 41.6683 34.1755 41.6683 33.4762C41.6683 32.811 41.2248 32.4784 40.3379 32.4784H34.7606C34.4025 32.7172 34.2234 33.0498 34.2234 33.4762C34.2234 33.8003 34.3257 34.0561 34.5304 34.2437C34.7521 34.4313 35.0506 34.5251 35.4258 34.5251ZM45.2301 25.9801L49.8863 24.8544C49.8693 26.3383 50.0143 27.4299 50.3213 28.1292C50.6453 28.8114 51.1996 29.1525 51.9842 29.1525C52.6323 29.1525 53.0929 28.9223 53.3657 28.4617C53.6557 28.0012 53.8007 27.2849 53.8007 26.3127V14.5697H58.6105V25.494C58.6105 28.0012 58.0988 29.8689 57.0754 31.0969C56.0521 32.3079 54.4317 32.9134 52.2145 32.9134C49.9631 32.9134 48.249 32.3079 47.0721 31.0969C45.8952 29.8689 45.2812 28.1633 45.2301 25.9801ZM60.9352 29.1525C60.9352 26.253 63.6556 24.5986 69.0965 24.1892V23.7287C69.0965 22.6713 68.4824 22.1425 67.2544 22.1425C65.9752 22.1425 65.1906 22.748 64.9007 23.959L60.7561 23.2682C60.9096 22.0913 61.5748 21.1277 62.7516 20.3772C63.9285 19.6097 65.4635 19.2259 67.3568 19.2259C69.3011 19.2259 70.7935 19.6609 71.8339 20.5307C72.8744 21.4006 73.3946 22.6542 73.3946 24.2916V28.5129C73.3946 28.8199 73.4372 29.0246 73.5225 29.1269C73.6078 29.2293 73.8039 29.2804 74.1109 29.2804H75.1087V32.4784H73.0876C72.0301 32.4784 71.3137 32.2823 70.9385 31.89C70.5633 31.4807 70.3586 30.7899 70.3245 29.8177H68.9941C68.3972 31.8815 67.0412 32.9134 64.9263 32.9134C63.7494 32.9134 62.7858 32.5722 62.0353 31.89C61.3019 31.2078 60.9352 30.2953 60.9352 29.1525ZM69.0965 27.2849V26.5174C67.8343 26.6368 66.8877 26.867 66.2566 27.2081C65.6256 27.5493 65.31 28.0439 65.31 28.692C65.31 29.5107 65.7876 29.92 66.7427 29.92C67.425 29.92 67.9878 29.6898 68.4313 29.2293C68.8747 28.7688 69.0965 28.1206 69.0965 27.2849ZM77.1228 32.4784V14.5697H84.6957L86.8959 21.4773C87.1347 22.296 87.2882 23.2682 87.3564 24.3939C87.4417 25.639 87.4843 27.1911 87.4843 29.0502H89.0705C89.0705 25.5708 89.2922 23.0465 89.7357 21.4773L91.9615 14.5697H99.2529V32.4784H94.5455V27.2849C94.5455 24.283 95.2533 20.9401 96.6689 17.256L95.0316 16.6931L90.1195 32.4784H86.2051L81.3186 16.7187L79.6812 17.256C81.0798 20.8718 81.7791 24.2148 81.7791 27.2849V32.4784H77.1228ZM101.785 29.1525C101.785 26.253 104.505 24.5986 109.946 24.1892V23.7287C109.946 22.6713 109.332 22.1425 108.104 22.1425C106.825 22.1425 106.04 22.748 105.75 23.959L101.605 23.2682C101.759 22.0913 102.424 21.1277 103.601 20.3772C104.778 19.6097 106.313 19.2259 108.206 19.2259C110.15 19.2259 111.643 19.6609 112.683 20.5307C113.724 21.4006 114.244 22.6542 114.244 24.2916V28.5129C114.244 28.8199 114.287 29.0246 114.372 29.1269C114.457 29.2293 114.653 29.2804 114.96 29.2804H115.958V32.4784H113.937C112.879 32.4784 112.163 32.2823 111.788 31.89C111.413 31.4807 111.208 30.7899 111.174 29.8177H109.843C109.247 31.8815 107.891 32.9134 105.776 32.9134C104.599 32.9134 103.635 32.5722 102.885 31.89C102.151 31.2078 101.785 30.2953 101.785 29.1525ZM109.946 27.2849V26.5174C108.684 26.6368 107.737 26.867 107.106 27.2081C106.475 27.5493 106.159 28.0439 106.159 28.692C106.159 29.5107 106.637 29.92 107.592 29.92C108.274 29.92 108.837 29.6898 109.281 29.2293C109.724 28.7688 109.946 28.1206 109.946 27.2849ZM117.614 32.4784V19.6609H121.605C121.605 21.1106 121.255 22.4495 120.556 23.6776H122.321C122.56 22.1766 122.995 21.0765 123.626 20.3772C124.274 19.6779 125.178 19.3283 126.338 19.3283C126.799 19.3283 127.14 19.3539 127.361 19.405V23.7287C126.713 23.6434 126.168 23.6008 125.724 23.6008C124.445 23.6008 123.524 23.9163 122.961 24.5474C122.398 25.1614 122.117 26.2018 122.117 27.6686V32.4784H117.614ZM130.789 28.7943V22.7821H128.205V19.6609H130.789V15.6954H135.215V19.6609H138.285V22.7821H135.215V28.1036C135.215 28.7688 135.547 29.1013 136.212 29.1013H138.899V32.4784H134.396C133.236 32.4784 132.341 32.1629 131.71 31.5318C131.096 30.8837 130.789 29.9712 130.789 28.7943Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_25_109"
                  x1="9.37852"
                  y1="0.43269"
                  x2="53.3347"
                  y2="88.1465"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D1F1FF" />
                  <stop offset="0.178376" stop-color="#FAFDDD" />
                  <stop offset="0.331333" stop-color="#FCD1D1" />
                  <stop offset="0.598958" stop-color="#FDA3FF" />
                  <stop offset="0.833333" stop-color="#C6C1FF" />
                </linearGradient>
              </defs>
            </svg>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
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
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
