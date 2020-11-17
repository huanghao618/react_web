import fetch from "./fetch"

export function aaa(params){
    return fetch({
        url:"/topics",
        method:"GET",
        params
    })
}
