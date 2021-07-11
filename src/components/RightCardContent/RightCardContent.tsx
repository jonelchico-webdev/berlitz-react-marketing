import * as React from 'react'
import styled from '@emotion/styled'

import { colors, size } from '../../styles/variables'

const StyledRightCardContent = styled.div`
  flex: 40%;
  border-left: 1px solid ${colors.border};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 80vh;
  }


  @media (max-width: ${size.tablet}) {
    display: none;
  }
`

interface RightCardContentProps {
  className?: string
}

const RightCardContent: React.FC<RightCardContentProps> = ({ children, className }) => <StyledRightCardContent className={className}>
  {children}
</StyledRightCardContent>

export default RightCardContent
