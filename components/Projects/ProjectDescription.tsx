import React from "react";
import Image from "next/image";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Link,
  colors,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";

export interface PojectDescriptionProps {
  item: {
    slug: string;
    imgSrc: string[];
    name: string;
    summary: string;
    preview?: string;
    repo: string;
    stack: string;
    description?: string[];
  };
}

const PojectDescription: React.FC<PojectDescriptionProps> = ({ item }) => {
  return (
    item && (
      <Box
        sx={{
          pt: 10,
          maxWidth: "sm",
          margin: "0 auto",
        }}
      >
        <HeadingSecondary name={`Projects / ${item.name}`} />
        <Box
          boxShadow={5}
          sx={{
            position: "relative",
            height: { xs: "250px", md: "300px" },
            borderRadius: "8px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Image
            src={`${item.imgSrc[0]}`}
            alt="Card Image"
            layout="fill"
            style={{ borderRadius: "8px" }}
          />
        </Box>

        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ px: 5, my: 1 }}
        >
          {item.summary}
        </Typography>

        <Paper sx={{ px: 2, py: 1, mt: 2, bgcolor: "primary.main" }}>
          <Typography sx={{ color: "text.primary", fontWeight: "700" }}>
            Preview :{" "}
            <Link
              href={item.preview}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: "bold",
              }}
            >
              {item.preview}
            </Link>
          </Typography>
          <Typography fontWeight="bold">
            Repository :{" "}
            <Link
              href={item.repo}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: "bold",
              }}
            >
              {item.repo}
            </Link>
          </Typography>
          <Typography fontWeight="bold">
            Stack :{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              {item.stack}
            </Box>
          </Typography>
        </Paper>

        <Paper sx={{ px: 2, py: 1, my: 3, bgcolor: "primary.main" }}>
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Features and Description{" "}
          </Typography>
          <List dense={true}>
            {item.description &&
              item.description.map((listItem) => (
                <ListItem key={listItem}>
                  <ListItemText>{listItem}</ListItemText>
                </ListItem>
              ))}
          </List>
        </Paper>
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
            More Images
          </Typography>
          {item.imgSrc.slice(1).map((img) => (
            <Box
              key={img}
              boxShadow={5}
              sx={{
                position: "relative",
                height: { xs: "250px", md: "300px" },
                borderRadius: "8px",
                width: "100%",
                margin: "8px auto",
              }}
            >
              <Image
                src={`${img}`}
                alt="Card Image"
                layout="fill"
                style={{ borderRadius: "8px" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    )
  );
};
export default PojectDescription;
