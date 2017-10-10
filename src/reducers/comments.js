export default (state = [], action) => {
    switch (action) {
        case '':
            return action
        default:
            return state
    }
}