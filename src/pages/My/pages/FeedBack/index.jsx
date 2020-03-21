import React, { Component } from 'react'
import './style.scss'
import NavHeader from '../../../../components/NavHeader/NavHeader'
import { List, TextareaItem,Toast,ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
// import add from './img/add2x.png'


class FeedBackbe extends Component {
    constructor(props) {
          super(props)
          this.state={
              files:[],
              multiple: false
          }
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    onChange = (files, type, index) => {
        this.setState({
          files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
    }
    handleSubmit(){
        Toast.success('提交成功', 2);
    }
    render(){
        const { getFieldProps } = this.props.form;
        const { files } = this.state;
        return (
            <>
               <NavHeader
                    back="back"
                    title="反馈"
                    path="/my"
                >
                </NavHeader>
                <div className="containFeed">
                <h2 className="other">其他</h2>
                <div className="addimg">
                    <List renderHeader={() => 'Auto / Fixed height'}>
                        <TextareaItem
                            {...getFieldProps('note1')}
                            rows={3}
                            placeholder="需要反馈的问题"
                        />
                    </List>
                    
                    <div className="addpic">
                        <WingBlank>
                            <SegmentedControl
                            selectedIndex={this.state.multiple ? 1 : 0}
                            onChange={this.onSegChange}
                            />
                            <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            selectable={files.length < 7}
                            multiple={this.state.multiple}
                            className="imgsize"
                            />
                        </WingBlank>
                    <span className="addspan">添加图片</span>
                    </div>
                </div>
                <button onClick={this.handleSubmit}>提交</button>
                </div>
            </>
            
        )
    }
}

let FeedBack=createForm()(FeedBackbe)

export default FeedBack