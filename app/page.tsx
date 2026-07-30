/* eslint-disable @next/next/no-img-element -- Official brand assets are served unchanged. */
import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const publicNumbers = [
  ["€52,5M", "proventi 2025"],
  ["198", "progetti in Italia, Europa e nel mondo"],
  ["120.600", "donatrici e donatori regolari"],
  ["5", "campagne nazionali"],
];

const intelligenceCards = [
  {
    number: "01",
    type: "OPPORTUNITÀ",
    title: "Un bando coerente con priorità e track record è aperto.",
    detail: "Requisiti, temi, paesi e capacità interna mostrano un fit alto.",
    action: "Apri il bid brief",
    tone: "opportunity",
  },
  {
    number: "02",
    type: "NEXT BEST ACTION",
    title: "Un segmento di donatori regolari può essere riattivato ora.",
    detail: "Fedeltà storica, affinità tematica e segnali recenti indicano un percorso mirato.",
    action: "Prepara il percorso",
    tone: "action",
  },
  {
    number: "03",
    type: "RISCHIO",
    title: "Una proposta rischia di assorbire capacità senza ritorno sufficiente.",
    detail: "Fit medio, effort elevato e dipendenze ancora non confermate.",
    action: "Valuta il go / no-go",
    tone: "risk",
  },
  {
    number: "04",
    type: "ALERT",
    title: "Una scadenza richiede evidenze e approvazioni entro nove giorni.",
    detail: "Due allegati e una validazione interna non sono ancora completati.",
    action: "Assegna owner e tempi",
    tone: "alert",
  },
];

const missionChain = [
  ["01", "Radar", "Bandi, segnali e relazioni"],
  ["02", "Qualifica", "Fit, valore, effort e rischi"],
  ["03", "Progetta", "Proposta, campagna e contenuti"],
  ["04", "Approva", "Owner, fonti e controllo umano"],
  ["05", "Attiva", "Invio, relazione e follow-up"],
  ["06", "Impara", "Risultati e conoscenza riutilizzabile"],
];

const perspectives = [
  ["Bandi", "Grant Opportunity Intelligence", "Quali opportunità meritano davvero tempo e capacità?"],
  ["Fundraising", "Donor & Supporter Intelligence", "Quale relazione attivare, proteggere o far crescere adesso?"],
  ["Proposte", "Proposal & Content Copilot", "Quali evidenze e contenuti servono per una proposta più forte?"],
  ["Pipeline", "Funding Forecast Intelligence", "Dove si concentra il valore e quale gap richiede azione?"],
  ["Conoscenza", "Reusable Knowledge Layer", "Cosa possiamo riusare senza ricominciare ogni volta?"],
  ["Governance", "Risk & Approval Intelligence", "Quale passaggio richiede controllo, owner e approvazione?"],
];

const systems = [
  "Microsoft 365",
  "Portali bandi",
  "CRM sostenitori",
  "Finance",
  "Donor analytics",
  "Project & impact data",
  "Proposal archive",
  "Knowledge base",
];

