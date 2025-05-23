import React from 'react'
import SearchBox from '@/components/SearchBox'
import Map from '@/components/Map'

const page = () => {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">CivicClima</h1>
          <p className="font-bold text-muted-foreground">Climate-related spending. At your fingertips.</p>
        </div>
        <div className="bg-card rounded-lg shadow-lg p-6 w-full">
          <SearchBox />
          <div className="mt-6">
            <Map />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page