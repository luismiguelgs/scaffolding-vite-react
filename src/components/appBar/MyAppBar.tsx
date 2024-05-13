import { AppBar, Box, IconButton, Toolbar, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import Menus from './Menus';

type Props = {
    title?:string | undefined,
    broken?:boolean
    handleClickCollapse?():void,
    handleClickToggle?():void,
}
export default function MyAppBar({title, broken=false, handleClickCollapse, handleClickToggle}:Props) 
{
    const t = useTheme()

    const StyledAppBar = styled(AppBar)`
        background-color: ${t.palette.background.default}; // Color azul claro personalizado 
        box-shadow: none; // Eliminar la sombra predeterminada
        border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
        color:  ${t.palette.text.primary};
    `;

    return (
        <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static" >
            <Toolbar>  
                {
                    broken ? (
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                        onClick={handleClickToggle}
                    >
                    <MenuIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 1 }}
                        onClick={handleClickCollapse}
                    >
                    <MenuIcon />
            </IconButton>
                    )
                } 
                
                
            
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                {title}
            </Typography>
            {/** Search bar */}
            <SearchBar />

            <Box sx={{ flexGrow: 1 }} />

            {/** Button bar */}
            <Menus />
            </Toolbar>
        </StyledAppBar>
        
        </Box>
    );
}
