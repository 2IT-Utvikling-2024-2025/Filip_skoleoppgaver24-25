import { useState } from 'react';

export default function IntIdentifier() {
  const [inputValue, setInputValue] = useState('');
  const [isEven, setIsEven] = useState(false);
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value !== '' && !isNaN(value)) {
      if (value % 2 === 0) {
        setIsEven(true);
      } else {
        setIsEven(false);
      }
    }
  };
  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim !== '' && !isNaN(inputValue)) {
      setList([...list, inputValue]);
      setInputValue('');
    }
  };

  const eventItems = list.filter((item) => item % 2 === 0);

  return (
    <>
      <form onSubmit={addItem}>
        <label>
          <h2>Write number here</h2>
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
          <input type="submit" />
        </label>
      </form>
      <h1>{isEven ? 'Number is even' : 'Number is odd'}</h1>

      <ul>
        {eventItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
