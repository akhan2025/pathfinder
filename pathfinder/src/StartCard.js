import React, { useState } from 'react';

import { Button, Box, Nav, Select, Text, Grid, Menu } from 'grommet';
import { Sidebar } from 'grommet/components/Sidebar';

const SidebarHeader = () => (
    <Grid>
        <Box align="center" gap="small" direction="row" margin={{ bottom: 'medium' }}>
            <Text weight={'bold'}>Pathfinding Visualization</Text>
        </Box>
        <Box>
            <Text>Pathfinding Algorithms look to find the shortest path between any two points.
                Our goal with this visualizer is to showcase how many pathfinding algorithms accomplish
                this task. Try it for yourself!</Text>
        </Box>
    </Grid>
);

const SidebarButton = ({ icon, label, ...rest }) => (
    <Box pad="small">
        <Button
            gap="medium"
            alignSelf="start"
            plain
            icon={icon}
            label={label}
            {...rest}
        />
    </Box>
);

const SidebarFooter = () => (
    <Nav gap='small' responsive='true'>
        <Button
            label='Visualize'
            color={'status-ok'}
            hoverIndicator="status-ok" />
        <Button
            label='Clear Board'
            color={'status-error'}
            hoverIndicator="status-error" />
    </Nav>
);

function SelectAlgo() {
    const [value, setValue] = React.useState('Choose Algorithm');
    return (
        <Select
            options={['Dijkstras', 'BFS', 'DFS', 'A*']}
            value={value}
            onChange={({ option }) => setValue(option)}
        />
    );
}

const MainNavigation = () => (
    <Nav gap="small" responsive={false}>
        <Box>
            <Text>Choose Algorithm:</Text>
            <SelectAlgo/>
        </Box>
    </Nav>
);

function mainSideBar() {
    return (
        <Box direction="row" height={{ min: '100%' }}>
            <Sidebar
                responsive={false}
                background="light-2"
                header={<SidebarHeader />}
                footer={<SidebarFooter />}
                pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
            >
                <MainNavigation />
            </Sidebar>
        </Box>
    );
}

mainSideBar.args = {
    full: true,
};

export default mainSideBar