import axios from 'axios';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ALL_NOTES = 'GET_ALL_NOTES';
export const GET_NOTES_BY_CATEGORY = 'GET_NOTES_BY_CATEGORY';
export const GET_STATE_NOTES = 'GET_STATE_NOTES';
export const EMPTY_ARRAY = 'EMPTY_ARRAY';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CHANGE_STATUS = 'CHANGE_STATUS';


export function getAllCategories() {
    return async function (dispatch) {
        try {
            const res = await axios.get('http://localhost:3006/api/categories')
            return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: GET_ALL_CATEGORIES,
                payload: error
            })
        }
    }
}


export function getAllNotes() {
    return async function (dispatch) {
        try {
            const res = await axios.get('http://localhost:3006/api/notes')
            return dispatch({
                type: GET_ALL_NOTES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: GET_ALL_NOTES,
                payload: error
            })
        }
    }
}


export function createNote({ tittle, content, categoryId }) {
    return async function () {
        try {
            const res = await axios.post('http://localhost:3006/api/notes', { tittle, content, categoryId });
            alert('The note was created successfully. Click SEE ALL NOTE to see your updated list.');
        } catch (error) {
            alert('There was an error creating the note. Please try again.');
            throw error;
        }
    };
}

export function deleteNote(id) {
    return async function (dispatch) {
        try {
            const res = await axios.delete(`http://localhost:3006/api/notes/${id}`);
            alert('The note was deleted successfully. Click SEE ALL NOTE to see your updated list.');

        } catch (error) {
            alert('There was an error deleting the note. Please try again.');
            throw error;
        }
    };
}


export function searchByCategory(catId) {
    return async function (dispatch) {
        try {
            const notes = (await axios.get((`http://localhost:3006/api/categories/${catId}/notes`))).data
            return dispatch({
                type: GET_NOTES_BY_CATEGORY,
                payload: notes
            })

        } catch (error) {
            return dispatch({
                type: GET_NOTES_BY_CATEGORY,
                payload: error
            })
        }}
    }



    export function notesActives(boolean) {
        return async function (dispatch) {
            try {
                console.log(boolean)
                const booleanValue = JSON.parse(boolean);
                const notes = (await axios.get(('http://localhost:3006/api/notes'))).data
                const stateNotes = notes.filter(note => note.active === booleanValue);
                return dispatch({
                    type: GET_STATE_NOTES,
                    payload: stateNotes
                })
            } catch (error) {
                return dispatch({
                    type: GET_STATE_NOTES,
                    payload: error
                })
            }
        }
    }


    export function emptyNotes() {
        return function (dispatch) {
            const data = [];
            return dispatch({
                type: EMPTY_ARRAY,
                payload: data
            })
        }
    }


    export function updateNote({ id, tittle, content, categoryId}) {
        return async function (dispatch) {
            try {
                const res = (await axios.put((`http://localhost:3006/api/notes/${id}`), { tittle, content, categoryId})).data
                alert('The note was edited successfully. Click SEE ALL NOTE to see your updated list.');
            } catch (error) {
                alert('There was an error editing the note. Please try again.');
                throw error;
            }
        }
    }


    export function editNote(id) {
        return async function (dispatch) {
            const edit = 'yes';
            return dispatch({
                type: EDIT_NOTE,
                payload: id
            }
            )
        }
    }


    export function changeStatus(id, activeBoolean) {
        return async function (dispatch) {
            try {
                const parseActive = JSON.parse(activeBoolean);
                const active = !parseActive;
                const res = (await axios.put((`http://localhost:3006/api/notes/${id}`), { active })).data
                if (active === true) {
                    alert('This note has been actived or unarchived.');
                } else {
                    alert('This note has been archived.');
                }
                return dispatch({
                    type: CHANGE_STATUS,
                    payload: id
                })
            } catch (error) {
                return dispatch({
                    type: CHANGE_STATUS,
                    payload: error
                })
            }
        }
    }


