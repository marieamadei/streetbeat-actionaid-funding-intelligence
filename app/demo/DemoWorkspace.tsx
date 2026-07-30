"use client";

/* eslint-disable @next/next/no-img-element -- Official brand assets are served unchanged. */
import Link from "next/link";
import { useMemo, useState } from "react";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

type SectionKey =
  | "mission"
  | "programs"
  | "emergencies"
  | "evidence"
  | "advocacy"
  | "fundraising"
  | "communities"
  | "risk"
  | "digital";

type SignalKind = "opportunity" | "action" | "risk" | "alert";

type Signal = {
  id: string;
  kind: SignalKind;
  label: string;
  title: string;
  detail: string;
  meta: string;
  action: string;
  owner: string;
  section: SectionKey;
  sources: string[];
  why: string[];
};

const sections: Array<{
  id: SectionKey;
  label: string;
  subtitle: string;
  icon: string;
}> = [
  { id: "mission", label: "Funding Control", subtitle: "Fundraising & bandi", icon: "◎" },
  { id: "programs", label: "Bandi & grant", subtitle: "Opportunity radar", icon: "▦" },
  { id: "fundraising", label: "Donor intelligence", subtitle: "Relazioni & campagne", icon: "◉" },
  { id: "evidence", label: "Proposte & evidenze", subtitle: "Proposal workspace", icon: "✦" },
  { id: "risk", label: "Rischi & approvazioni", subtitle: "Go / no-go", icon: "◇" },
  { id: "digital", label: "Knowledge & AI", subtitle: "170 persone abilitate", icon: "⌘" },
];

const sectionCopy: Record<
  SectionKey,
  {
    eyebrow: string;
    title: string;
    description: string;
    insight: string;
    insightBody: string;
    source: string;
  }
