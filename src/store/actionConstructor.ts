import AxiosApi from "@/API";
import { Key } from "@/type";
import { Action } from "vuex";
import RootState from './types';

export type ActionTree<State, Actions extends Key> = {
    [K in Actions]: Action<State, RootState>
}

export type ActionConstructor<State, Actions extends Key> = (api: AxiosApi) => ActionTree<State, Actions>;

export enum RootActions {
    ABC = 'abc',
}
const actionConstructor: ActionConstructor<RootState, RootActions> = (api) => {
    return {
        [RootActions.ABC](store, data: string) {
            return new Promise((resolve, reject)=>{
                resolve('');
            })
        }
    }
}

export default actionConstructor;