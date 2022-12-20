import { Home } from './pages/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LANGUAGES } from './i18n/languages/languages'


const MultiLanguageRoute = (props : any) => {
  const defaultLanguage = LANGUAGES.pt.urlLang
  const hasLang = props.computedMatch.params.lang
  const is404Page = props.path
  const isBasePathWithoutLang = props.path === "/"

  if(isBasePathWithoutLang)  return  <Redirect to={`/${defaultLanguage}`} />
  if(!hasLang && !is404Page) return <Redirect to={`/${defaultLanguage}`} />

  return <Route {...props} />    
}


export function Router(){
  return (
    <Switch>
        <MultiLanguageRoute exact path="/"/>
        <MultiLanguageRoute exact path="/:lang" component={Home}/>
    </Switch>
  )
}