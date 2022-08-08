import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Container, ListItem } from "./styled"

import { ReactComponent as AllIcon } from '../../assets/icons/all_itens.svg'
import { ReactComponent as ReadIcon } from '../../assets/icons/done.svg'
import { ReactComponent as PlanToReadIcon } from '../../assets/icons/plan_to_read.svg'
import { ReactComponent as RatedIcon } from '../../assets/icons/rated.svg'
import { ReactComponent as DisconnectIcon } from '../../assets/icons/disconnect.svg'

const Navbar = () => {
    const navigate = useNavigate();
    const { filter } = useParams()

    const disconnect = () => {
        localStorage.clear()
        navigate('/')
    }
    
    return <Container>
        <h2>MY<br/>PERSONAL<br/>LIBRARY</h2>

        <div>
            <p>Filters</p>
            <ul>
                <ListItem active={filter === "all"}> 
                    <Link to="/home/all">
                        <AllIcon/> All
                    </Link>
                </ListItem>
                <ListItem active={filter === "read"}> 
                    <Link to="/home/read">
                        <ReadIcon/> Read
                    </Link>
                </ListItem>
                <ListItem active={filter === "reading"}> 
                    <Link to="/home/reading">
                        <ReadIcon/> Reading
                    </Link>
                </ListItem>
                <ListItem active={filter === "planToRead"}> 
                    <Link to="/home/planToRead">
                        <PlanToReadIcon/> Plan to read
                    </Link>
                </ListItem>
                <ListItem active={filter === "rated"}> 
                    <Link to="/home/rated">
                        <RatedIcon/> Rated
                    </Link>
                </ListItem>
            </ul>
        </div>

        <button onClick={() => disconnect()}>
            <DisconnectIcon/> Disconnect
        </button>
    </Container>
}

export default Navbar;