'use client'

import { useState } from 'react'
import BackwardButton from '@/assets/arrow_back.svg'

export default function Profiler() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {isOpen ? (
        <div className="flex flex-col w-8 h-full rounded-r-2xl bg-grey">
          <BackwardButton
            width={20}
            height={20}
            className="mr-2 mt-2 transform rotate-180"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      ) : (
        <div className="flex flex-col w-64 h-full rounded-r-2xl bg-grey">
          <BackwardButton
            width={20}
            height={20}
            className="ml-auto mr-2 mt-2"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      )}
    </>
  )
}
