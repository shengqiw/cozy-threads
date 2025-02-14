import { Grid2 as Grid, Typography } from "@mui/material";

export const MainContent = () => {
  return (
    <Grid
      container
      border={"1px solid black"}
      textAlign={"center"}
      justifyContent="center" // Centers items horizontally
      alignItems="center"
    >
      <Grid size={12}>
        <Typography variant="h1" color="green">Cozy Threads</Typography>
        <Typography variant="h5">Comfortable, Ethically Sourced, Sustainable Clothing</Typography>
      </Grid>
      <Grid size={12}>
        {/* <h3>tbd</h3> */}
      </Grid>
    </Grid>
  );
};
