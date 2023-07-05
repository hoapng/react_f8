import { useState, useRef, useMemo } from "react";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef()
  
  const handleSubmit = () => {
    setProducts([...products,{
      name, 
      price: +price
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Tinh')
      return result + prod.price},0)
      return result
  },[products])
  
  return (
    <div>
      <input
        ref={nameRef}
        placeholder="Enter Name ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter Price ..."
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default (App);
