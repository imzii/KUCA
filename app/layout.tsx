'use client'

import './globals.css'
import React from 'react'
import { Metadata } from 'next';
import Image from 'next/image'
import whiteLogo from '../public/whiteLogo.png'
import blackLogo from '../public/blackLogo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'KUCA - 한국대학생클래식기타연합회',
  description:
    '한국대학생클래식기타연합회 KUCA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isHomePage = usePathname() == '/'

  return (
    <html lang="ko">
      <body>
        <header style={{ color: isHomePage ? 'white' : 'black' }}>
          <div>
            <Image
              src={isHomePage ? whiteLogo : blackLogo}
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
              <Link href='/'>홈</Link>
            </li>
            <li>
              <Link href='/about'>소개</Link>
            </li>
            <li>
              <Link href='/activity'>활동</Link>
            </li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
