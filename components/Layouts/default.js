import React, {Component} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import styled from 'styled-components'
// import ReactGA from 'react-ga'
import {DefaultTheme} from 'containers/ThemeProvider'

Router.onRouteChangeStart = () => {
    // console.log(`onRouteChangeStart -> Loading: ${window.location.pathname + window.location.search}`)
    // ReactGA.set({page: window.location.pathname + window.location.search})
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

// language=SCSS prefix=&{ suffix=}
const DefaultLayout = styled.section`    
    @media (max-width: 576px) {
      padding-top: 4em;
      height: auto
    }
`

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // ReactGA.initialize('< your google analytic id >')
        // ReactGA.pageview(document.location.pathname + document.location.search)
    }

    render() {
        const {children, title = 'Home page'} = this.props

        return (
            <DefaultLayout>
                <Head>
                    <title>
                        BCR777 — {title}
                    </title>
                </Head>
                <DefaultTheme>
                    <div id="root">
                        {children}
                    </div>
                </DefaultTheme>
            </DefaultLayout>
        )
    }
}

export default Layout
