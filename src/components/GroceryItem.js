const GroceryItem = ({element}) => {
    return (
      <div className = 'each'>
      <br/>
    <h4>{element.brand} {element.item} - {element.quantity} {element.units}</h4>
    <h4>Purchased?  
      {element.isPurchased === true ? 
      (<input type="checkbox" checked></input>) : (<input type="checkbox"></input>)}</h4>
  </div>
    )
  }
  
  export default GroceryItem