import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../../components/navbar'
import { getAllBooks } from '../../services/bookApi'
import Book from '../../components/book'
import { HomeContainer, ContentPanel, Header } from './styled'

import { ReactComponent as AllIcon } from '../../assets/icons/all_itens.svg'
import { ReactComponent as ReadIcon } from '../../assets/icons/done.svg'
import { ReactComponent as PlanToReadIcon } from '../../assets/icons/plan_to_read.svg'
import { ReactComponent as RatedIcon } from '../../assets/icons/rated.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'
import { ReactComponent as Usericon } from '../../assets/icons/user.svg'

const Home = () => {
    const [allowUpdate, setAllowUpdate] = useState(true)
    const { filter } = useParams();

    let titleArray = {
        all: { title: "All my books", icon: <AllIcon/> },
        read: { title: "Read", icon: <ReadIcon/> },
        reading: { title: "", icon: <ReadIcon/> },
        planToRead: { title: "", icon: <PlanToReadIcon/> },
        rated: { title: "", icon: <RatedIcon/> }
    }

    const loadBooks = () => {
        let bookList = []
        
        if (allowUpdate) {
            getAllBooks(localStorage.getItem('userId'))
            .then(response => {
                console.log('response.data', response.data)
                
                bookList = response.data

                setAllowUpdate(false)
                console.log('bookList', bookList)
            })
        }

        return(
            <div> 
                <h1>Books</h1>
                { bookList.map( bookData => <Book data={bookData}/>) }
            </div>
        );
    }

    const handleTitle = () => {
        return <div>
            {titleArray.all.icon}
            <p> {titleArray.all.title} </p>
        </div>
    }

    return <HomeContainer>
        <Navbar/>
        <ContentPanel>
            <Header>
                {handleTitle()}

                <div>
                    <button> <SearchIcon/> </button>
                    <button> <AddIcon/> </button>
                    <button> <Usericon/> </button>
                </div>
            </Header>

            { loadBooks() }
        </ContentPanel>
    </HomeContainer>
}

export default Home