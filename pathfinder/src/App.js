import React from "react";
import "./App.css";
import { Box, Grid, Text } from 'grommet'
import MainSideBar from "./StartCard";

function App() {

  return (
    <Grid
      rows={['xxsmall', 'small', 'small', 'small']}
      columns={['medium', 'auto']}
      areas={[
        {name: 'nav', start:[0,0], end: [1,0]},
        {name: 'card', start:[0,1], end: [0,3]},
        {name: 'graph', start:[1,1], end: [1,3]}
      ]}
      gap="xsmall"
    >
      <Box
        border={{ color: 'cyan', style: 'solid' }}
        gridArea="nav"
        justify="center"
        pad="small"
        //add navbar  in here
      >
      </Box>
      <Box
        border={{ color: 'blue', style: 'ridge'}}
        gridArea="card">
        <MainSideBar/>
      
      </Box>
      <Box
        border={{ color: 'border', style: 'dashed' }}
        gridArea="graph"
        justify="center"
        pad="small"
      >
        <Text weight="bold"
        //add graph here
        >Footer</Text>
      </Box>
    </Grid>
  );
}

export default App;
