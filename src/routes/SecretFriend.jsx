import { Box, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

const SecretFriend = () => {
  const { id } = useParams();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={500}
      height={500}
    >
      <Typography>Hello {id} :D</Typography>
      <Typography>Your secret friend is: {id} :D</Typography>
    </Box>
  );
};

export default SecretFriend;
