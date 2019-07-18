import React from "react";

interface IFeaturesProps {
    hideHeader: Function
};

class Features extends React.Component<IFeaturesProps> {
    componentDidMount() {
        this.props.hideHeader(true);
    }
    
    render() {
        return (
            <div className="Features">
                <h1>Feature page</h1>
            </div>
        );
    }
};

export default Features;
