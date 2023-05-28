/**
 * @param {number} millis
 */
async function sleep(millis) {
    let delay = new Promise(resolve => setTimeout(resolve, millis))
    return delay;
}
let t = Date.now()
sleep(1000).then(() => {
    console.log(Date.now() - t)
})
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

