import React, { useState } from 'react'
import styled from '@emotion/styled'
import swal from 'sweetalert'

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

const Button = styled.button`
  background: ${colors.blue};
  color: ${colors.white};
  cursor: pointer;

  font-size: .8em;
  font-weight: bold;
  padding: 1.5em 1em;
  width: 16em;
  border: 2px solid ${colors.blue};
  border-radius: .3em;
`;

interface FooterLeftContainerProps {
  className?: string
}

const FooterLeftContainer: React.FC<FooterLeftContainerProps> = ({ className }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [addedToCart, setAddedToCard] = useState<boolean>(false);



  const handleAddToCart = async () => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      swal(
        "Good job!",
        "You added product to cart!",
        "success",
        {
          button: "Close",
        }
      );
      setAddedToCard(true);
    }, 2000);

  }

  return <StyledFooterLeftContainer className={className}>
    <Button onClick={() => handleAddToCart()}>
      {
        loading ? 'LOADING'
          : addedToCart ? 'VIEW CART'
            : 'ADD TO CART'
      }
    </Button>
  </StyledFooterLeftContainer>
}

export default FooterLeftContainer
