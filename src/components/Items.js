import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Items.css'
import OneItem from "./OneItem";

function Items({user}) {
    const [items, setItems] = useState([]);
    const [searchResults, setSearchResults] = useState("");
    // state to hold search parameters for each event
    const [searchParam] = useState(["vendor", "name", "vendor_contact", "price", "location"]);
    let params = useParams();
    // console.log(items);
    // console.log(params.categoryID);

    // fetch item data within categories
    useEffect(() => {
        fetch(`https://peperuka-server.onrender.com/categories/${params.categoryID}`)
        .then((r) => r.json())
        .then((itemData) => setItems(itemData))
    }, [params.categoryID])

    function search(items){
        return items.filter((item) => searchParam.some((parameter) => item[parameter].toString().toLowerCase().includes(searchResults))
        )
    }

    let queryData = Object.values(items);
    // console.log("Query:", queryData);
    let item = search(queryData).map((item) => {
        return (
            <OneItem key={item.id} item={item} user={user} />
        )
    })

  return (
    <Fragment>
        <div>
            <form style={{padding:'20px  20px ',paddingLeft: '180px'}} className="d-flex " role="search">
                    <input style={{width:'60rem'}}className="form-control me-2" type="text" placeholder="Search away..." value={searchResults}  onChange={(e) => setSearchResults(e.target.value)} aria-label="Search"/>
            </form>
        </div>
        <div className="ui three column grid container" style={{                
            display: 'flex',
            justifyContent: 'space-between', 
            // position: 'relative',
            // alignItems: 'center' 
            }}>
            <div className="row">
                {item}
            </div>
        </div>
        
    </Fragment>
  )
}

export default Items;