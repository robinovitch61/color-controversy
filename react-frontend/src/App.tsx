import React, { useState } from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Judge from './components/Judge/Judge';
import AllColors from './components/AllColors/AllColors';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About/About';
import Footer from './components/Footer';
import { StyledPageContent } from './style/style';

export type Page = 'judge' | 'colors' | 'leaderboard' | 'what';

function App() {
  const [page, setPage] = useState<Page>('judge');
  const [judgeKey, setJudgeKey] = useState(0);
  const [judgeHex, setJudgeHex] = useState<string | null>(null);

  const navigateToJudge = (hex?: string) => {
    setJudgeHex(hex ?? null);
    setJudgeKey((k) => k + 1);
    setPage('judge');
  };

  const renderPage = () => {
    switch (page) {
      case 'colors': return <AllColors navigateToJudge={navigateToJudge} />;
      case 'leaderboard': return <Leaderboard />;
      case 'what': return <About />;
      default: return <Judge key={judgeKey} initialHex={judgeHex} />;
    }
  };

  return (
    <>
      <StyledPageContent>
        <Nav setPage={setPage} currentPage={page} navigateToJudge={navigateToJudge} />
        {renderPage()}
      </StyledPageContent>
      <Footer />
    </>
  );
}

export default App;
