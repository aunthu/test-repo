// Use local storage to manage data
const addToLocalStorage=(id)=>{
    
    let shoppingCart;

    // Get the shopping cart

    const storedCart= localStorage.getItem('Shopping-Cart');

    if(storedCart){
        shoppingCart=JSON.parse(storedCart);
    }

    else{
        shoppingCart={};
    }

    // Add Quantity
    const quantity=shoppingCart[id];
    if(quantity){
        const newQuantity=parseInt(quantity)+1;
        shoppingCart[id]=newQuantity;
    }

    else{
        shoppingCart[id]=1;
    }

    localStorage.setItem('Shopping-Cart',JSON.stringify(shoppingCart));
}

const removeFromLocalStorage=(id)=>{
    const storedCart=localStorage.getItem('Shopping-Cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);

        if (id in shoppingCart) {
             delete shoppingCart[id];   
             localStorage.setItem('Shopping-Cart',JSON.stringify(shoppingCart));        
        }

    }    
}

const deleteShoppingCart=()=>{
    localStorage.removeItem('Shopping-Cart');
}

export {addToLocalStorage, deleteShoppingCart, removeFromLocalStorage};