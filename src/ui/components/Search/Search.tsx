import { StyledSearch } from './Search.style'

interface SearchProps {
  minChars?: number,
  placeholder?: string,
  onSearch: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ minChars = 3, placeholder = 'Type to search', onSearch }) => {
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