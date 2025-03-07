import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Resume from "./components/main/Resume.tsx";
import Education from "./components/main/Education.tsx";
import Experience from "./components/main/Experience.tsx";
import Achievements from "./components/main/Achievements.tsx";
import References from "./components/main/References.tsx";
import Skills from "./components/main/Skills.tsx";
import Projects from "./components/main/calculator/Projects.tsx";


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