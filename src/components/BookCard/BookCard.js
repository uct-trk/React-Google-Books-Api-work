import React, { useState } from 'react'
import { Button, Card, CardBody, CardImg, CardTitle, Modal } from 'reactstrap'


const BookCard = ({
    thumbnail,
    title,
    pageCount,
    language,
    authors,
    publisher,
    previewLink,
    infoLink,
    description,

}) => {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        
        <Card style={{ width: "233px" }} className="mt-3">
            <CardImg top style={{ width: "100%", height: "233px" }} src={thumbnail} alt="card image" />
            <CardBody>
                <CardTitle className="card-title">{title}</CardTitle>
                <Button onClick={toggle}>More Info</Button>
            </CardBody>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-header d-flex justify-content-center">
                    <h5 className="modal-title text-center" id="exampleModalLabel">{title}</h5>
                    <button aria-label="close" className="close" type="button" onClick={toggle}>
                        <span aria-hidden={true}>X</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="d-flex justify-content-between ms-3">
                        <img src={thumbnail} alt={title} style={{ height: "233px" }} />
                        <div>
                            <p>Page Count: {pageCount}</p>
                            <p>Language: {language}</p>
                            <p>Authors: {authors}</p>
                            <p>Publisher: {publisher}</p>
                        </div>
                    </div>
                    <div className="mt-3">{description}</div>
                </div>
                <div className="modal-footer">
                    <div className="left-slide">
                        <a href={previewLink} className="btn-link" color="default" type="button" target="_blank" rel="noopener noreferrer">Preview Link</a>
                    </div>
                    <div className="divider"></div>
                    <div className="right-slide">
                        <a href={infoLink} className="btn-link" color="default" type="button" target="_blank" rel="noopener noreferrer">Info Link</a>
                    </div>
                </div>
            </Modal>
        </Card>
    )
}

export default BookCard
