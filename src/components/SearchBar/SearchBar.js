import { useState } from "react";
import { SearchForm, SearchContainer } from "./SearchBar.styled";
import { SlMagnifier } from 'react-icons/sl';


export const SearchBar = ({onSubmit}) => {

    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        setName(event.currentTarget.value);
    };

    const formSubmit = (event) => {
        event.preventDefault();

        if (name === '') {
            alert('Write name !!!');   
            return;
        };

        onSubmit(name);
        event.currentTarget.reset();
    };

   

    return (
        <SearchContainer>
            <SearchForm onSubmit={formSubmit}>
            <SlMagnifier/>
                <input
                    type='text'
                    autoComplete='off'
                    autoFocus
                    placeholder="Search for movies..."
                    name='name'
                    onChange={handleInputChange}
                />
            </SearchForm>
        </SearchContainer>
    )
}