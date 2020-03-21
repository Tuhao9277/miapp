export const getParams = ()=>{
    return window.location.hash.match(/[0-9]\d*$/).toString()
}