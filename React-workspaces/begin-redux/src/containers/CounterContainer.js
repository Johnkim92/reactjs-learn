import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {CounterActions} from 'store/actionCreators';

class CounterContainer extends Component {
  handleIncrement = () => {
    CounterActions.increment();
  }
  handleDecrement = () => {
    CounterActions.decrement();
  }
  render() {
    const { handleIncrement, handleDecrement } = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    );
  }
}

/* 첫번째 파라미터 mapStateToProps : props 값으로 넣어줄 상태를 정의
   컴포넌트를 리덕스와 연동 할 때에는 connect를 사용한다.
   connect()의 결과는, 컴포넌트에 props를 넣어주는 함수를 반환한다.
   반환된 함수에 우리가 만든 컴포넌트를 넣어주면 된다.
*/
export default connect(
  (state) => ({
    number: state.counter.number
  })
)(CounterContainer);