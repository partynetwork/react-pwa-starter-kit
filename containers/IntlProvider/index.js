import React, {Component} from 'react'
import {IntlProvider, addLocaleData, injectIntl} from 'react-intl'

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
    Object.keys(window.ReactIntlLocaleData).forEach(lang => {
        addLocaleData(window.ReactIntlLocaleData[lang])
    })
}

export default Page => {
    const IntlPage = injectIntl(Page)

    return class InjectPageWithIntl extends Component {
        static async getInitialProps(context) {
            let props
            if (typeof Page.getInitialProps === 'function') {
                //InitialProps form super page
                props = await Page.getInitialProps(context)
            }

            // Get the `locale` and `messages` from the request object on the server.
            // In the browser, use the same values that the server serialized.
            const {req} = context

            const {locale, messages} = req || window.__NEXT_DATA__.props.initialProps

            // if (!req) {
            //     console.log('window.__NEXT_DATA__.props.initialProps', window.__NEXT_DATA__.props.initialProps)
            // }
            // Always update the current time on page load/transition because the
            // <IntlProvider> will be a new instance even with pushState routing.
            return {
                ...props,
                locale,
                messages,
            }
        }

        render() {
            const {locale, messages, ...props} = this.props
            return (
                <IntlProvider locale={locale} messages={messages}>
                    <IntlPage {...props} />
                </IntlProvider>
            )
        }
    }
}
