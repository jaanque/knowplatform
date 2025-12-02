import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedFiles from './components/FeaturedFiles'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedFiles />
      </main>
      <Footer />
    </>
  )
}

export default App
