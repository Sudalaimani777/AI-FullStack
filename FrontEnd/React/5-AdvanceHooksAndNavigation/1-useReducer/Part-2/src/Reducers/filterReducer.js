export const filterReducer = (state, action) => {
    console.log(state);
    console.log(action);

    switch (action.type) {
        case "PRICE":
            return {
                ...state,
                newPrice: action.payload
            }
        case "DISCOUNT":
            return {
                ...state,
                discount: action.payload
            }
        case "RATING":
            return {
                ...state,
                rating: action.payload
            }
        default: return state
    }
}