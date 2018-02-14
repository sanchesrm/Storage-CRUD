export const OPEN_MODAL = 'OPEN_MODAL';

export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(action, index) {
    return {
        type: OPEN_MODAL,
        show: true,
        index: index,
        action: action
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL,
        show: false
    }
}