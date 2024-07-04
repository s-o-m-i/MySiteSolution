import { Box } from '@mui/material'
import NotificationPopperComponent from 'components/layouts/topbar/NotificationPopper'
import CTAButton from 'components/shared/CTAButton/CTAButton'
import React from 'react'
import WPLaboursFilter from './WPLaboursFilter/WPLaboursFilter'
import WPSubContTable from '../WPackSubContractors/WPSubContTable/WPSubContTable'
import WPLaboursTable from './WPLaboursTable/WPLaboursTable'
import InviteLabour from './InviteLabour/InviteLabour'

const WPackLabours = () => {
    const [showUsers,setShowUsers] = React.useState(false)
  return (
    <>
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
<WPLaboursFilter/>
<Box display={'flex'} alignItems={'center'} gap={'10px'}> 
<CTAButton background='#FFFFFF26' text='Delete' border='1px solid #0079FF'/>
<InviteLabour/>
</Box>
    </Box>
    <Box mt={'20px'}>
    <WPLaboursTable/>

    </Box>
    </>


  )
}

export default WPackLabours