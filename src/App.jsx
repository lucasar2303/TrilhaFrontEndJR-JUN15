import Menu from './components/Menu/Menu.jsx'
import Hero from './sections/Hero/Hero.jsx'
import About from './sections/About/About.jsx'
import PersonalInterests from './sections/PersonalInterests/PersonalInterests.jsx'
import Motivation from './sections/Motivation/Motivation.jsx'
import Form from './sections/Form/Form.jsx'

function App() {

  return (
    <>
      <Menu />
      <Hero />
      <About />
      <PersonalInterests />
      <Motivation />
      <Form/>
      <div className="footer">Desenvolvido por por <strong>Lucas Anastácio</strong></div>
    </>
  )
}

export default App
