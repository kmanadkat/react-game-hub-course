import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { IGameQuery } from '../App'

interface IGameGridProps {
  gameQuery: IGameQuery
}

const GameGrid = ({ gameQuery }: IGameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]

  if (error) return <Text>{error}</Text>

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding='10px' marginBottom={10}>
      {isLoading &&
        skeletons.map((_, index) => (
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {!isLoading &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  )
}

export default GameGrid
