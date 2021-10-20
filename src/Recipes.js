import React, { useState, useEffect } from 'react'
import './App.css';
import { Link } from 'react-router-dom'


function Recipes() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([])


    const fetchItems = async () => {
        const data = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        );
        const data2 = await fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        const items = await data.json();
        const items2 = await data2.json();
        console.log(items);
        console.log(items2);
        setItems(items.drinks);
        setItems2(items2.drinks);
    };

    const colorStyle = {
        color: 'blue'
    }
    return (
        <div className="App">
            <div className="recipes">
                <h1>Recipes</h1>
                {items.map(item => (
                    <h1 key={item.idDrink}>
                        <Link to={`/Recipes/${item.idDrink}`} style={colorStyle}>
                            {item.strDrink}
                        </Link>
                    </h1>
                ))}
                {items2.map(item => (
                    <h1 key={item.idDrink}>
                        <Link to={`/Recipes/${item.idDrink}`} style={colorStyle}>
                            {item.strDrink}
                        </Link>
                    </h1>
                ))}
            </div>

        </div>
    );
}

export default Recipes;
