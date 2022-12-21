import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl'
import pt from 'react-intl/locale-data/pt'
import translations from './translations.json'


// Setup dados de localização por idioma
addLocaleData([...pt])


const LANGUAGES = {
    pt: {
        urlLang: 'pt',
        code: 'pt-BR'
    },
    en: {
        urlLang: 'en',
        code: 'en-US'
    },
    es: {
      urlLang: 'es',
      code: 'pt-PT'
      /*Por algum motivo o código es de espanhol nao funciona no intl, nao encontrava os dados, e com qualquer outro ia, por isso deixei assim*/
    },
    default : 'es'
}
export default class IntlProviderConfigured extends React.Component {
    state = {
        loading: true,
        locale: ''
    }

    componentDidMount() {
        const currentUrlLang: string = window.location.pathname.split('/')[1]
        const currentLanguage = (LANGUAGES as any)[currentUrlLang]
        if(!currentLanguage) return window.location.href = `/${LANGUAGES.default}`

        this.setState({ locale: currentLanguage.code, loading: false })
    }

    render() {
        const locale = this.state.locale
        const { children } : any = this.props

        if(this.state.loading) return <div>...</div>

        return (
            <IntlProvider locale={locale} messages={(translations as any)[locale]}>
                {children}
            </IntlProvider>
        )
    }
}