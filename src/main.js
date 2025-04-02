import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Amazon Scraper</h1>
    <input type="text" id="searchInput" placeholder="Enter search keyword" value="zen e a arte de manutencao de motocicletas"/>
    <button id="scrapeButton">Scrape</button>
    <div id="results"></div>
  </div>
`

document.getElementById('scrapeButton').addEventListener('click', () => {
  const keyword = document.getElementById('searchInput').value;
  fetch(`http://localhost:3000/scrape?keyword=${encodeURIComponent(keyword)}`)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      Object.keys(data).forEach(key => {
        const element = document.createElement('div');
        const { title, rating, reviews, imageURL } = data[key];
        console.log('Data:', data[key]);
        element.innerHTML = `
          <div class="result">
            <h2>${title}</h2>
            <p><strong>Rating:</strong> ${rating}</p>
            <p><strong>Reviews:</strong> ${reviews}</p>
            <img src="${imageURL}" alt="${title}" />
          </div>
        `;
        resultsDiv.appendChild(element);
      });
      
    })
    .catch(error => console.error('Error:', error));
});

