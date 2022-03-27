import { ActionContext, ActionTree } from "vuex";
import RootState from './stateType';

const actions: ActionTree<RootState, any> = {
    inc(state: ActionContext<RootState, any>) {
        state.commit(`increment`);
    },
}

export default actions;