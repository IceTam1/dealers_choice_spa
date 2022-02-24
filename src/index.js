const ul = document.querySelector('ul');

ul.addEventListener('click', async (ev)=> {
  if(ev.target.tagName === 'LI') {
    const id = ev.target.getAttribute('data-id');
    await axios.delete(`/api/pets/${id}`);
    init();
  }
});
const init = async () => {
  const response = await axios.get('/api/pets');
  const pets = response.data
  const html = pets.map(pet => {
    return `
    <li data-id='${pet.id }'> ${pet.name} </li>
    `;
  }).join('')
  ul.innerHTML = html;
}
init();