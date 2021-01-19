import state from "./state"
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}