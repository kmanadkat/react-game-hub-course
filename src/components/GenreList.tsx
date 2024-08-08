import useGeneres from '../hooks/useGenres'

const GenreList = () => {
  const { data: genres } = useGeneres()

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
