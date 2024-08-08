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
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justify={'space-between'}>
          <PlatformIconList platforms={game.parent_platforms.map((platform) => platform.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
