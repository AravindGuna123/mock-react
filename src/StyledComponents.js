import styled from 'styled-components'

export const ParaContainer = styled.textarea`
  color: white;
  background-color: transparent;
  border-width: 0px;
  resize: none;
  outline: none;
  font-weight: ${props => (props.boldState ? 'bold' : '')};
  font-family: ${props => (props.italicState ? 'italic' : '')};
  text-decoration: ${props => (props.underlineState ? 'underline' : '')};
`

export const Para = styled.p`
  color: white;
`

export const BoldButton = styled.button`
  background-color: ${props => (props.boldState ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  background-color: ${props => (props.italicState ? '#faff00' : '#f1f5f9')};
`

export const UnderlineButton = styled.button`
  background-color: ${props => (props.underlineState ? '#faff00' : '#f1f5f9')};
`
