console.log("hello")

// localStorage.setItem('name', 'zla')
// localStorage.setItem('name2', 'zla')
// console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('name2'))
// localStorage.removeItem('name')


// sessionStorage.setItem('name', 'bob')
// console.log(sessionStorage.getItem('name'))


// document.cookie = 'name=Kyle; expires=' + new Date(2020, 11, 1).toUTCString()
// document.cookie = 'lastname=Kyle; expires=' + new Date(2020, 11, 1).toUTCString()

// console.log(document.cookie)



function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Makeing request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processResponse(response) {
    return new Promise((resolve, reject) =>{
        console.log(`Processing response`)
        resolve(`Extra infomation + ${response}`)
    })
}

// makeRequest('Google').then(response =>{
//     console.log('Response received')
//     return processResponse(response)
// }).then(processedResponse=>{
//     console.log(typeof(processedResponse),processedResponse)
// }).catch(err =>{
//     console.log(err)
// })

async function doWork(){
    try{
        const response = await makeRequest('Google')
        console.log(`Response received. ${response}`)
        const processedResponse = await processResponse(response)
        console.log(`Processed response: ${processedResponse}`)    
    } catch (err) {
        console.log(err)
    }
}
doWork()
