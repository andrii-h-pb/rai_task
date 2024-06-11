'use client';

import { memo } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { usePokemons } from 'hooks';
import { Table } from 'components';
import { v4 as uuidv4 } from 'uuid';

const COLUMNS = [
    {
        id: uuidv4(),
        value: 'Name',
        type: 'string',
    },
    {
        id: uuidv4(),
        value: 'Height',
        type: 'string',
    },
    {
        id: uuidv4(),
        value: 'Weight',
        type: 'string',
    },
    {
        id: uuidv4(),
        value: 'Main stat',
        type: 'string',
    },
];

export const PokemonsTable = memo(() => {
    const { data = [], isLoading } = usePokemons();

    if (isLoading) {
        return (
            <Grid
                container
                justifyContent='center'
                my={8}>
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <Box width='100%'>
            <Typography
                variant='h5'
                textAlign='center'
                mb={2}>
                Pokemons table
            </Typography>
            <Table
                columns={COLUMNS}
                rows={data}
            />
        </Box>
    );
});
