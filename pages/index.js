import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Homes from '../components/Home'

export default function Home() {
    return (
        <div className="">
            <Header />
            <Homes />
        </div>
    )
}
