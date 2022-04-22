import { Key } from '@/type';
import { Getter } from 'vuex';
import RootState from './types';

export type GetterTree<State, Getters extends Key> = {
    [K in Getters]: Getter<State, RootState>
}

export enum RootGetters {
    ABC = 'abc',
}

const getters: GetterTree<RootState, RootGetters> = {
    [RootGetters.ABC](state): string {
        return state.test;
    },
};

export default getters;