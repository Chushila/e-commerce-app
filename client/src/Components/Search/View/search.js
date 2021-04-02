import { useState, useContext } from 'react';
import { SearchContext } from '../../../Contexts/context';
import './search.css';
import { useHistory } from 'react-router-dom';

function Search() {
  const [inputValue, setInputValue] = useState();
  const { setSearch } = useContext(SearchContext);
  const history = useHistory();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  function handleSubmit() {
    if (inputValue === '' || inputValue === undefined) {
      setSearch({ isOn: false, term: '' });
      return;
    }
    setSearch({ isOn: true, term: inputValue.toLowerCase() });
    history.push('/');
  }

  return (
    <div className="Search">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Search for a product here"
      ></input>
      <button onClick={handleSubmit} />
    </div>
  );
}

export default Search;
