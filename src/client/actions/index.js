import constants from './../../constants';

export const mouseMove = payload => ({ type: constants.MOUSE_MOVE, payload });
export const addSelfPlayerAction = payload => ({ type: constants.PLAYER, payload });
export const addFoodsToFieldAction = payload => ({ type: constants.FOODS, payload });
export const addPlayersToFieldAction = payload => ({ type: constants.PLAYERS, payload });
export const setModelStore = payload => ({ type: constants.SET_MODEL_STORE, payload });
export const setPlayerStore = payload => ({ type: constants.SET_PLAYER_STORE, payload });
export const setShowModelStore = payload => ({ type: constants.SET_SHOW_MODEL_STORE, payload });
export const updatePlayerCoordinatesStore = payload => ({ type: constants.UPDATE_PLAYER_COORDINATES_STORE, payload });