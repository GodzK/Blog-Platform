import Header from '../components/Header';
import Data from '../components/Data';
import Popblog from "../components/popblog"
import './App.css';
function Homepages() {
  return (
    <>
      <Header />
      <Popblog/>
      <div className="blog-head">
        <h2>My Blog</h2>
      </div>
      <Data/>
    </>
  );
}

export default Homepages;
