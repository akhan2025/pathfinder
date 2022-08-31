import React from 'react';

import { Anchor, Box, Header, Menu, Nav, ResponsiveContext, Text } from 'grommet';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Navigation() {
  return (
        // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Header background="neutral-2" pad="medium">
  <Text
          
          weight="bold"
          color="Light"
          size='large'
          //add graph here
        >
          DBG Algorithmic Pathfinding
        </Text>
  <ResponsiveContext.Consumer>
    {(responsive) =>
      responsive === 'small' ? (
        <Menu
          label="Click me"
          items={[
            { label: 'Homepage', onClick: () => {} },
            { label: 'Who We Are', onClick: () => {} },
            { label: 'Our Github', onClick: () => {} },
          ]}
        />
      ) : (
        <Nav direction="row">
          <Anchor href="Home" label="Homepage" size="medium" />
          <Anchor href="TeamPage" label="Who We Are" size="medium"/>
          <Anchor href="https://github.com/akhan2025/pathfinder" label="Our GitHub" size="medium"  />
          
        </Nav>
      )
    }
  </ResponsiveContext.Consumer>
</Header>
);
}

export default Navigation

