import { Typography, Box } from "@mui/material";

const HeadingPrimary = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: '"Fira Code", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "3.5rem", sm: "4rem", md: "5rem" },
        // mt: "1rem",
      }}
    >
      <Box component="span" sx={{ color: "secondary.main" }}>
        Saiful{" "}
      </Box>
      Islam
    </Typography>
  );
};
export default HeadingPrimary;
