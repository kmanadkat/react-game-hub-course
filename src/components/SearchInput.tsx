import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface ISearchInputProps {
  onSearch: (value: string) => void
}

const SearchInput = ({ onSearch }: ISearchInputProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (searchInputRef.current) {
          onSearch(searchInputRef.current.value)
        }
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={searchInputRef} borderRadius={20} placeholder='Search games ...' variant='filled' />
      </InputGroup>
    </form>
  )
}

export default SearchInput
