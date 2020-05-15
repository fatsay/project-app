import React from 'react';
import Features from '../components/Features';
import {shallow} from 'enzyme';

//Unit test Home component isolated
describe('Counter component',()=> {
    //test the state
    it('starts with a count of 0', () => {
        const wrapper = shallow(<Features/>);
        const homeState = wrapper.state().list;
        expect(homeState.length).toEqual(3);
    });
    it('should simulate BlogList function', ()=> {
        const wrapper = shallow(<Features/>);
        const instance = wrapper.instance();
        instance.BlogList();
        const result = wrapper.find('div[id="blog-list"]');
        expect(result).toHaveLength(1);
        const blog = wrapper.find('ul').find('Blog');
        expect(blog).toHaveLength(3);
    });
    it('should find Counter child component', ()=> {
        const wrapper = shallow(<Features/>);
        const result = wrapper.find('div[id="counter"]');
        expect(result).toHaveLength(1);
        const child = wrapper.find('Counter');
        expect(child).toHaveLength(1);
    });
});
