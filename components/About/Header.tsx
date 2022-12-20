import React from "react";
import { Box, Divider, Typography, Link, colors } from "@mui/material";
import { aboutHyperLinks } from "../../utils/data/pageAndLinkData";
import HeadingPrimary from "../Heading/HeadingPrimary";
import ImageTemplate from "../common/ImageTemplate";

const headerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  pt: 10,
};

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box sx={headerStyle}>
        <ImageTemplate
          height="10rem"
          width="10rem"
          borderRadius="50%"
          src="/images/avatar.jpeg"
          alt="avatar"
        />

        <HeadingPrimary />

        <Box sx={{ textAlign: "center", mt: "1rem" }}>
          <Typography>Cumilla, Chittagong, Bangladesh</Typography>
          <Typography>saiful70.me@gmail.com</Typography>
        </Box>
        <Box>
          {aboutHyperLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: 700,
                mx: ".3rem",
                fontSize: { xs: "1.3rem", md: "1.4rem" },
              }}
            >
              [{item.name}]
            </Link>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mt: 3 }} />
    </React.Fragment>
  );
};
export default Header;
