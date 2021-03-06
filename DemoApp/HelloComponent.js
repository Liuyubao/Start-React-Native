/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
/**
 * ES6方式创建
 */
export default class HelloComponent extends Component{
    render() {
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello{this.props.name}</Text>
    }
}


/**
 * ES5方式创建
 */
// var HelloComponent=React.createClass({
//     render() {
//         return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello</Text>
//     }
// })
//
// module.exports = HelloComponent;


/**
 * 函数式方式创建
 * 无状态
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello{props.name}</Text>
// }
//
// module.exports=HelloComponent;