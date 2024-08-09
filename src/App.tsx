import { useState } from 'react'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import { IGenre } from './hooks/useGenres'
import { IPlatform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'

interface IGameQuery {
  genre: IGenre | null
  platform: IPlatform | null
  sortOrder: string
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({ genre: null, platform: null, sortOrder: '' })

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '300px 1fr',
      }}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSortChange={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export type { IGameQuery }

export default App
