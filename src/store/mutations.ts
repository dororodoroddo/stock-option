import { Key } from '@/type';
import Vue from 'vue';
import { Mutation } from 'vuex';
import RootState from './types';

export type MutationTree<State, Mutations extends Key> = {
    [K in Mutations]: Mutation<State>
}

export enum RootMutation {
    clear = 'clear',
}

const mutations: MutationTree<RootState, RootMutation> = {
    [RootMutation.clear](state, key) {
        Vue.set(state, key, '')
    },
}

export default mutations;