import { InputGroup, InputGroupAddon, Button, Input, FormGroup, Label } from 'reactstrap'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const Search = ({
    maxResults,
    setMaxResults,
    startIndex,
    setStartIndex,
    query,
    setQuery,
    loading,
    setLoading,
    cards,
    setCards,
    getURL,
}) => {


    const notify = () => toast("Wooooow");

    const handleSearch = (e) => { setQuery(e.target.value) }
    const handleMaxResult = (e) => { setMaxResults(e.target.value) }
    const handleStartIndex = (e) => { setStartIndex(e.target.value) }

    const handleSubmit = () => {
        setLoading(true)
        if (maxResults > 40 || maxResults < 1) {
            toast.error("max results must be 1 between 40")
        } else {
            getURL()
        }
    }


    return (
        <>
            <InputGroup size="lg" className="d-flex align-items-center">
                <Input
                    placeholder="Book Search"
                    value={query}
                    onChange={handleSearch} />
                <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={handleSubmit}>
                        <i className="fas fa-search outline-0 border-0" style={{ padding: "7px" }}></i>
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            <div className="d-flex text-white justify-content-center mt-3">
                <FormGroup className="ms-5">
                    <Label for="maxResults" className="ms-5">Max Result</Label>
                    <Input
                        type="number"
                        id="maxResults"
                        placeholder="Max Result"
                        onChange={handleMaxResult}
                        value={maxResults} />
                </FormGroup>
                <FormGroup className="ms-5">
                    <Label for="startIndex" className="ms-5">Start Index</Label>
                    <Input
                        type="number"
                        id="startIndex"
                        placeholder="startIndex"
                        value={startIndex}
                        onChange={handleStartIndex} />
                </FormGroup>
                
                <ToastContainer />


            </div>

        </>
    )
}

export default Search
