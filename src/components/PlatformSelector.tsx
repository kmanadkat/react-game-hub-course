import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { IPlatform } from '../hooks/usePlatforms'

interface IProps {
  onSelectPlatform: (platform: IPlatform) => void
  selectedPlatform: IPlatform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: IProps) => {
  const { data, error, isLoading } = usePlatforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} disabled={!isLoading}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
