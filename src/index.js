const ul = document.querySelector('ul');
const init = async () => {
  const response = await axios.get('/api/pets');
  const pets = response.data
  const html = pets.map(pet => {
    return `
    <li> ${pet.name} </li>
    `;
  }).join('')
  ul.innerHTML = html;
}
init();