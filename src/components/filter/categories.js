import React from 'react';

import { useState } from "react";
import Button from "./button"
import { useDispatch } from "react-redux";
import { category } from "../../redux/sortSlicer";
export const Categories = ({names}) => {
    const [isActive,setActive] = useState(0);
    const dispatch = useDispatch();
    const setCategory = (e,index) => {
        const filterCategory = e.target.getAttribute('data-category');
        dispatch(category(filterCategory));
        setActive(index);
    }
    return (
        <>
        {names.map((item,i)=>{
            return <Button onClick={(e)=>{setCategory(e,i)}} 
            isActive={isActive === i ? true : false} 
            dataCategory={item} 
            text={item} 
            key={item}/>
        })}
        </>
    )
}