import './styles/global.css'
import { Text } from './components/Text';

export function App() {

  return (
    <>
      <h1 className='font-bold text-2xl text-gray-500' >Ola mundo!</h1>
      <Text>Teste</Text>
      <button className='bg-cyan-500 bg-violet-500 font-medium px-8 py-3 rounded text-gray-900 hover:bg-cyan-300'>
        Enviar
      </button>

    </>
  )
}

