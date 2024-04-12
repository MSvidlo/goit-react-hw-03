import  { useId } from 'react';


const SearchBox = ({ searchValue, handleChangeSearch }) => {
   
      const inputId = useId();
    
    
    return (<div>
          <label htmlFor={inputId}>Find contacts by name</label>
        <input type='text'
            value={searchValue}
            name="filter"
            onChange={handleChangeSearch} />
</div>)
}

export default SearchBox;