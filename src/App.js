import './App.css';
import { useState } from 'react';
import GroceryItem from './components/GroceryItem';
import groceries from './groceries'

const list = groceries.map((element, index) => {
  return( !element.isPurchased && <GroceryItem element={element} key={index}/>  )

})

function App() {
  const [groceryList, setGroceryList] = useState(groceries)
  const addItem = () => {
      setGroceryList(groceryList.concat([{
      item: document.querySelector('input[name="item"]').value,
      brand: document.querySelector('input[name="brand"]').value,
      units: document.querySelector('input[name="units"]').value,
      quantity: document.querySelector('input[name="quantity"]').value,
      isPurchased:false
    }]))}

    const handleSubmit = e => {
      e.preventDefault()
      addItem()
    } 
  
  return (
    <div className="App">
      <h3>Shopping List</h3>
      {list}
      <br/>
      <hr/>
      <form onSubmit={handleSubmit}>
            <h3>Add to the list</h3>
            <p>Item:</p> <input type='text' name="item"></input> <br/>
            <p>Brand:</p> <input type='text' name="brand"></input><br/>
            <p>Units:</p> <input type='text' name="units"></input>
            <br/>
            <p>Quantity:</p> <input type='number' name="quantity"></input><br/>
            <input type='submit' value='submit'></input>
        </form>

      </div>
  );
}

export default App