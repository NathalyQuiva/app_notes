import {
    GET_ALL_CATEGORIES,
    GET_ALL_NOTES,
    GET_NOTES_BY_CATEGORY,
    GET_STATE_NOTES,
    EMPTY_ARRAY,
    EDIT_NOTE,
    RENDER_NOTES
} from "../actions/actions"

const initialState = {
    categories: [],
    notes: [],
    notesOfCategory: [],
    notesArcOrUnär: [],
    editNote: '',
    toggleNew: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_ALL_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case GET_NOTES_BY_CATEGORY:
            return {
                ...state,
                notesOfCategory: action.payload,
                notesArcOrUnär: []
            }
        case GET_STATE_NOTES:
            return {
                ...state,
                notesArcOrUnär: action.payload,
                notesOfCategory: []
            }
        case EMPTY_ARRAY:
            return {
                ...state,
                notes: action.payload
            }
        case EDIT_NOTE:
            return {
                ...state,
                editNote: action.payload
            }
        case RENDER_NOTES:
            return {
                ...state,
                toggleNew: action.payload
            }

        default:
            return state
    }
}

export default rootReducer;