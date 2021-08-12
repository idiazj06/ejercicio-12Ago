const API_URL = 'https://rickandmortyapi.com/api/character'
const items = document.getElementById('items');
const fragment = document.createDocumentFragment();
const templateCard = document.getElementById('template-cards').content

// console.log(templateCard)


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const resultadosData = data.results

        console.log(resultadosData)

        // console.log(res)
        //  console.log(resultadosData)
        pintarCards(resultadosData)
    } catch (error) {
        console.log(error)
    }

}


/* const pintarCards = resultadosData =>{
    resultadosData.forEach(card=>{
        const {id,name,status,species,location,episode,image} = card

        document.getElementById('cards').dataset.id = id;
        document.querySelector('h1').textContent = name;
        document.querySelector('h3').textContent = status + ' - ' + species;
        document.getElementById('ultLocacion').textContent = location.name;
        document.querySelector('img').setAttribute('src',image)

        


        

        const fetchAparicion = async () =>{
            const apaURL = episode[0]
            try{
                const res = await fetch (apaURL)
                const data = await res.json();
                pintarAparicion(data)

                 console.log(data)
            }
            catch (error) {
                console.log(error)
            }
            
        }

        const pintarAparicion =  data =>{
            const{name} = data;
            document.getElementById('primAparicion').textContent = name;
        }
        

        fetchAparicion()
        
    })
} */
const pintarCards = resultadosData => {
    resultadosData.forEach(card => {
        const {
            id,
            name,
            status,
            species,
            location,
            origin,
            image
        } = card

        templateCard.getElementById('cards').dataset.id = id;        
        templateCard.querySelector('h2').textContent = name;
        templateCard.querySelector('#span').classList = status
        templateCard.querySelector('#status').textContent = status ;
        templateCard.querySelector('#especie').textContent = species ;
        templateCard.getElementById('ultLocacion').textContent = location.name;
        templateCard.querySelector('img').setAttribute('src', image)
        templateCard.getElementById('origen').textContent = origin.name
        
        
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
        

        
    })

    items.appendChild(fragment)
    
}


console.log(document)

