import React from 'react'
import ReactDOM from 'react-dom'
import fetchMock from 'fetch-mock'

import TextBlockExample from '../TextBlockExample'

test('TextBlockExample should display value from props', () => {
  fetchMock.get('*', 'test')

  const value = 'value from props'

  const container = document.createElement('div')
  ReactDOM.render(<TextBlockExample value={value} />, container)

  expect(container.textContent).toMatch('value')
  expect(container.textContent).toMatch('from')
  expect(container.textContent).toMatch('props')
  // expect(container.textContent).toMatch('nope')

  fetchMock.restore()
})
