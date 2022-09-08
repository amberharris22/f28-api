const getResidents = document.querySelector('#residents');
const residentsContainer = document.querySelector('.residentsContainer');
const baseURL = 'https://swapi.dev/api';


const btnClick = () => {
    console.log('button clicked')
}
getResidents.addEventListener('click', btnClick)
 

const alderaanInfo = () => {
    axios.get(`${baseURL}/planets/2/`).then((res) => {
        let residentURL = res.data.residents;
        console.log(residentURL)
        for(let i=0; i<residentURL.length; i++) {
            axios.get(residentURL[i]).then((res) => {
                let residentName=document.createElement('h2')
                residentName.textContent = res.data.name
                residentsContainer.appendChild(residentName)
        })
    }
})
}
    
getResidents.addEventListener('click', alderaanInfo)

