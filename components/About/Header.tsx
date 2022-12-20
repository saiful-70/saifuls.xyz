import React from "react";
import { Box, Divider, Typography, Link, colors } from "@mui/material";
import { aboutHyperLinks } from "../../utils/data/pageAndLinkData";
import HeadingPrimary from "../Heading/HeadingPrimary";
import ImageTemplate from "../common/ImageTemplate";
import Social from "../common/Social";
import { MdSchool, MdPlace, MdEmail } from "react-icons/md";
import BtnLink from "../Button/BtnLink";

const bio = [
  {
    icon: <MdPlace />,
    name: "Cumilla, Chittagong, Bangladesh",
  },
  {
    icon: <MdEmail />,
    name: "saiful70.me@gmail.com",
  },
];

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          pt: "8rem",
          // pb: "2rem",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <ImageTemplate
          height="12rem"
          width="12rem"
          borderRadius="50%"
          src="/images/avatar.jpeg"
          alt="avatar"
        />

        <Box mt=".5rem" mb="1rem">
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Fira Code", sans-serif',
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              // mt: "1rem",
            }}
          >
            <Box component="span" sx={{ color: "secondary.main" }}>
              Saiful{" "}
            </Box>
            Islam
          </Typography>
          <Social />
        </Box>

        <Box sx={{ mt: "1rem" }}>
          {bio.map((item) => (
            <Typography
              key={item.name}
              component="p"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                // justifyContent: "center",
              }}
            >
              {item.icon}
              <Box component="span" ml="3px">
                {item.name}
              </Box>
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            mt: "1rem",
          }}
        >
          <BtnLink
            link="https://docs.google.com/document/d/1wc-z6XwPXopYl_TwahvQgwsiXHtc0aDPm2cpydwLp4k/edit?usp=sharing"
            name="Resume"
            variant="contained"
          />
          <BtnLink
            link="/resume/resume-saiful.pdf"
            name="Get Resume"
            variant="outlined"
          />
        </Box>
        {/* <Box>
          {aboutHyperLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: 700,
                mr: ".3rem",
                fontSize: { xs: "1.3rem", md: "1.4rem" },
              }}
            >
              [{item.name}]
            </Link>
          ))}
        </Box> */}
      </Box>
    </React.Fragment>
  );
};
export default Header;
