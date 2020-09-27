import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
// import AddCar from './components/AddCar';
// import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
    it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<AddCar />);

        
        expect(wrapper.find('div')).toHaveLength(1);
    });
});