import React from 'react';
import { shallow } from 'enzyme';
import Todo from "../../src/js/components/ToDo";

describe("Todo Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Todo />);
  });

  it("Renders a Todo Container", () => {
    expect(component.find('.todo-container').length).toEqual(1);
  })
})