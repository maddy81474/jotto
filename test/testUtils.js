import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { Middlewares } from '../src/configureStore';
import { createStore,applyMiddleware } from 'redux';

export const storeFactory = (initalState) => {
    const createStoreWithMiddleWare = applyMiddleware(...Middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initalState);
};

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
};