// mui components
import { Box, Button } from '@mui/material'

// styled components
import { STYLED_CALL_TO_ACTION_SECTION, STYLED_SVG_LANDING_PAGE_ILLUSTRATION} from './style.js'


// hook
import {useTheme} from '@mui/material';


// mui color
import { blueGrey, pink, teal } from '@mui/material/colors'


import STYLED_LINK from 'styles/styled-components/router-link/router-link.js';
import useAuthContext from 'hook/context/use-auth-context.js';




// ✅ functional l component
export default function LANDING() {

  const {user} = useAuthContext()

  const theme = useTheme()


  return (

    <>


      <STYLED_CALL_TO_ACTION_SECTION>


        <div className='left'>

          <h2 className='_text_margin _font_yatra'>Buy and Sell Vehicle in a minute!</h2>

          <h5 className='_text_margin_2xl _font_monospace'>Fed up with the process of buying or selling used vehicles? Want a easier process? Your wait is over. You can buy or sell vehicle safely with our platform.  </h5>



          {!user &&

            <STYLED_LINK to='/signup'>
              <Button variant='contained'>Register Now</Button>
            </STYLED_LINK>
          
          }


        </div>


        <div className='right'>


          {theme.palette.mode === 'dark' ?

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[100]} secondColor={blueGrey[700]} thirdColor={pink[400]} fourthColor={blueGrey[100]} fifthColor={blueGrey[500]} />
            :

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[300]} secondColor={blueGrey[900]} thirdColor={pink[400]} fourthColor={blueGrey[300]} fifthColor={blueGrey[800]}/>
          }


        </div>



      </STYLED_CALL_TO_ACTION_SECTION>




    </>

  )
}