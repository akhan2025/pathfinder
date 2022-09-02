import React from 'react';

import { Anchor, Header, Menu, Nav, ResponsiveContext, Text } from 'grommet';

function Navigation() {
  return (
  <Header background="neutral-2" pad="medium">
  <Text
          
          weight="bold"
          color="Light"
          size='large'
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

