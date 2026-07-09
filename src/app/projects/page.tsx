import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar/>
      <Projects showAll />
      <Footer/>
    </>
  );
}