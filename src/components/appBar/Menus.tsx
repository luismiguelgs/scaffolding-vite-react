import { Badge, Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import React from 'react'

type MBProps = {
    icon: React.ReactNode
    text?: string | undefined,
    onClick?: React.MouseEventHandler<HTMLElement> | undefined
    badgeContent?: number
    mobile?: boolean
    ariaControls?: string | undefined
    edge?: 'start' | 'end' | undefined
}

function MenuButton({text, icon, onClick, badgeContent=0, mobile=false, ariaControls=undefined, edge=undefined}:MBProps) 
{
    if(mobile){
        return (
            <React.Fragment>
                <MenuItem onClick={onClick}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit" aria-controls={ariaControls} edge={edge}>
                        <Badge badgeContent={badgeContent} color="error">
                            {icon}
                        </Badge>
                    </IconButton>
                    <p>{text}</p>
                </MenuItem>
            </React.Fragment>
        )
    }
    else{
        return (
            <Tooltip title={text}>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit" edge={edge} onClick={onClick} aria-controls={ariaControls}>
                    <Badge badgeContent={badgeContent} color="error">
                        {icon}
                    </Badge>
                </IconButton>
            </Tooltip>
        )
    }
}

export default function Menus() 
{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuButton text='Mensajes' mobile icon={<MailIcon />} badgeContent={2} />
            <MenuButton text='Notificaciones' mobile icon={<NotificationsIcon />} badgeContent={5} />
            <MenuButton text='Perfil' mobile icon={<AccountCircle />} ariaControls={menuId} onClick={handleProfileMenuOpen}/>
        </Menu>
    );

    return (
        <React.Fragment>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuButton text='Mensajes' icon={<MailIcon />} badgeContent={2} />
                <MenuButton text='Notificaciones' icon={<NotificationsIcon />} badgeContent={5} />
                <MenuButton text='Perfil' icon={<AccountCircle />} ariaControls={menuId} onClick={handleProfileMenuOpen} edge='end'/>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MenuButton icon={<MoreIcon />} ariaControls={mobileMenuId} onClick={handleMobileMenuOpen} />
                
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </React.Fragment>
    )
}
