
let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let apiKey = 'ddd77312-d317-44df-b987-724cfbce03d0';
let notFound = document.querySelector('.not__found');


searchBtn.addEventListener('click', function (e) {
    e.preventDefault();


    let word = input.value;

    if (word === '') {
        alert('Word is Required ')

        return;

    }


    getData(word)

})


async function getData(word) {

    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data = await response.json();

    console.log(data)

    // if data empty 
    if (!data.length) {

        notFound.innerText = ' No result Found 🤷🏻';
        notFound.style.fontSize = '20px';
        return;
    }
    //if data is suggestion

    if (typeof data[0] === 'string') {
        console.log(data);                                        

        let heading = 'h3';
        heading.innerText = 'Did you mean this ?';
        notFound.appendChild(heading);

       
    
    }

}


