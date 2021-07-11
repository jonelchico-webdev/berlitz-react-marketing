import * as React from 'react'
import styled from '@emotion/styled'

import { size, colors } from '../../styles/variables'

const StyledFooterLeftContainer = styled.div`
  padding-top: 3em;
  padding-bottom: 3.5em;
  padding-left: 4em;
  padding-right: 4em;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.border};


  @media (max-width: ${size.tablet}) {
    padding-left: 3em;
    padding-right: 3em;
  }

`

interface FooterLeftContainerProps {
  className?: string
}

const FooterLeftContainer: React.FC<FooterLeftContainerProps> = ({ className }) => {

  return <StyledFooterLeftContainer className={className}>
    footer

  </StyledFooterLeftContainer>
}

export default FooterLeftContainer
