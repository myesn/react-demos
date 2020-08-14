import React from "react";
import PropTypes from 'prop-types'

/**
 * 使用 PropTypes 进行类型检查
 */
export default class TypeCheckingWithPropTypes extends React.Component{
    render(){
        return (
            <div>
                prop types: {this.props.title}
            </div>
        )
    }
}

// 默认 Prop 值
TypeCheckingWithPropTypes.defaultProps = {
    title: 'default title'
}

// PropTypes 验证
TypeCheckingWithPropTypes.propTypes = {
    title: PropTypes.string.isRequired
}