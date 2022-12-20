import React from "react";
import { Button, Link } from "@mui/material";
import { IBtnProps } from "../../utils/interface/propsInterface";

const BtnLink: React.FC<IBtnProps> = ({ name, link, variant }) => {
  return (
    <Link
      key={name}
      href={`${link}`}
      target="_blank"
      sx={{ textDecoration: "none", mr: "1rem" }}
    >
      <Button
        size="small"
        color="secondary"
        variant={variant}
        sx={{
          px: "1.5rem",
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
