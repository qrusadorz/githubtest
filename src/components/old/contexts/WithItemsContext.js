// import React from 'react';

// import { ItemsContext } from '../../contexts/items'

// // This function takes a component...
// // function withItemsContext(WrappedComponent, selectData) {
// function withItemsContext(WrappedComponent) {
//     // ...and returns another component...
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             // this.handleChange = this.handleChange.bind(this);
//             this.state = {
//                 items: [],
//             };
//         }

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
//                 <ItemsContext.Consumer>
//                     {items => (
//                         //   <ProfilePage user={user} theme={theme} />
//                         //   <WrappedComponent data={this.state.data} {...this.props} />
//                         <WrappedComponent items={items} {...this.props} />
//                     )}
//                 </ItemsContext.Consumer>
//             );
//         }
//     };
// }

// export default withItemsContext;