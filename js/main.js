const toggle = document.getElementById('toggle')
toggle.addEventListener('click', changeJoke)
document.getElementById('getNorris').addEventListener('click', fetchNorris)
document.getElementById('getDad').addEventListener('click', fetchDad)

function fetchNorris(){
  const url = 'https://api.chucknorris.io/jokes/random?category=animal,career,fashion,history,movie,music,science,sport,travel'
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.getElementById('jokeNorris').textContent = data.value
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }

  function fetchDad(){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
        'X-RapidAPI-Key': 'e81e6f3e96msh5b3b5e7cad6d3ccp1e4dc5jsn4ef6feea3974'
      }
    }   
      fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(res => res.json())
        .then(data => {
          document.getElementById('jokeDad').textContent = data.body.setup
          document.getElementById('jokeDadPunch').textContent = data.body.punchline
          console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }


function changeJoke(){
  document.querySelector('header').classList.toggle('background');
  document.getElementById('jokeFactDad').classList.toggle('hide')
  document.getElementById('jokeFactNorris').classList.toggle('hide')
  document.getElementById('container').classList.toggle('chuck');
  document.getElementById('joke').classList.toggle('jokeBg');
  document.getElementById('norris').classList.toggle('hide');
  document.getElementById('dad').classList.toggle('hide');
}