import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { IGame } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface IProps {
  game: IGame
}

const GameCard = ({ game }: IProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justify={'space-between'} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
