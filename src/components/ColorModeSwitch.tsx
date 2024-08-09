import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack>
      <Switch colorScheme='teal' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap'>{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
