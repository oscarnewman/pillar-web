import React from 'react'
import Container from '../components/util/Container'
import { Stack } from '@oscarnewman/twist'

const NewIndex = () => {
  return (
    <div className="main h-full">
      <Container>
        <Stack space={24}>
          <div className="flex justify-center">
            <h1 className="text-6xl text-white font-black font-sans">
              Give like the professionals.
            </h1>
          </div>
        </Stack>
      </Container>
      <style jsx>{`
        .main {
          background-image: repeating-linear-gradient(
              80deg,
              hsl(55, 0%, 7%) 0px,
              hsl(55, 0%, 7%) 10px,
              transparent 10px,
              transparent 12px
            ),
            repeating-linear-gradient(
              228deg,
              hsl(55, 0%, 7%) 0px,
              hsl(55, 0%, 7%) 10px,
              transparent 10px,
              transparent 12px
            ),
            repeating-linear-gradient(
              127deg,
              hsl(55, 0%, 7%) 0px,
              hsl(55, 0%, 7%) 10px,
              transparent 10px,
              transparent 12px
            ),
            linear-gradient(-45deg, rgb(92, 92, 92), rgb(62, 62, 62));
        }
      `}</style>
    </div>
  )
}

export default NewIndex
