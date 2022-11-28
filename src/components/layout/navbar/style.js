import { Button } from '@mui/material'
import {styled} from '@mui/material/styles'


const STYLED_NAVBAR = styled('nav')(

    ({theme}) => `

        background-color: ${theme.palette.mode === 'dark' ? theme.palette.background.variation : theme.palette.primary.main};
        
        color: ${theme.palette.text.static_variant.light_primary};
    
        padding:1rem;
        padding-right:2rem;

        display:flex;
        align-items:center;
        justify-content:space-between;

    `
)




export {STYLED_NAVBAR}