import { actiontypes } from "../constant/constant";
const initialState = {
  products: [],
  filterdata: [],
  user: [],
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  console.log("productreducer", payload);
  switch (type) {
    case actiontypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case actiontypes.SET_MENS_CLOTHING:
      const productlist = state.products;
      // console.log("productlist", productlist);
      // console.log("payload", payload);
      let x = [];
      x = productlist.filter((item) => {
        // console.log(item.category);
        return item.category === payload;
      });
      // console.log("x", x);

      return { ...state, filterdata: x };
    default:
      return state;
  }
};

export const selectedProductReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actiontypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

// export const setFilterReducer = (state = initialState, { type, payload }) => {

//     switch (type) {
//     case actiontypes.SET_MENS_CLOTHING:
//         const productlist=payload;
//         const {category}=payload;
//         console.log("category",category)
//         console.log("productlist",productlist)
//         let x=[];
//         x=productlist.filter((item)=>{
//             return item.category===category
//         })
//         console.log(x);
//       return {...state}
//     default:
//       return state;
//   }
// };

export const setUserSignUpReducer = (
  state = initialState,
  { type, payload }
) => {
  // console.log("signup", payload);
  switch (type) {
    case actiontypes.SET_USER:
      const oldArr = JSON.parse(localStorage.getItem("user")) || [];
      const newArr = [...oldArr, payload];
      return {
        ...state,
        user: [
          ...state.user,
          localStorage.setItem("user", JSON.stringify(newArr)),
        ],
      };
    default:
      return state;
  }
};

export const setAddToCartReducer = (
  state = initialState,
  { type, payload }
) => {
  // console.log("adddtocart", payload);
  let obj = payload;
  // console.log("obj------------?????????????????>", obj);
  switch (type) {
    case actiontypes.SET_ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...obj }] };
    case actiontypes.SET_CART_REMOVE:
      const { id } = payload;
      // console.log("removecart?????", id);
      // console.log("cart?????????", state.cart);
      return { ...state, cart: state.cart.filter((item) => item.id !== id) };
    case actiontypes.SET_PLUS_QTY:
      // console.log("plusqtyreducer---->>>", payload);
      // console.log("PAYLOADID=============??????", payload.id);
      const updatitem = state.cart.map((item) => {
        console.log("reducer items", item);
        return item.id === payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      // console.log("updateditem", updatitem);
      return { ...state, cart: updatitem };

    case actiontypes.SET_MINUS_QTY:
      // console.log("plusqtyreducer---->>>", payload);
      // console.log("PAYLOADID=============??????", payload.id);
      const minusqty = state.cart.map((item) => {
        // console.log("reducer items", item);
        if (item.id === payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      // console.log("minusqty", minusqty);
      return { ...state, cart: minusqty };
    default:
      return state;
  }
};

// export const setCartRemoveReducer=(state=initialState,{type,payload})=>{
//   console.log("removecardreducer",payload)
//   switch(type){
//     case actiontypes.SET_CART_REMOVE:
//       const {data,id}=payload;
//       const cartitems=data.filter((item)=>{
//         return item.id!==id;
//       })
//       console.log("cartitems",cartitems)
//       return {...state,cart:[...cartitems]}
//     default:
//       return state;
//   }
// }
