import responsiveSpacing from "utils/responsive-spacing/responsive-spacing"

const wrapper_css = {

    ...responsiveSpacing.sxProp('marginTop', 1),
    textAlign:'center', 
    display: 'flex',
    flexDirection: 'column',
    ...responsiveSpacing.sxProp('gap', 0.2),
    alignItems: 'center', 
    justifyContent: 'center'
}

const icon_css = {
    ...responsiveSpacing.sxProp('fontSize', 6),
     color:'brand.t1.v3'
}


export {wrapper_css, icon_css}