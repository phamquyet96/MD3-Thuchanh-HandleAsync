let onMyBirthday=(isKayoSick)=>{
    return new Promise((resolve,reject)=>{
        if(!isKayoSick){
            resolve(2)
        }else{
            reject(new Error(`I am sad`))
        }
    },2000)
}

onMyBirthday(false)
.then((result)=>{
    console.log(`I have ${result} cakes and I am happy`)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log(`We still have a party`)
})

onMyBirthday(true)
.then((result)=>{
    console.log(`I have ${result} cakes and I am happy`)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log(`We still have a party`)
})