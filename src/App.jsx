import { Box, Button, IconButton, TextField } from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [group, setGroup] = useState([{ name: "", group: "", id: "" }]);
  const [indexName, setIndexName] = useState(0);
  const [showUrls, setShowUrls] = useState(false);

  const handleName = (name, index) => {
    setGroup(
      [...group].map((object, i) => {
        if (i === index) {
          return {
            ...object,
            name: name,
            id: `id${indexName}`,
          };
        } else return object;
      })
    );
  };

  const handleGroup = (nameGroup, index) => {
    setGroup(
      [...group].map((object, i) => {
        if (i === index) {
          return {
            ...object,
            group: nameGroup,
          };
        } else return object;
      })
    );
  };

  const handleAdd = () => {
    setGroup([...group, { name: "", group: "", id: "" }]);
    setIndexName(indexName + 1);
  };

  const createUrls = () => {
    let asignedUsers = [];
    let gifts = [];
    for (let index = 0; index < group.length; index++) {
      let available = group.filter(
        (item) => !item.group.includes(group[index].group)
      );

      available = available.filter((item) => !asignedUsers.includes(item.name));
      const secretFriend = getMultipleRandom(available);
      console.log(secretFriend[0].name);
      gifts.push({
        name: group[index].name,
        secretFriend: secretFriend[0].name,
      });
      asignedUsers.push(secretFriend[0].name);
    }
    console.log(gifts);
    setShowUrls(true);
  };

  const getMultipleRandom = (arr) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 1);
  };

  return (
    <Box>
      <Box>
        {group.map((data, index) => {
          return (
            <Box key={index}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                value={group[index].name}
                onChange={(e) => handleName(e.target.value, index)}
              />
              <TextField
                id="outlined-basic"
                label="Group"
                variant="outlined"
                size="small"
                value={group[index].group}
                onChange={(e) => handleGroup(e.target.value, index)}
              />
              {showUrls ? (
                <IconButton aria-label="copy">
                  <AssignmentIcon />
                </IconButton>
              ) : (
                <IconButton aria-label="copy" disabled>
                  <AssignmentIcon />
                </IconButton>
              )}
            </Box>
          );
        })}
      </Box>
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Agregar
      </Button>
      <Button variant="contained" color="primary" onClick={createUrls}>
        Generar enlaces
      </Button>
    </Box>
  );
};

export default App;
