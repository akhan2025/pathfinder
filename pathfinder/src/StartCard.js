import React from 'react';

import { Button, Box, Nav, Select, Text, Grid } from 'grommet';
import { Down, Flag, Home } from 'grommet-icons'
import { Sidebar } from 'grommet/components/Sidebar';

/**
 * Header displays the top of the card and provides blurb on what pathfinder is
 */
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

/**
 * Footer displays the two buttons for pathfinder
 * @param {*} props Pass in the Reset Board and Visualize functions here
 * 
 * @Visualize runs the algorithm selected and displays it on graph
 * @ResetBoard clears the grid of any visited nodes
 */
const SidebarFooter = (props) => (
    <Nav gap='small' responsive>
        <Button
            label='Visualize'
            color={'status-ok'}
            hoverIndicator="status-ok"
            onClick={() => props.onVisualizeClick()} />
        <Button
            label='Reset Board'
            color={'status-error'}
            hoverIndicator="status-error"
            onClick={() => props.onResetBoardClick()} />
    </Nav>
);

/**
 * SelectAlgo contains the dropdown for selecting an algorithm
 * 
 * @todo make the options a list passed down from app.js instead of just a list of strings
 * 
 * @param {*} props Pass in the SelectAlgo function here
 */
function SelectAlgo(props) {
    return (
        <><Text>Choose Algorithm:</Text><Select
            icon=<Down color='status-ok' />
            options={['Dijkstras', 'BFS', 'DFS', 'A*']}
            value={props.selectedAlgo}
            onChange={({ option }) => props.changeAlgorithm(option)} /></>
    );
}

/**
 * Main Navigation displays the middle of the card.
 * We include the dropdown as well as visuals for the different
 * types of cells in here
 * 
 * @param {*} props Passes in SelectAlgo function to SelectAlgo
 */
function MainNavigation(props) {
    return (
        <Nav gap="small" responsive={false}>
            <Box gap='medium'>
                <SelectAlgo changeAlgorithm={props.changeAlgorithm} selectedAlgo={props.selectedAlgo} />

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
                        <Flag size='medium' />
                    </Box>
                </Grid>
            </Box >
        </Nav >
    );
}

/**
 * Card tile with explanation on how Pathfinder works and how to use it
 * 
 * @param {*} props Pass in the functions for Visualize, Clear Board, and Select Algo
 */
function mainSideBar(props) {
    return (
        <Box direction="row" height={{ min: '100%' }}>
            <Sidebar
                responsive={false}
                background="light-1"
                header={<SidebarHeader />}
                footer={<SidebarFooter onResetBoardClick={props.onResetBoardClick} onVisualizeClick={props.onVisualizeClick} />}
                pad={{ left: 'small', right: 'small', top: 'medium', bottom:'small' }}
                round={[{ size: "small", corner: "top" }, { size: "small", corner: "bottom" }]}
            >
                <MainNavigation changeAlgorithm={props.changeAlgorithm} selectedAlgo={props.selectedAlgo} />

            </Sidebar>
        </Box>
    );
}

mainSideBar.args = {
    full: true,
};

export default mainSideBar
