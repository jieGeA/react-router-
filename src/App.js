import React from 'react'
import Login from './pages/Login'
import  Admin from './pages/Admin'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={ Login }></Route>
        <Route path='/' component={ Admin }></Route>
      </Switch>
    </Router>
  )
}



// import ctx from './util/Context'
// import  B from './component/B'
// import A from './component/A'
// import C from './component/C'
// import { HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// function NoPage () {
//   return (
//     <div>{404}</div>
//   )
// }

// function App() {
//   // return (
//   //   <div className="App">
//   //     <ctx.Provider value={'Provider B'}>
//   //       <B></B>
//   //     </ctx.Provider>
//   //   </div>
//   // );
//   return (
//     <Router>
//       {/* sensitive 区分大小写 */}
//       {/* exact 精确匹配 */}
//       {/* switch 只要匹配到就不会往后面匹配了 可以做404 页面 */}
//       {/* 不写path属性 会一定展示这个组件 */}
//       <Switch>
//         <Route path='/a' component={A} sensitive exact></Route>
//         <Route path='/c' component={C}></Route>
//         <Route component={NoPage}></Route>
//       </Switch>
//     </Router>
//   )

// }

export default App;
