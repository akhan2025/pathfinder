import React from 'react';

import { Button, Box, Nav, Select, Text, Grid } from 'grommet';
import { Down, Flag, Home } from 'grommet-icons'
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

const SidebarFooter = (props) => (
    <Nav gap='small' responsive>
        <Button
            label='Visualize'
            color={'status-ok'}
            hoverIndicator="status-ok" />
        <Button
            label='Reset Board'
            color={'status-error'}
            hoverIndicator="status-error"
            onClick={() => props.onResetBoardClick()} />
    </Nav>
);

function SelectAlgo() {
    const [value, setValue] = React.useState('Choose Algorithm');
    return (
        <><Text>Choose Algorithm:</Text><Select
            icon=<Down color='status-ok' />
            options={['Dijkstras', 'BFS', 'DFS', 'A*']}
            value={value}
            onChange={({ option }) => setValue(option)} /></>
    );
}

function MainNavigation() {
    return (
        <Nav gap="small" responsive={false}>
            <Box gap='medium'>
                <SelectAlgo />

                <Grid
                    rows={['auto', 'auto']}
                    columns={['auto', 'auto']}
                    areas={[
                        { name: 'startNode', start: [0, 0], end: [0, 0] },
                        { name: 'endNode', start: [0, 1], end: [0, 1] },
                    ]}>
                    <Box
                        direction='row'
                        gridArea="startNode"
                        pad="small"
                        gap='small'
                        alignContent='start'>
                        <Text>Start Node:</Text>
                        <Home size="medium" />
                    </Box>
                    <Box
                    direction='row'
                        gridArea="endNode"
                        pad="small"
                        gap='small'
                        alignContent='start'>
                        <Text>End Node: </Text>
                        <Flag size='medium'/>
                    </Box>
                </Grid>
            </Box >
        </Nav >
    );
}

function mainSideBar(props) {
    return (
        <Box direction="row" height={{ min: '100%' }}>
            <Sidebar
                responsive={false}
                background="light-1"
                header={<SidebarHeader />}
                footer={<SidebarFooter onResetBoardClick={props.onResetBoardClick}/>}
                pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
                round={[{ size: "small", corner: "top" }, { size: "small", corner: "bottom" }]}
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
