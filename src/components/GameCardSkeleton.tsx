import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width='360px' borderRadius='10px' overflow='hidden'>
      <Skeleton height='240px' />
      <CardBody paddingY={1}>
        <SkeletonText paddingY={2} />
        <SkeletonText paddingY={2} />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
