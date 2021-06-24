import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Navbar/>
    <About title="Acerca de mi" id="about" dark={true }/>
    <Skills title="Mis habilidades" id="skills" dark={false }/>
    <MyWork title="Mis proyectos" id="work" dark={true }/>
    <Contact title="Contacto" id="contact" dark={false }/> 
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    }

}))

export default App;
