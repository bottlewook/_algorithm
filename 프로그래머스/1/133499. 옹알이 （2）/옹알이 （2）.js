function solution(babbling) {
    let regexp = /(?<!aya)(aya)(?!aya)|(?<!ye)(ye)(?!ye)|(?<!woo)(woo)(?!woo)|(?<!ma)(ma)(?!ma)/g
    
    let result = babbling.reduce((acc, cur) => {
        if (cur.replace(regexp, '') === '') acc++
        return acc
    }, 0)
                                 
    return result
}