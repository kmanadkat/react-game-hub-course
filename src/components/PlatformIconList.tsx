import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

import { IPlatform } from '../hooks/useGames'
import { IconType } from 'react-icons'

interface IProps {
  platforms: IPlatform[]
}

const PlatformIconList = ({ platforms }: IProps) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
  }

  return (
    <HStack marginY={3}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' h={6} w={6} marginX={1} />
      ))}
    </HStack>
  )
}

export default PlatformIconList
