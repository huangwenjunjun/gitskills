import React,{Component} from "react"
import {connect} from "react-redux";
import {decrement, increment, reset} from "../../redux/actions/counter";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    _handleClick() {
        this.setState({
            count: ++this.state.count
        })
    }
    render() {
        return(
            <div>
                This is Home~~~~<br/>
                当前计数：{this.props.counter.count}<br/>
                <button onClick={() => this.props.increment()}>自增</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        },
    }
}

export default connect((state) => ({counter: state.counter}),mapDispatchToProps)(Home)