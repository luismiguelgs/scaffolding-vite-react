import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useStateContext } from "./contexts/ContextProvider";
import Layout from "./routes/Layout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ErrorPage from "./routes/ErrorPage";
import CertificadosPage from "./pages/CertificadosPage";
import ReportesPage from "./pages/ReportesPage";
import ProcesoPage from "./pages/ProcesoPage";
import OpcionesPage from "./pages/OpcionesPage";
import SolicitudesPage from "./pages/solicitudes/SolicitudesPage";
import DetalleSolicitudesPage from "./pages/solicitudes/DetalleSolicitudesPage";
import NuevaSolicitudPage from "./pages/solicitudes/NuevaSolicitudPage";
import MantenimientoPage from "./pages/MantenimientoPage";
import UsuariosPage from "./pages/UsuariosPage";
import ExamenesPage from "./pages/examen-ubicacion/ExamenesPage";
import SolicitudesExamenPage from "./pages/examen-ubicacion/SolicitudesExamenPage";
import ProspectosExamenPage from "./pages/examen-ubicacion/ProspectosExamenPage";

function App() 
{
    const { auth } = useStateContext()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='*' element={<ErrorPage />} />
                    <Route element={<PrivateRoutes auth={auth}/>}>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<DashboardPage/>} />
                            {/** Certificados */}
                            <Route path='/certificados' element={<CertificadosPage />} />
                            <Route path='/reportes' element={<ReportesPage />} />
                            <Route path='/proceso' element={<ProcesoPage />} />
                            {/** Examen de Ubicación */}
                            <Route path='/examenes' element={<ExamenesPage />} />
                            <Route path='/examenes/solicitudes' element={<SolicitudesExamenPage />} />
                            <Route path='/examenes/prospectos' element={<ProspectosExamenPage />} />
                            {/** Opciones */}
                            <Route path='/opciones' element={<OpcionesPage />} />
                            <Route path='/solicitudes' element={<SolicitudesPage />} />
                            <Route path='/solicitudes/:id' element={<DetalleSolicitudesPage />} />
                            <Route path='/solicitud-nueva' element={<NuevaSolicitudPage />} />
                            <Route path='/mantenimiento' element={<MantenimientoPage />} />
                            <Route path='/usuarios' element={<UsuariosPage />} />
                            <Route path='*' element={<ErrorPage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
