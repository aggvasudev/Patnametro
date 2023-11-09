import './App.css';
import Navbar from './component/navbar.js';
// import ImageSlider from './component/Button.js';
import Form from './component/form.js'; 
import Header from './component/Headertop.js';




function App() {
  return (
    <div className="App">
    <Header />
       <Navbar title='Patna Metro' sub1='item 1' sub2='item 2' sub3='item 3' />
        <Form />
       {/* <ImageSlider />
       <Image_area /> */}

    </div>
    
  );
}

export default App;
