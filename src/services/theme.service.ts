import { PaletteOptions, createTheme } from '@mui/material/styles'
import { cyan, grey, lightBlue } from '@mui/material/colors'
import { esES } from '@mui/x-data-grid/locales';
import { esES as coreEsES } from '@mui/material/locale'

const theme = createTheme(
{
    palette:{
        primary: {
            main: lightBlue[600],
            light: lightBlue[100],
            dark: lightBlue[800],
        },
        secondary: {
            main: cyan[400],
            light: cyan[100],
            dark: cyan[800]
        },
        background: {
            default: grey[50],
        },
        text:{
            primary: '#607489'
        }

    } as PaletteOptions,
},
    esES,
    coreEsES
)

export default theme