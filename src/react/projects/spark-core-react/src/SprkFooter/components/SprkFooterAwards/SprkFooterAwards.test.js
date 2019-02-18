/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooterAwards from './SprkFooterAwards';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooterAwards Component', () => {
  it('should display the awards', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          href: '#nogo',
          src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
        },
        {
          href: '#nogo',
          src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };

    const wrapper = mount(
      <SprkFooterAwards
        awards={awards}
      />,
    );
    expect(wrapper.find('img').length).toBe(2);
  });
});
