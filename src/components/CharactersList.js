import { fetchCharacters } from "../api/repository";

export const CharactersList = ({ characters }) => {
  const { name, image, id } = characters;

  return (
    <ul className="card-group row row-cols-5 p-4">
      {characters.map((character) => (
        <div className="col mb-4 shadow p-3 mb-5 bg-white rounded">
          <div key={character.id} className="card h-100">
            <img
              alt={character.name}
              src={character.image}
              className="card-img"
            />
            <div className="card-title">{character.name}</div>
          </div>
        </div>
      ))}
    </ul>
  );
};
