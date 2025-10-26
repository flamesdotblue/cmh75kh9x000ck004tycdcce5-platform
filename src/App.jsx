import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
