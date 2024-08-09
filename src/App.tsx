import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import { IGenre } from './hooks/useGenres'
import { IPlatform } from './hooks/usePlatforms'

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<IGenre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<IPlatform | null>(null)

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
          <GenreList onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector onSelectPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
