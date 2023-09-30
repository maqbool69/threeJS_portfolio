import logo from './logo.svg'
import './App.css'

import styled from 'styled-components'
import Works from './components/Works'
import Hero from './components/Hero'
import Who from './components/Who'
import Contact from './components/Contact'

const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url(./img/bg.jpeg);
  &::-webkit-scrollbar {
    display: none;
  }
`
function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Who />
      <Contact />
    </Container>
  )
}

export default App
