/* Suppose, we want modify the fontSize of the 'h1' or 'body1' Even if we just want to change the fontSize and keep the default values of other properties, we need to define every other properties like fontHeight, fontFamily. etc too otherwise those properties' default style will not be applied! */



  
export function responsiveTypography () {

    
    return {

        // don't know what is the htmlFontSize, so just copying the value of 16 from the default theme and pasting it.
        htmlFontSize: 16,
        fontFamily: 'Poppins, sans-serif',
        fontSize: 'clamp(1rem, 0.963rem + 0.2vw, 1.188rem)',
        fontWeightLight:300,
        fontWeightRegular:400, 
        fontWeightMedium:500,
        fontWeightBold:600,

        // there was a property called 'pxToREM' in the default theme but can't have that here as that's property's value is little bit confusing to me!


        h1:{
            /* console.log(clampBuilder(300, 1800, 35, 39)) */
            fontSize: 'clamp(2.188rem, 2.138rem + 0.27vw, 2.438rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            lineHeight:1.1, 
            letterSpacing: '0.004em'
        },

        h2:{
            // console.log(clampBuilder(300, 1800, 29, 32.5))
            fontSize: 'clamp(1.813rem, 1.769rem + 0.23vw, 2.031rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            lineHeight:1.2, 
            letterSpacing: '0.005em'
        },

        h3:{
            // console.log(clampBuilder(300, 1800, 24, 27))
            fontSize: 'clamp(1.5rem, 1.462rem + 0.2vw, 1.688rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            lineHeight:1.167, 
            letterSpacing: '0.005em'
        },

        h4:{
            // console.log(clampBuilder(300, 1800, 20, 23))
            fontSize: 'clamp(1.25rem, 1.212rem + 0.2vw, 1.438rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            lineHeight:1.3, 
            letterSpacing: '0.005em'
        },

        body1:{
            // console.log(clampBuilder(300, 1800, 16, 19))
            fontSize: 'clamp(1rem, 0.963rem + 0.2vw, 1.188rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            lineHeight:1.5, 
            letterSpacing: '0.001em'
        },


        h5:{
            // console.log(clampBuilder(300, 1800, 14, 16))
            fontSize: 'clamp(0.875rem, 0.85rem + 0.13vw, 1rem)',
            fontFamily: 'Poppins, sans-serif',
    
            fontWeight: 400,
            lineHeight:1.52, 
            letterSpacing: '0.002.5em'
        },

        h6:{
            // console.log(clampBuilder(300, 1800, 12, 14))
            fontSize: 'clamp(0.75rem, 0.725rem + 0.13vw, 0.875rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            lineHeight:1.55, 
            letterSpacing: '0.003em'
        },


        
        button:{

            // console.log(clampBuilder(300, 1800, 14, 16))
            fontSize: 'clamp(0.875rem, 0.85rem + 0.13vw, 1rem)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            lineHeight:1.5, 
            letterSpacing: '0.002em',
            textTransform: 'uppercase'
        },



    }

}

  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  

  
  
  
  
  
  

   
  
  
  
   
  
  
  
  
  
  

