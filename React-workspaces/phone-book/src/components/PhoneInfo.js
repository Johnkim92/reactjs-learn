// file: src/components/PhoneInfo.js
import React, { components, Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }
    state = {
        // 수정버튼을 눌렀을 때 수정값을 true로 설정
        // true 일 때엔 기존에 텍스트형태로 보여주던 값들을
        // input 형태로 보여준다.
        editing: false,
        // input의 값은 유동적이므로 값을 담기 위해 각
        // 필드를 위한 값도 설정한다.
        name: '',
        phone: ''
    }
    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    // editing 값을 반전시키는 함수, true <--> false
    handleToggleEdit = () => {
        const{editing} = this.state;
        this.setState({editing: !editing});
    }

    // input에서 onChange 이벤트가 발생할 때 호출ukjh
    handleChange = (e) => {
        const {name, value} =e.target;
        this.setState({
            [name]: value
        });
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info){
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState){
        // editing값이 바뀔 때 처리할 로직
        // 수정을 눌렀을 땐, 기존의 값이 input에 출력되고
        // 수정을 적용할 땐, input의 값들을 부모한테 전달
        const{info,onUpdate} = this.props;
        if(!prevState.editing && this.state.editing) {
            // editing값이 false -> true 로 전환시,
            // info의 값을 state에 넣어준다.
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            // editing값이 true->false로 전환될때,
            onUpdate(info.id,{
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }
    render() {
        console.log('render PhoneInfo'+this.props.info.id);
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;

        if(editing){ // 수정모드
            return(
                <div style={style}>
                    <div>
                        <input value={this.state.name} name="name" placeholder="이름" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input value={this.state.phone} name="phone" placeholder="전화번호" onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }
        
        // 일반 모드
        const {
            name, phone
        } = this.props.info;

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>수정</button>
            </div>
        );
    }
}

export default PhoneInfo;