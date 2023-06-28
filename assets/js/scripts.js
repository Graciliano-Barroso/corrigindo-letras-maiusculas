const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['porTO VELho', 'rIO DE jANEiro', 'maNAUs', 'cuiABá'];

for (const city of cities) {
  // write your code just below here
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0,1);
  const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
