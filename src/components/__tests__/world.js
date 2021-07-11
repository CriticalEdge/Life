import React from 'react'
import renderer from 'react-test-renderer'

import World from '../World'

describe('World', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<World />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
