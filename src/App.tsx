import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router";
import Resume from "./components/main/Resume";
import Education from "./components/main/Education";
import Experience from "./components/main/Experience";
import Achievements from "./components/main/Achievements";
import References from "./components/main/References";
import Skills from "./components/main/Skills";
import Projects from "./components/main/calculator/Projects";


function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/references" element={<References />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root }]
);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;