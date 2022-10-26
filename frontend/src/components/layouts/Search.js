import React, { useState } from 'react'

const Search = ({ history }) => {

    const [keyword, setKeyword] = useState('');

    const searchHandler = (e) => {
        e.preventDefault()

        if(keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }

    return (
        <form onSubmit={searchHandler} className="d-flex ms-auto" role="search">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <input
                    onChange={(e) => setKeyword(e.target.value)} 
                    className="form-control me-2"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                    style={{ width: "400px", borderColor: "#111" }}
                />
                <button className="btn-56" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </form>
    )
}

export default Search
