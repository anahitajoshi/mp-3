import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Resume from "./components/Resume.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import Achievements from "./components/Achievements.tsx";
import References from "./components/References.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";


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