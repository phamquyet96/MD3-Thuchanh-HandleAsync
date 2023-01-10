function download(url,callback){
    setTimeout(()=>{
        console.log(`Downloading ${url}...`)
        callback(url);
    },1000)
}
function process(picture){
    console.log(`Process ${picture}`)
}
let url=`https://rb.gy/ltdays`
download(url,process)