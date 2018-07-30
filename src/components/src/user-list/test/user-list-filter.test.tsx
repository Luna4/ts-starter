import * as React from 'react';
import { mount } from 'enzyme';
import { UserListFilter } from '../user-list-filter';

describe('UserListFilter', () => {

    const fetchUsers = jest.fn().mockReturnValue(Promise.resolve());

    it('calls "fetchUsers" on search button click event', () => {
        const wrapper = mount(<UserListFilter fetchUsers={fetchUsers} />);
        wrapper.find('button').simulate('click');
        expect(fetchUsers).toBeCalled();
    });

    it('calls "handleChange" on input', () => {
        const wrapper = mount(<UserListFilter fetchUsers={fetchUsers} />);
        // const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');

        wrapper.find('.ui-input').simulate('change', { target: { value: '25', name: 'age' } });
        wrapper.instance().forceUpdate();

        // expect(handleChangeSpy).toBeCalled();
        expect(wrapper.state()).toMatchObject({ age: '25', gender: '' });
    });

});