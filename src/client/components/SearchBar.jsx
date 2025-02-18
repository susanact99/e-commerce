import React from 'react'

export function SearchBar({setSearchBar,searchBar, setSearchTerm}) {
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
    }

    return (
        <section className="search-bar-container">
                    <i
                        className="bi bi-search search-display-button"
                        onClick={() => setSearchBar(!searchBar)}
                    ></i>
                    <div className={`search-bar ${searchBar ? "show" : ""}`}>
                        <input 
                             type="text" 
                             placeholder="Search..." 
                             onChange={handleChange}
                             />
                             
                        <button className="search-button"><i className="bi bi-search"></i></button>
                    </div>
        </section>
    )
}
