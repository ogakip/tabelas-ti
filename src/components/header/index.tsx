import { getCurrentPage } from '../../utils/getCurrentPage';
import * as S from './styles';
import PrintIcon from '@mui/icons-material/Print';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent = ({ location }: { location: any }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return <S.Container>
        <Button onClick={toggleDrawer(true)}><MenuIcon sx={{ color: '#c7c7c7' }} /></Button>
        <Drawer
            PaperProps={{
                sx: {
                    backgroundColor: "#3d3d3d",
                    color: "#c7c7c7",
                }
            }}
            open={open} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem key={'dashboard'} disablePadding>
                        <Link to="/" style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PrintIcon sx={{ color: '#c7c7c7' }} />
                                </ListItemIcon>
                                <ListItemText primary={'IP IMPRESSORAS'} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
        <p>{getCurrentPage(location)}<PrintIcon /></p>
    </S.Container>
}