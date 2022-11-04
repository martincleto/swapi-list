import { SEARCH_MIN_CHARS } from '@/config'

import { StyledSearch } from './Search.style'

interface SearchProps {
  minChars?: number,
  placeholder?: string,
  onSearch: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ minChars = SEARCH_MIN_CHARS, placeholder = 'Type to search', onSearch }) => {
  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target
    const shouldCallback = value.length >= minChars || value.length === 0

    if (shouldCallback) onSearch(value)
  }

  return (
    <StyledSearch>
      <input placeholder={placeholder} type="search" onChange={handleOnChange} />
    </StyledSearch>
  )
}

export default Search