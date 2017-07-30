import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Heading,
    Blockquote,
    Toolbar,
    NavLink,
    Flex,
    Box
} from 'rebass'

import {FormattedMessage} from 'react-intl'

import messages from './messages'

class Demo extends Component {

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Heading is="h1" mb={3} center>
                    <FormattedMessage {...messages.pageName}/>
                </Heading>
                <Container>
                    <Toolbar bg='primary'>
                        <NavLink href='https://github.com/zeit/next.js/' target='_blank'>Next.js</NavLink>
                        <NavLink ml='auto' href='http://jxnblk.com/rebass/' target='_blank'>
                            REBASS
                        </NavLink>
                    </Toolbar>

                    <Flex justify='center'>
                        <Box width={1 / 2}>
                            <Blockquote center fontSize={3} py={4}>
                                "Next.js is a minimalistic framework for server-rendered React applications."
                            </Blockquote>
                        </Box>
                        <Box width={6 / 12}>
                            <Blockquote center fontSize={3} py={4}>
                                "Functional React UI component library, built with styled-components"
                            </Blockquote>
                        </Box>
                    </Flex>
                </Container>
            </div>
        )
    }
}

Demo.propTypes = {}
Demo.defaultProps = {}

export default Demo