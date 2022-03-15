const initialState = {
    class: null,
    instructor: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GETCLASS":
            return { ...state, class: action.payload }
        case "GETINSTRUCTOR":
            return { ...state, instructor: action.payload }
        default:
            return state

    }
}

