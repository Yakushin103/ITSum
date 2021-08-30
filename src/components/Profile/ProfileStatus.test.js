import React from 'react';
import { create } from 'react-test-renderer';

import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {

  test("after creation <span> should be displayed ", () => {
    const component = create(<ProfileStatus status="It.com" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span).not.toBeNull()
  })

  test("after creation <input> shouldnt be displayed ", () => {
    const component = create(<ProfileStatus status="It.com" />)
    const root = component.root

    expect(() => {
      const input = root.findByType("input")
    }).toThrow()
  })

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="It.com" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span.children[0]).toBe("It.com")
  })

  test("input should be displayed in edit mode instead of span", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="It.com" updateUserStatus={mockCallback} />)
    const root = component.root
    const span = root.findByType("span")
    span.props.onDoubleClick()
    const input = root.findByType("input")
    expect(input.props.value).toBe("It.com")
  })

  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status="It.com" updateUserStatus={mockCallback} />)
    const root = component.root
    const span = root.findByType("span")
    span.props.onDoubleClick()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})