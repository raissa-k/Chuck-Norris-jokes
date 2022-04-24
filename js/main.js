const toggle = document.getElementById('toggle')
const jokeDad = document.getElementById('jokeDad')
toggle.addEventListener('click', changeJoke)
document.getElementById('getNorris').addEventListener('click', fetchNorris)
document.getElementById('getDad').addEventListener('click', fetchDad)
document.getElementById('getLeon').addEventListener('click', fetchLeon)
document.getElementById('bonus').addEventListener('change', hideStuff)

function fetchNorris(){
  const url = 'https://api.chucknorris.io/jokes/random?category=animal,career,fashion,history,movie,music,science,sport,travel'
  
    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.getElementById('jokeNorris').textContent = data.value
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }

  function fetchLeon(){
    const url = 'https://api.chucknorris.io/jokes/random?name=Leon&category=dev'
    
      fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          document.getElementById('jokeLeon').textContent = data.value
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }

  async function fetchDad() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      const joke = await jokeRes.json();
      jokeDad.textContent = joke.joke;
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

function hideStuff(){
  document.getElementById('regular').classList.toggle('hide');
  document.getElementById('leon').classList.toggle('hide')
  document.getElementById('container').classList.toggle('leon');
  document.getElementById('joke').classList.toggle('hide');
  document.getElementById('leonJoke').classList.toggle('hide');
}

fetchDad();