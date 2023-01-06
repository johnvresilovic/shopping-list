const GroceryItem = ({element}) => {
    return (
      <div className = 'each'>
      <br/>
    <h4>Item: {element.item}</h4>
    <h4>Brand: {element.brand}</h4>
    <h4>Units: {element.units}</h4>
    <h4>Quantity: {element.quantity}</h4>
    <h4>Purchased?  
      {element.isPurchased === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}</h4>
  </div>
    )
  }
  
  export default GroceryItem