> = {
  mission: {
    eyebrow: "FUNDING INTELLIGENCE LIVE",
    title: "Funding Control",
    description: "Opportunità, next best actions, rischi e alert per fundraising e bandi.",
    insight: "Due opportunità possono avanzare. Un rischio e una scadenza richiedono presidio.",
    insightBody:
      "Un bando mostra alto fit con il track record; un segmento di donatori può essere riattivato; una candidatura assorbe troppa capacità e un dossier ha allegati ancora incompleti.",
    source: "Portali bandi · CRM · Donor analytics · Proposal archive · Finance",
  },
  programs: {
    eyebrow: "GRANT OPPORTUNITY INTELLIGENCE",
    title: "Bandi & grant",
    description: "Opportunità qualificate per fit, valore, effort, track record e scadenza.",
    insight: "Un bando ad alto fit è nella finestra giusta per il go / no-go.",
    insightBody:
      "Jarvis ha confrontato requisiti, aree tematiche, paesi eleggibili, proposte precedenti e capacità disponibile. Ha preparato il bid brief; la decisione resta alla Grant Unit.",
    source: "Portali bandi · Proposal archive · Program data · Finance",
  },
  emergencies: {
    eyebrow: "HUMANITARIAN RESPONSE INTELLIGENCE",
    title: "Emergenze",
    description: "Severità, accesso, capacità dei partner e gap di risposta trasformati in priorità 24/72 ore.",
    insight: "Una capacità partner può coprire un gap di risposta se attivata questa settimana.",
    insightBody:
      "Il partner ha accesso territoriale e capacità compatibile. Prima dell’attivazione servono verifica safeguarding, copertura del gap e approvazione del responsabile.",
    source: "Situation updates · Partner capacity · Funding · Safeguarding",
  },
  evidence: {
    eyebrow: "PROPOSAL & EVIDENCE INTELLIGENCE",
    title: "Proposte & evidenze",
    description: "Track record, outcome, contenuti e allegati organizzati per costruire dossier più forti.",
    insight: "Il dossier è quasi completo: mancano due allegati e una validazione.",
    insightBody:
      "Jarvis ha recuperato evidenze da progetti compatibili e preparato una checklist. Nessun claim viene inserito nella proposta senza la validazione del responsabile.",
    source: "Project reporting · Evidence repository · Proposal archive",
  },
  advocacy: {
    eyebrow: "POLICY & CAMPAIGN INTELLIGENCE",
    title: "Advocacy & campagne",
    description: "Evidenze, finestre istituzionali e mobilitazione collegate alla prossima leva di cambiamento.",
    insight: "Una finestra istituzionale rende prioritario il dossier trasparenza.",
    insightBody:
      "La posizione è già sostenuta da dati pubblici, monitoraggio civico e contenuti. Il brief può essere preparato oggi per la revisione umana.",
    source: "Policy calendar · Publications · Media monitoring",
  },
  fundraising: {
    eyebrow: "DONOR & SUPPORTER INTELLIGENCE",
    title: "Donor intelligence",
    description: "Segnali di relazione, contenuti e impatto per preparare la prossima azione migliore.",
    insight: "Un segmento di donatori regolari mostra una finestra di riattivazione.",
    insightBody:
      "Il segmento unisce fedeltà storica, affinità tematica e calo recente di engagement. Jarvis ha preparato il percorso e i contenuti da revisionare, non l’invio.",
    source: "CRM · Donor analytics · Campaigns · Content",
  },
  communities: {
    eyebrow: "COMMUNITY & NETWORK INTELLIGENCE",
    title: "Comunità & reti",
    description: "Territori, persone titolari di diritti e alleanze resi visibili nelle decisioni.",
    insight: "Una voce territoriale manca ancora dal prossimo tavolo di co-progettazione.",
    insightBody:
      "La mappa di partecipazione mostra copertura istituzionale e tecnica, ma non ancora la rappresentanza diretta di una comunità coinvolta.",
    source: "Stakeholder map · Territory notes · Partnerships",
  },
  risk: {
    eyebrow: "RISK & APPROVAL INTELLIGENCE",
    title: "Rischi & approvazioni",
    description: "Fit, effort, dipendenze e passaggi approvativi resi visibili prima di impegnare capacità.",
    insight: "Una candidatura richiede un go / no-go prima di assorbire nuovo lavoro.",
    insightBody:
      "Valore potenziale e coerenza strategica sono interessanti, ma effort e dipendenze restano elevati. Jarvis ha preparato il confronto; la decisione resta al team.",
    source: "Opportunity pipeline · Capacity plan · Finance · Approvals",
  },
  digital: {
    eyebrow: "KNOWLEDGE & AI ADOPTION",
    title: "Knowledge & AI",
    description: "Conoscenza autorizzata e workflow co-progettati per facilitare il lavoro delle 170 persone.",
    insight: "L’AI può entrare nei workflow senza diventare un obbligo per le persone.",
    insightBody:
      "Streetbeat non chiede allo staff di adattarsi a un nuovo strumento. Porta ricerca, briefing e preparazione dossier dentro un ambiente di lavoro costruito sui processi reali.",
    source: "Microsoft 365 · Knowledge base · ChatGPT · Workflow design",
  },
};

