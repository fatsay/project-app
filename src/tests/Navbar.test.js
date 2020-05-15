import React from 'react';
import Navbar from '../bootstrap/NavBar';
import {shallow} from 'enzyme';

describe('Navbar component',()=> {
    it('should render find nav tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const navTag = wrapper.find('nav');
        expect(navTag).toHaveLength(1)
    });
    it('should render find link tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const linkTag = wrapper.find('#test-app').find({to:'/'});
        expect(linkTag).toHaveLength(1);
        expect(linkTag.text()).toEqual('CI/CD');
    });
    it('should render find ul tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const ulTag = wrapper.find('ul');
        expect(ulTag).toHaveLength(1);
    });
    it('should render find li tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const linkTag = wrapper.find('li');
        expect(linkTag).toHaveLength(2);
    });
    it('should render find homepage link tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const linkTag = wrapper.find('#home-link').find({to:'/'});
        expect(linkTag).toHaveLength(1);
        expect(linkTag.text()).toEqual('Home(current)');
    });
    it('should render find linkpage link tag ', () => {
        const wrapper = shallow(<Navbar/>);
        const linkTag = wrapper.find('#link-link').find({to:'/features'});
        expect(linkTag).toHaveLength(1);
        expect(linkTag.text()).toEqual('Features');
    });

});
