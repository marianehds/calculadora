import './home.scss';
import { Grid, Button, Input } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BackspaceOutlined,
  PercentOutlined,
  DragHandleOutlined,
  Remove,
  Add,
  Close,
} from '@mui/icons-material/';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7f86bfd1',
      contrastText: '#ffffff',
      dark: '#a9aed7d1',
    },
    secondary: {
      light: '#ff7961',
      main: ' #020024ab',
      dark: '#1a174eab',
      contrastText: '#ffffff',
    },
    third: {
      light: '#5fba7d',
      main: '#ffffff96',
      dark: '#c9c6c696',
      contrastText: '#000',
    },
  },
});

const home = () => {
  return (
    <>
      <div className="cabecalho">
        <p>Calculadora Online</p>
      </div>
      <div className="resultadoConta">
        <Input
          disabled
          className="resultadoConta--input"
          label="resultado"
          size="large"
        />
      </div>
      <ThemeProvider theme={theme}>
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={1}
          width="30%"
          margin="20px 35% 15px 35%;"
          className="grid"
        >
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              <PercentOutlined />
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
              <BackspaceOutlined />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              7
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              8
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              9
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              <Close />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              5
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              6
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              <Remove />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary">
              <Add />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              +/-
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              0
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="secondary">
              ,
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="third">
              <DragHandleOutlined />
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
export default home;
