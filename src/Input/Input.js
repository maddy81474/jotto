import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
    render(){
        return (
            <div>
                <button />
            </div>
        )
    }
};

const mapStatesToProps = (state) => {
    return {};
}

export default connect(mapStatesToProps)(Input);
