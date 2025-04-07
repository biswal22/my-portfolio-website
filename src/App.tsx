import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Resume from './components/sections/Resume'
import Footer from './components/layout/Footer'
import Credentials from './components/sections/Credentials'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full flex flex-col">
        <Hero />
        <Experience />
        <Projects />
        <Credentials />
        <Resume />
      </main>
      <Footer />
    </div>
  )
}

export default App
