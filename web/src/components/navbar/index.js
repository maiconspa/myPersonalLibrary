

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Container } from "./styled"

import { ReactComponent as AllIcon } from '../../assets/icons/all_itens.svg'
import { ReactComponent as ReadIcon } from '../../assets/icons/done.svg'
import { ReactComponent as PlanToReadIcon } from '../../assets/icons/plan_to_read.svg'
import { ReactComponent as RatedIcon } from '../../assets/icons/rated.svg'
import { ReactComponent as DisconnectIcon } from '../../assets/icons/disconnect.svg'

const Navbar = () => {
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
                    <Link to="/home/all">
                        <AllIcon/> All
                    </Link>
                </li>
                <li> 
                    <Link to="/home/read">
                        <ReadIcon/> Read
                    </Link>
                </li>
                <li> 
                    <Link to="/home/reading">
                        <ReadIcon/> Reading
                    </Link>
                </li>
                <li> 
                    <Link to="/home/planToRead">
                        <PlanToReadIcon/> Plan to read
                    </Link>
                </li>
                <li> 
                    <Link to="/home/rated">
                        <RatedIcon/> Rated
                    </Link>
                </li>
            </ul>
        </div>

        <button onClick={() => disconnect()}>
            <DisconnectIcon/> Disconnect
        </button>
    </Container>
}

export default Navbar;