

const min_width = {

    xs: '0px',
    sm: '640px',
    md: '960px',
    lg: '1280px',
    xl: '1600px'

}



const media_queries = {

    // ✨
    name_xs_sm: function(property_name, xs_value, sm_value) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value};
        }
       `
    },


    // ✨
    name_xs_sm_unit: function(property_name, xs_value, sm_value, unit) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value}${unit};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value}${unit}; 
        }
    `
    },


    // ✨
    name_xs_sm_md: function(property_name, xs_value, sm_value, md_value) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value};
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value};
        }
        `
    },


    // ✨
    name_xs_sm_md_unit: function(property_name, xs_value, sm_value, md_value, unit) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value}${unit};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value}${unit}; 
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value}${unit}; 
        }
       `
    },


    // ✨
    name_xs_sm_md_lg: function(property_name, xs_value, sm_value, md_value, lg_value) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value};
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value};
        }

        @media (min-width: ${min_width.lg}) {
            ${property_name}:${lg_value};
        }
        `
    },



    // ✨
    name_xs_sm_md_lg_unit: function(property_name, xs_value, sm_value, md_value, lg_value, unit) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value}${unit};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value}${unit}; 
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value}${unit}; 
        }

        @media (min-width: ${min_width.lg}) {
            ${property_name}:${lg_value}${unit}; 
        }
        `
    },


    // ✨
    name_xs_sm_md_lg_xl: function(property_name, xs_value, sm_value, md_value, lg_value, xl_value) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value};
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value};
        }

        @media (min-width: ${min_width.lg}) {
            ${property_name}:${lg_value};
        }

        @media (min-width: ${min_width.xl}) {
            ${property_name}:${xl_value};
        }
        `
    },



    // ✨
    name_xs_sm_md_lg_xl_unit: function(property_name, xs_value, sm_value, md_value, lg_value, xl_value, unit) {

        return `
        @media (min-width: ${min_width.xs}) {
            ${property_name}:${xs_value}${unit};
        }

        @media (min-width: ${min_width.sm}) {
            ${property_name}:${sm_value}${unit}; 
        }

        @media (min-width: ${min_width.md}) {
            ${property_name}:${md_value}${unit}; 
        }

        @media (min-width: ${min_width.lg}) {
            ${property_name}:${lg_value}${unit}; 
        }

        @media (min-width: ${min_width.xl}) {
            ${property_name}:${xl_value}${unit}; 
        }
        `
    }
}


export default media_queries;