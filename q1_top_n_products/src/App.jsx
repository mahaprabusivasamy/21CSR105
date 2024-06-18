import React from 'react'
import N_elements from './Components/N_elements'
import LaptopGrid from './Components/LaptopGrid'
import{Container,Typography} from "@mui/material"
export default function App() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
          Top 10 elements
      </Typography>
      <LaptopGrid/>
    </Container>
  )
}