const signals: Signal[] = [
  {
    id: "grant-fit",
    kind: "opportunity",
    label: "OPPORTUNITÀ",
    title: "Un bando ad alto fit è nella finestra giusta per decidere",
    detail: "Coerenza strategica 91% · track record disponibile · capacità verificabile",
    meta: "Scadenza tra 24 giorni",
    action: "Apri il bid brief",
    owner: "Grant Unit",
    section: "programs",
    sources: ["Portali bandi", "Proposal archive", "Program data", "Finance"],
    why: [
      "Priorità, aree geografiche e beneficiari sono coerenti con il programma.",
      "Due proposte precedenti contengono track record ed evidenze riutilizzabili.",
      "La capacità necessaria può essere validata prima del go / no-go.",
    ],
  },
  {
    id: "donor-reactivation",
    kind: "action",
    label: "NEXT BEST ACTION",
    title: "Un segmento di donatori regolari può essere riattivato ora",
    detail: "Fedeltà storica · affinità tematica alta · engagement in calo",
    meta: "Percorso in 3 passaggi",
    action: "Prepara il percorso",
    owner: "Fundraising",
    section: "fundraising",
    sources: ["CRM sostenitori", "Donor analytics", "Campaigns", "Content"],
    why: [
      "Il segmento presenta una relazione pluriennale con ActionAid.",
      "L’affinità con il tema della prossima campagna è superiore alla media.",
      "Jarvis ha preparato contenuti e timing; il team approva ogni invio.",
    ],
  },
  {
    id: "bid-capacity",
    kind: "risk",
    label: "RISCHIO",
    title: "Una candidatura può assorbire capacità senza ritorno sufficiente",
    detail: "Fit medio · effort elevato · tre dipendenze non confermate",
    meta: "Go / no-go entro 5 giorni",
    action: "Confronta valore ed effort",
    owner: "Grant Unit + Programmi",
    section: "programs",
    sources: ["Opportunity pipeline", "Capacity plan", "Finance", "Partner notes"],
    why: [
      "La coerenza tematica è positiva, ma inferiore alle opportunità prioritarie.",
      "La capacità disponibile copre solo il 68% del lavoro stimato.",
      "Tre contributi esterni non hanno ancora un owner confermato.",
    ],
  },
  {
    id: "proposal-pack",
    kind: "alert",
    label: "ALERT",
    title: "Un dossier richiede due allegati e una validazione",
    detail: "Evidence pack 12/14 · budget da approvare · owner già identificati",
    meta: "Scadenza tra 9 giorni",
    action: "Assegna owner e tempi",
    owner: "Proposal Team",
    section: "evidence",
    sources: ["Project reporting", "Evidence repository", "Proposal workspace"],
    why: [
      "La proposta contiene 12 dei 14 elementi richiesti.",
      "I due allegati mancanti esistono in fonti autorizzate ma vanno validati.",
      "Il budget può essere approvato prima della revisione finale.",
    ],
  },
  {
    id: "approval-window",
    kind: "risk",
    label: "RISCHIO",
    title: "Due approvazioni sono sul percorso critico della proposta",
    detail: "Claim e budget · owner assegnati · finestra di revisione stretta",
    meta: "Prima decisione tra 4 giorni",
    action: "Apri il piano approvazioni",
    owner: "Direzione + Finance",
    section: "risk",
    sources: ["Proposal workflow", "Finance", "Approval policy"],
    why: [
      "Il claim di impatto richiede validazione metodologica.",
      "Il budget deve chiudere prima dell’assemblaggio finale.",
      "Il piano rende visibili owner, dipendenze e tempi senza automatizzare la decisione.",
    ],
  },
  {
    id: "knowledge-workflows",
    kind: "opportunity",
    label: "OPPORTUNITÀ",
    title: "Tre workflow possono facilitare il lavoro senza imporre un nuovo strumento",
    detail: "Radar bandi · bid brief · donor next best action",
    meta: "Pilot proposto: 8 settimane",
    action: "Apri il pilot",
    owner: "Digital Transformation",
    section: "digital",
    sources: ["Microsoft 365", "Knowledge base", "ChatGPT", "Workflow design"],
    why: [
      "I workflow partono da attività reali di fundraising e bandi.",
      "Le persone restano libere di revisionare, modificare o non usare l’output.",
      "Tempo, qualità e capacità liberata possono essere misurati prima e dopo.",
    ],
  },
];

const publicMetrics = [
  { value: "€52,5M", label: "Proventi 2025", change: "+9,4% vs 2024", source: "Bilancio p. 102" },
  { value: "120.600", label: "Donatori regolari", change: "46% da oltre 10 anni", source: "Bilancio p. 110" },
  { value: "46%", label: "Relazioni di lungo periodo", change: "donatori regolari da oltre 10 anni", source: "Bilancio p. 110" },
  { value: "170", label: "Persone abilitate a ChatGPT", change: "primo passo verso l’AI", source: "Incontro ActionAid" },
];

