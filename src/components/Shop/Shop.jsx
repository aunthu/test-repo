import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToLocalStorage, getShoppingCart } from '../../fakeData/FakeDB2';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        // step 1 : get the added cart from local storage 
        let storedCart=getShoppingCart();
        storedCart=JSON.parse(storedCart);
        const savedCart= [];
        // console.log(storedCart);
        for(const id in storedCart){
            // step 2 : get product from product state using stored id in local storage 
            const addedProduct = products.find(product=> product.id===id);
            if(addedProduct){
                // step 3: get and add the quantity
                const quantity= storedCart[id];

                addedProduct.quantiy=quantity;
                // step 4: add the addedProduct to the savedCart
                savedCart.push(addedProduct);
            }
            console.log('added products', addedProduct);
        }
        // set the savedCart to the cart sate using setCart
        setCart(savedCart);
        

    },[products])
    const handleAddToCart = (product) => {
        // cart.push(product); 
      const newCart = [...cart, product];
        setCart(newCart);
        addToLocalStorage(product.id);
    }

    

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;