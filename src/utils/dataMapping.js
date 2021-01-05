exports.mapToArray = (data) => {
    let arr = []
    for (const [key, value] of Object.entries(data? data : {})) {
        arr.push({ id: key, ...value })
    }
    return arr
}