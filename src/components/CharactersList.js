export const CharactersList = ({ characters }) => {
  // деструктцризация объекта characters с целью получения name, image, id каждого персонажа(character)
  const { name, image, id } = characters;

  return (
    // отрисовываем на странице каждого персонажа, полученного с API
    <ul className="card-group row row-cols-5 p-4">
      {characters.map((character) => (
        <div
          key={character.id}
          className="col mb-4 shadow p-3 mb-5 bg-white rounded"
        >
          <div className="card h-100">
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
