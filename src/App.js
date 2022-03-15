import './Assets/scss/style.scss';
import { Routes, Route} from 'react-router-dom'
import Index from './Views/Pages/Index';
import Class from './Views/Pages/Class';
import DetailClass from './Views/Pages/Class/DetailClass';
import Login from './Views/Auth/Login'
import Instructor from './Views/Pages/Instructor';
import DetailInstructor from './Views/Pages/Instructor/DetailInstructor';

const pages = [
  { el: <Class />, url: 'class' },
  { el: <Instructor />, url: 'instructor' }
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/loged" element={<Index />}>
          {
            pages.map(page => (
              <Route path={page.url} element={page.el} />
            ))
          }
        </Route>
        <Route path="/loged/class/detail/:id" element={<DetailClass />} />
        <Route path="/loged/instructor/detail/:id" element={<DetailInstructor />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
