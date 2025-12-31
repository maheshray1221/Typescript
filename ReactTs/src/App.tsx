import './App.css'
import AuthPage from './components/AuthPage.tsx'
import Card from './components/Card.tsx'
import ChaiCard from './components/ChaiCard.tsx'
import Counter from './components/Counter.tsx'
import { ListProduct } from './components/ListProduct.tsx'
import { Product } from './components/Product.tsx'
import { RequirmentPage } from './components/RequirmentPage.tsx'
import TeaStall from './components/TeaStall.tsx'

import type { CardProps, ProductProps } from "./type.ts"

const menu: CardProps[] = [
  { count: 2, title: "ilaichi Chai", price: 20 },
  { count: 3, title: "milky Chai", price: 30 },
  { count: 1, title: "masala Chai", price: 25 },
]

const list: ProductProps[] = [
  { name: "pen", quntity: 30, price: 500 },
  { name: "eraser", quntity: 50, price: 400 },
  { name: "gemetry box", quntity: 40, price: 700 }
]
function App() {
  return (
    <>
      <div>
        <RequirmentPage onSubmit={(detail) => {
          console.log(detail.name)
          console.log(detail.quantity)
          console.log(detail.price)
        }} />
      </div>
      <div>
        <h2>there are all staisnary Products</h2>
        <ListProduct items={list} />
      </div>
      <div>
        <h2>there are all listed products</h2>
        <Product name="handwash" quntity={20} price={2000} />
        <Product name="sarph" quntity={30} price={3000} />
        <Product name="toilet cleanner" quntity={10} price={2400} />
      </div>
      <div>
        <Card title="lets go" footer={<button>oh yaa!</button>} />
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
