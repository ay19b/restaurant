import React from 'react'
import {Typography} from '@material-ui/core'
import './staff.css'

function Staff(){
    return(
       <div className="staff">
           <div class="disc-staff">
             <Typography variant='h5'>Now Booking</Typography>
             <Typography variant='h4'>Private Dinners & Happy Hours</Typography>
           </div>
      </div>
    )
}
export default Staff;