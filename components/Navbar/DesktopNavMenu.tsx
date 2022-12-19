import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Link as MuiLink } from "@mui/material";

import { pages } from "../../utils/data/pageAndLinkData";

const DesktopNavMenu = () => {
  const router = useRouter();

  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 3 }}
    >
      {Object.keys(pages).map((page) => (
        <Link href={pages[page]} key={page}>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            key={page}
            sx={{
              px: 2,
              my: { xs: 0.5, md: 0 },
              mx: { md: 0.5 },
              display: "block",
              fontWeight: "700",
              color: "text.primary",
              "&:hover": {
                bgcolor: "secondary.main",
                color: "#f4ede3",
              },
              ...(router.asPath === pages[page] && {
                bgcolor: "secondary.main",
                color: "#f4ede3",
              }),
            }}
          >
            {page}
          </Button>
        </Link>
      ))}
    </Box>
  );
};
export default DesktopNavMenu;
