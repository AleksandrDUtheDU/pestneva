const initialState = {
    firstName: '',
    secondName: '',
    thirdName: ''
};

const reducer = (state = initialState, action) => { // всегда должна быть чистой функцией
    switch (action.type) {
        case "FIRST_STAGE":
            return {
                ...state,
                firstName: action.payload,
            };
        case "SECOND_STAGE":
            return {
                ...state,
                secondName: action.payload,

            };
        case "THIRD_STAGE":
            return {
                ...state,
                thirdName: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;