import React from 'react';
import Counter from '../components/Counter';
import {shallow, mount} from 'enzyme';

//Unit test Counter component isolated
it('should render without crashing', ()=> {
    shallow(<Counter/>)
});

describe('Counter component',()=>{
    it('state starts with a count of 0',()=> {
        const wrapper = shallow(<Counter/>);
        const countState=wrapper.state().count;
        expect(countState).toEqual(0)
    });
    it('find String Counter',()=> {
        const wrapper = shallow(<Counter/>);
        const text=wrapper.find('h6').text();
        expect(text).toEqual('Current Count: 0')
    });
    it('can increment the count when the button is clicked', ()=> {
        const wrapper = shallow(<Counter/>);
        const incrementButton= wrapper.find('#button-increase');
        expect(incrementButton.length).toEqual(1);
        incrementButton.simulate('click');
        const text = wrapper.find('h6').text();
        expect(text).toEqual('Current Count: 1')
    });
    it('can decrement the count when the button is clicked', ()=> {
        const wrapper = shallow(<Counter/>);
        const decrementButton= wrapper.find('#button-decrease');
        expect(decrementButton.length).toEqual(1);
        decrementButton.simulate('click');
        const text = wrapper.find('h6').text();
        expect(text).toEqual('Current Count: -1')
    });
});

//Integration test Counter component with its child component
it('should render without crashing', ()=> {
    mount(<Counter/>)
});

describe('Counter component with DetailCounter component',()=>{
    it('should  render button state', ()=> {
        const wrapper = mount(<Counter/>);
        const buttonState = wrapper.state().button;
        expect(buttonState).toEqual('');
    });
    it('should simulate increment button', async ()=> {
        const wrapper = mount(<Counter/>);
        const incrementButton = wrapper.find('#button-increase');
        expect(incrementButton.length).toEqual(1);
        incrementButton.simulate('click');
        await(wrapper.find('.button-state').exists());
        const buttonText = wrapper.find('.button-text').text();
        expect(buttonText).toEqual('Increment Button');
    });
    it('should simulate deccrement button', async ()=> {
        const wrapper = mount(<Counter/>);
        const decrementButton = wrapper.find('#button-decrease');
        expect(decrementButton.length).toEqual(1);
        decrementButton.simulate('click');
        await(wrapper.find('.button-state').exists());
        const buttonText = wrapper.find('.button-text').text();
        expect(buttonText).toEqual('Decrement Button');
    });
});
