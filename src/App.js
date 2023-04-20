import Container from "./components/Container";
import products from "/products.json"; 

function Item({ item }) {
    return (
        <li className="item" data-testid="product-item">
            {products}
            <img src="thumbnail here"></img>
            <h4> title here </h4>
            <p> description here </p>
            <span> brand here </span>
            <span> price here </span>
        </li>
    );
}

function App() {
    return (
        <Container>
            <ul className="list" data-testid="product-list">
                {/* TODO */}
                <Item />
            </ul>
        </Container>
    );
}

export default App;
