import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer';
import Card from './components/card'
import Header from './components/header'
import Nav from './components/nav'
import Navi from './components/navi'
export default function Home() {
  return (
      <div>
      <Navi></Navi>
      <Card></Card>
      <Footer/>
      </div>

  )
}
