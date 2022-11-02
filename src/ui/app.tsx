import { ApolloProvider } from '@apollo/client'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'

import client from '@/infrastructure/services/api/client'
import { CharacterList, CharacterSearch } from '@/ui/views'

import GlobalStyle from '@/ui/theme/globalStyle'

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Routes>
        <Route path="list" element={<CharacterList />} />
        <Route path="search" element={<CharacterSearch />} />
        <Route path="*" element={<Navigate to="/list" replace />} />
      </Routes>
    </ApolloProvider>
  </BrowserRouter>
)

export default App
