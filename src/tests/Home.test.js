import React from 'react';
import Home from '../components/Home';
import {shallow} from 'enzyme';
import Features from "./Features.test";

describe('Home component',()=> {
    //test the state
    it('starts with a count of 0', () => {
        shallow(<Home/>);
    });
});
