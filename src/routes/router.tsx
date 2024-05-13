import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./ErrorPage"
import Layout from "./Layout"
import LoginPage from "../pages/LoginPage"
import PrivateRoutes from "./PrivateRoutes"
import DashboardPage from "../pages/DashboardPage"
import CertificadosPage from "../pages/CertificadosPage"
import ReportesPage from "../pages/ReportesPage"
import ProcesoPage from "../pages/ProcesoPage"
import OpcionesPage from "../pages/OpcionesPage"
import NuevaSolicitudPage from "../pages/solicitudes/NuevaSolicitudPage"
import SolicitudesPage from "../pages/solicitudes/SolicitudesPage"
import DetalleSolicitudesPage from "../pages/solicitudes/DetalleSolicitudesPage"
import ManteniminetoPage from "../pages/MantenimientoPage"
import UsuariosPage from "../pages/UsuariosPage"

const router = createBrowserRouter([
    {
        path: "/login", 
        element: <LoginPage /> ,
        errorElement:<ErrorPage />,
    },
    {
        element: <PrivateRoutes auth={true} />,
        children:[
            {
                path: "/",
                element:<Layout />,
                children:[
                    {
                        path: "/",
                        element: <DashboardPage />
                    },
                    {
                        path: "/certificados",
                        element:<CertificadosPage />
                    },
                    {
                        path: "/reportes",
                        element:<ReportesPage />
                    },
                    {
                        path: "/proceso",
                        element:<ProcesoPage />
                    },
                    {
                        path: "/opciones",
                        element:<OpcionesPage />
                    },
                    {
                        path: "/solicitudes",
                        element: <SolicitudesPage />
                    },
                    {
                        path: "/solicitudes/:id",
                        element: <DetalleSolicitudesPage />
                    },
                    {
                        path: "/solicitud-nueva",
                        element:<NuevaSolicitudPage />
                    },
                    {
                        path: "/mantenimiento",
                        element:<ManteniminetoPage />
                    },
                    {
                        path: "/usuarios",
                        element:<UsuariosPage />
                    },
                    {
                        path : "*",
                        element: <ErrorPage />
                    }
                ]
            }
        ]
    }
])

export default router
