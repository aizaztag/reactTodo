import React from 'react';

import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {
        // This must be exactly one element or it will warn.
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}

MyComponent.propTypes = {
    children: PropTypes.element.isRequired
};
MyComponent.defaultProps = {
    children:
        <div>sff</div>

}
export default MyComponent;

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((k) => k * 2);
console.log(doubled);