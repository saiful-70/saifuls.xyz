import { Typography, Box } from "@mui/material";

const HeadingPrimary = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: '"Fira Code", sans-serif',
        fontWeight: 700,
        fontSize: { xs: "3rem", sm: "3.5rem", md: "4rem" },
        mt: "1rem",
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
