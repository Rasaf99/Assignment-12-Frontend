import {styled} from '@mui/material/styles'


const STYLED_JSX_WRAPPER = styled('div')(

    ({theme}) => `
    
        padding: 1rem; 

        display: flex;
        flex-direction:column;
        gap: 1rem; 


        >* >.a_content {
            
            padding:1rem;
            color:${theme.palette.text.primary};

            text-align:center;

            :hover {
                background-color:${theme.palette.background.variation_2};
                color: ${theme.palette.primary.main};
                box-shadow: 0px 0px 1px 0px;
                border-radius: 1rem;
                cursor: pointer;
            }
        }
        
    `

)

export {STYLED_JSX_WRAPPER}