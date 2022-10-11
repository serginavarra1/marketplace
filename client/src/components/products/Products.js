import Product from './Product'

const Products = () => {
    const productList = [
        {
            name: "hola"
        },
        {
            name: "adeu"
        },
        {
            name: "caca"
        },
        {
            name: "donut"
        },
        {
            name: "donut"
        },
        {
            name: "donut"
        }
    ]
    return (
        <div className="card-group">
            {productList.map(product => <Product productName={product.name}></Product>)}
        </div>
    )
}

export default Products;