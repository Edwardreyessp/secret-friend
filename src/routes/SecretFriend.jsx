import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGift } from "../firebase/config";
import "./SecretFriend.scss";

const SecretFriend = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const response = await getGift(id);

      if (response !== "No data available") {
        setData(response);
        setIsLoading(false);
      }
    }
    loadData();
  }, [isLoading]);

  if (isLoading) {
    return (
      <Box className="Text">
        <Typography>Cargando...</Typography>
      </Box>
    );
  }

  return (
    <Box className="Text">
      <Typography>Hola {data.name}</Typography>
      <Typography>Tu amigo secreto es: {data.secretFriend}</Typography>
    </Box>
  );
};

export default SecretFriend;
