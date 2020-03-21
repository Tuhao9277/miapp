import React from 'react'

import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import './style.scss'
import 'assets/common.scss'
import NavHeader from '../../../components/NavHeader/NavHeader'
import TypeList from '../../../components/TypeList/TypeList'
import { connect } from 'react-redux'
import { getTypelist } from './store/actionCreator'


class Add extends React.Component {
  constructor(props) {
    super(props);
      this.fetchData();
    this.state = {
      title:"添加",
      back:"true",
      selectedTab: 'PowerSwitch',
      hidden: false,
      fullScreen: true,
    };
  }

  fetchData(){
    this.props.dispatch(getTypelist());
  }
  renderType(array){
    if (array.length > 0) {
      return array[0].sub_list.map((item,index)=>{
        return   <TypeList key={index} typeData={item}  />
      })
    }
  }

  render() {
    return (
      <>
        <NavHeader title={this.state.title} back={this.state.back}></NavHeader>
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 128 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#27BA8B"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition="top"
          >
            <TabBar.Item
              title="电源开关"
              key="PowerSwitch"
              icon={<div style={{
                width: '0px',
                height: '0px',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '100%',
                height: '2px',
                background: '#27BA8B',
                opacity: 1,
                }}
              />
              }
              selected={this.state.selectedTab === 'PowerSwitch'}
              onPress={() => {
                this.setState({
                  selectedTab: 'PowerSwitch',
                });
              }}
              data-seed="PowerSwitch"
            >
              <div className="type_list">{this.renderType(this.props.array.slice(0,1))}</div>
            </TabBar.Item>
            <TabBar.Item
              title="照明"
              key="lighting"
              icon={<div style={{
                width: '0px',
                height: '0px',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '100%',
                height: '2px',
                background: '#27BA8B',
                }}
              />
              }
              selected={this.state.selectedTab === 'lighting'}
              onPress={() => {
                this.setState({
                  selectedTab: 'lighting',
                });
              }}
              data-seed="lighting"
            >
              <div className="type_list">{this.renderType(this.props.array.slice(1,2))}</div>
            </TabBar.Item>
            <TabBar.Item
              title="空调"
              key="AirConditioner"
              icon={<div style={{
                width: '0px',
                height: '0px',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '100%',
                height: '2px',
                background: '#27BA8B',
                }}
              />
              }
              selected={this.state.selectedTab === 'AirConditioner'}
              onPress={() => {
                this.setState({
                  selectedTab: 'AirConditioner',
                });
              }}
              data-seed="AirConditioner"
            >
              <div className="type_list">{this.renderType(this.props.array.slice(2,3))}</div>
            </TabBar.Item>
            <TabBar.Item
              title="空气净化器"
              key="AirCleaner"
              icon={<div style={{
                width: '0px',
                height: '0px',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '100%',
                height: '2px',
                background: '#27BA8B',
                }}
              />
              }
              selected={this.state.selectedTab === 'AirCleaner'}
              onPress={() => {
                this.setState({
                  selectedTab: 'AirCleaner',
                });
              }}
              data-seed="AirCleaner"
            >
              <div className="type_list">{this.renderType(this.props.array.slice(3,4))}</div>
            </TabBar.Item>
            <TabBar.Item
              title="生活电器"
              key="LifeElectric"
              icon={<div style={{
                width: '0px',
                height: '0px',
                }}
              />
              }
              selectedIcon={<div style={{
                width: '100%',
                height: '2px',
                background: '#27BA8B',
                }}
              />
              }
              selected={this.state.selectedTab === 'LifeElectric'}
              onPress={() => {
                this.setState({
                  selectedTab: 'LifeElectric',
                });
              }}
              data-seed="LifeElectric"
            >
              <div className="type_list">{this.renderType(this.props.array.slice(4,5))}</div>
            </TabBar.Item>
          </TabBar>
      </div>
      </>
    );
  }
}

const mapState = state =>({
  array : state.typeReducer.list
})


export default withRouter(connect(mapState,null)(Add))
