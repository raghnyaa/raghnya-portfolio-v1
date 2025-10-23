import { useState, useEffect } from 'react';
import { LogoAnimation } from './components/LogoAnimation';
import { Homepage } from './components/Homepage';
import { DataPage } from './components/DataPage';
import { CreativePage } from './components/CreativePage';
import { WayfairPage } from './components/WayfairPage';
import { GrandCirclePage } from './components/GrandCirclePage';
import { DailyBeastPage } from './components/DailyBeastPage';
import { DuPontPage } from './components/DuPontPage';
import { AarohaPage } from './components/AarohaPage';
import { ShaktiVikasaPage } from './components/ShaktiVikasaPage';
import { MovementPage } from './components/MovementPage';

export default function App() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'data' | 'creative' | 'wayfair' | 'gcc' | 'dailybeast' | 'dupont' | 'aaroha' | 'shaktivikasa' | 'movement'>('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  // Handle page navigation
  const handleNavigate = (page: 'home' | 'data' | 'creative' | 'wayfair' | 'gcc' | 'dailybeast' | 'dupont' | 'aaroha' | 'shaktivikasa' | 'movement') => {
    setCurrentPage(page);
  };

  return (
    <div className="size-full">
      {!showHomepage ? (
        <LogoAnimation onAnimationComplete={() => setShowHomepage(true)} />
      ) : (
        <>
          {currentPage === 'home' && <Homepage onNavigate={handleNavigate} />}
          {currentPage === 'data' && <DataPage onNavigate={handleNavigate} onCompanyNavigate={handleNavigate} />}
          {currentPage === 'creative' && <CreativePage onNavigate={handleNavigate} onProjectNavigate={handleNavigate} />}
          {currentPage === 'wayfair' && <WayfairPage onNavigate={handleNavigate} />}
          {currentPage === 'gcc' && <GrandCirclePage onNavigate={handleNavigate} />}
          {currentPage === 'dailybeast' && <DailyBeastPage onNavigate={handleNavigate} />}
          {currentPage === 'dupont' && <DuPontPage onNavigate={handleNavigate} />}
          {currentPage === 'aaroha' && <AarohaPage onNavigate={handleNavigate} />}
          {currentPage === 'shaktivikasa' && <ShaktiVikasaPage onNavigate={handleNavigate} />}
          {currentPage === 'movement' && <MovementPage onNavigate={handleNavigate} />}
        </>
      )}
    </div>
  );
}
