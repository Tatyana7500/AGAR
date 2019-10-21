import constants from './../../constants';

export const mouseMove = payload => ({ type: constants.MOUSE_MOVE, payload });
export const setModelStore = payload => ({ type: constants.SET_MODEL_STORE, payload });
export const setPlayerStore = payload => ({ type: constants.SET_PLAYER_STORE, payload });
export const setShowModelStore = payload => ({ type: constants.SET_SHOW_MODEL_STORE, payload });
export const updatePlayerCoordinatesStore = payload => ({ type: constants.UPDATE_PLAYER_COORDINATES_STORE, payload });
export const showModalAction = payload => ({ type: constants.SHOW_MODAL, payload });
export const updateLeaderPlayers = payload => ({ type: constants.SET_LEADER_PLAYERS_STORE, payload });