import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

function Footer() {
  return (
    <Box textAlign="center" backgroundColor="#fff3f4" p="30px" mt="80px">
      <Stack gap="40px" alignItems="center" px="40px" py="24px">
        <img src={Logo} alt="gym-logo" height="40px" />
        <Typography variant="h6">A build by Akhil Panwar</Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
