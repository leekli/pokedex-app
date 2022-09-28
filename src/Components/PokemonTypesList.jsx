import "../Styles/PokemonTypesList.css"
import { useEffect } from "react"
import { useState } from "react"
import { getAllTypes } from "../Utils/api"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const PokemonTypesList = () => {
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllTypes().then((result) => {
            setPokemonTypes(result)
            setIsLoading(false)
        })
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
      function FormRow() {
        return (
          <React.Fragment>
            {pokemonTypes.map((pokemonType) => {
            return (<Grid item xs={4}><Item>{pokemonType.name}</Item></Grid>)
            })}
          </React.Fragment>
        );
      }

    if (isLoading) {
        return(<><p>Loading...</p></>)
    } else {
        return (<>
            <section className="pokemonTypesList">
            <h2>List Pokemon By Type:</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <FormRow />
                     </Grid>
                </Grid>
            </Box>
            </section>
    </>)
    }

}

export default PokemonTypesList