import React, { Component } from 'react'
import './equipment.scss'
import EquiItem from 'components/Equip/EquipItem'
import { connect } from 'react-redux'
import { getEquipment } from '../store/homeActions';
//设备
class Equipment extends Component {
  constructor(props) {
    super(props);
    if(this.props.array.length === 0){
      this.fetchData();
    }
}
fetchData(){
    this.props.dispatch(getEquipment());
}
  renderEquip(array){
    return array.map((item,index)=>{
      return  <div className='equip_contain' key={index}> <EquiItem equipData={item}  /> </div>
    })
  }
  render() {
    return (
      <div className='equipment'> 
        <p>常用</p>
        <div className="equip_item">{this.renderEquip(this.props.array)}</div>
      </div>
    )
  }
}
const mapState = state =>({
  array : state.homeReducer.list
})
export default connect(mapState,null)(Equipment)
