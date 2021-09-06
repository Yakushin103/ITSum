const initialState = {}

type InitialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {

    return state;
}

type ActionsType = () => void

export default sidebarReducer;