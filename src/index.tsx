import React from 'react'
import ReactDOM from 'react-dom'
import { SomeNamespace } from './types'
import { SomeEnum } from './types'

interface IProps {
  foo?: SomeNamespace.Foo
  // using enum as a type has no problem
  enum?: SomeEnum
}

function App(props: IProps) {
  // Uncomment following line and build breaks
  // if (props.enum === SomeEnum.First) return "FIRST"
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
