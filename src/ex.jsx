import React from 'react';


    class Header extends React.Component {

        constructor() {
            super();
            this.Timers = this.Timers.bind(this);
            this.state = {
                time: '',
                timers: new Date().toLocaleTimeString()
            };
        }

        Timers(timer) {
            this.setState({time: new Date().toLocaleTimeString()});
        }

        handleClick() {
            console.log('Click happened');
        }

        render() {
            return (
                <div>
                    <button onClick={() => this.Timers(this.state.timers)} key={new Date().toLocaleTimeString()}>Click
                        Me
                    </button>

                    {this.state.timers}
                </div>
            );
        }
    }


export default Header;