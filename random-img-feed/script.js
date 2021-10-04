const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10

const resol = []

// for(let i = 0; i <= rows * 3; i++) {
//     const img = document.createElement('img')
//     // resol[i] = getRandomSize()
//     const randomResol = getRandomSize()
//     img.src = `${unsplashURL}${randomResol}`

//     if(resol.includes(randomResol)) {
//         getRandomSize()
//     } else {  
//         resol.push(randomResol)
//         container.appendChild(img)
//     }
// }

function createRandomImage() {
    const img = document.createElement('img')
    const randomResol = getRandomSize()
    img.src = `${unsplashURL}${randomResol}`

    if(resol.includes(randomResol)) {
        createRandomImage() // chamar de novo fodase
    } else {
        resol.push(randomResol)
        container.appendChild(img)
    }
}

for(let i = 0; i < rows * 3; i++) {
    createRandomImage();
}


function getRandomSize() { 
    return `${getRandomNumber()}x${getRandomNumber()}`
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300
}


// método ludi
// const generatedRandomNumbers = []
// function getRandomNumber() {
//   const random = Math.floor(Math.random() * 10 + 300)
//   if (generatedRandomNumbers.includes(random)) {
//      return getRandomNumber() // try again
//   }
//   generatedRandomNumbers.push(random)
//   return random
// }

