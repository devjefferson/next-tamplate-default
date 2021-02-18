import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

import '../styles/global.modules.css'

export default class MyDocument extends Document {

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
  console.log(ctx.pathname)
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props) => sheet.collectStyles(<App {...props}/>)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
          <meta
            name="Description"
            content="content."
          ></meta>
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
