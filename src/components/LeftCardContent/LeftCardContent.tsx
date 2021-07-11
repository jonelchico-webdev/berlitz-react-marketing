import * as React from 'react'
import styled from '@emotion/styled'


const StyledLeftCardContent = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
`

interface LeftCardContentProps {
  className?: string
}

const LeftCardContent: React.FC<LeftCardContentProps> = ({ children, className }) => <StyledLeftCardContent className={className}>
  {children}
</StyledLeftCardContent>

export default LeftCardContent