export default function Home() {
  return (
    <main className="marketing-site">
      <nav className="site-nav" aria-label="Navigazione principale">
        <Link className="co-brand" href="/" aria-label="Streetbeat per ActionAid">
          <img className="streetbeat-logo" src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
          <span className="brand-cross" aria-hidden="true">×</span>
          <span className="actionaid-lockup">
            <img src={asset("/actionaid-logo.svg")} alt="ActionAid" />
          </span>
        </Link>
        <div className="nav-links">
          <a href="#visione">Visione</a>
          <a href="#valore">Valore AI</a>
          <a href="#prodotto">Come funziona</a>
          <a href="#governance">Adozione</a>
        </div>
        <Link className="button button-nav" href="/demo">
          Entra nella demo <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> STREETBEAT × ACTIONAID · CONCEPT DEMO</div>
          <h1>
            Più opportunità. Relazioni più forti.
            <em> Meno dispersione.</em>
          </h1>
          <p>
            Funding Intelligence connette CRM, opportunità, evidenze,
            contenuti e scadenze per aiutare ActionAid a scegliere meglio dove
            investire e preparare più rapidamente la prossima azione.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/demo">
              Vedi il prodotto in azione <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-ghost" href="#visione">Scopri la visione</a>
          </div>
          <div className="hero-proof">
            <span><i className="dot green" /> OPPORTUNITÀ</span>
            <span><i className="dot blue" /> NEXT BEST ACTIONS</span>
            <span><i className="dot red" /> RISCHI</span>
            <span><i className="dot amber" /> ALERT</span>
          </div>
        </div>

        <div className="hero-stage" aria-label="Anteprima di ActionAid Funding Intelligence">
          <div className="photo-card">
            <img
              src={asset("/actionaid-citizenship.jpg")}
              alt="Una persona partecipa a una mobilitazione per il diritto alla cittadinanza"
            />
            <div className="photo-caption">
              <span>FUNDING IN AZIONE</span>
              <b>Persone e comunità protagoniste del cambiamento.</b>
            </div>
          </div>

          <div className="hero-product">
            <div className="product-topline">
              <div><span className="aa-mark">a</span><b>ActionAid Funding Intelligence</b></div>
              <small><i /> Aggiornato 4 min fa</small>
            </div>
            <div className="product-body">
              <div className="priority-preview">
                <span>PRIORITÀ DI OGGI · SCENARIO DEMO</span>
                <h3>Un bando e un segmento di donatori chiedono una decisione.</h3>
                <p>Jarvis ha collegato requisiti, track record, CRM, contenuti e capacità interna. Ogni segnale ha fonti, owner e prossima azione.</p>
                <div className="preview-row">
                  <article className="preview-opportunity">
                    <small>OPPORTUNITÀ</small>
                    <b>Bando ad alto fit</b>
                    <span>Apri il bid brief →</span>
                  </article>
                  <article className="preview-action">
                    <small>NEXT BEST ACTION</small>
                    <b>Donatori da riattivare</b>
                    <span>Prepara il percorso →</span>
                  </article>
                </div>
              </div>
              <div className="jarvis-preview">
                <div className="jarvis-orb" aria-hidden="true">
                  <span /><span /><span /><span />
                  <b>✦</b>
                </div>
                <div><b>Jarvis</b><small>Funding Copilot · operativo</small></div>
                <p>Vuoi che confronti il bando con capacità e proposte già presentate?</p>
                <span>Apri il Funding Brief →</span>
              </div>
            </div>
          </div>

          <div className="floating-signal signal-one">
            <i className="dot green" />
            <span><small>OPPORTUNITÀ</small>Bando ad alto fit · 24 giorni</span>
          </div>
          <div className="floating-signal signal-two">
            <i className="dot amber" />
            <span><small>NEXT BEST ACTION</small>Segmento donatori da riattivare</span>
          </div>
        </div>
      </section>

      <section className="number-band" aria-label="Numeri pubblici ActionAid 2025">
        <div className="number-intro">
          <span>BILANCIO SOCIALE 2025</span>
          <p>Una base solida di risorse, progetti, campagne e relazioni da rendere ancora più attivabile.</p>
        </div>
        {publicNumbers.map(([value, label]) => (
          <div className="public-number" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section vision-section" id="visione">
        <div className="section-kicker">LA VISIONE</div>
        <div className="split-heading">
          <h2>170 persone hanno accesso a ChatGPT.<br /><em>Il passo successivo non è imporre l’AI.</em></h2>
          <p>
            È cambiare l’ambiente di lavoro affinché l’AI faciliti ciò che le persone
            devono già fare. Streetbeat parte dal core condiviso nell’incontro —
            fundraising e bandi — e porta opportunità, conoscenza e prossime azioni
            dentro workflow costruiti insieme ai team.
          </p>
        </div>

        <div className="maturity-bridge">
          <article className="maturity-now">
            <span className="bridge-label">IL PUNTO DI PARTENZA</span>
            <h3>Accesso all’AI per tutte le persone.</h3>
            <ul>
              <li><i>✓</i> 170 persone abilitate a ChatGPT</li>
              <li><i>✓</i> Apertura alla sperimentazione</li>
              <li><i>✓</i> Forte attenzione all’adozione responsabile</li>
            </ul>
            <div className="source-note">Informazioni condivise nell’incontro</div>
          </article>
          <div className="bridge-core">
            <span>STREETBEAT</span>
            <div className="bridge-pulse"><i /><i /><i /><b>✦</b></div>
            <p>Ridisegna il contesto di lavoro, non impone un nuovo comportamento.</p>
          </div>
          <article className="maturity-next">
            <span className="bridge-label">IL CAMBIO DI PARADIGMA</span>
            <h3>Un ambiente di lavoro che facilita fundraising e bandi.</h3>
            <ul>
              <li><i>→</i> Fa emergere opportunità e priorità</li>
              <li><i>→</i> Recupera conoscenza e prepara il lavoro</li>
              <li><i>→</i> Lascia scelta e decisione alle persone</li>
            </ul>
            <div className="source-note">Co-design, controllo umano, valore misurabile</div>
          </article>
        </div>
      </section>

      <section className="dark-section" id="valore">
        <div className="section">
          <div className="section-kicker light">IL VANTAGGIO DELL’AI</div>
          <div className="split-heading value-heading">
            <h2>Non una chat in più da interrogare.<br /><em>Opportunità già pronte per decidere.</em></h2>
            <p>
              La dashboard mette davanti a bandi e fundraising ciò che conta:
              opportunità, next best actions, rischi e alert. Fonti e KPI servono a
              spiegare la raccomandazione e a preparare il lavoro.
            </p>
          </div>
          <div className="intelligence-grid">
            {intelligenceCards.map((card) => (
              <article className={`intelligence-card ${card.tone}`} key={card.type}>
                <div className="card-top"><span>{card.number}</span><small><i />{card.type}</small></div>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
                <b>{card.action} <span>→</span></b>
              </article>
            ))}
          </div>
          <div className="scenario-disclaimer">
            <span>i</span>
            <p>Le raccomandazioni mostrate sono scenari dimostrativi costruiti su dati pubblici. In produzione, ogni insight è collegato alle fonti autorizzate e validato dalle persone responsabili.</p>
          </div>
        </div>
      </section>

      <section className="section product-section" id="prodotto">
        <div className="section-kicker">IL PRODOTTO</div>
        <div className="split-heading">
          <h2>CRM, portali e documenti restano al loro posto.<br /><em>Il lavoro non deve ricominciare ogni volta.</em></h2>
          <p>
            Streetbeat collega l’ecosistema esistente e crea una vista operativa
            condivisa. Non sostituisce CRM, portali, Microsoft 365 o reporting:
            li rende capaci di parlare nel momento in cui serve scegliere, scrivere,
            approvare o attivare.
          </p>
        </div>

        <div className="systems-orbit">
          <div className="system-cloud">
            {systems.map((system, index) => (
              <span style={{ "--i": index } as React.CSSProperties} key={system}>{system}</span>
            ))}
          </div>
          <div className="streetbeat-core">
            <img src={asset("/streetbeat-logomark-compact-dark-bg.svg")} alt="" />
            <b>FUNDING<br />INTELLIGENCE</b>
            <small>Sense · Decide · Act · Learn</small>
          </div>
          <div className="decision-output">
            <span>OUTPUT OPERATIVO</span>
            <div><i className="dot green" /><p><b>Bando</b> qualificato per il go / no-go</p><strong>ORA</strong></div>
            <div><i className="dot blue" /><p><b>Relazione</b> con next best action</p><strong>OGGI</strong></div>
            <div><i className="dot red" /><p><b>Rischio</b> con owner e mitigazione</p><strong>ALTO</strong></div>
          </div>
        </div>

        <div className="mission-chain">
          <div className="chain-copy">
            <span>IL CICLO DEL FUNDING</span>
            <h3>Dall’opportunità alla relazione.<br />Dalla proposta a nuova conoscenza.</h3>
            <p>Una sola vista mostra dove il funding accelera, dove si blocca e dove un’azione può aumentare probabilità e qualità.</p>
            <Link href="/demo">Esplora il Funding Control <b>→</b></Link>
          </div>
          <div className="chain-steps">
            {missionChain.map(([number, title, body], index) => (
              <article className={index === 2 || index === 3 ? "active" : ""} key={number}>
                <span>{number}</span>
                <div><b>{title}</b><p>{body}</p></div>
                <i>{index === 2 || index === 3 ? "!" : "✓"}</i>
              </article>
            ))}
          </div>
        </div>

        <div className="perspectives-heading">
          <span>DUE PRIORITÀ, UN’UNICA INTELLIGENZA</span>
          <h3>Fundraising e bandi lavorano con logiche diverse.<br />La conoscenza che li alimenta è la stessa.</h3>
        </div>
        <div className="perspectives-grid">
          {perspectives.map(([tag, title, question], index) => (
            <article key={tag}>
              <span>0{index + 1}</span>
              <small>{tag}</small>
              <h4>{title}</h4>
              <p>{question}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="role-section">
        <div className="section role-inner">
          <div className="role-copy">
            <div className="section-kicker light">INTELLIGENZA PER RUOLO</div>
            <h2>Lo stesso segnale.<br /><em>La decisione utile per ogni responsabilità.</em></h2>
            <p>
              Un bando o un segnale dal CRM ha implicazioni diverse per Fundraising,
              Grant Unit, Programmi e Direzione. Streetbeat mostra a ciascun ruolo ciò
              che serve, senza costringerlo a cambiare mestiere o strumento.
            </p>
          </div>
          <div className="role-stack">
            <article><small>FUNDRAISING</small><h3>Relazione & valore</h3><p>Segmento, next best action e contenuto.</p><span>01</span></article>
            <article><small>GRANT UNIT</small><h3>Fit & proposta</h3><p>Requisiti, probabilità, effort e scadenza.</p><span>02</span></article>
            <article><small>PROGRAMMI</small><h3>Evidenze & capacità</h3><p>Track record, partner e contributo al dossier.</p><span>03</span></article>
            <article><small>DIREZIONE</small><h3>Priorità & portafoglio</h3><p>Valore, trade-off, rischio e decisione.</p><span>04</span></article>
          </div>
        </div>
      </section>

      <section className="section governance-section" id="governance">
        <div className="section-kicker">AI RESPONSABILE</div>
        <div className="split-heading">
          <h2>Non chiediamo alle persone di adattarsi all’AI.<br /><em>Portiamo l’AI dentro il loro lavoro.</em></h2>
          <p>
            Streetbeat non parte dall’obbligo di usare una piattaforma. Parte dai
            workflow reali, li ridisegna con i team e inserisce l’AI dove riduce
            ricerca, frammentazione e lavoro ripetitivo. Giudizio professionale,
            responsabilità e valori restano al centro.
          </p>
        </div>
        <div className="governance-grid">
          <article><span>01</span><h3>Co-design, non imposizione</h3><p>I workflow nascono con chi li usa e risolvono bisogni concreti.</p></article>
          <article><span>02</span><h3>Dentro i flussi esistenti</h3><p>Le persone non devono imparare un nuovo mestiere per ottenere valore.</p></article>
          <article><span>03</span><h3>Human in command</h3><p>Invii, claim, proposte e decisioni restano soggetti ad approvazione.</p></article>
          <article><span>04</span><h3>Fonti visibili</h3><p>Ogni insight mostra da quali dati e documenti autorizzati deriva.</p></article>
          <article><span>05</span><h3>Valore misurabile</h3><p>Tempo, qualità, conversione e capacità liberata vengono verificati.</p></article>
          <article><span>06</span><h3>Sicurezza by design</h3><p>Permessi, dati, retention e integrazioni rispettano policy e ruoli.</p></article>
        </div>
      </section>

      <section className="final-cta">
        <img src={asset("/actionaid-mission.jpg")} alt="" aria-hidden="true" />
        <div className="final-overlay" />
        <div className="final-copy">
          <span>STREETBEAT × ACTIONAID</span>
          <h2>Partire dal core.<br />Misurare il valore.<br /><em>Estendere ciò che funziona.</em></h2>
          <p>Entra nella demo e prova una giornata operativa di ActionAid Funding Intelligence.</p>
          <Link className="button button-primary" href="/demo">Esplora la demo <span>→</span></Link>
        </div>
      </section>

      <footer>
        <Link className="footer-brand" href="/">
          <img src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
        </Link>
        <p>Concept dimostrativo sviluppato da Streetbeat a partire da fonti pubbliche ActionAid e dalle priorità condivise nell’incontro. Dati di scenario esplicitamente indicati nella demo.</p>
        <div><a href="#top">Torna su ↑</a><Link href="/demo">Demo ↗</Link></div>
      </footer>
    </main>
  );
}
