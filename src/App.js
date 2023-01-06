import './App.css';
import groceries from './groceries';

const list = groceries.map((element, index) => {
  return(
    <div>
      <h4>Item: {element.item}</h4>
      <h4>Brand: {element.brand}</h4>
      <h4>Units: {element.units}</h4>
      <h4>Quantity: {element.quantity}</h4>
      <h4>Purchased? </h4> 
      {/* <input type='checkbox'>{element.isPurchased}</input> */}
      <br/>
    </div>
  )
})

export default function App() {
  return (
    <div className="App">
      <h3>Shopping List</h3>
      {list}
    </div>
  );
}