import {
    DETAIL_REQUEST,
    DETAIL_RESPONCE,
    DETAIL_ERROR,
    DETAIL_CLOSE,
    DETAIL_REFRESH
} from './../actions/detailActions'

function movieDetail (state = {
    isReq: false,
    isOverdue: true,
    id: undefined,
    detail: {},
    evaluate: [],
    errMsg: ''
}, action) {
    switch (action.type) {
        case DETAIL_REQUEST:
            return {
                ...state,
                isReq: true
            }
        case DETAIL_RESPONCE:
            const { id, detail, evaluate } = action.res
            return {
                ...state,
                isReq: false,
                isOverdue: false,
                id,
                detail,
                evaluate,
                errMsg: ''
            }
        case DETAIL_ERROR:
            return {
                ...state,
                isReq: false,
                errMsg: action.err
            }
        case DETAIL_CLOSE:
            return {
                isReq: false,
                isOverdue: true,
                id: undefined,
                detail: {},
                evaluate: [],
                errMsg: ''
            }
        case DETAIL_REFRESH:
            return {
                ...state,
                isOverdue: true
            }
        default:
            return state
    }
}

export default movieDetail
