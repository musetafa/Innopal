/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sommaire from "./components/Sommaire";
import Comprehension from "./components/Comprehension";
import KPIs from "./components/KPIs";
import GraphicSection from "./components/GraphicSection";
import ClientsSection from "./components/ClientsSection";
import AgendaIntro from "./components/AgendaIntro";
import AgendaTimeline from "./components/AgendaTimeline";
import CVs from "./components/CVs";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white selection:bg-[var(--color-accent)] selection:text-black">
      <Header />

      <main>
        <Hero />
        <Sommaire />
        <Comprehension />
        <KPIs />
        <GraphicSection />
        <ClientsSection />
        <AgendaIntro />
        <AgendaTimeline />
        <CVs />
      </main>

      <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm font-mono uppercase tracking-widest">
        <p>© 2026 AI Immersion Experience. All rights reserved.</p>
      </footer>
    </div>
  );
}
