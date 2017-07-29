import {readFileSync} from 'fs'
import glob from 'glob'
import {basename} from 'path'
import IntlPolyfill from 'intl'

Intl.NumberFormat = IntlPolyfill.NumberFormat
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat

const languages = glob.sync('./translations/*.json').map((f) => basename(f, '.json'))
const localeDataCache = new Map()
const getMessages = locale => {
    return require(`../../translations/${locale}.json`)
}
const getLocaleDataScript = locale => {
    const lang = locale.split('-')[0] // e.g: en-US
    if (!localeDataCache.has(lang)) {
        const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`)
        const localeDataScript = readFileSync(localeDataFile, 'utf8')
        localeDataCache.set(lang, localeDataScript)
    }
    return localeDataCache.get(lang)
}

const initialRequest = (req, res, next) => {
    // load locale for react-intl
    req.locale = req.acceptsLanguages(process.env.NODE_ENV === 'development' ? ['en'] : languages)

    req.localeDataScript = getLocaleDataScript(req.locale)
    req.messages = getMessages(req.locale)

    next()
}

export default {
    initialRequest,
}
