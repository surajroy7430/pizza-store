import React from 'react'
import SearchPizzaCards from './SearchPizzaCards'

const SearchedCards = ({ searchResults }) => {
  return (
    <div>
      {searchResults.length > 0 && <SearchPizzaCards recipes={searchResults} />}
    </div>
  )
}

export default SearchedCards
