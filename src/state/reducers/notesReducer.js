const initialState = {
    notes: [{ id: 1, title: 'injected note 1', body: 'injected note 1 body' }, { id: 2, title: 'injected note 2', body: 'injected note 2 body' },]
}

const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NOTE':
            return {
                notes: [...state.notes, action.payload]
            }

        default:
            return state;
    }

}



export default notesReducer;