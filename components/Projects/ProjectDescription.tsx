import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  Box,
  Link as MuiLink,
  colors,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Breadcrumbs,
} from "@mui/material";
import { PojectDescriptionProps } from "../../utils/interface/propsInterface";
import { IoArrowRedo } from "react-icons/io5";

const PojectDescription: React.FC<PojectDescriptionProps> = ({
  parent,
  item,
}) => {
  return (
    item && (
      <Box
        sx={{
          pt: "8rem",
          maxWidth: "sm",
          margin: "0 auto",
        }}
      >
        <Breadcrumbs sx={{ color: "secondary.main", fontWeight: 700 }}>
          <Link href="/projects" style={{}}>
            Projects
          </Link>
          <Typography color="text.primary" sx={{ fontWeight: 500 }}>
            {item.name}
          </Typography>
        </Breadcrumbs>
        <Box
          boxShadow={5}
          sx={{
            position: "relative",
            height: { xs: "250px", md: "300px" },
            borderRadius: "8px",
            width: "100%",
            margin: "2rem auto",
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
          variant="subtitle2"
          textAlign="center"
          sx={{ px: "4rem", my: "1rem" }}
        >
          {item.summary}
        </Typography>

        <Divider />

        <Paper sx={{ px: 2, py: 1, mt: "2rem", bgcolor: "primary.main" }}>
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: { xs: "1.4rem", md: "1.6rem" },
            }}
          >
            Preview:{" "}
            {item.preview ? (
              <MuiLink
                href={item.preview}
                target="_blank"
                underline="hover"
                sx={{
                  color: colors.blue[500],
                  fontWeight: "bold",
                }}
              >
                {item.preview}
              </MuiLink>
            ) : (
              <Box component="span">Not Available</Box>
            )}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, fontWeight: 600 }}
          >
            Repository:{" "}
            <MuiLink
              href={item.repo}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: "bold",
              }}
            >
              {item.repo}
            </MuiLink>
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "1.4rem", md: "1.6rem" }, fontWeight: 600 }}
          >
            Stack:{" "}
            <Box component="span" sx={{ color: "secondary.main" }}>
              {item.stack}
            </Box>
          </Typography>
        </Paper>

        <Paper
          sx={{
            px: "1.6rem",
            py: "1rem",
            my: "2.5rem",
            bgcolor: "primary.main",
          }}
        >
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: "700",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            Features and Description{" "}
          </Typography>
          <List component="ul" dense={true} sx={{ fontSize: "1.3rem" }}>
            {item.description &&
              item.description.map((listItem) => (
                <ListItem component="li" key={listItem} disablePadding>
                  <ListItemIcon>
                    <IoArrowRedo />
                  </ListItemIcon>
                  <ListItemText>{listItem}</ListItemText>
                </ListItem>
              ))}
          </List>
        </Paper>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            textAlign="center"
            sx={{ textDecoration: "underline", mb: "1rem" }}
          >
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
                mb: "1.6rem",
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
