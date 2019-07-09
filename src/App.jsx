import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         dataa:
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <Header/>
            <table>
               <tbody>
               {this.state.dataa.map((person, i) => <TableRow key ={i}
                   dataa ={person} />
                   )}
               </tbody>
            </table>
         </div>
      );
   }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.dataa.id}</td>
                <td>{this.props.dataa.name}</td>
                <td>{this.props.dataa.age}</td>
            </tr>
        );
    }
}
export default App;