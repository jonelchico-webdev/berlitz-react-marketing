import React, { ReactElement, useState } from "react";

import CardContainer from "../../components/CardContainer";
import IndexLayout from '../../layouts'
import LeftCardContent from "../../components/LeftCardContent/LeftCardContent";
import RightCardContent from "../../components/RightCardContent/RightCardContent";
import HeaderLeftContainer from "../../components/LeftCardContent/HeaderLeftContainer";
import BodyLeftContainer from "../../components/LeftCardContent/BodyLeftContainer";
import FooterLeftContainer from "../../components/LeftCardContent/FooterLeftContainer";

import imageBlack from "../../assets/products/ath-msr7/black.jpg";
import imageBrown from "../../assets/products/ath-msr7/brown.jpg";
import { ProductDetailType } from '../../types/product-types';

const Main = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<number>(0);


  const details: ProductDetailType = {
    type: "Dynamic",
    driver: 45,
    frequency: "5 - 40,000 Hz",
    maximumInputPower: "2000 mW",
    sensitivity: "100db/mW"
  }

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
            image={selectedImage == 1 ? imageBrown : imageBlack}
          />
          <BodyLeftContainer
            setColor={setSelectedImage}
            selectedTab={selectedTab}
            price={59.99}
            priceBefore={89.99}
            details={details}
            descriptions="The Audio-Technica ATH-MSR7 headphones are excellent hi-fi headphones that sound so good they can ruin other headphones for you. If clarity and detail are what you’re looking for then you can’t go wrong, just don’t pair them with a smartphone for maximum results and be aware that they will butcher low bit rate tracks."
          />
          <FooterLeftContainer />

        </LeftCardContent>
        <RightCardContent>
          <img src={selectedImage == 1 ? imageBrown : imageBlack} />
        </RightCardContent>
      </CardContainer>
    </IndexLayout>
  )
}

export default Main
