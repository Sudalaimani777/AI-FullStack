"use client";
import ClientButton from '@/components/ClientButton'
import ServerButton from '@/components/ServerButton'
import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <ClientButton />
      <ServerButton/>
    </>
  )
}

export default Home