const missionFlow = [
  { label: "Radar", value: "24", status: "stable", note: "opportunità monitorate · demo" },
  { label: "Qualifica", value: "6", status: "attention", note: "2 go / no-go · demo" },
  { label: "Proposta", value: "3", status: "attention", note: "1 alert · demo" },
  { label: "Approvazione", value: "2", status: "attention", note: "sul percorso critico · demo" },
  { label: "Attivazione", value: "4", status: "stable", note: "workflow pronti · demo" },
  { label: "Apprendimento", value: "18", status: "stable", note: "asset riusabili · demo" },
];

const initiatives = [
  { name: "Bando istituzionale A", area: "Diritti & inclusione", reach: "€1,2M · scenario", signal: "Fit 91% · 24 giorni", status: "Priorità" },
  { name: "Bando europeo B", area: "Partecipazione", reach: "€850K · scenario", signal: "Effort elevato", status: "Go / no-go" },
  { name: "Donatori regolari", area: "Retention", reach: "Segmento demo", signal: "Finestra di riattivazione", status: "Opportunità" },
  { name: "Campagna nazionale", area: "Acquisition", reach: "Scenario demo", signal: "Contenuti pronti", status: "In revisione" },
];

const roles = [
  "Direzione Generale",
  "Fundraising",
  "Grant Unit",
  "Programmi",
  "Finance",
  "Digital Transformation",
  "Consiglio Direttivo",
];

const prompts: Record<SectionKey, string[]> = {
  mission: ["Prepara il Funding Brief", "Cosa richiede una decisione?", "Crea il brief per il board"],
  programs: ["Quali bandi hanno fit alto?", "Prepara il bid brief", "Confronta valore ed effort"],
  emergencies: ["Qual è il gap prioritario?", "Prepara il piano 72 ore", "Verifica capacità e guardrail"],
  evidence: ["Quali allegati mancano?", "Prepara la checklist", "Recupera le evidenze"],
  advocacy: ["Qual è la finestra utile?", "Prepara il policy brief", "Confronta le fonti"],
  fundraising: ["Qual è la next best action?", "Prepara il percorso", "Quali relazioni riattivare?"],
  communities: ["Chi manca dal tavolo?", "Completa la stakeholder map", "Mostra la copertura territoriale"],
  risk: ["Quali approvazioni sono aperte?", "Mostra le dipendenze", "Prepara il go / no-go"],
  digital: ["Quali workflow partirebbero?", "Prepara il pilot", "Mostra libertà e guardrail"],
};

const kindOrder: Record<SignalKind, number> = {
  opportunity: 0,
  action: 1,
  risk: 2,
  alert: 3,
};

const executiveSignalIds = [
  "grant-fit",
  "donor-reactivation",
  "bid-capacity",
  "proposal-pack",
];

const executiveSignals = executiveSignalIds
  .map((id) => signals.find((signal) => signal.id === id))
  .filter((signal): signal is Signal => Boolean(signal));

