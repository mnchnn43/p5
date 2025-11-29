import React from 'react';
import P5Canvas from './components/P5Canvas';
import { sketch1 } from './sketches/sketch1';
import { sketch2 } from './sketches/sketch2';
import { sketch3 } from './sketches/sketch3';
import { sketch4 } from './sketches/sketch4';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Creative Coding Portfolio
          </h1>
          <nav className="text-sm text-slate-500">
            p5.js & React
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section 1: Landscapes (Task 1 & 4) */}
        <section>
          <div className="mb-6 border-l-4 border-indigo-500 pl-4">
            <h2 className="text-2xl font-bold text-slate-900">Landscapes</h2>
            <p className="text-slate-600 mt-1">
              Static and animated vector landscapes exploring atmosphere and motion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
              <P5Canvas sketch={sketch1} />
              <div className="px-1">
                <h3 className="font-semibold text-lg">Task 1: Winter</h3>
                <p className="text-sm text-slate-500">A vector illustration created with p5.js primitives.</p>
              </div>
            </div>
            <div className="space-y-3">
              <P5Canvas sketch={sketch4} />
              <div className="px-1">
                <h3 className="font-semibold text-lg">Task 4: Animated Winter</h3>
                <p className="text-sm text-slate-500">The landscape brought to life with steam, snow, and lighting effects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Portraits (Task 2 & 3) */}
        <section>
          <div className="mb-6 border-l-4 border-pink-500 pl-4">
            <h2 className="text-2xl font-bold text-slate-900">Character Portraits</h2>
            <p className="text-slate-600 mt-1">
              Stylized character design with interactive musical elements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="space-y-3">
              <P5Canvas sketch={sketch2} />
              <div className="px-1">
                <h3 className="font-semibold text-lg">Task 2: Character (Static)</h3>
                <p className="text-sm text-slate-500">Geometric character portrait construction.</p>
              </div>
            </div>
            <div className="space-y-3">
              <P5Canvas sketch={sketch3} />
              <div className="px-1">
                <h3 className="font-semibold text-lg">Task 3: Interactive Character</h3>
                <p className="text-sm text-slate-500">
                  <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-0.5 rounded mr-2">Interactive</span>
                  Click top area to play/stop. Use Arrow Keys to shake.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>Created for AI Creative Coding Course</p>
        </div>
      </footer>
    </div>
  );
};

export default App;