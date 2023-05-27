// action creator
export function updateMinNumber(newNumber) {
    return {
        type: 'NUMBER_MIN_UPDATED',
        payload: newNumber
    }
}

export function updateMaxNumber(newNumber) {
    return {
        type: 'NUMBER_MAX_UPDATED',
        payload: newNumber
    }
}
