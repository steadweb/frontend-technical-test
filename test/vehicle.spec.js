import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { Vehicle } from '../src/components/Vehicle';

const expect = require('chai').expect;

describe("Vehicle component", function() {
    const mockData = {
        id: "Foo",
        price: "£30,000",
        description: "This is a test",
        media: [
            { 
                url: "/path/to/media"
            }
        ]
    };

    it('should render correctly', () => {
        const wrapper = shallow(<Vehicle data={mockData} />);

        expect(wrapper.text().includes('Foo')).to.be.true;
        expect(wrapper.text().includes('£30,000')).to.be.true;
        expect(wrapper.text().includes('This is a test')).to.be.true;
    })
});
