import React from "react";
import Image from "next/image";
import { Box, Divider, Link, Typography, colors } from "@mui/material";
import Social from "../Social";
import HeadingSecondary from "../Heading/HeadingSecondary";

const ProblemSolvingSkills: React.FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <HeadingSecondary name="Problem Solving Skills" />
      <Box>
        <Typography variant="body1">
          Solved 300+ problems and joined 50+ contests in{" "}
          <Link
            href="https://codeforces.com/profile/KhaWareZmI"
            underline="hover"
            sx={{
              color: colors.blue[500],
              fontWeight: "bold",
            }}
          >
            Codeforces
          </Link>{" "}
          and focused on structured way of problem solving.
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Solved 70+ problems in{" "}
          <Link
            href="https://leetcode.com/saiful70/"
            underline="hover"
            sx={{
              color: colors.blue[500],
              fontWeight: "bold",
            }}
          >
            Leetcode
          </Link>{" "}
          and focused on data structures and algorithmic type problem.
        </Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          Also, attended 5+ onsite contests and tried to solve problem at
          codechef, atcoder, lightoj, uva, codewar, etc. online judges.
        </Typography>
      </Box>
    </Box>
  );
};
export default ProblemSolvingSkills;
