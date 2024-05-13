import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MyAppBar from '../components/appBar/MyAppBar';
import { useLayoutContext } from '../contexts/LayoutContextProvider';
import MySidebar from '../components/sidebarPro/MySideBar';

export default function Layout() 
{
    const theme = useTheme()
    const bgColor = theme.palette.background.default
    const {broken, setSidebarToggled, sidebarToggled, sidebarCollapsed, setSidebarCollapsed} = useLayoutContext()

    const handleClickToggle = ():void => {
        setSidebarToggled(!sidebarToggled)
    }
    const handleClickCollapse = ():void => {
        setSidebarCollapsed(!sidebarCollapsed)
        console.log(!sidebarCollapsed);
    }

    return (
        <Box sx={{display:'flex',height:'100%',backgroundColor:bgColor, color:'#616161'}}>
            <MySidebar header={true} footer={false}/>
            <Box sx={{ flexGrow: 1 }}>
                
                <MyAppBar 
                    //title='News'
                    broken={broken}
                    handleClickToggle={handleClickToggle}
                    handleClickCollapse={handleClickCollapse}
                />
                
                <Box sx={{p:1.5, flexGrow: 1}}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}