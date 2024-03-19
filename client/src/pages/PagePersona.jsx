import { useEffect, useState } from "react";
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography, } from '@mui/material';
import axios from "axios";


const PagePersona=() =>{
    
    const [listPersona , setListPersona] = useState([]);

    useEffect(()=>{
        fetchPesonasList();
    },[]);

    const fetchPesonasList = async() =>{
        try{
            const resultPersona = await axios.get("http://localhost:8110/api/persona/get")
            setListPersona(resultPersona);
        }catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            <Container fixed style={{marginTop: '20px', marginBottom: '20px'}}>
                <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:3}}>
                    <Grid>

                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" onClick={addPersona}>

                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}


export default PagePersona;