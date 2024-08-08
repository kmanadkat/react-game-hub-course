import { Box } from '@chakra-ui/react'

interface IProps {
  children: React.ReactNode
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box borderRadius='10px' overflow='hidden' width='360px'>
      {children}
    </Box>
  )
}

export default GameCardContainer
