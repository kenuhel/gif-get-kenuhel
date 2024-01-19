import React from 'react'
import { useState } from 'react';
import {AddCategory, GifGrid} from './components'

export const GitExpertApp = () => {

    const [category, setCategory] = useState([ 'One Punch' ]);

    // use Spread to read the array and add the new value 
    const onAddCategory = (newCategory) => {
      if(category.includes(newCategory)) return;
      setCategory( [newCategory ,...category])
    };

  return (
    <>
    
        {/* { title } */}
        <h1>GitExperstApp</h1>

        {/* { input }, parameters send this way arraives as props, and need to be desestructured => ( { setCategory } ) */}
        <AddCategory 
          // setCategory={ setCategory }  //* -> not bab, but is hard for other to implement
          onNewCategory = { onAddCategory }  //*
        />
        
        {/* when create dinamic elements, they need an unique key */}
      
        {
          category.map( (category) => (
              <GifGrid 
                category={category} 
                key={category} />
          ))
        }
      
    </>
  )
}
