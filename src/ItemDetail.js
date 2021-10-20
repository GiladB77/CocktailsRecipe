import React, { useState, useEffect } from 'react'
import './App.css';

function Item({ match }) {
    // console.log(match);

    useEffect(() => {
        fetchItem()
    }, [])


    const [item, setItem] = useState({});
    const [show, setShow] = useState(true);



    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);

    };

    function ShowIngredients() {
        for (let i = 1; i < 16; i++) {
            if (item.drinks[0][`strIngredient${i}`] && item.drinks[0][`strMeasure${i}`] !== null) {
                const place = document.createElement("ul");
                const el = document.createTextNode(item.drinks[0][`strMeasure${i}`] + ' : ' + item.drinks[0][`strIngredient${i}`]);
                place.appendChild(el);
                const element = document.getElementById("here");
                element.appendChild(place);
                setShow(true)
            }
            else {
                console.log('Clickd');
                setShow(false);
                break;
            }
        }
    }


    return (
        <div className="App">
            <div className="container">
                <h1>{item.drinks === undefined ? "Please wait" : item.drinks[0].strDrink}</h1>
                <img className="itemPic" src={item.drinks === undefined ? "Please wait" : item.drinks[0].strDrinkThumb} alt="" />
                <div className="here" id="here">
                    <button id="click" onClick={show ? ShowIngredients : null}>Click to Ingredients</button>
                </div>
            </div>
            <div className="instruction">
                <h3>{item.drinks === undefined ? "Please wait" : item.drinks[0].strInstructions}</h3>
            </div>
        </div>
    );
}
export default Item;


