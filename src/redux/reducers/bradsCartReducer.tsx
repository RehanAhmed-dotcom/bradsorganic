import {ActionType} from '../actions';

const InitialBradCartState = {
  Cart: [],
  UCart: [],
  Prod: [],
  selectedProducts: [],
  updatedProducts: [],
  no: '',
  modifyList: [],
  totalProducts: [],
  forDetails: [],
  allProds: [],
};
export default (state = InitialBradCartState, {type, payload}) => {
  switch (type) {
    case ActionType.BRADCART: {
      return {...state, Cart: [...state.Cart, ...payload]};
    }
    case ActionType.NOTES: {
      return {...state, no: payload};
    }
    case ActionType.DELNOTES: {
      return {...state, no: ''};
    }
    case ActionType.MODLIST: {
      return {...state, List: [...state.modifyList, ...payload]};
    }
    case ActionType.UPDATECART: {
      return {...state, UCart: [...state.UCart, ...payload]};
    }
    case ActionType.ALLPRODUCTS: {
      return {...state, allProds: [...state.allProds, ...payload]};
    }
    case ActionType.BRADPROD: {
      return {
        ...state,
        Prod: [...state.Prod, ...payload],
      };
    }
    case ActionType.DETAILS: {
      return {
        ...state,
        forDetails: [...state.forDetails, ...payload],
      };
    }
    case ActionType.BRADEMPTY: {
      return {
        ...state,
        selectedProducts: [],
        Cart: [],
      };
    }
    case ActionType.BRADEMPTYMOD: {
      return {
        ...state,
        forDetails: [],
        // Cart: [],
      };
    }
    case ActionType.DELUPD: {
      return {
        ...state,
        UCart: [],
        // Cart: [],
      };
    }
    case ActionType.BRADEMPTYALL: {
      return {
        ...state,
        allProds: [],
        selectedProducts: [],
        Cart: [],
        no: '',
      };
    }
    case ActionType.SET_PRODUCTS: {
      return {...state, totalProducts: [...state.totalProducts, ...payload]};
    }

    case ActionType.BRADDEL: {
      const newArr = state.Cart.filter(item => item.id != payload);
      return {...state, Cart: newArr};
    }
    case ActionType.UPDDEL: {
      const newArr = state.UCart.filter(item => item.id != payload);
      return {...state, UCart: newArr};
    }

    case ActionType.DELFROMCAT: {
      let selectProd = [...state.selectedProducts];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );
        if (foundCategory) {
          if (foundCategory.products.length == 1) {
            selectProd.splice(foundCatIndex, 1);
          } else {
            const foundIndex = foundCategory.products.findIndex(
              item => item.id == payload.product.id,
            );
            if (foundIndex > -1) {
              foundCategory.products.splice(foundIndex, 1);
            }
          }
        }
      }

      return {
        ...state,
        selectedProducts: selectProd,
      };
    }
    case ActionType.DELFROMCATMOD: {
      let selectProd = [...state.forDetails];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );
        if (foundCategory) {
          if (foundCategory.products.length == 1) {
            selectProd.splice(foundCatIndex, 1);
          } else {
            const foundIndex = foundCategory.products.findIndex(
              item => item.id == payload.product.id,
            );
            if (foundIndex > -1) {
              foundCategory.products.splice(foundIndex, 1);
            }
          }
        }
      }

      return {
        ...state,
        forDetails: selectProd,
      };
    }

    case ActionType.ADDQUANTITY: {
      let selectProd = [...state.selectedProducts];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          const newProd = {
            ...foundProd,
            multQty:
              parseInt(foundProd.multQty) + parseInt(payload.product.minQty),
          };
          foundCategory.products[foundIndex] = newProd;
          selectProd[foundCatIndex] = foundCategory;
        }
      }

      return {
        ...state,
        selectedProducts: selectProd,
      };
    }
    case ActionType.ADDQUANTITYALL: {
      let selectProd = [...state.allProds];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          const newProd = {
            ...foundProd,
            multQty:
              parseInt(foundProd.multQty) + parseInt(payload.product.minQty),
          };
          foundCategory.products[foundIndex] = newProd;
          selectProd[foundCatIndex] = foundCategory;
        }
      }

      return {
        ...state,
        allProds: selectProd,
      };
    }
    case ActionType.ADDQUANTITYMOD: {
      let selectProd = [...state.forDetails];

      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          if (foundProd.quantity) {
            const newProd = {
              ...foundProd,
              quantity:
                parseInt(foundProd.quantity) + parseInt(payload.product.minQty),
            };
            foundCategory.products[foundIndex] = newProd;
            selectProd[foundCatIndex] = foundCategory;
          } else {
            const newProd = {
              ...foundProd,
              multQty:
                parseInt(foundProd.multQty) + parseInt(payload.product.minQty),
            };
            foundCategory.products[foundIndex] = newProd;
            selectProd[foundCatIndex] = foundCategory;
          }
        }
      }

      return {
        ...state,
        forDetails: selectProd,
      };
    }
    case ActionType.SUBQUANTITYMOD: {
      let selectProd = [...state.forDetails];
      // console.log('prod', payload);
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          if (foundProd.quantity) {
            if (foundProd.quantity > payload.product.minQty) {
              const newProd = {
                ...foundProd,
                quantity:
                  parseInt(foundProd.quantity) -
                  parseInt(payload.product.minQty),
              };
              foundCategory.products[foundIndex] = newProd;
              selectProd[foundCatIndex] = foundCategory;
            }
          } else {
            if (foundProd.multQty > payload.product.minQty) {
              const newProd = {
                ...foundProd,
                multQty:
                  parseInt(foundProd.multQty) -
                  parseInt(payload.product.minQty),
              };
              foundCategory.products[foundIndex] = newProd;
              selectProd[foundCatIndex] = foundCategory;
            }
          }
        }
      }

      return {
        ...state,
        forDetails: selectProd,
      };
    }
    case ActionType.SUBQUANTITY: {
      let selectProd = [...state.selectedProducts];

      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          if (foundProd.multQty > payload.product.minQty) {
            const newProd = {
              ...foundProd,
              multQty:
                parseInt(foundProd.multQty) - parseInt(payload.product.minQty),
            };
            foundCategory.products[foundIndex] = newProd;
            selectProd[foundCatIndex] = foundCategory;
          }
        }
      }
      return {
        ...state,
        selectedProducts: selectProd,
      };
    }
    case ActionType.SUBQUANTITYALL: {
      let selectProd = [...state.allProds];

      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          if (foundProd.multQty > payload.product.minQty) {
            const newProd = {
              ...foundProd,
              multQty:
                parseInt(foundProd.multQty) - parseInt(payload.product.minQty),
            };
            foundCategory.products[foundIndex] = newProd;
            selectProd[foundCatIndex] = foundCategory;
          }
        }
      }
      return {
        ...state,
        allProds: selectProd,
      };
    }
    case ActionType.QTYCHANGEMOD: {
      let selectProd = [...state.forDetails];

      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          const newProd = {
            ...foundProd,
            quantity: parseInt(payload.quantity),
          };
          foundCategory.products[foundIndex] = newProd;
          selectProd[foundCatIndex] = foundCategory;
        }
      }
      return {
        ...state,
        forDetails: selectProd,
      };
    }
    case ActionType.QTYCHANGE: {
      let selectProd = [...state.selectedProducts];

      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        const foundCatIndex = selectProd.findIndex(
          cat => cat.category == payload.category,
        );

        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          const foundIndex = foundCategory.products.findIndex(
            item => item.id == payload.product.id,
          );
          const newProd = {
            ...foundProd,
            multQty: parseInt(payload.quantity),
          };
          foundCategory.products[foundIndex] = newProd;
          selectProd[foundCatIndex] = foundCategory;
        }
      }
      return {
        ...state,
        selectedProducts: selectProd,
      };
    }
    case ActionType.SELECT_PRODUCTS: {
      let selectProd = [...state.selectedProducts];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          if (!foundProd) {
            foundCategory.products.push(payload.product);
          }
        } else {
          selectProd.push({
            category: payload.category,
            products: [payload.product],
          });
        }
      } else {
        selectProd.push({
          category: payload.category,
          products: [payload.product],
        });
      }

      return {
        ...state,
        selectedProducts: selectProd,
      };
    }
    case ActionType.UPDATE_PRODUCTS: {
      let selectProd = [...state.forDetails];
      if (selectProd.length) {
        const foundCategory = selectProd.find(
          cat => cat.category === payload.category,
        );
        if (foundCategory) {
          const foundProd = foundCategory.products.find(
            item => item.id === payload.product.id,
          );
          if (!foundProd) {
            foundCategory.products.push(payload.product);
          }
        } else {
          selectProd.push({
            category: payload.category,
            products: [payload.product],
          });
        }
      } else {
        selectProd.push({
          category: payload.category,
          products: [payload.product],
        });
      }

      return {
        ...state,
        forDetails: selectProd,
      };
    }
    default:
      return state;
  }
};
