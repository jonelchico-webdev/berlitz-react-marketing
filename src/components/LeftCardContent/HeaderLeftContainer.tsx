import * as React from 'react'
import styled from '@emotion/styled'
import { BiArrowBack } from 'react-icons/bi'

import { size, colors } from '../../styles/variables'

const StyledHeaderLeftContainer = styled.div`
  padding-top: 2em;
  padding-left: 4em;
  padding-right: 4em;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.border};


  @media (max-width: ${size.tablet}) {
    padding-left: 3em;
    padding-right: 3em;
  }

  .back-button {
    cursor: pointer;
  }

  .header-container {
    margin-bottom: 2em;
    .sub-title {
      color: ${colors.fontColorLight};
      font-size: .8rem;
    }
  }

  .tab-container {
    display: flex;
    flex-direction: row;



    .tab {
      padding: .6em 1em 1em 1em;
      font-weight: bold;
      margin-right: 2.5em;
      color: ${colors.fontColorLight};
      font-size: .8rem;
      cursor: pointer;
    }

    .active {
      border-bottom: 3px solid ${colors.blue};
      color: ${colors.fontColor};
    }

  }

  .image-container {
    margin-bottom: 2em;

    @media (min-width: ${size.tablet}) {
      display: none;
    }
  }

`

interface HeaderLeftContainerProps {
  className?: string
  award: string
  brand: string
  name: string
  setTab: React.Dispatch<React.SetStateAction<number>>
  selectedTab: number
  image: string
}

const HeaderLeftContainer: React.FC<HeaderLeftContainerProps> = ({ className, award, brand, name, setTab, selectedTab, image }) => {
  let title = `${brand} ${name}`;

  return <StyledHeaderLeftContainer className={className}>
    <div className="back-button">
      <BiArrowBack color={colors.fontColorLight} /> All products
    </div>

    <div className="header-container">
      <h2>{title}</h2>
      <b className="sub-title">{award}</b>
    </div>

    <div className="image-container">
      <img src={image} />
    </div>

    <div className="tab-container">
      <div className={`tab ${selectedTab == 0 && 'active'}`} onClick={() => setTab(0)} >
        DESCRIPTION
      </div>
      <div className={`tab ${selectedTab == 1 && 'active'}`} onClick={() => setTab(1)}>
        DETAILS
      </div>
    </div>

  </StyledHeaderLeftContainer>
}

export default HeaderLeftContainer
