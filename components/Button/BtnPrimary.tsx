import React from "react";
import { Button } from "@mui/material";
import { useColorMode } from "../../lib/ColorModeContext";
import Link from "next/link";

interface IBtnProps {
  link?: string;
  name: string;
}

const BtnPrimary: React.FC<IBtnProps> = ({ name, link }) => {
  const colorMode = useColorMode();

  return (
    <Link href={`${link}`}>
      <Button
        // size="small"
        variant="outlined"
        color="secondary"
        size="small"
        sx={{
          margin: "0 auto",
          px: 2,
          mt: 3,
          display: "block",
          fontWeight: "700",
          transition: "all .4s",
          ...(colorMode.mode === "light"
            ? {
                color: "text.secondary",
                bgcolor: "text.primary",
                "&:hover": {
                  bgcolor: "secondary.main",
                },
              }
            : {
                color: "text.secondary",
                bgcolor: "text.primary",
                "&:hover": {
                  color: "text.primary",
                  bgcolor: "secondary.main",
                },
              }),
        }}
      >
        {name} {">"}
      </Button>
    </Link>
  );
};
export default BtnPrimary;