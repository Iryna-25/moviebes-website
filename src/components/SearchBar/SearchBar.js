import { useState, useRef } from "react";
// import { SearchForm, SearchContainer } from "./SearchBar.styled";
import { SlMagnifier } from 'react-icons/sl';

import { Button, Form, Input, } from './SearchBar.styled';


export const SearchBar = ({onSubmit}) => {

    const [name, setName] = useState('');
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

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
      <Form
        barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
          inputFocus.current.focus();
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        // On submit, call the onFormSubmit function
        onSubmit={formSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={barOpened}>
          <SlMagnifier />
        </Button>
        <Input
          onChange={handleInputChange}
          ref={inputFocus}
          barOpened={barOpened}
          placeholder="Search for a movie..."
        />
      </Form>

      // <SearchContainer>
      //     <SearchForm onSubmit={formSubmit}>
      //     <SlMagnifier/>
      //         <input
      //             type='text'
      //             autoComplete='off'
      //             autoFocus
      //             placeholder="Search for movies..."
      //             name='name'
      //             onChange={handleInputChange}
      //         />
      //     </SearchForm>
      // </SearchContainer>
    );
}