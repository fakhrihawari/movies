export const  getLocalStorage = function(key){
    const jsonValue =localStorage.getItem(key);
    if(jsonValue !=null) return JSON.parse(jsonValue);
    return null;
}

export const setLocalStorage = function(key,value){
    localStorage.setItem(key,JSON.stringify(value));
}