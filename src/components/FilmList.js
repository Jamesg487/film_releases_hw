const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <li key={film.id}><a style={{ textDecoration: 'none' }} href={film.url} target="_blank" rel="noreferrer" >{film.name}</a></li>
        )
    })

    return (
        <>
        {filmNodes}
      </>
    )
}

export default FilmList;