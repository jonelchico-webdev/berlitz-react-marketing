import * as React from 'react'
import styled from '@emotion/styled'

import { widths, size } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledCardContainer = styled.div`
  /* width: auto; */
  background-color: white;
  max-width: ${getEmSize(widths.lg)}em;
  border-radius: .2em;
  box-shadow: .05em .05em 1em #e4e2e2;
  min-width: 80vw;
  min-height: 80vh;
  /* max-height: vh; */
  display: flex;
  flex-direction: row;


  @media (max-width: ${size.laptop}) {
    min-width: 90vw;
  }
  @media (max-width: ${size.tablet}) {
    min-height: 95vh;
    max-height: 80vh;
    max-width:  90vw;
  }
  @media (max-width: ${size.tablet}) {
    overflow-y: scroll;
  }
`

interface CardContainerProps {
  className?: string
}

const CardContainer: React.FC<CardContainerProps> = ({ children, className }) => <StyledCardContainer className={className}>
  {children}
</StyledCardContainer>

export default CardContainer
