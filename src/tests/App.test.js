import React from 'react';
import App from "../App";
import {shallow,mount} from 'enzyme';
import {Route} from 'react-router-dom';
import Home from '../components/Home';

//Unit test app component isolated
it('should render without crashing', ()=> {
    shallow(<App/>)
});
it('should render without crashing', ()=> {
    mount(<App/>)
});

it(' if router line correct', ()=> {
    const wrapper = shallow(<App/>);
    const routingLine = <Route exact path="/" component={Home}/>;
    expect(wrapper.contains(routingLine)).toEqual(true)
});

