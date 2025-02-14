import React from 'react'
import '../styles/categories.css'
export function Categories(props) {

    const categories = [
        {category:"Men's clothing",id:1},
        {category:"Jewelery", id: 2},
        {category:"Electronics", id:3},
        {category:"Women's clothing",id:4},
        {category:"Makeup",id:5},
        {category:"Skincare",id:6},
        {category:"Decoration",id:7}
    ]
    return (
        <div className='main-container'>
            <h5 className='categories-header'>-MAIN CATEGORIES-</h5>
            <div className='categories-container'>{
                categories.map((item)=>(
                <div key={item.id} >
                    <button className='category' onClick={categories.filter(element => element == item.category )}>{item.category}</button>
                </div>
                ))}
            </div>
        </div>

    )
}
