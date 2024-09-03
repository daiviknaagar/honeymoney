import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Button, Typography, Toolbar, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import theme from './theme';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Products', 'Contact Us'];

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            backgroundColor: trigger ? theme.colors.beige : 'transparent',
            color: trigger ? theme.colors.brown : theme.colors.brown,
            transition: ' 0.3s ease-in-out',
        },
    });
}

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{
            textAlign: 'center',
        }}>
            <Typography variant="h4" sx={{
                alignContent: 'center',
                fontFamily: theme.fonts.logo,
                p: '12px',
                color: theme.colors.brown
            }}>
                Diya Handicrafts
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth" })}>
                        <ListItemButton sx={{
                            textAlign: 'left',
                            color: theme.colors.brown
                        }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar component="nav" variant="none">
                    <Toolbar sx={{ margin: 0, p: 1.5 }}>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, color: theme.colors.grey }
                            }
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                flexGrow: 1, display: 'block',
                                fontFamily: theme.fonts.logo,
                                textAlign: { xs: 'right', sm: 'left' },
                            }}
                        >
                            Diya Handicrafts
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: 'inherit' }}
                                    onClick={() => document.getElementById(item).scrollIntoView({ behavior: "smooth" })}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
