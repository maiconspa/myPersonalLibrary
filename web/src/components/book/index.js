import { useState } from 'react'

import Dialog from '../dialog'
import { BookContainer } from './styled'

const Book = ({data}) => {
    const [show, setShow] = useState(false)
    
    console.log('bookData', data)

    return <>
        <BookContainer>
            sdhuoaijbksdhoiapdjsja
        </BookContainer>
        <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        </Dialog>
    </>
    
}

export default Book