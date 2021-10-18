import { createSlice } from "@reduxjs/toolkit";
import isEqual  from 'lodash.isequal';
import  remove from 'lodash.remove';

const initialState = {
    totalPrice:0,
    totalCount:0,
    pizzas: {
    },
    showMessage:false,
};

const counterSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        increment: (state) => {
            let prices = [];
            for(let pizza in state.pizzas) {
                  prices.push(state.pizzas[pizza].reduce((prev,current)=>{
                    
                    if(!prev.price) {
                        return prev + current.price * current.amount;
                    }
                    return prev.price * prev.amount + current.price * current.amount;
                },0));
            }
            
            state.totalPrice = prices.reduce((prev,current)=>prev+current,0)
            state.totalCount++;
        },
        decrement:(state,{payload}) => {
            state.totalCount--;
            state.pizzas[payload[0]].find(item=> {
                if ( isEqual(payload[1],item) ) {
                    item.amount--;
                    if(item.amount <= 0) {
                        remove(state.pizzas[payload[0]],deletedItem=>deletedItem === item)
                    }
                }
            });
            let prices = [];
            for(let pizza in state.pizzas) {
                  prices.push(state.pizzas[pizza].reduce((prev,current)=>{
                    if(!prev.price) {
                        return prev + current.price * current.amount;
                    }
                    return prev.price * prev.amount + current.price * current.amount;
                },0));
            }
            state.totalPrice = prices.reduce((prev,current)=>prev+current,0)
        },
        addPiza:(state,{payload}) => {
            const {id,name,type,size,img,price,showMessage} = payload;
            if(!state.pizzas[id]) {
                state.pizzas[id] = [];
            }
            const check = state.pizzas[id].every(item=>{
                const obj1 = {
                    name,
                    type,
                    size,
                    img,
                    price,
                }
                const currentObj = {
                    name:item.name,
                    type:item.type,
                    size:item.size,
                    img:item.img,
                    price:item.price
                }
                if(isEqual(obj1,currentObj)) {
                    item.amount++;
                    return false
                }
                return true
            })
            if(check) {
                state.pizzas[id].push({
                    name,
                    type,
                    size,
                    img,
                    price,
                    amount:1
                })
            }
            state.showMessage = showMessage
        },
        deleteCartItem:(state,{payload}) => {
            remove(state.pizzas[payload.id],(item=>item.name === payload.name && item.size === payload.size && item.type === payload.type))
            state.totalPrice -= payload.amount * payload.price;
            state.totalCount -= payload.amount 
        },
        deleteCart: state => {
            state.pizzas = {};
            state.totalPrice =  0;
            state.totalCount= 0 ;
        },
        showMessage: (state,{payload}) => { 
             state.showMessage = payload
        },
    }
})
export const {increment,addPiza,showMessage,decrement,deleteCartItem,deleteCart} = counterSlice.actions;
export default counterSlice.reducer
