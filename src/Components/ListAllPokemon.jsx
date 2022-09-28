import "../Styles/ListAllPokemon.css"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ListAllPokemon = () => {
    return (<>
            <section className="listAllPokemon">
                <h2>List All Pokemon:</h2>
                <Stack spacing={2} direction="row">
                <Button variant="contained">List all Pokemon</Button>
                </Stack>
            </section>
    </>)
}

export default ListAllPokemon