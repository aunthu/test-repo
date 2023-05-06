const addToLocalStorage=(id)=>{
    // const {id,name}= product;
    let storedCart= getShoppingCart();
    console.log(storedCart);
    let shoppingCart={};
    if(storedCart){
        shoppingCart=JSON.parse(storedCart);

    }
    else{
        shoppingCart={};
    }

    let quantity=shoppingCart[id];
    if(quantity){
        // console.log('product exitst');
        const newQuantity=parseInt(quantity)+1;
        shoppingCart[id]=newQuantity;
    }
    else{
        // console.log('new Item addded');
        shoppingCart[id]=1;

    }
    localStorage.setItem('cart',JSON.stringify(shoppingCart)); 
}
const getShoppingCart=()=>localStorage.getItem('cart');

export {addToLocalStorage , getShoppingCart}