import { Badge } from '@chakra-ui/react'

interface IProps {
  score: number
}

const CriticScore = ({ score }: IProps) => {
  let color = ''
  if (score >= 80) color = 'yellow'
  if (score >= 90) color = 'green'

  return (
    <Badge fontSize='16px' paddingX={2} borderRadius='4px' colorScheme={color}>
      {score}
    </Badge>
  )
}

export default CriticScore
