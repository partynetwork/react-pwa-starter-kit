import React, {Component} from 'react'
import withRedux from 'next-redux-wrapper'

import Layout from 'components/Layouts/default'
import withIntl from 'containers/IntlProvider'
import {initStore} from '../store'
import Demo from "../containers/Demo"

class Page extends Component {
    static async getInitialProps(context) {
        const {isServer} = context
        return {
            isServer,
        }
    }

    render() {
        return (
            <Layout title={this.props.title}>
                <Demo/>
            </Layout>
        )
    }
}

export default withRedux(initStore)(withIntl(Page))
