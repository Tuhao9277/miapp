import React, { Component } from 'react'
import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'
import { List, Switch ,Button, WhiteSpace, WingBlank} from 'antd-mobile';
import { createForm } from 'rc-form';

const Item = List.Item;
class Sett extends Component {
    constructor(props) {
          super(props)
          this.state={}
    }
    render(){
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="set">
                <NavHeader 
                back="back"
                title="设置"
                >
                </NavHeader>
                <List renderHeader={() => 'Align Vertical Center'} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>家庭管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>房间管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>检查固件更新</Item>
                </List>
                <form>
                <List
                    renderHeader={() => 'Form Validation'}
                    renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}
                >
                    <Item
                    extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />}
                    >快捷开关音效</Item>
                    <Item arrow="horizontal" onClick={() => {}}>设备显示模式</Item>
                    <Item arrow="horizontal" onClick={() => {}}>快捷操作卡片</Item>
                    <Item arrow="horizontal" onClick={() => {}}>消息设置</Item>
                    <Item arrow="horizontal" onClick={() => {}}>清理缓存</Item>
                    <Item arrow="horizontal" onClick={() => {}}>语音设备授权管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>实验室功能</Item>
                </List>
                </form>
                <List renderHeader={() => 'Align Vertical Center'} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>地区</Item>
                    <Item arrow="horizontal" onClick={() => {}}>多语言</Item>
                    <Item arrow="horizontal" onClick={() => {}}>关于米家</Item>
                </List>
                <WingBlank>
                <Button>退出登录</Button><WhiteSpace />
                </WingBlank>
            </div>
            
        )
    }
}
let Setting=createForm()(Sett)

export default Setting
