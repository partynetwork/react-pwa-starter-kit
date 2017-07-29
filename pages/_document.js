import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(context) {
        const {req} = context
        const props = await super.getInitialProps(context)

        const {localeDataScript, locale} = req

        return {
            locale,
            localeDataScript,
            ...props,
        }
    }

    render() {
        const sheet = new ServerStyleSheet()
        const main = sheet.collectStyles(<Main/>)
        const styleTags = sheet.getStyleElement()

        return (
            <html lang={this.props.locale} className="no-js" data-framework="react">
            <Head>
                {styleTags}
                <script
                    dangerouslySetInnerHTML={{
                        __html: this.props.localeDataScript
                    }}/>
            </Head>
            <body>
            {main}
            <NextScript/>
            </body>
            </html>
        )
    }
}
