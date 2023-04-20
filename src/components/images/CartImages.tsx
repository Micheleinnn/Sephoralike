import React, { useState } from 'react';

const CartImages = ({ product }) => {
    // Stav pro uchovávání obrázků v kosíku
    const [cart, setCart] = useState([]);

    // Funkce pro přidání obrázku do kosíku
    const addToCart = (obrazek) => {
        setCart([...cart, obrazek]);
    };

    // Funkce pro odebrání obrázku z kosíku
    const removeFromCart = (obrazek) => {
        const newCart = cart.filter((item) => item !== obrazek);
        setCart(newCart);
    };


    return (
        <div>

            <img src={product?.attributes?.['cart-image-urls'][1]} alt={product?.title} />
            <img src={product?.attributes?.['cart-image-urls'][2]} alt={product?.title} />
            <img src={product?.attributes?.['cart-image-urls'][3]} alt={product?.title} />
            <img src={product?.attributes?.['cart-image-urls'][4]} alt={product?.title} />
            <img src={product?.attributes?.['cart-image-urls'][5]} alt={product?.title} />
            <img src={product?.attributes?.['cart-image-urls'][6]} alt={product?.title} />

            <button onClick={() => addToCart(product)}>Add to Cart</button>

            <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
        </div>
    );
};

export default CartImages;