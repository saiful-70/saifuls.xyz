import React from "react";
import { Button, Link } from "@mui/material";
import { IBtnProps } from "../../utils/interface/propsInterface";

const BtnLink: React.FC<IBtnProps> = ({ name, link, variant }) => {
  return (
    <Link
      key={name}
      href={`${link}`}
      target="_blank"
      sx={{ textDecoration: "none", mr: "0.3rem" }}
    >
      <Button
        size="small"
        color="secondary"
        variant={variant}
        sx={{
          px: 2,
          my: { xs: "0.5rem", md: 0 },
          mx: { md: "0.5rem" },
          fontWeight: "700",
          transition: "all .4s",
          color: variant === "contained" ? "#f4ede3" : "text.primary",
        }}
      >
        {name}
      </Button>
    </Link>
  );
};
export default BtnLink;
