import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Navbar from '../../components/navbar'
import { getAllBooks } from '../../services/bookApi'
import Book from '../../components/book'
import { HomeContainer, ContentPanel, Header, BookOrganizer, HomeTitle } from './styled'

import { ReactComponent as AllIcon } from '../../assets/icons/all_itens.svg'
import { ReactComponent as ReadIcon } from '../../assets/icons/done.svg'
import { ReactComponent as PlanToReadIcon } from '../../assets/icons/plan_to_read.svg'
import { ReactComponent as RatedIcon } from '../../assets/icons/rated.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/add.svg'
import { ReactComponent as Usericon } from '../../assets/icons/user.svg'
import { ReactComponent as Shelf } from '../../assets/Shelf.svg'
import { addbookDialog } from './dialog'

const Home = () => {
    const [show, setShow] = useState(false)
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const { filter } = useParams()

    let titleArray = {
        all: { title: "All my books", icon: <AllIcon/> },
        read: { title: "Read", icon: <ReadIcon/> },
        reading: { title: "Reading", icon: <ReadIcon/> },
        planToRead: { title: "Plan to read", icon: <PlanToReadIcon/> },
        rated: { title: "Rated", icon: <RatedIcon/> }
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId")

        if (userId) {
            getAllBooks(localStorage.getItem("userId"))
                .then(response => setBooks(response.data))
        } else {
            navigate('/')
        }
    }, [])

    const handleTitle = () => {
        return <HomeTitle>
            {titleArray[String(filter)].icon}
            <h2> {titleArray[String(filter)].title} </h2>
        </HomeTitle>
    }

    const renderBooks = () => {
        let shelfQuantity = Math.ceil(books.length/6)
        let shelfArray = Array(shelfQuantity)

        for (let i = 0; i<shelfQuantity; i++) {
            shelfArray[i] = []
            books.map(bookData => {
                shelfArray[i].push(<Book data={bookData} key={bookData._id}/>)
            })
        }

        return shelfArray.map(organizedBooks => 
            <>
                <BookOrganizer>
                    {organizedBooks}
                </BookOrganizer>
                <Shelf/>
            </>)
    }

    return <>
        <HomeContainer>
            <Navbar/>
            <ContentPanel>
                <Header>
                    {handleTitle()}

                    <div>
                        <button> <SearchIcon/> </button>
                        <button onClick={() => setShow(true)}> <AddIcon/> </button>
                        <button> <Usericon/> </button>
                    </div>
                </Header>

                {
                    books
                        && renderBooks()
                        || <div>loading...</div>
                }

            </ContentPanel>
        </HomeContainer>

        {addbookDialog(show, setShow)}
    </>
}

export default Home