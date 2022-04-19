const toggle = document.getElementById('toggle')
const jokeDad = document.getElementById('jokeDad')
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

  async function fetchDad() {
    const response = await fetch("http://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.json();
    jokeDad.textContent = data.joke
    return data;
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