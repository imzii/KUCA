import './globals.css'
import React from 'react'
import styles from './page.module.css'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <meta property='og:title' content='KUCA' key='title' />
      </Head>
      <body>
        <header>
          <div>
            <Image
              src={logo}
              alt=''
              width='60'
              height='60'
            />
            <div>
              <h1>
                한국대학생클래식기타연합회
              </h1>
              <h2>
                Korea Univ. Classical Guitar Association
              </h2>
            </div>
          </div>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
