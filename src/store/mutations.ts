import { MutationTree } from 'vuex';
import RootState from './stateType';

const mutations: MutationTree<RootState> = {
    increment(state: RootState) {
        state.test = 'test2';
    },
}

export default mutations;