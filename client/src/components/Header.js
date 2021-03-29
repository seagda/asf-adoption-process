import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import PetsIcon from '@material-ui/icons/Pets';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DescriptionIcon from '@material-ui/icons/Description';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';

import logo from "../assets/logo.svg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.common.main
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listItem: {
        color: theme.palette.common.second
    },
    logo: {
        height: "12em",
        [theme.breakpoints.down("md")]: {
            height: "10em"
        },
        marginLeft: "2em"
    },
    logoContainer: {
        alignItems: "center",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    link: {
        color: theme.palette.common.second,
        textDecoration: "none",
        fontWeight: 900,
        fontSize: "1.15em"
    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () =>{
        localStorage.removeItem("user")
    }

    const drawer = (
        <div>
            {/* <div className={classes.toolbar} /> */}
            <NavLink to="/My-Dashboard" className={classes.logoContainer}>
                <img src={logo} className={classes.logo}/>
            </NavLink>
            <List>
                {['My-Dashboard', 'My-Profile'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem} onClick={() => setMobileOpen(false)}>
                        <ListItemIcon className={classes.listItem}>{index === 0 ? <PersonIcon /> : <PetsIcon /> }</ListItemIcon>
                        <NavLink className={classes.link} to={`/${text}`}>{`${text.replace("-", " ")}`}</NavLink>
                    </ListItem>
                ))}
                <ListItem button className={classes.listItem} onClick={() => {setMobileOpen(false); handleLogout()}}>
                    <ListItemIcon className={classes.listItem}><ExitToAppIcon /></ListItemIcon>
                    <NavLink className={classes.link} to={"/"}>Logout</NavLink>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Dog-Dossiers', 'View-ASF-Users'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem} onClick={() => setMobileOpen(false)}>
                        <ListItemIcon className={classes.listItem}>{index === 0 ? <DescriptionIcon /> : index === 1 ? <SupervisorAccountIcon /> : <PermDataSettingIcon />}</ListItemIcon>
                        <NavLink className={classes.link} to={`/${text}`}>{`${text.replace("-", " ")}`}</NavLink>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap></Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, 
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
           
        </div>
    );
}

export default ResponsiveDrawer;