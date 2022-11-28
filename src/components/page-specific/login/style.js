import { styled } from '@mui/material/styles'
import media_queries from 'utils/media-queries/media-queries'


const STYLED_JSX_WRAPPER = styled('div')(

  ({ theme }) => `

      margin-top:2rem;
      

      display:grid;
      justify-content: center;
      justify-items:center;
    
    `
)



const STYLED_FORM = styled('div')(

  ({ theme }) => `

    margin-top:2rem;
    margin-bottom:2rem;


    ${media_queries.name_xs_sm_md_lg_unit('width', 18, 20, 22, 24, 'rem')};

    ${/*when the width is increasing 2, we need to increase the padding the padding 1 because padding has right and left. */ ''}
    ${media_queries.name_xs_sm_md_lg_unit('padding-right', 1, 2, 3, 4, 'rem')}
    ${media_queries.name_xs_sm_md_lg_unit('padding-left', 1, 2, 3, 4, 'rem')}

    padding-top:1rem;
    padding-bottom:1rem;
    
    
    

    background-color: ${theme.palette.background.variation};

    box-shadow: 5px 5px 2px 0px;

    border-radius: 1rem;


    ${/*🔖 Button's size is getting changed while toggling the email form if we use display:'grid' instead of display:'flex' & flex-direction:'column' */''}
    display: flex;
    flex-direction:column;
    justify-content: center;  
    align-items:center;
    gap: 1.2rem; 

    text-align:center;


    >.form_title{
      margin-top:2rem;
      margin-bottom:1rem;

      font-family: 'Source Code Pro', monospace;
      color: ${theme.palette.primary.light};
    }


    >.not_a_member{

      display:flex;
      justify-content:center;
      gap:0.5rem;

    }

    >.not_a_member >* >.sign_up_link {

      color:${theme.palette.primary.main};

      :hover {
          color:${theme.palette.primary.dark};
      }

    }

  `
)







export { STYLED_JSX_WRAPPER, STYLED_FORM }