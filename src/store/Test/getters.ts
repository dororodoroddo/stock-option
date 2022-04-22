import { Key } from '@/type';
import { Getter } from 'vuex';
import { GetterTree } from '../getters';
import TestState from './types';

export enum TestGetters {
    ABC = 'abc',
}

const getters: GetterTree<TestState, TestGetters> = {
    [TestGetters.ABC](state): string {
        return state.abc;
    },
};

export default getters;