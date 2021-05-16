import React, { useState } from "react";
import Search from "./components/Search/Search";
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Result from "./components/Result/Result";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

const App = () => {

  const [maxResults, setMaxResults] = useState(10)
    const [startIndex, setStartIndex] = useState(1)
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [cards, setCards] = useState([])


  const getURL = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`)
    .then(response => {
        if(startIndex >= response.data.totalItems || startIndex < 1){
            toast.error(`max results must be between 1 and ${response.data.totalItems}`)
        } else{
            if(response.data.items.length > 0){
                setCards(response.data.items)
                setLoading(false)
                toast.success(`${response.data.items.length} books`)
                setQuery("")
                console.log(response.data.items)
                
            }
        }
        
    })
    .catch(error => {
        setLoading(true)
        toast.error(error,`Error`)
    })
}

  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        <div className="filter"></div>
        <h1 className="display-2 text-center text-white mb-3" style={{zIndex:2}}>
          UCT BOOKS
        </h1>
        <div style={{width: "60%", zIndex:3}}>
        <Search
        maxResults={maxResults}
        setMaxResults={setMaxResults}
        startIndex={startIndex}
        getURL={getURL}
        query={query}
        loading={loading}
        cards={cards}
        setCards={setCards}
        setStartIndex={setStartIndex}
        setQuery={setQuery}
        setLoading={setLoading}
        />
        </div>
      </div>
    )
  }

  return (
    <div>
       {mainHeader()}
       <Result loading={loading} cards={cards}/>
    </div>
  );
};

export default App;
