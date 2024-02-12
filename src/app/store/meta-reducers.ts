import {ActionReducer, INIT, MetaReducer, UPDATE} from "@ngrx/store";
import {initialState} from "./initial-state";

export function reHydrationMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
    return function (state, action) {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem('state');

            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem('state');
                }
            }
        }

        const nextState = reducer(state, action);
        localStorage.setItem('state', JSON.stringify(nextState));

        return nextState;
    }
}

export function logout(reducer: ActionReducer<any>): ActionReducer<any, any> {
    return function (state, action) {
        let nextState = reducer(state, action);

        if (action.type === 'LOGOUT') {
            nextState = reducer(initialState, action)
        }

        return nextState;
    }
}

export const metaReducers: MetaReducer<any>[] = [reHydrationMetaReducer, logout];
