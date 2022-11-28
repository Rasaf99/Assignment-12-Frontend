import { styled } from '@mui/material/styles';


import SVG_LANDING_PAGE_ILLUSTRATION from './illustration/svg-landing-page-illustration';

import responsiveSpacing from 'utils/responsive-spacing/responsive-spacing';





const STYLED_CALL_TO_ACTION_SECTION = styled('div')(

  ({ theme }) => `


    background-color: ${theme.palette.mode === 'dark' ? theme.palette.background.variation : theme.palette.primary.static_variant.light_1};

    box-shadow:10;

    ${responsiveSpacing.styledComponent.cssSyntax('padding', 2)};
    


    ${/* grid & text-align */ ''}
    display:grid;
    justify-items: center;
    align-items:center;

    ${responsiveSpacing.styledComponent.cssSyntax('gap', 2)}

    text-align:center;


    @media screen and (min-width: ${theme.breakpoints.values.md}px) {

      grid-template-columns: 1fr 1fr;

      text-align:left;
   }

  





   ${/* child element - width */ ''}

   >.right, .left {

    max-width: 18rem;
   }


   @media screen and (min-width: ${theme.breakpoints.values.sm}px) {

    >.right, .left {

      max-width: 26rem;
     }


    @media screen and (min-width: ${theme.breakpoints.values.lg}px) {

    >.right, .left {

      max-width: 30rem;
  }
  
 }



  ${/* child element - left section */ ''}


  `

)


const STYLED_SVG_LANDING_PAGE_ILLUSTRATION = styled(SVG_LANDING_PAGE_ILLUSTRATION)(

  ({ theme }) => `
  
  width: 15rem;
  height: 15rem;

  @media screen and (min-width: ${theme.breakpoints.values.sm}px) {

    width: 18rem;
    height: 18rem;

  }


  @media screen and (min-width: ${theme.breakpoints.values.md}px) {

    width: 20rem;
    height: 20rem;

  }


  @media screen and (min-width: ${theme.breakpoints.values.lg}px) {

    width: 22rem;
    height: 22rem;

  }

  `
)










export { STYLED_CALL_TO_ACTION_SECTION, STYLED_SVG_LANDING_PAGE_ILLUSTRATION }
