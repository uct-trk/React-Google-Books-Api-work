import React from 'react'
import { Spinner } from 'reactstrap'
import BookCard from '../BookCard/BookCard'

const Result = ({cards, loading}) => {

    console.log(cards)
    const items = cards.map((item, i) => {
        let thumbnail = "";
        if(item.volumeInfo.imageLinks){
            thumbnail = item.volumeInfo.imageLinks.thumbnail
        }

        return (
            
            <div className="col-4" key={item.id}>
                <BookCard 
                    thumbnail={thumbnail}
                    title={item.volumeInfo.title}
                    pageCount={item.volumeInfo.pageCount}
                    language={item.volumeInfo.language}
                    authors={item.volumeInfo.authors}
                    publisher={item.volumeInfo.publisher}
                    previewLink={item.volumeInfo.previewLink}
                    infoLink={item.volumeInfo.infoLink}
                    description={item.volumeInfo.description}/>
            </div>
           
        )
    })

    const handleCards = () => {
        if(loading){
            <div className="d-flex justify-content-center mt-3">
                <Spinner style={{width:"3rem", height:"3rem"}}/>
            </div>
        } else {
            return(
                <div className="container">
                    <div className="row">{items}</div>
                </div>
            )
        }
    }

    return (
        <div>
            {handleCards()}
        </div>
    )
}

export default Result
