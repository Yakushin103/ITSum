const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 1, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: false, fullName: 'Dmitriy', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 2, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: true, fullName: 'Dmitriy2', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 3, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: false, fullName: 'Dmitriy3', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } },
        // { id: 4, photoURL: 'https://www.kino-teatr.ru/acter/album/325783/847606.jpg', followed: true, fullName: 'Dmitriy4', status: 'Im a boss', location: { city: 'Minsk', country: 'Belarus' } }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;