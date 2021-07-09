'use strict'

const path = require('path')

const indexTemplate = path.resolve(`./src/templates/Main/Main.tsx`)

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/',
    component: indexTemplate
  })
}


exports.sourceNodes = async ({ actions: { createNode }, createNodeId }) => {
  // console.log(ProductType);
}
