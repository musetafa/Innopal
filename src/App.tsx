/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
// import Sommaire from "./components/Sommaire";
import Comprehension from "./components/Comprehension";
import KPIs from "./components/EyTunisie";
import GraphicSection from "./components/Studio+";
import ClientsSection from "./components/ClientsSection";
import AgendaIntro from "./components/Agenda";
import AgendaTimeline from "./components/AgendaTimeline";
import CVs from "./components/CVs";
import PasswordGate from "./components/PasswordGate";

export default function App() {
  return (
    <PasswordGate>
    <div className="min-h-screen bg-[var(--color-bg)] text-primary selection:bg-blue-500 selection:text-white">
      <Header />

      <main>
        <Hero />
        {/* <Sommaire /> */}
        <Comprehension />
        <KPIs />
        <GraphicSection />
        <ClientsSection />
        <AgendaIntro />
        <AgendaTimeline />
        <CVs />
      </main>

      <footer className="py-5 md:py-12 border-t border-black/10 text-center text-primary-50 text-sm font-mono uppercase tracking-widest">
        <p>© 2026 AI Immersion Experience. Tous droits réservés.</p>
      </footer>
    </div>
    </PasswordGate>
  );
}
