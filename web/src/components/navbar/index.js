

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container } from "./styled"

import { ReactComponent as AllIcon } from '../../assets/icons/all_itens.svg'
import { ReactComponent as ReadIcon } from '../../assets/icons/done.svg'
import { ReactComponent as PlanToReadIcon } from '../../assets/icons/plan_to_read.svg'
import { ReactComponent as RatedIcon } from '../../assets/icons/rated.svg'
import { ReactComponent as DisconnectIcon } from '../../assets/icons/disconnect.svg'

const Navbar = () => {
    const [filter, setFilter] = useState('all')
    const navigate = useNavigate();

    const disconnect = () => {
        localStorage.clear()
        navigate('/')
    }
    
    return <Container>
        <h3>MY<br/>PERSONAL<br/>LIBRARY</h3>

        <div>
            <p>Filters</p>
            <ul>
                <li> 
                    <button onClick={() => setFilter('all')}>
                        <AllIcon/> All
                    </button>
                </li>
                <li> 
                    <button onClick={() => setFilter('read')}>
                        <ReadIcon/> Read
                    </button>
                </li>
                <li> 
                    <button onClick={() => setFilter('planToRead')}>
                        <PlanToReadIcon/> Plan to read
                    </button>
                </li>
                <li> 
                    <button onClick={() => setFilter('rated')}>
                        <RatedIcon/> Rated
                    </button>
                </li>
            </ul>
        </div>

        <button onClick={() => disconnect()}>
            <DisconnectIcon/> Disconnect
        </button>
    </Container>
}

export default Navbar;