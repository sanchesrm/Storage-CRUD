import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

export default function(state = [], action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                index: action.index,
                showModal: action.show,
                action: action.action
            };
        case CLOSE_MODAL:
            return  {
                index: '',
                showModal: action.show
            }
        default:
            return state
    }
}
