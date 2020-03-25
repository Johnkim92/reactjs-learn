import {createAction, handleActions, handleAction} from 'redux-actions';

// 카운터 관련 상태 로직
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수를 만듭니다.
// 이 함수들은 나중에 다른 파일에서 불러와야하므로 내보내줍니다.
export const increment = () => ({type:INCREMENT});
export const decrement = () => ({type:DECREMENT});

// 모듈의 초기 상태 정의
const initialState = {
    number: 0
};

// // 리듀서를 만들어서 내보내줌
// export default function reducer(state= initialState, action){
//     // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환
//     // state = initialState 는 initialState를 기본값으로 설정해 준것
//     switch(action.type) {
//         case INCREMENT:
//             return {number:state.number +1};
//         case DECREMENT:
//             return {number:state.number -1}
//         default:
//             return state; 
//             // 아무일도 일어나지 않으면 현재상태 반환
//     }
// }
// handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로
// 이루어진 객체이고 두번째 파라미터는 초기상태이다.
export default handleActions({
    [INCREMENT]: (state, action) => {
        return {number: state.number + 1};
    },
    [DECREMENT]:({number}) => ({number: number -1})
}, initialState);