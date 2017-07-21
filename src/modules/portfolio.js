export const INCREMENT_BTC_REQUESTED = 'portfolio/INCREMENT_BTC_REQUESTED'
export const INCREMENT_BTC = 'portfolio/INCREMENT_BTC'


const initialState = {
    btc: 0,
    isIncrementingBtc: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_BTC_REQUESTED:
            return {
                ...state,
                isIncrementingBtc: true
            }

        case INCREMENT_BTC:
            return {
                ...state,
                btc: state.btc + 1,
                isIncrementingBtc: !state.isIncrementingBtc
            }

        default:
            return state
    }
}

export const incrementBtc = () => {
    return dispatch => {
        dispatch({
            type: INCREMENT_BTC_REQUESTED
        })

        dispatch({
            type: INCREMENT_BTC
        })
    }
}