export default function DemoWorkspace() {
  const [activeSection, setActiveSection] = useState<SectionKey>("mission");
  const [activeSignal, setActiveSignal] = useState<Signal | null>(executiveSignals[0]);
  const [role, setRole] = useState("Direzione Generale");
  const [period, setPeriod] = useState("Oggi");
  const [detailOpen, setDetailOpen] = useState(false);
  const [briefOpen, setBriefOpen] = useState(false);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [jarvisResponse, setJarvisResponse] = useState(
    "Ho collegato portali bandi, CRM, proposte, contenuti e capacità. Oggi emergono un bando ad alto fit, una relazione da riattivare, un rischio di effort e una scadenza.",
  );

  const copy = sectionCopy[activeSection];

  const visibleSignals = useMemo(() => {
    if (activeSection === "mission") {
      return [...executiveSignals].sort((a, b) => kindOrder[a.kind] - kindOrder[b.kind]);
    }
    const exact = signals.filter((signal) => signal.section === activeSection);
    const supporting = signals.filter((signal) => signal.section !== activeSection);
    return [...exact, ...supporting].slice(0, 4);
  }, [activeSection]);

  function navigate(section: SectionKey) {
    setActiveSection(section);
    const sectionSignal = signals.find((signal) => signal.section === section) ?? executiveSignals[0];
    setActiveSignal(sectionSignal);
    setDetailOpen(false);
    setJarvisResponse(`${sectionCopy[section].insightBody} Vuoi che prepari l’azione consigliata?`);
  }

  function openSignal(signal: Signal) {
    setActiveSignal(signal);
    setDetailOpen(true);
  }

  function askJarvis(prompt: string) {
    const normalized = prompt.toLowerCase();
    if (normalized.includes("board")) {
      setBriefOpen(true);
      return;
    }

    const responses: Record<SectionKey, string> = {
      mission:
        "Priorità 1: decidere sul bando ad alto fit. Priorità 2: revisionare il percorso di riattivazione donatori. Priorità 3: chiudere gli allegati del dossier. La candidatura a fit medio richiede invece un go / no-go.",
      programs:
        "Il bando prioritario ha fit 91%, track record disponibile e una finestra di 24 giorni. Ho preparato requisiti, evidenze riutilizzabili, capacity check e domande ancora aperte per il go / no-go.",
      emergencies:
        "Il gap prioritario può essere coperto da un partner già presente sul territorio. Ho preparato un piano 24/72 ore con capacità, funding, safeguarding e punti di approvazione.",
      evidence:
        "Il dossier contiene 12 elementi su 14. Ho recuperato i due allegati potenziali e preparato owner, checklist e scadenze. Claim e budget restano soggetti a validazione.",
      advocacy:
        "La finestra istituzionale è utile per dodici giorni. Il brief può integrare monitoraggio civico, outcome di progetto e posizione pubblica. Ho evidenziato i passaggi che richiedono revisione politica e legale.",
      fundraising:
        "Propongo un percorso in tre passaggi: storia di cambiamento, evidenza verificata e richiesta coerente. Nessun invio automatico: segmento, claim, contenuto e timing devono essere approvati dal team.",
      communities:
        "La stakeholder map copre partner tecnici e istituzionali. Manca una rappresentanza diretta della comunità. Ho trovato tre contatti nella rete territoriale e preparato il confronto.",
      risk:
        "Una candidatura a fit medio assorbe capacità elevata e ha tre dipendenze aperte. Ho preparato il confronto valore / effort e il piano approvazioni; nessuna decisione è automatica.",
      digital:
        "I tre workflow iniziali sono radar bandi, bid brief e donor next best action. Non richiedono alle 170 persone di adattarsi a un nuovo strumento: il pilot misura tempo, qualità, libertà d’uso e capacità liberata.",
    };
    setJarvisResponse(responses[activeSection]);
  }

  function submitJarvis(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;
    askJarvis(prompt);
    setInput("");
  }

  function toggleComplete(id: string) {
    setCompleted((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <main className="demo-shell">
      <aside className="demo-sidebar">
        <Link className="demo-brand" href="/" aria-label="Torna alla presentazione">
          <img className="demo-streetbeat" src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
        </Link>

        <div className="demo-org">
          <span className="demo-org-mark">a</span>
          <div><b>ActionAid</b><small>Funding Intelligence</small></div>
        </div>

        <nav className="demo-nav" aria-label="Aree del workspace">
          <span className="demo-nav-label">WORKSPACE</span>
          {sections.map((section) => (
            <button
              className={activeSection === section.id ? "active" : ""}
              onClick={() => navigate(section.id)}
              type="button"
              key={section.id}
            >
              <i>{section.icon}</i>
              <span><b>{section.label}</b><small>{section.subtitle}</small></span>
              {section.id === "mission" && <em>LIVE</em>}
              {section.id === "risk" && <em className="count">2</em>}
            </button>
          ))}
        </nav>

        <div className="demo-sidebar-bottom">
          <div className="connected-sources">
            <span><i /> 18 fonti collegate</span>
            <small>Ultima sincronizzazione 4 min fa</small>
          </div>
          <div className="demo-profile">
            <span>DG</span>
            <div><b>Direzione Generale</b><small>Vista executive</small></div>
            <i>•••</i>
          </div>
        </div>
      </aside>

      <section className="demo-main">
        <header className="demo-header">
          <div className="demo-title">
            <span>{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </div>
          <div className="demo-controls">
            <div className="demo-status"><i /> Operativo</div>
            <label>
              <span>Vista</span>
              <select value={role} onChange={(event) => setRole(event.target.value)}>
                {roles.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              <span>Periodo</span>
              <select value={period} onChange={(event) => setPeriod(event.target.value)}>
                <option>Oggi</option>
                <option>7 giorni</option>
                <option>30 giorni</option>
                <option>YTD</option>
              </select>
            </label>
          </div>
        </header>

        <div className="demo-banner">
          <span>SCENARIO DEMO</span>
          <p>Numeri dal Bilancio Sociale 2025 e contesto condiviso nell’incontro. Alert, forecast e raccomandazioni sono esempi dimostrativi.</p>
          <button type="button" onClick={() => setDetailOpen(true)}>Come leggere la demo ↗</button>
        </div>

        <div className="demo-scroll">
          <section className="ai-priority">
            <div className="priority-copy">
              <span><i>✦</i> AI INSIGHT · PRIORITÀ DI {period.toUpperCase()}</span>
              <h2>{copy.insight}</h2>
              <p>{copy.insightBody}</p>
              <div className="priority-actions">
                <button type="button" onClick={() => setBriefOpen(true)}>Apri il brief <b>→</b></button>
                <button type="button" onClick={() => setDetailOpen(true)}>Perché lo segnala?</button>
              </div>
              <small>Fonti: {copy.source} · Ultima sincronizzazione 4 min fa</small>
            </div>
            <div className="priority-summary">
              <span>DECISIONI DI OGGI</span>
              <div><i className="signal-dot opportunity" /><b>1</b><small>opportunità</small></div>
              <div><i className="signal-dot action" /><b>1</b><small>next action</small></div>
              <div><i className="signal-dot risk" /><b>1</b><small>rischio</small></div>
              <div><i className="signal-dot alert" /><b>1</b><small>alert</small></div>
            </div>
          </section>

          <section className="signal-section">
            <div className="panel-heading">
              <div><span>PRIORITÀ ORDINATE PER IMPATTO</span><h2>Cosa merita attenzione adesso</h2></div>
              <button type="button">Filtri <b>2</b></button>
            </div>
            <div className="signal-grid">
              {visibleSignals.map((signal) => (
                <article
                  className={`signal-card ${signal.kind} ${completed.includes(signal.id) ? "completed" : ""}`}
                  key={signal.id}
                >
                  <div className="signal-card-top">
                    <span><i />{signal.label}</span>
                    <small>{signal.meta}</small>
                  </div>
                  <h3>{signal.title}</h3>
                  <p>{signal.detail}</p>
                  <div className="signal-meta">
                    <span>Owner</span><b>{signal.owner}</b>
                  </div>
                  <div className="signal-card-actions">
                    <button type="button" onClick={() => openSignal(signal)}>{signal.action} <b>→</b></button>
                    <button
                      className="complete-button"
                      aria-label={completed.includes(signal.id) ? "Riapri segnale" : "Segna come preso in carico"}
                      type="button"
                      onClick={() => toggleComplete(signal.id)}
                    >
                      {completed.includes(signal.id) ? "✓" : "○"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mission-panel">
            <div className="panel-heading">
              <div><span>FUNDING FLOW LIVE</span><h2>Dove opportunità e relazioni accelerano o richiedono presidio</h2></div>
              <button type="button" onClick={() => navigate("mission")}>Vista completa ↗</button>
            </div>
            <div className="flow-row">
              {missionFlow.map((step, index) => (
                <div className={`flow-step ${step.status}`} key={step.label}>
                  <span>0{index + 1}</span>
                  <b>{step.value}</b>
                  <p>{step.label}</p>
                  <small>{step.note}</small>
                  {index < missionFlow.length - 1 && <i>→</i>}
                </div>
              ))}
            </div>
          </section>

          <section className="two-column-panels">
            <div className="initiative-panel">
              <div className="panel-heading compact">
                <div><span>PIPELINE & SEGNALI</span><h2>Opportunità e relazioni lette per la prossima azione</h2></div>
                <small>Aggiornato oggi</small>
              </div>
              <div className="initiative-table">
                <div className="initiative-head"><span>INIZIATIVA</span><span>AREA</span><span>SEGNALE</span><span>STATO</span></div>
                {initiatives.map((initiative) => (
                  <button type="button" onClick={() => setJarvisResponse(`${initiative.name}: ${initiative.signal}. Posso correlare fonti, owner e prossima azione in uno scenario operativo.`)} key={initiative.name}>
                    <span><b>{initiative.name}</b><small>{initiative.reach}</small></span>
                    <span>{initiative.area}</span>
                    <span>{initiative.signal}</span>
                    <span className={initiative.status === "Priorità" ? "initiative-priority" : ""}>{initiative.status}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="action-panel">
              <div className="panel-heading compact">
                <div><span>NEXT BEST ACTIONS</span><h2>Pronte per revisione</h2></div>
                <small>{completed.length}/4 prese in carico</small>
              </div>
              <div className="action-list">
                {visibleSignals.slice(0, 3).map((signal, index) => (
                  <button type="button" onClick={() => openSignal(signal)} key={signal.id}>
                    <span>0{index + 1}</span>
                    <div><b>{signal.action}</b><small>{signal.owner} · {signal.meta}</small></div>
                    <i>→</i>
                  </button>
                ))}
              </div>
              <button className="workflow-button" type="button" onClick={() => setWorkflowOpen(true)}>
                Avvia un workflow con approvazione <span>↗</span>
              </button>
            </div>
          </section>

          <section className="metric-section">
            <div className="panel-heading compact">
              <div><span>CONTESTO ORGANIZZATIVO</span><h2>I numeri sostengono la decisione</h2></div>
              <small>Bilancio Sociale 2025 + incontro</small>
            </div>
            <div className="metric-grid">
              {publicMetrics.map((metric) => (
                <article key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.change}</p>
                  <small>{metric.source}</small>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <aside className="jarvis-panel">
        <header>
          <div className="jarvis-live-orb" aria-hidden="true">
            <span /><span /><span /><span /><span />
            <b>✦</b>
          </div>
          <div><h2>Jarvis</h2><span><i /> Funding Copilot</span></div>
          <button type="button" aria-label="Altre opzioni">•••</button>
        </header>

        <div className="jarvis-context">
          <span>CONTESTO ATTIVO</span>
          <b>{copy.title}</b>
          <small>{role} · {period}</small>
        </div>

        <div className="jarvis-conversation">
          <div className="jarvis-message">
            <span>J</span>
            <div>
              <b>Buongiorno</b>
              <p>{jarvisResponse}</p>
              <small>Risposta basata sulle fonti autorizzate</small>
            </div>
          </div>

          <div className="jarvis-source-list">
            <span>FONTI USATE</span>
            <div>{copy.source.split(" · ").map((source) => <small key={source}>✓ {source}</small>)}</div>
          </div>
        </div>

        <div className="jarvis-bottom">
          <div className="prompt-list">
            <span>SUGGERIMENTI</span>
            {prompts[activeSection].map((prompt) => (
              <button type="button" onClick={() => askJarvis(prompt)} key={prompt}>{prompt}</button>
            ))}
          </div>
          <form onSubmit={submitJarvis}>
            <button type="button" aria-label="Allega un file">＋</button>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Chiedi a Jarvis…"
              aria-label="Messaggio per Jarvis"
            />
            <button type="submit" aria-label="Invia">↑</button>
          </form>
          <small>Jarvis può commettere errori. Verifica dati e decisioni critiche.</small>
        </div>
      </aside>

      {detailOpen && (
        <div className="demo-modal-backdrop" role="presentation" onMouseDown={() => setDetailOpen(false)}>
          <section className="demo-modal" role="dialog" aria-modal="true" aria-label="Dettaglio segnale" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setDetailOpen(false)}>×</button>
            {activeSignal ? (
              <>
                <span className={`modal-kind ${activeSignal.kind}`}><i />{activeSignal.label} · SCENARIO DEMO</span>
                <h2>{activeSignal.title}</h2>
                <p>{activeSignal.detail}</p>
                <div className="why-list">
                  <span>PERCHÉ LO SEGNALA</span>
                  {activeSignal.why.map((item, index) => (
                    <div key={item}><b>0{index + 1}</b><p>{item}</p></div>
                  ))}
                </div>
                <div className="modal-sources">
                  <span>FONTI</span>
                  <div>{activeSignal.sources.map((source) => <small key={source}>✓ {source}</small>)}</div>
                </div>
                <div className="modal-owner">
                  <div><span>OWNER</span><b>{activeSignal.owner}</b></div>
                  <div><span>URGENZA</span><b>{activeSignal.meta}</b></div>
                </div>
                <button className="modal-primary" type="button" onClick={() => { setWorkflowOpen(true); setDetailOpen(false); }}>
                  {activeSignal.action} <span>→</span>
                </button>
              </>
            ) : (
              <>
                <span className="modal-kind action"><i />COME LEGGERE LA DEMO</span>
                <h2>Dati reali. Decisioni di scenario.</h2>
                <p>I numeri del Bilancio Sociale 2025 sono indicati con la fonte. Priorità, alert, forecast e azioni sono esempi dimostrativi e non descrivono situazioni operative reali di ActionAid.</p>
              </>
            )}
          </section>
        </div>
      )}

      {briefOpen && (
        <div className="demo-modal-backdrop" role="presentation" onMouseDown={() => setBriefOpen(false)}>
          <section className="demo-modal brief-modal" role="dialog" aria-modal="true" aria-label="Funding Brief" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setBriefOpen(false)}>×</button>
            <span className="modal-kind action"><i />FUNDING BRIEF · {period.toUpperCase()}</span>
            <h2>Quattro cose da sapere.<br />Tre decisioni da prendere.</h2>
            <div className="brief-list">
              {executiveSignals.map((signal, index) => (
                <div key={signal.id}>
                  <span>0{index + 1}</span>
                  <i className={`signal-dot ${signal.kind}`} />
                  <p><b>{signal.title}</b><small>{signal.owner} · {signal.meta}</small></p>
                  <button type="button" onClick={() => { setActiveSignal(signal); setBriefOpen(false); setDetailOpen(true); }}>Apri →</button>
                </div>
              ))}
            </div>
            <div className="brief-footer"><span>Preparato da Jarvis</span><small>Fonti e raccomandazioni da verificare prima di ogni decisione.</small></div>
          </section>
        </div>
      )}

      {workflowOpen && (
        <div className="demo-modal-backdrop" role="presentation" onMouseDown={() => setWorkflowOpen(false)}>
          <section className="demo-modal workflow-modal" role="dialog" aria-modal="true" aria-label="Avvio workflow" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setWorkflowOpen(false)}>×</button>
            <span className="modal-kind action"><i />WORKFLOW CON APPROVAZIONE</span>
            <h2>{workflowStarted ? "Workflow avviato." : activeSignal?.action ?? "Prepara l’azione"}</h2>
            {workflowStarted ? (
              <div className="workflow-success">
                <span>✓</span>
                <p>Owner, fonti e scadenza sono stati aggiunti al piano. La prima azione attende revisione umana.</p>
                <button type="button" onClick={() => setWorkflowOpen(false)}>Torna alla dashboard</button>
              </div>
            ) : (
              <>
                <div className="workflow-steps">
                  <div><span>01</span><p><b>Raccogli fonti e contesto</b><small>Jarvis prepara il dossier</small></p><i>✓</i></div>
                  <div><span>02</span><p><b>Assegna owner e scadenza</b><small>{activeSignal?.owner ?? "Team responsabile"}</small></p><i>✓</i></div>
                  <div><span>03</span><p><b>Richiedi approvazione</b><small>Nessuna azione sensibile è automatica</small></p><i>○</i></div>
                </div>
                <button className="modal-primary" type="button" onClick={() => setWorkflowStarted(true)}>Avvia il workflow <span>→</span></button>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
