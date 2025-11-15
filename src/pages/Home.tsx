import Hero from '../components/Hero';
import Services from '../components/Services';

import ProjectsPreview from '../components/ProjectsPreview';
import Footer from '../components/Footer';
import PosterWall from '../components/PosterWall';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Services />
      <ProjectsPreview />
      <PosterWall />
      <Footer />
    </div>
  );
}