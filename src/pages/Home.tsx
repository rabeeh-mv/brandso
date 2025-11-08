import Hero from '../components/Hero';
import Services from '../components/Services';
import PosterWall from '../components/PosterWall';
import ProjectsPreview from '../components/ProjectsPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Services />
      <PosterWall />
      <ProjectsPreview />
      <Footer />
    </div>
  );
}