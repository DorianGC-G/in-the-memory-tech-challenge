import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 10px 0px;
`
export const Revenue = styled.h4`
  color: black;
  position: absolute;
  top: 0px;
  left: 0px;

`
export const Time = styled.h4`
  color: black;
  position: absolute;
  bottom: 0px;
  right: -10px;
`
export const GraphContainer = styled.div`
  margin: 10px 0px;
  width: 500px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const GraphBorder = styled.div`
  width: 450px;
  height: 200px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`
export const GraphBar = styled.div`
  width: 25px;
  background-color: #264653;
  border-radius: 5px 5px 0px 0px;
  position: relative;
  :hover {
    background: #1479e5;;
    span {
      display: block;
    }
  }
`
export const Total = styled.span`
  position: absolute;
  top: -25px;
  left: -4px;
  display: none;
`
export const Date = styled.span`
  position: absolute;
  bottom: -25px;
  left: -12px;
  display: none; 
`
