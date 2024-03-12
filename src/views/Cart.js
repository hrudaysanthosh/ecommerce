import { useState, useEffect } from "react";

function Cart() {
    const [products, setProducts] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteProductName, setDeleteProductName] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        if (localStorage.getItem('cart')) {
            const _products = JSON.parse(localStorage.getItem('cart'));
            setProducts(_products);
            setTotalAmount(_products.reduce((acc, product) => acc + product.cartPrice, 0));
        }
    }, []);
    const onChangeQuantity = (type, index) => {
        const temp = products.map((product, i) => {
            if (index === i) {
                if (type === 'increment') {
                    product.quantity += 1;
                } else {
                    product.quantity -= 1;
                }
                product.cartPrice = product.price * product.quantity;
                return product;
            }
            return product;
        });
        setProducts(temp);
        localStorage.setItem('cart', JSON.stringify(temp));
        setTotalAmount(temp.reduce((acc, product) => acc + product.cartPrice, 0));
    };
    const removeProduct = (productName) => {
        setDeleteProductName(productName);
        setIsShowModal(true);
    };
    const confirmDeleteProduct = () => {
        const filteredProducts = products.filter(product => product.name !== deleteProductName);
        setProducts(filteredProducts);
        setIsShowModal(false);
        localStorage.setItem('cart', JSON.stringify(filteredProducts));
        setTotalAmount(filteredProducts.reduce((acc, product) => acc + product.cartPrice, 0));
    }
    return (
        <div className="container">
            <div className="row">
                {products.length > 0 ? (
                    <div className="col-sm">
                        <h3 className="text-center text-success my-2">Cart</h3>
                        <div className="row">
                            <div className="col-sm text-end me-5 pe-5">
                                <h3>Total Amount: {totalAmount}</h3>
                            </div>
                        </div>
                        {products.map((product, index) => (
                            <div className="row my-4 py-4 border-bottom" key={product.name}>
                                <div className="col-sm-3 px-5">
                                    <img src={product.imgSrc} className="img-fluid" alt={product.name} />
                                </div>
                                <div className="col-sm-6">
                                    <h3>{product.name}</h3>
                                    <ul>
                                        {product.specifications.map((specification) => (
                                            <li key={specification}>{specification}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <h3>{product.cartPrice}</h3>
                                    <h5>Quantity: <button className="btn btn-danger me-2" onClick={() => onChangeQuantity('decrement', index)} disabled={product.quantity === 1}>-</button>{product.quantity}<button className="btn btn-success ms-2" onClick={() => onChangeQuantity('increment', index)}>+</button></h5>
                                    <button className="btn btn-danger" onClick={() => removeProduct(product.name)}><i className="fa-solid fa-trash"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="col-sm text-center my-5">
                        <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" width="300px" />
                        <h3>Missing Cart items?</h3>
                        <p>Login to see the items you added previously</p>
                        <button className="btn btn-warning btn-lg">Login</button>
                    </div>
                )}
            </div>
            {isShowModal && <div className="modal" style={{ display: 'block', backgroundColor: 'rgb(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete Product</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure, you want to delete this product?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={confirmDeleteProduct}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Cart;