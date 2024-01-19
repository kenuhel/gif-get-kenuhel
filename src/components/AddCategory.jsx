import { useState } from 'react';

// desestructure {setCategory} from the props
export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    // you can desestructure the event.target
    const onInputChange = ({target}) => {
        // To show the value that it itself is changing
        // console.log(target.value);
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;       
        // categories is the useState of the functions, we need the Spread to save the data
        // setCategory( categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
