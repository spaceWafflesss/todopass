function hideList() {
  document.getElementById("dropdown").style.display = "none";
}
function showList() {
  document.getElementById("dropdown").style.display = "inline-block";
}


function filterFunction() {
  const input = document.getElementById('search');
  const filter = input.value.toLowerCase();
  const dropdown = document.getElementById('dropdown');
  const items = dropdown.getElementsByTagName('li');

  // Show dropdown if there's any text in the input
  dropdown.style.display = filter ? 'block' : 'none';

  // Loop through all items and hide those that don't match the search
  for (let i = 0; i < items.length; i++) {
      const txtValue = items[i].textContent || items[i].innerText;
      items[i].style.display = txtValue.toLowerCase().indexOf(filter) > -1 ? '' : 'none';
  }
}

fetch('other/stateListEmbed.txt')
  .then(response => response.text())
  .then(html => {
    // Insert the HTML content into the current page
    document.getElementById("dropdown").innerHTML = html;
  });