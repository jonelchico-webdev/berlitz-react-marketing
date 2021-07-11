import * as React from 'react'
import styled from '@emotion/styled'

import { size, colors } from '../../styles/variables'
import { ProductDetailType } from '../../types/product-types';

const StyledBodyLeftContainer = styled.div`
  padding: 2.5em 4em 2.5em 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  @media (max-width: ${size.tablet}) {
    padding-left: 3em;
    padding-right: 3em;
  }

  .details-container {
    display: flex;
    flex-direction: column;

    .details-row {
      b {
        margin-right: 1em;
      }
    }
  }

  .price-container {
    display: flex;
    flex-direction: row;

    .price {
      margin-right: 1em;
    }

    .price-before {
      color: ${colors.fontColorLight};
      text-decoration: line-through;
    }
  }

  .color-container {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
  }
`
const Select = styled.select`
  width: 10em;
  margin-top: .5em;
  height: 35px;
  background: white;
  color: gray;
  border: 1px solid #c7c7c7;
  border-radius: .5em;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;

  option {
    border: 1px solid #c7c7c7;
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;


interface BodyLeftContainerProps {
  className?: string
  descriptions: string
  selectedTab: number
  details: ProductDetailType
  price: number
  priceBefore: number
  setColor: React.Dispatch<React.SetStateAction<number>>
}

const BodyLeftContainer: React.FC<BodyLeftContainerProps> = ({ className, descriptions, selectedTab, details, price, priceBefore, setColor }) => {



  return <StyledBodyLeftContainer className={className}>

    {/* Description and Details */}
    {
      selectedTab == 0 ?
        <div className="description-container">
          <p>{descriptions}</p>
        </div>
        : <div className="details-container">
          <div className="details-row"><b>Type:</b> {details.type}</div>
          <div className="details-row"><b>Driver Diameter:</b> {`${details.driver}mm`}</div>
          <div className="details-row"><b>Frequency Response:</b> {details.frequency}</div>
          <div className="details-row"><b>Maximum Input Power:</b> {details.maximumInputPower}</div>
          <div className="details-row"><b>Sensitivity:</b> {details.sensitivity}</div>
        </div>
    }

    <div className="price-container">
      <h3 className="price">{`$${price}`}</h3>
      <h3 className="price-before">{`$${priceBefore}`}</h3>
    </div>

    <div className="color-container">
      <b>COLORS</b>

      <Select onChange={(event) => setColor(Number(event.target.value))}>
        <option value={0}>Black</option>
        <option value={1}>Brown</option>
      </Select>
    </div>




  </StyledBodyLeftContainer >
}

export default BodyLeftContainer
