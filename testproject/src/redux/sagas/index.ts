
import {select, takeEvery,takeLatest,throttle} from 'redux-saga/effects'
export default function* defSaga(){
    yield takeEvery('increment',function*(){
        const user =yield select()
        console.log('increnment',user)
        console.log('increment')
        yield 'hello'
    })
    yield takeLatest('increment',function*(){
        console.log('incrementtakeLatest')
        yield 'hello'
    })
    yield throttle(0,'increment',function*(){
        console.log('throttle')
        yield 'hello'
    })
    console.log("bilibili")
    yield 'hello'
}
