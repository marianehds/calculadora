import "./home.scss";
import { Grid, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffffc7",
      contrastText: '##000000'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

const home = () => {
  return (
    <>
      <div className="cabecalho">
        <p>Calculadora Online</p>
      </div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          width='35%'
          margin='40px 35% 15px 35%;'
          className="grid">
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              %
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              CE
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              Backspace
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              X
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              -
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              +
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              +/-
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              ,
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              =
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default home;
