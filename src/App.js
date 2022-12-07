import './App.css';
import Header from './component/navbar/header'
import Home from './component/home/home';
import About from './component/about/about'
import Staff from './component/staff/staff';
import Menu from './component/menu/menu';
import Testimony from './component/testimony/testimony';
import Chef from './component/chef/chef';
import Blog from './component/blog/blog';
import Footer from './component/footer/footer';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';



function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Home />
      <About />
      <Staff />
      <Menu />
      <Testimony />
      <Chef />
      <Blog />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
