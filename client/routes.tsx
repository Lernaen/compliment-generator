import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Compliment from './pages/Compliment.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/compliments/:id" element={<Compliment />} />
  </Route>,
)
