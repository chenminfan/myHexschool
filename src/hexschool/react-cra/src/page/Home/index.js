import { Outlet } from 'react-router-dom'
import Header from '../../components/module/Header';
import ShoppingCartProvider from '../../components/module/ShoppingCart/ShoppingCartProvider';

export default function Home() {
  return (
    <ShoppingCartProvider>
      <Header headerTitle="react cart" >
      </Header>
      <main className="App">
        <Outlet />
      </main >
    </ShoppingCartProvider >
  )
}
