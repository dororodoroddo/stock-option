import AxiosApi from "@/API";
import { Key } from "@/type";
import { Action } from "vuex";
import { ActionConstructor } from "../actionConstructor";
import TestState from './types';

export enum TestActions {
    ABC = 'abc',
}
const actionConstructor: ActionConstructor<TestState, TestActions> = (api) => {
    return {
        [TestActions.ABC](store, data: string) {
            return new Promise((resolve, reject)=>{
                resolve('');
            })
        }
    }
}

export default actionConstructor;