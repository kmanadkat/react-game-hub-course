import { Heading } from '@chakra-ui/react'
import { IGameQuery } from '../App'

interface IGameHeadingProps {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery }: IGameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

  return (
    <Heading as='h1' marginY={5} fontSize='4xl'>
      {heading}
    </Heading>
  )
}

export default GameHeading
