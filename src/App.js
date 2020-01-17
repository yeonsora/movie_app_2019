import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
// 여러 종류가 있음
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Navigation from './components/Navigation'
import './App.css'

// 라우터 : URL을 확인해서, 명령에 따라 컴포넌트 호출
function App() {
  return (
  // 이 방법을 사용하면, Home과 About이 겹쳐서 보인다. url을 가져와서, 위에서 아래로 비교하면서 겹치는 게 있으면 랜더링. 
  // <HashRouter>
  //   <Route path='/' component={Home}/>
  //   <Route path='/about' component={About}/>
  // </HashRouter>

  // BrowserRouter도 가능하다
  // Route -> Component에 Props를 내려준다.
  <HashRouter> 
    <Navigation />
    <Route path='/' exact={true} component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/movie/:id' component={Detail}/>
  </HashRouter>
  );
}

export default App;