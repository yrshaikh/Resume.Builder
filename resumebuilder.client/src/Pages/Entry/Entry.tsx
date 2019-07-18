import * as React from 'react';
import './Entry.scss';

interface IEntryProps {
    hideHeader: Function
}

class Entry extends React.Component<IEntryProps, any> {
    componentDidMount() {
        this.props.hideHeader(false);
    }

    render() {
        return (
            <div>
                Entry Page
            </div>
        );
    }
};

export default Entry;