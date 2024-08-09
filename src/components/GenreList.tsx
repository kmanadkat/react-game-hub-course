import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGeneres, { IGenre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface IGenreListProps {
  onSelectGenre: (genre: IGenre) => void
}

const GenreList = ({ onSelectGenre }: IGenreListProps) => {
  const { data: genres, isLoading, error } = useGeneres()

  if (error) {
    return null
  }
  if (isLoading) {
    return <Spinner />
  }

  return (
    <List spacing={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='48px' borderRadius={8} />
            <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
