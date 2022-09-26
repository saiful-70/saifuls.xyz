import React from "react";
import Image from "next/image";
import { Box, Divider, Typography, Link, colors } from "@mui/material";

import { aboutHyperLinks } from "../../utils/data/data";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
          }}
        >
          <Image
            src="/images/avatar.jpeg"
            alt="avatar"
            layout="fill"
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"M PLUS Rounded 1c", sans-serif',
            fontWeight: "700",
            fontSize: { xs: 28, sm: 36, md: 48 },
            my: 1,
          }}
        >
          <Box component="span" sx={{ color: "secondary.main" }}>
            Saiful{" "}
          </Box>
          Islam
        </Typography>
        <Typography>Cumilla, Chittagong, Bangladesh</Typography>
        <Typography>saiful70.me@gmail.com</Typography>
        <Box>
          {aboutHyperLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: "bold",
                mx: 0.5,
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
