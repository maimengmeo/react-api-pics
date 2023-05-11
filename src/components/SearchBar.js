import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault(); //when enter key press, req wont be send
        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}
export default SearchBar;
