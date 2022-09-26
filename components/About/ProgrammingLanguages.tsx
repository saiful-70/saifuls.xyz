import React from "react";
import { Box, Button } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";

const languages = ["Javascript", "Typescript", "C++", "C", "Java"];

const ProblemSolvingSkills: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <HeadingSecondary name="Programming Languages" />
      <Box sx={{ mb: 1 }}>
        {languages.map((item) => (
          <Button
            size="small"
            key={item}
            variant="outlined"
            color="secondary"
            sx={{
              m: 0.5,
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default ProblemSolvingSkills;
