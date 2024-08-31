import './App.css'
import Header from './Header';
import Post from './Post';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={
        <main>
      <Header/>
      <Post/>
      <Post/>
      <Post/>
    </main>}
    />
    <Route path={'/login'} element={<div>login</div>} />
    <Route path={"/register"} element={<div>signup</div>} />
    </Routes>
    
  );
}

export default App;
