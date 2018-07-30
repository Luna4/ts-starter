import * as React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../header';

describe('Header', () => {

  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Header />);
  });

  it('should render without throwing an error', () => {
    expect(shallowWrapper.contains(<header className="p-header">This is a Typescript starter kit</header>)).toBe(true);
  });

  it('should be selectable by class "p-header"', function () {
    expect(shallowWrapper.is('.p-header')).toBe(true);
  });

});