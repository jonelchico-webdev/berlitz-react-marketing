import React, { ReactElement } from "react";

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'


const Main = (): ReactElement => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Audio Technica</h1>
      </Container>
    </Page>
  </IndexLayout>
)

export default Main
