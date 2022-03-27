import { GetterTree } from 'vuex';
import RootState from './stateType';

const getters: GetterTree<RootState, any> = {
    doubleCount(state: RootState): string {
        return state.test;
    },
};

export default getters;