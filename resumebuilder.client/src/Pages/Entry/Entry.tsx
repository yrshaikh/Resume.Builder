import * as React from 'react';
import './Entry.scss';

interface IEntryProps {
    handleDisplayMenu: Function
}

class Entry extends React.Component<IEntryProps, any> {
    componentDidMount() {
        this.props.handleDisplayMenu(false);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Entry Page
            </div>
        );
    }
};

export default Entry;