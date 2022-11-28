
import {styled} from '@mui/material/styles'


const STYLED_DRAWER_CONTENT_WRAPPER = styled('div')(

    ({theme}) => `
    
        width: 300px;
        height:100vh;
         
        background-color: ${theme.palette.background.default};
        border-right: 0.4rem inset ${theme.palette.primary.light};

     }

    `

)

export {STYLED_DRAWER_CONTENT_WRAPPER}