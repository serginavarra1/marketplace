import Product from './Product'
import Navbar from '../Navbar'
import Filter from './Filter'
import Pagination from './Pagination'

const Products = () => {
    const productList = [
        {
            name: "hola"
        },
        {
            name: "adeu"
        },
        {
            name: "aaaa"
        },
        {
            name: "donut"
        },
        {
            name: "donut"
        }
    ]
    return (
        <div>
            <Navbar></Navbar>
            <div className="body-container">
                    <div>
                        <div className="search-div">
                            <form class="d-flex" role="search">
                                <Filter/>
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                <div className="card-group">
                    {productList.map(product => <Product productName={product.name}></Product>)}
                </div>
                
            </div>
            <div className="pagination-2">
                <Pagination/>
            </div>
        </div>
    )
}

export default Products;