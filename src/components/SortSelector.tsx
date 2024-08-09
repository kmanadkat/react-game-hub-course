import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface ISortSelectorProps {
  onSortChange: (sortOrder: string) => void
  sortOrder: string
}

const SortSelector = ({ onSortChange, sortOrder }: ISortSelectorProps) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ]

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)?.label || 'Relevance'

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem key={sortOrder.value} onClick={() => onSortChange(sortOrder.value)}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
