import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import Link from "next/link";
import { IBtnProps } from "../../utils/interface/propsInterface";

const BtnNav: React.FC<IBtnProps> = ({ name, link, color, toggleMenu }) => {
  const router = useRouter();

  return (
    <Link key={name} href={`${link}`}>
      <Button
        onClick={toggleMenu}
        size="small"
        color={!color ? "secondary" : `${color}`}
        variant="outlined"
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
          ...(router.asPath === link && {
            bgcolor: "secondary.main",
            color: "#f4ede3",
          }),
        }}
      >
        {name}
      </Button>
    </Link>
  );
};
export default BtnNav;
