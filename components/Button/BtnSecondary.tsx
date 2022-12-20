import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "../../lib/ThemeContext";
import Link from "next/link";
import { IBtnProps } from "../../utils/interface/propsInterface";

const BtnSecondary: React.FC<IBtnProps> = ({ name, link }) => {
  const colorMode = useTheme();

  return (
    <Link href={`${link}`}>
      <Button
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
        {"<"} {name} {"/>"}
      </Button>
    </Link>
  );
};
export default BtnSecondary;
