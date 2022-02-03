import {Grid,Box,Typography} from '@mui/material';
function MaterialUi() {
    return (
        <> 
        
        <Grid container spacing={2}>
        <Grid item lg={4} sx={{backgroundColor:"red"}}>One</Grid>
        <Grid item lg={4} sx={{backgroundColor:"yellow"}}>two</Grid>
        <Grid item lg={4} sx={{backgroundColor:"green"}}>three</Grid>
            {/* <Box>
                <Typography> Hello </Typography>
            </Box> */}
        </Grid>
         </>)
}
export default MaterialUi;