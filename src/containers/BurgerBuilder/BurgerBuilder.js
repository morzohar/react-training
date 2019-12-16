import React, { Component } from 'react';
import _  from 'lodash';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad : 10,
    cheese : 2,
    meat : 20,
    bacon : 10
}

class BurgerBuilder extends Component{
    state = {
        ingresients:{
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        },
        totalPrice: 40
    }

    addIngredientHandler = (type) => {
        let ingresientsTemp = this.state.ingresients;
        _.map( ingresientsTemp , (count, ingresient) => {
            if(ingresient === type){
                ingresientsTemp[type]=count+1;
                const oldPrice = this.state.totalPrice;
                const newPrice = INGREDIENT_PRICES[type] + oldPrice;
                this.setState({ingresients:ingresientsTemp, totalPrice: newPrice})
            }
        })  
    }
    removeIngredientHandler = (type) => {
        let ingresientsTemp = this.state.ingresients;
        _.map( ingresientsTemp , (count, ingresient) => {
            if(ingresient === type){
                ingresientsTemp[type]=count-1;
                const oldPrice = this.state.totalPrice;
                const newPrice = oldPrice-INGREDIENT_PRICES[type] ;
                this.setState({ingresients:ingresientsTemp, totalPrice: newPrice})
            }
        })  
    }

    render(){
        return(
          <Aux>
              <Burger ingresients={this.state.ingresients}/>
            <BuildControls ingredientAddFunc={this.addIngredientHandler} ingredientLessFunc={this.removeIngredientHandler} />
            <div>Total Price : {this.state.totalPrice}</div>
          </Aux>
        );
    }
}
export default BurgerBuilder;