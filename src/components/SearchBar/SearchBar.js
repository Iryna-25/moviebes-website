import { useState } from "react"


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
        <>
            <form onSubmit={formSubmit}>
                <input
                    type='text'
                    autoComplete='off'
                    autoFocus
                    placeholder="Search for movies"
                    name='name'
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}