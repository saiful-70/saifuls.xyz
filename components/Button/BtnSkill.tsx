import { Button } from "@mui/material";
import { IBtnProps } from "../../utils/interface/propsInterface";

const BtnSkill: React.FC<IBtnProps> = ({ icon, name }) => {
  return (
    <Button
      startIcon={icon}
      size="small"
      color="secondary"
      variant="outlined"
      sx={{ m: 0.5, fontWeight: 700, color: "text.primary" }}
    >
      {name}
    </Button>
  );
};
export default BtnSkill;
