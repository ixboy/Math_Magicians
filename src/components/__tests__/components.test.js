/* eslint-disable no-unused-vars */
/* eslint-disable import/order */

import Home from '../pages/Home';
import Quote from '../pages/Quote';
import renderer from 'react-test-renderer';

describe('Components match the screenshots', () => {
  it('renders Navbar', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });

  it('renders Home', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });

  it('renders Quote', () => {
    const quote = renderer.create(<Quote />).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
