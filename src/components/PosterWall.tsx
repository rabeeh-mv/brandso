import DomeGallery from './DomeGallery';
export default function App() {
  return (
    <div>
      <div className="text-center mb-16">
      {/* <span className="px-4 py-2 bg-teal-700/50 backdrop-blur-sm border border-teal-600 rounded-full text-sm font-medium text-teal-400 inline-block">
            Portfolio
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Creative Wall
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Where ideas stick.
          </p>
</div>
    <div style={{  height: '100vh' }}>
      <DomeGallery />
    </div>
    </div>
  );
}