import { useState, useEffect } from "react";

import { Pagination } from "../Pagination";
import { CharactersList } from "../CharactersList";
import { fetchCharacters } from "../../api/repository";

export const Characters = () => {
  // объявляем  массив characters, который по умолчанию является пустым массивом
  const [characters, setCharacters] = useState([]);
  // объявляем currentPage(активная страница, которая должна отображаться в данный момент), по умолчанию это первая страница.
  const [currentPage, setCurrentPage] = useState(1);
  // объявляем кол-во отображаемых персонажей на одной странице, в данном случае 20
  const [charactersPerPage] = useState(20);

  // используем функцию fetchCharacters для отображения массива characters из API на странице
  useEffect(() => {
    fetchCharacters().then(({ results }) => {
      if (results && Array.isArray(results)) {
        setCharacters(results);
      }
    });
  }, []);
  console.log(characters);
  //при переключении  страницы изменяем currentPage
  const changePages = (page) => {
    setCurrentPage(page);
    console.log(page);
    console.log(currentPage);
    // но почему-то в консоли currentPage отображается, как previousPage , не могу понять, что не так...
  };
  // определяем, какие персонажы отображаются на каждой странице, в зависимости от значения charactersPerPage
  const lastCharacterIndex = currentPage * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;
  const charactersOnCurrentPage = characters.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );

  // определяем кол-во страниц с персонажами в зависимости от значения charactersPerPage
  const pages = Math.ceil(characters.length / charactersPerPage);
  // debugger;

  return (
    <div>
      <h1 className="display-3">Characters</h1>
      <Pagination currentPage={1} pages={pages} clickHandler={changePages} />
      <CharactersList characters={charactersOnCurrentPage} />
    </div>
  );
};
