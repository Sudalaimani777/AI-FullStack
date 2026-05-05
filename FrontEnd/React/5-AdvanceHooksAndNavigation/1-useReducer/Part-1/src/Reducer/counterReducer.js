export const initialState = {
    count:0
}


export const handleCounterReducer = (state, action) => {
    console.log("State ->", state);
    console.log("Action ->", action);
    if (action.type === "inc") {
        return {
            count: state.count + 1
        }
    } else if (action.type === "dec") {
        return {
            count: state.count - 1
        }
    }
}