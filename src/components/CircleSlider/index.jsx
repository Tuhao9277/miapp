import React from 'react';
class CirCleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        temp : this.props.value,
    }
    this.handleMouseMove =this.handleMouseMove.bind(this)
    this.handleTouchMove =this.handleTouchMove.bind(this)
  }
  componentDidMount(){

  }
  handleTouchMove = (e)=>{
    this.init(e)
  }
  handleTouchUp = (e)=>{
    window.removeEventListener("touchmove", this.handleTouchMove);
    window.removeEventListener("touchend", this.handleTouchUp);
  }
  handleTouchStart= ()=>{
    window.addEventListener("touchmove",this.handleTouchMove)
    window.addEventListener("touchend",this.handleTouchUp)
  }
  
  handleMouseMove = (e) =>{
    e.preventDefault()
    this.init(e)
  }  
  handleMouseUp= (e)=>{
    e.preventDefault();
    window.removeEventListener("mousemove",this.handleMouseMove)

  }
  handleMouseDown = (e)=>{
    e.preventDefault()
    window.addEventListener("mousemove",this.handleMouseMove)
    window.addEventListener("mouseup",this.handleMouseUp)
  }
  _circlerate(){
    return parseInt(
      (this.state.temp - this.props.min) * 100 /(this.props.max - this.props.min)
    ,10)
  }
  init(e){
    this.parseToDeg = this.parseToDeg.bind(this)
    this.lastTemper = this.props.temp
    const x = e.offsetX || e.changedTouches[0].clientX -152
   const y = e.offsetY || e.changedTouches[0].clientY  -146
   this.parseToDeg(x, y); 
   
  }
  parseToDeg(x,y){

    const cx = this.props.width / 2
    const cy = this.props.height / 2
    let deg
    let temp
    if (x >= cx && y <= cy) {
      deg = Math.atan((cy - y) / (x - cx)) * 180 / Math.PI
      temp =(270 - deg - this.props.angle / 2) /(360 - this.props.angle) * (this.props.max - this.props.min) + this.props.min
    } 
    else if (x >= cx && y >= cy) {
      deg = Math.atan((cy - y) / (cx - x)) * 180 / Math.PI
      temp = (270 + deg - this.props.angle / 2) / (360 - this.props.angle) * (this.props.max - this.props.min) + this.props.min
    } 
    else if (x <= cx && y <= cy) {
      deg = Math.atan((x - cx) / (y - cy)) * 180 / Math.PI
      temp =  (180 - this.props.angle / 2 - deg) / (360 - this.props.angle) * (this.props.max - this.props.min) + this.props.min;
    } 
    else if (x <= cx && y >= cy) {
      deg = Math.atan((cx - x) / (y - cy)) * 180 / Math.PI
      if (deg < this.props.angle / 2) {
        deg = this.props.angle / 2
      }
      temp = (deg - this.props.angle / 2) / (360 - this.props.angle) * (this.props.max - this.props.min) + this.props.min;
    }
    if (temp <= this.props.min) {
      temp = this.props.min
    }
    if (temp >= this.props.max) {
      temp = this.props.max
    }
    // 转换为接近步长的数
    temp = this.getTemps(temp)
    this.props.onValueChange && this.props.onValueChange(temp)
    this.setState({
      temp
    })
  }
  getTemps(tmps){
    const k = parseInt((tmps - this.props.min / this.props.step),10)
    const k1 = this.props.min + this.props.step * k
    const k2 = this.props.min + this.props.step * (k+1)
    if(Math.abs(k1 - tmps)>Math.abs(k2 - tmps)) return k2
    return k1
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.state.temp ){
      this.setState( {
          temp: nextProps.value,
      })
    }
  }
  render(){
    const {width,height,angle,r,strokeWidth,outArcColor,progressvalue,tabR,tabStrokeColor,tabStrokeWidth,tabColor} = this.props
    // 起点
    const cx = width /2
    const cy = height /2
    const prad = angle / 2 * (Math.PI / 180);
    const startX =  -(Math.sin(prad) * r) + cx;
    const startY =  (Math.cos(prad) * r) + cy;
    // 终点
    const endX =  (Math.sin(prad) * r) + cx;
    const endY =  (Math.cos(prad) * r) + cy;
    // 计算进度点
    const progress = parseInt(this._circlerate()*(360 - angle)/100,10)
    const t = progress + angle / 2
    const progressX = cx - Math.sin(t * (Math.PI / 180)) * r
    const progressY = cy + Math.cos(t * (Math.PI / 180)) * r
   
    const descriptions = [
      'M',
      startX,
      startY,
      'A',
      r,
      r,
      0,
      1,
      1,
      endX,
      endY
    ].join(' ')
    const progressdescription = [
      'M',
      startX,
      startY,
      'A',
      r,
      r,
      0,
      t>= 180 +angle / 2 ? 1 :0,
      1,
      progressX,
      progressY
    ].join(' ')
    return (
      
      
        <svg width={`${this.props.width}px`} height={`${this.props.height}px`} >
        <defs>
           
        <filter id="dropShadow" filterUnits="userSpaceOnUse">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                            <feOffset dx="2" dy="2" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.3" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
         </defs>


          <path d={descriptions} fill="none" stroke={outArcColor}strokeLinecap="round" strokeWidth={strokeWidth}   />
          <path d={progressdescription} fill="none" stroke={progressvalue} strokeLinecap="round"  strokeWidth={strokeWidth}  />
        <circle onMouseDown={this.handleMouseDown} onTouchStart={this.handleTouchStart} cx={progressX} cy={progressY} r={tabR}  stroke={tabStrokeColor} strokeWidth={tabStrokeWidth} fill={tabColor} filter="url(#dropShadow)" />
        </svg>
    );
  }
}

export default CirCleSlider;
