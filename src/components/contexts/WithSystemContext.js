// import React from 'react';

// import { UserContext } from '../../contexts/user'
// import { SystemContext } from '../../contexts/system'

// // This function takes a component...
// // function withSystemContext(WrappedComponent, selectData) {
// function withSystemContext(WrappedComponent) {
//     // ...and returns another component...
//     return class extends React.Component {
//         //   constructor(props) {
//         //     super(props);
//         //     this.handleChange = this.handleChange.bind(this);
//         //     this.state = {
//         //       data: selectData(DataSource, props)
//         //     };
//         //   }

//         //   componentDidMount() {
//         //     // ... that takes care of the subscription...
//         //     DataSource.addChangeListener(this.handleChange);
//         //   }

//         //   componentWillUnmount() {
//         //     DataSource.removeChangeListener(this.handleChange);
//         //   }

//         //   handleChange() {
//         //     this.setState({
//         //       data: selectData(DataSource, this.props)
//         //     });
//         //   }

//         render() {
//             // ... and renders the wrapped component with the fresh data!
//             // Notice that we pass through any additional props
//             return (
//                 <SystemContext.Consumer>
//                     {system => (
//                         <UserContext.Consumer>
//                             {user => (
//                                 //   <ProfilePage user={user} theme={theme} />
//                                 //   <WrappedComponent data={this.state.data} {...this.props} />
//                                 <WrappedComponent user={user} system={system} {...this.props} />
//                             )}
//                         </UserContext.Consumer>
//                     )}
//                 </SystemContext.Consumer>
//             );
//         }
//     };
// }

// export default withSystemContext;