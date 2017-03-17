"user strict";

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import {InlineTex} from '../index';

describe('<InlineTex />', () => {
    let wrapper;
    beforeEach(function() {
        wrapper = shallow(<InlineTex texContent="\int_{a}^{b} f(x)dx = F(b) - F(a)"/>);
    });

    it("renders basic component", () => {
        expect(wrapper.exists()).to.be.true;
    });
});