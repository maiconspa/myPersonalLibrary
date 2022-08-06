import React from 'react'
import Button from '../../components/button'

import { LPContainer, LPTextContainer, LPActionButtons } from './styled'

const LandingPage = () => <>

    <LPContainer>
        <LPActionButtons>
            <Button text="SIGN IN" secondary padding="5px 15px"/>
            <Button text="SIGN UP"/>
        </LPActionButtons>
        
        <LPTextContainer>
            <h1>Welcome to</h1>
            <h1>My Personal Library</h1>
            <h3>Make yourself at home!</h3>
        </LPTextContainer>
    </LPContainer>
</>

export default LandingPage