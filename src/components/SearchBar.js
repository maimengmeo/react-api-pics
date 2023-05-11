function SearchBar({ onSubmit }) {
    //onSubmit from App
    const handleFormSubmit = (event) => {
        event.preventDefault(); //when enter key press, req wont be send
        onSubmit("cars");
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}
export default SearchBar;
