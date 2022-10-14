import { Link } from 'react-router-dom'

const Product = ({ productName }) => {
    return (
        <>
            <div class="product-div">
                <div className="card">
                    <img src="https://media.tarkett-image.com/large/TH_25094225_25187225_001.jpg" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ productName }</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/chats" className="btn btn-primary">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;