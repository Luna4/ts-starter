import * as React from 'react';

export interface UserListFilterStates {
    age?: string;
    gender?: string;
}

export interface UserListFilterProps{
    fetchUsers: (age: string, gender: string) => void;
}

export class UserListFilter extends React.Component<UserListFilterProps, UserListFilterStates> {

    constructor(props) {
        super(props);
        this.state = { age: '', gender: '' };
    }

    render() {
        return (
            <form className="p-user-list__filter">
                <div className="ui-field">
                    <label className="ui-field__label">age</label>
                    <input type="text" name="age" className="ui-input" onChange={this.handleChange} value={this.state.age} />
                </div>
                <div className="ui-field">
                    <label className="ui-field__label">gender</label>
                    <select name="gender" className="ui-select" onChange={this.handleChange} value={this.state.gender}>
                        <option value="">All</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div className="ui-field">
                    <button className="ui-button ui-button--primary" onClick={this.handleSubmit}>Search</button>
                </div>
            </form>
        );
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        const { age, gender } = this.state;
        await this.props.fetchUsers(age, gender);
    }
}