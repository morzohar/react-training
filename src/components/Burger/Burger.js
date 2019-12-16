import React from 'react';
import _  from 'lodash';
import classes from './Burger.css';
import BugerIngredient from '../BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    const transformIngresients = [];
    _.map( props.ingresients, (count,ingredient ) => {
        for( let i =0; i < count; i++) {
        transformIngresients.push(<BugerIngredient key={ingredient + i} type={ingredient} />)
        }
        console.log(transformIngresients);
    })
    console.log(transformIngresients);
    return (
                <div className={classes.Burger}>
                    <BugerIngredient type="bread-top"/>
                    {transformIngresients}
                    <BugerIngredient type="bread-bottom"/>
                </div>
            );

}

export default burger;