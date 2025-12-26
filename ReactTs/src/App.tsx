import './App.css'
import AuthPage from './components/AuthPage.tsx'
import Card from './components/Card.tsx'
import ChaiCard from './components/ChaiCard.tsx'
import Counter from './components/Counter.tsx'
import TeaStall from './components/TeaStall.tsx'

import type { CardProps } from "./type.ts"

const menu: CardProps[] = [
  { count: 2, title: "ilaichi Chai", price: 20 },
  { count: 3, title: "milky Chai", price: 30 },
  { count: 1, title: "masala Chai", price: 25 },
]
function App() {
  return (
    <>
      <div>
        <Card title="lets go"  footer={<button>oh yaa!</button>}/>
        <h1>Vite + React</h1>
        <AuthPage onSubmit={(detail) => {
          console.log("Name = ", detail.name)
          console.log("Email = ", detail.email)
          console.log("Password = ", detail.password)
        }} />
        <ChaiCard title="Iphone 17 pro" price={145000} count={1} />
        <ChaiCard title="google pixel 8 pro" price={65000} count={1} />
        <ChaiCard title="macbook air 3 pro" price={245000} count={1} />
      </div>
      <div>
        <Counter />
        <TeaStall items={menu} />
      </div>

    </>
  )
}

export default App
