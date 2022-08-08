import Dialog from "../dialog"

export function bookDialog(props) {
    const {
        show,
        setShow,
        data
    } = props

    return <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.addDate}</p>
        <p>{data.conclusionDate}</p>
        <p>{data.rating}</p>
        <p>{data.status}</p>
    </Dialog>
}