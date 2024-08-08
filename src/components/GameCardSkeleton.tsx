import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='240px' />
      <CardBody paddingY={1}>
        <SkeletonText paddingY={2} />
        <SkeletonText paddingY={2} />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
