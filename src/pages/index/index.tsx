import React from 'react'
import { View, Button, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'
import { IIndexPageProps } from './inderface'

const IndexPage: React.FC<IIndexPageProps> = (props) => {
    const { dispatch } = props
    function handleClick() {
        dispatch({
            type: 'user/cc',
            payload: 222222222222222
        })
    }
    return (
        <View>
            <Button className='dec_btn' onClick={handleClick}>async</Button>
            <Text>2222</Text>
        </View>
    )
}

export default connect(({ user }) => ({
    ...user,
}))(IndexPage)

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796

