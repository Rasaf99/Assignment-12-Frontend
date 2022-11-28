import { useContext } from 'react'

import { themeSwitchContext } from 'styles/mui-theme/mui-theme'

export default function useMuiTheme() {

    const { switchTheme, darkMode } = useContext(themeSwitchContext)

    return {
        switchTheme, darkMode
    }
}







/* ✨ Way to use ✨

import useMuiTheme from 'hooks/useMuiTheme'

export default function (){

    const {darkMode, switchTheme} = useMuiTheme()

    return(

        ...

    )

}

*/



/* 🔖 When you want to switchTheme, use this hook. But when you need darkMode(theme state), using this hook may have lack of performance. There is a dedicated hook from MUI for this purpose. 'useTheme' hook. Use that.


Example:

import { useTheme } from '@mui/material'

export default function (){

    const theme = useTheme()

    return(

            {theme.palette.mode === 'dark' ?

                ...


             }

    )

}

*/