"user strict";

import React from 'react';
import { expect } from 'chai';
import { Tex } from '../src/js/Tex';

describe('<Tex />', () => {
    let wrapper;
    beforeEach(function() {
        wrapper = shallow(<Tex texContent="\int_{a}^{b} f(x)dx = F(b) - F(a)"/>);
    });

    it("renders basic component", () => {
        expect(wrapper.exists()).to.be.true;
    });
});