import { useState } from 'react'

import { bookDialog } from './dialog'
import { BookContainer } from './styled'

const Book = ({data}) => {
    const [show, setShow] = useState(false)
    
    return <>
        <BookContainer onClick={() => setShow(true)}>
            <p>{data.title}</p>
        </BookContainer>

        {bookDialog({show, setShow, data})}
    </>
}

export default Book