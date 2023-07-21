function handleScroll() {
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");
  const headerHeight = header.getBoundingClientRect().height;
  if (window.scrollY > headerHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
}

window.addEventListener("scroll", handleScroll);

document.querySelector('body').addEventListener('submit', async (event) => {
  event.preventDefault();

  let input = document.querySelector('#searchInput').value;

  if (input !== '') {
    clearInfo();
    showWarning('Carregando....')

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=da89528f3f150e726a7adae47cc2e76f&units=metric&lang=pt_br`;

    
      let results = await fetch(url);
      let json = await results.json();
      
      
      if(json.cod === 200){
        showInfo({
          name: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          tempIcon: json.weather[0].icon,
          windSpeed: json.wind.speed,
          windAngle: json.wind.deg
        });


      } else {
        clearInfo();
        showWarning('Não encontramos esta Localização')
      }

  }

      
});

function showInfo(json) {
  showWarning('');

  document.querySelector('.resultado').style.display = 'block';
  document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
  document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

}
function clearInfo(){
  showWarning('');
  document.querySelector('.resultado').style.display = 'none';

}


function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg;
}
