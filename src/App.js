import './App.css';
import groceries from './groceries';

const list = groceries.map((element, index) => {
  let listItem = <div key={index}>
      <h3>Item: {element.item}</h3>
      <p>Brand: {element.brand}</p>
      <p>Unit: {element.units}</p>
      <p>Quantity: {element.quantity}</p>
      {/* <p>Purchased? 
        {element.isPurchased === true ? 
        (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}</p> */}
        <br/>
    </div>
  return (!element.isPurchased && listItem)
})

export default function App() {
  return (
    <div className="App">
      <h2>Shopping List</h2>
      {list}
    </div>
  );
}