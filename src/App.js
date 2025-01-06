import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClassCounter from './components/UseState/ClassCounter';
import HookCounter from './components/UseState/HookCounter';
import HookCounter2 from './components/UseState/HookCounter2';
import HookCounter3 from './components/UseState/HookCounter3';
import HookCounter4 from './components/UseState/HookCounter4';
import ClassCounter1 from './components/UseEffect/ClassCounter1';
import UseEffectCounter1 from './components/UseEffect/UseEffectCounter1';
import ClassCounter2 from './components/UseEffect/ClassCounter2';
import UseEffectCounter2 from './components/UseEffect/UseEffectCounter2';
import OnMouse from './components/UseEffect/OnMouse';
import MouseContainer from './components/UseEffect/MouseContainer';
import Fetchdata from './components/UseEffect/Fetchdata';
import FetchDataWithID from './components/UseEffect/FetchDataWithID';
import FetchDataWithIDWithButton from './components/UseEffect/FetchDataWithIDWithButton';
import UseReduceCounter1 from './components/UseReducer/UseReduceCounter1';
import UseReduceCounter2 from './components/UseReducer/UseReduceCounter2';
import UseReduceCounter3 from './components/UseReducer/UseReduceCounter3';
import FetchDataUsingUseReducer from './components/UseReducer/FetchDataUsingUseReducer';
import Parent from './components/UseCallback/Parent';
import UseMemoCounter from './components/UseMemo/UseMemoCounter';
import FocusInput from './components/UseRef/FocusInput';
import { HookTimer } from './components/UseRef/HookTimer';
import DocumentTitle1 from './components/CustomHooks/UseDocumentTitle/DocumentTitle1';
import DocumentTitle2 from './components/CustomHooks/UseDocumentTitle/DocumenTitle2';
import UseCounter1 from './components/CustomHooks/useCounter/UseCounter1';
import UseCounter2 from './components/CustomHooks/useCounter/UseCounter2';
import UseForm from './components/CustomHooks/UseInput/UseForm';

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter/> */} 
      {/* <HookCounter/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter3/> */}
      {/* <HookCounter4/> */}
      {/* <ClassCounter1/> */}
      {/* <UseEffectCounter1/> */}
      {/* <ClassCounter2/> */}
      <UseEffectCounter2/>
      {/* <OnMouse/> */}
      {/* <MouseContainer/> */}
      {/* <Fetchdata/> */}
      {/* <FetchDataWithID/> */}
      {/* <FetchDataWithIDWithButton/> */}
      {/* <UseReduceCounter1/> */}
      {/* <UseReduceCounter2/> */}
      {/* <UseReduceCounter3/> */}
      {/* <FetchDataUsingUseReducer/> */}
      {/* <Parent/> */}
      {/* <UseMemoCounter/> */}
      {/* <FocusInput/> */}
      {/* <HookTimer/> */}
      {/* <DocumentTitle1/> */}
      {/* <DocumentTitle2/> */}
      {/* <UseCounter1/> */}
      {/* <UseCounter2/> */}
      {/* <UseForm/> */}
    </div>
  );
}
export default App;

// In case of UseContext hook use following code for the app.js

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import ClassCounter from './components/UseState/ClassCounter';
// import HookCounter from './components/UseState/HookCounter';
// import HookCounter2 from './components/UseState/HookCounter2';
// import HookCounter3 from './components/UseState/HookCounter3';
// import HookCounter4 from './components/UseState/HookCounter4';
// import ClassCounter1 from './components/UseEffect/ClassCounter1';
// import UseEffectCounter1 from './components/UseEffect/UseEffectCounter1';
// import ClassCounter2 from './components/UseEffect/ClassCounter2';
// import UseEffectCounter2 from './components/UseEffect/UseEffectCounter2';
// import OnMouse from './components/UseEffect/OnMouse';
// import MouseContainer from './components/UseEffect/MouseContainer';
// import Fetchdata from './components/UseEffect/Fetchdata';
// import FetchDataWithID from './components/UseEffect/FetchDataWithID';
// import FetchDataWithIDWithButton from './components/UseEffect/FetchDataWithIDWithButton';
// import ComponentC from './components/UseContext/ComponentC/ComponentC';

// export const UserContext = React.createContext()
// export const UserFullNameContext = React.createContext()

// function App() {
//   return (
//     <div className='App'>
//       <UserContext.Provider value={"Mahesh"}>
//         <UserFullNameContext.Provider value={"Mahesh Bhimrao Raut"}>
//       {/* <ClassCounter/> */}
//       {/* <HookCounter/> */}
//       {/* <HookCounter2/> */}
//       {/* <HookCounter3/> */}
//       {/* <HookCounter4/> */}
//       {/* <ClassCounter1/> */}
//       {/* <UseEffectCounter1/> */}
//       {/* <ClassCounter2/> */}
//       {/* <UseEffectCounter2/> */}
//       {/* <OnMouse/> */}
//       {/* <MouseContainer/> */}
//       {/* <Fetchdata/> */}
//       {/* <FetchDataWithID/> */}
//       {/* <FetchDataWithIDWithButton/> */}
//           <ComponentC/>
//         </UserFullNameContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;
