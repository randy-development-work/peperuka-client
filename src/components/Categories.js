import React, { Fragment, useState, useEffect } from 'react';
import './Categories.css';
import EachCategory from './EachCategory';
import { useCategories } from '../library';
import { Card, Col, Row } from 'antd';

function Categories() {
    const categories = useCategories();
    // const [categories, setCategories] = useState([])

    // useEffect(() => {
    //     fetch("https://peperuka-server.onrender.com/categories")
    //     .then((resp) => resp.json())
    //     .then((json) => setCategories(json))
    //     .catch((error) => console.log(error))
    // })
    // console.log(categories);


    let onecategory = categories.map((category) => {
        return (          
                <EachCategory 
                    key={category.id} 
                    category={category}                    
                />            
        )
    })
    return (
        <div className='cards'>
            <h2 style = {{fontFamily: "'Eczar', serif"}}>Pick a Category</h2>
        {/* <div className="ui three column grid container" style={{
                            
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center' 
            }}>
            <div className="cat_item row">
                {onecategory}
            </div>
            
        </div> */}

        <Row gutter={12}>
            {onecategory}
        </Row>
        </div>
    )
}

export default Categories;
