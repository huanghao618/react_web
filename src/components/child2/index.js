import React from "react"
import PropTypes from 'prop-types';
class Child2 extends React.Component {
    constructor(props) {
        super(props)
    }
    click(){
        console.log(this.props)
    }
    render() {
        console.log(this.props)
        let {aa ,list,aaa,bbb,ccc} =this.props
        
        return (
            <div>
                <p>子组件-1</p>
                <p>{aa}</p>
                <button onClick={this.click.bind(this)}>子组件</button>
                <p>{bbb}</p>
                <p>{aaa}</p>
                <p>{ccc}</p>
        <div>{list}</div>
            </div>
        )

    }
}
//PropTypes 进行类型检查
Child2.propTypes = {
    bbb: PropTypes.string,
  };
  export default Child2