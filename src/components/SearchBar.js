import "./SearchBar.css";
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
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}
export default SearchBar;
