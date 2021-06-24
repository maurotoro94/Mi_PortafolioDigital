
import { AppBar, Icon, IconButton, ListItemIcon, makeStyles } from '@material-ui/core'
import logo from "../images/LogoPrincipal.png"
import {Link, animateScroll as scroll} from "react-scroll"
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import EmojiObjectsTwoToneIcon from '@material-ui/icons/EmojiObjectsTwoTone';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import { List } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from 'react';
import { Drawer } from '@material-ui/core';
import CancelIcon from "@material-ui/icons/Cancel"
import { Divider } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

const links = [
    {
     id: "about",
     text: "Acerca de Mi",
     icon: <InfoTwoToneIcon fontSize="large"/>
},

{
    id: "skills",
    text: "Mis Habilidades",
    icon: <EmojiObjectsTwoToneIcon/>
},

{
    id: "work",
    text: "Mis Proyectos",
    icon: <BuildTwoToneIcon/>
},

{
    id: "contact",
    text: "Contacto",
    icon: <ContactMailTwoToneIcon/>
},

]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    return (
        <>
       <AppBar position="sticky" className={classes.root }>
           <toolbar  className={classes.toolbar }>
           <img src={logo } className={classes.logo} alt="Logo" />
          <List className={classes.menu}>
{
    links.map(({ id, text }, index) => (
        <Link key={index} 
        to={id} 
        spy={true} 
        activeClass="active" 
        smooth={true} 
        duration={500} 
        offset={-70}>
        {text}</Link>
    ))
}

          </List>
           <IconButton edge="end" 
           className= {classes.menubutton }
           onClick={()=>setOpen(!open)}
           >
           <MenuIcon fontSize="large"/>
           </IconButton>
           </toolbar>
           
       </AppBar>
    
       <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
       <IconButton  onClick={()=>setOpen(false)}>
           <CancelIcon/>
       </IconButton>
       <Divider/>
       {
    links.map(({ id, text, icon }, index) => (
        <Link key={index} 
        className={classes.sidebar }
        to={id} 
        spy={true} 
        activeClass="active" 
        smooth={true} 
        duration={500} 
        offset={-70}>
        <ListItem component="h5">
            <span>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            </span>
        </ListItem>
        </Link>
    ))
}
       </Drawer>
       </>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
       backgroundColor:"#fafafa",
       top: 0,
       left: 0,
       right: 0,
       zIndex: 999,
    },
    toolbar:{
        display:"flex",
        justifyContent:"flex-star",
        alignItems:"center"
    },
    logo: {
        height: "5rem",
        objectFit: "contain",
        "&:hover": {
            cursor: "pointer"
        }
      },

      menu: {
          [theme.breakpoints.down("sm")]: {
               display:"none"
          },
          "& a": {
              color: "#333",
              fontSize: "2rem", 
              fontWeight: "bold",
              marginLeft: theme.spacing(3)    
          },
          "& a:hover": {
              cursor: "pointer",
              color: "blue",
              borderBottom: "3px solid blue"
          }
      },
      menubutton: {
          display: "none",
          [theme.breakpoints.down("sm")]:{
              display: "block",
              color: "black",
              position: "absolute",
              top: 0,
              right: 10,
          }
      },

      sidebar: {
          width: "40vw",
          [theme.breakpoints.down("sm")]:{
              with:"60vw",
          },

          "& h5":{
              margin: theme.spacing(10, 0, 0, 4),
              fontSize: "1.4rem",
              color:"#333",
              fontWeight: "bold",
          }

      }
  
  }))

export default Navbar