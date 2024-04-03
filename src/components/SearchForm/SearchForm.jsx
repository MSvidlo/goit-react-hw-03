const SearchForm = ({searchValue,handleChangeSearch}) => {
    return (<div>
        <p>Find contacts by name</p>
        <input type='text' value={searchValue} placeholder="Search..." onChange={handleChangeSearch} />
</div>)
}

export default SearchForm;