import { Key } from '@/type';
import Vue from 'vue';
import { Mutation } from 'vuex';
import { MutationTree } from '../mutations';
import TestState from './types';

export enum TestMutation {
    clear = 'clear',
}

const mutations: MutationTree<TestState, TestMutation> = {
    [TestMutation.clear](state, key) {
        Vue.set(state, key, '')
    },
}

export default mutations;