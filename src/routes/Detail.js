import React from 'react';

// redirection처리를 위해 class형으로 변경
// Detail Component는 Route로 설정되어 있어서, 기본적으로 Props를 받는다.
class Detail extends React.Component {

    componentDidMount() {
        // console.log(this.props) -> history를 이용하여 redirection

        const {location, history} = this.props;
        console.log(location.state)

        if(location.state === undefined){
            history.push("/");
        }
    }

    render() {
        // render함수가 componentDidMount함수보다 선행되므로,
        // 직접적으로 '/movie/${id}'을 호출하면, props에 location.state이 없다. 이를 예외처리 해야한다.
        // 2가지 방법이 존재.
        // 1. 직접적으로 예외처리 state가 undefined인지 아닌지. 
        console.log(this.props)
        const {location} = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;