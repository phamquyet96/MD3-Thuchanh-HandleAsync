function handleAsync(myMoney, carPrice) {
    return new Promise((resolve, reject) => {
        if (myMoney >= carPrice) {
            resolve("Du tien mua xe")
        } else {
            reject("Khong du tien mua xe")
        }
    })
}

handleAsync(2, 3)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })