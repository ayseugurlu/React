import React from 'react'
import DivStyle from './style/ContainerStyle'
import HeaderS, { LinkS} from './style/HeaderStyle'
import ButtonS, { TomatoButton } from './style/ButtonStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>Styled Components</HeaderS>
        <LinkS href="#">LINKS</LinkS>
        <ButtonS kemal>TIKLA 1</ButtonS>
        <ButtonS ayse>TIKLA 2</ButtonS>
        <ButtonS >TIKLA 3</ButtonS>

        <TomatoButton>TIKLA 4</TomatoButton>
        <TomatoButton halil>TIKLA 5</TomatoButton>
    </DivStyle>
  )
}

export default Home