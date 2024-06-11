import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { PokemonsTable } from 'modules';

const Root = () => (
    <Container maxWidth='lg'>
        <Grid
            container
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            my={4}>
            <PokemonsTable />
        </Grid>
    </Container>
);

export default Root;
