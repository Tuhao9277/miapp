export const  getWeeks = ()=>{
    let weeks = ["日", "一", "二", "三", "四", "五", "六"]
    return "星期"+weeks[new Date().getDay()]
}