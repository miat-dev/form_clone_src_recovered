import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    info,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}
function info(message) {
    return { type: alertConstants.INFO, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message:message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}