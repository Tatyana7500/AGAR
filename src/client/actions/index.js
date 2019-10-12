import constants from './../../constants';

export const addFoodsToFieldAction = payload => ({ type: constants.FOODS, payload });
export const addSelfPlayerAction = payload => ({ type: constants.I_PLAYER, payload });