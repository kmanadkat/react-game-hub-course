import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGeneres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenreList = () => {
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
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
