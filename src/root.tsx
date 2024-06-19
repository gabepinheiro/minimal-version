import { Route, Routes } from 'react-router-dom'

export function Root() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
    </Routes>
  )
}
