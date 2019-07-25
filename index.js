import * as tcheck from './tcheck'

/**
 * 多个对象合并
 */
function isArrObj(i) {
  return tcheck.isArray(1) || tcheck.isObject(i)
}
export function merge (){
  const arr = Array.prototype.slice.call(arguments)
  let obj = {}
  let i = 0
  const len = arr.length

  for (; i<len; i++) {
    const el = arr[i]
    loop(obj, el)
  }
  function loop (obj, el) {
    if(el && typeof el === 'object'){ 
      for(let key in el){
        if(el.hasOwnProperty(key)){
          if(isArrObj(el[key])){
            obj[key] = tcheck.isArray(el[key]) ? [] : {}
            loop(obj[key],el[key]);
          }else{
            obj[key]=el[key];
          }
        }
      }
    }
  }
  return obj;
}