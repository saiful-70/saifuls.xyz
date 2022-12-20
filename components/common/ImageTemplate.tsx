import Image from "next/image";
import { Box } from "@mui/material";
import React from "react";
import { ImageTemplateProps } from "../../utils/interface/propsInterface";

const ImageTemplate: React.FC<ImageTemplateProps> = ({
  height,
  width,
  borderRadius,
  src,
  alt,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { height },
        width: { width },
        borderRadius: { borderRadius },
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        style={{ borderRadius: `${borderRadius}` }}
      />
    </Box>
  );
};
export default ImageTemplate;
