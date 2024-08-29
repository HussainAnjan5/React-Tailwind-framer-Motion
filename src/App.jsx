import './App.css'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner/Banner2'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Service from './components/services/Service'
import Subscribe from './components/subscribe/Subscribe'


function App() {

  return (
    <main className='overflow-x-hidden bg-white text-dark'>
<Hero/>
<Service/>
<Banner/>
<Subscribe/>
<Banner2/>
<Footer/>
    </main>
  )
}

export default App
