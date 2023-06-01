import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import Error404 from "./pages/error404";
import Movie from "./pages/movie";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";

//components
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <BrowserRouter>
        <Header className="header">
          <MenuTop />
        </Header>
        <Content style={{minHeight:'fit-content'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
        
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
