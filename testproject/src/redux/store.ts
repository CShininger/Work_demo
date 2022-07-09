//引入createStore，专门用于创建redux中最为核心的store对象
import {applyMiddleware, createStore} from 'redux'
//引入为Count组件服务的reducer
import personReducer from './person_reducer'
// import nameReducer from './name_reducer'
import defSaga  from './sagas'
import createSagaMiddleware from '@redux-saga/core'

const SagaMiddleware = createSagaMiddleware();
//暴露store
export default createStore(personReducer,applyMiddleware(SagaMiddleware));

SagaMiddleware.run(defSaga)