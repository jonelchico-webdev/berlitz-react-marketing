import React, { ReactElement, useState } from "react";

import CardContainer from "../../components/CardContainer";
import IndexLayout from '../../layouts'
import LeftCardContent from "../../components/LeftCardContent/LeftCardContent";
import RightCardContent from "../../components/RightCardContent/RightCardContent";
import HeaderLeftContainer from "../../components/LeftCardContent/HeaderLeftContainer";
import imageBlack from "../../assets/products/ath-msr7/black.jpg";
import imageBrown from "../../assets/products/ath-msr7/brown.jpg";



const Main = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);


  return (
    <IndexLayout>
      <CardContainer>
        <LeftCardContent>
          <HeaderLeftContainer
            award="2017 Best Headphones of the Year Award Winner"
            brand="Audio-Technica"
            name="ATH-MSR7"
            setTab={setSelectedTab}
            selectedTab={selectedTab}
            image={selectedImage == 0 ? imageBlack : imageBrown}
          />

        </LeftCardContent>
        <RightCardContent>
          <img src={selectedImage == 0 ? imageBlack : imageBrown} />
        </RightCardContent>
      </CardContainer>
    </IndexLayout>
  )
}

export default Main
