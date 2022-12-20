import React from "react";
import { Box } from "@mui/material";

import { pages } from "../../utils/data/pageAndLinkData";
import BtnNav from "../Button/BtnNav";

const DesktopNavMenu = () => {
  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 3 }}
    >
      {Object.keys(pages).map((page) => (
        <BtnNav key={page} name={page} link={pages[page]} />
      ))}
    </Box>
  );
};
export default DesktopNavMenu;
