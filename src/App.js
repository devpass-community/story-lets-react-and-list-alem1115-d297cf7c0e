import Container from "./components/Container";
import products from "./products.json";

const Item = ({ item }) => {
  return (
    <li className="item" data-testid="product-item">
      {}
      <img src={item.images[0]}></img>
      <h4> {item.title} </h4>
      <p> {item.description}</p>
      <span> {item.brand} </span>
      <span> {item.price} </span>
    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className="list" data-testid="product-list">
        {products.filter((product => product.category.match("smartphone"))).map((product) => (
          <Item key={product.id} item={product} />
        ))}    
      </ul>
    </Container>
  );
}

export default App;
