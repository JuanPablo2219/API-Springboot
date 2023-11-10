interface Character {
    id: number;
    nombre: string;
    ciudad: string;
  }

  const url = 'http://localhost:8081/generos';


async function fetchCharacter () {
    const response = await fetch(url);
    const data = await response.json();

    displayCharacters (data);
}

function displayCharacters(characters: any[]) {
    const container = document.getElementById(`characters-container`);
    if (container) {
        characters.forEach(character => {
            container.innerHTML += `
            <div class="character-card">
                <h2>${character.id}</h2>
                <h2>${character.nombre}</h2>
                <p>${character.ciudad}</p>
            </div>`;
        });
    }
}

fetchCharacter();