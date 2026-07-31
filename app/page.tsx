/* eslint-disable @next/next/no-img-element -- Official brand assets are served unchanged. */
import Link from "next/link";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const intelligenceCards = [
  {
    number: "01",
    type: "OPPORTUNITÀ",
    title: "Un bando coerente con priorità ed esperienze precedenti è aperto.",
    detail: "Requisiti, temi, paesi e capacità interna indicano una coerenza elevata.",
    action: "Apri la sintesi del bando",
    tone: "opportunity",
  },
  {
    number: "02",
    type: "AZIONE PRIORITARIA",
    title: "Un segmento di donatori regolari può essere riattivato ora.",
    detail: "Fedeltà storica, affinità tematica e segnali recenti indicano un percorso mirato.",
    action: "Prepara il percorso",
    tone: "action",
  },
  {
    number: "03",
    type: "RISCHIO",
    title: "Una proposta rischia di assorbire capacità senza ritorno sufficiente.",
    detail: "Coerenza media, impegno elevato e dipendenze ancora non confermate.",
    action: "Valuta se procedere",
    tone: "risk",
  },
  {
    number: "04",
    type: "ALERT",
    title: "Una scadenza richiede evidenze e approvazioni entro nove giorni.",
    detail: "Due allegati e una validazione interna non sono ancora completati.",
    action: "Assegna responsabile e tempi",
    tone: "alert",
  },
];

const missionChain = [
  ["01", "Intercetta", "Bandi, segnali e relazioni"],
  ["02", "Qualifica", "Coerenza, valore, impegno e rischi"],
  ["03", "Progetta", "Proposta, campagna e contenuti"],
  ["04", "Approva", "Responsabili, fonti e controllo umano"],
  ["05", "Attiva", "Invio, relazione e follow-up"],
  ["06", "Impara", "Risultati e conoscenza riutilizzabile"],
];

const systems = [
  "Microsoft 365",
  "Portali bandi",
  "CRM sostenitori",
  "Amministrazione e finanza",
  "Analisi sostenitori",
  "Dati progetti e impatto",
  "Archivio proposte",
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
          <a href="#visione">Punto di partenza</a>
          <a href="#valore">Valore AI</a>
          <a href="#prodotto">Come funziona</a>
          <a href="#streetbeat">Perché Streetbeat</a>
        </div>
        <a className="button button-nav" href="#prossimo-passo">
          Prossimo incontro <span aria-hidden="true">↓</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> STREETBEAT × ACTIONAID</div>
          <h1>
            Dall’AI sperimentata
            <em> all’AI operativa.</em>
          </h1>
          <p>
            Il recap del nostro primo confronto e una direzione concreta per
            collegare fundraising, bandi, progetti ed evidenze.
          </p>

          <div className="hero-passage" aria-label="Il passaggio che immaginiamo">
            <span>IL PASSAGGIO CHE IMMAGINIAMO</span>
            <div className="hero-passage-grid">
              <article>
                <small>OGGI</small>
                <h3>Sperimentare</h3>
                <p>Licenze, formazione, GPT creati dai team</p>
              </article>
              <i aria-hidden="true">→</i>
              <article className="passage-tomorrow">
                <small>DOMANI</small>
                <h3>Operare</h3>
                <p>Un ambiente AI condiviso, proattivo e governato</p>
              </article>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href="#visione">
              Da dove partire <span aria-hidden="true">→</span>
            </a>
            <a className="button button-ghost" href="#prossimo-passo">Settembre, Milano</a>
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
                <span>PRIORITÀ DI OGGI · ESEMPIO ILLUSTRATIVO</span>
                <h3>Un bando e un segmento di donatori chiedono una decisione.</h3>
                <p>Jarvis ha collegato requisiti, esperienze precedenti, CRM, contenuti e capacità interna. Ogni segnale ha fonti, responsabile e prossima azione.</p>
                <div className="preview-row">
                  <article className="preview-opportunity">
                    <small>OPPORTUNITÀ</small>
                    <b>Bando ad alta coerenza</b>
                    <span>Apri la sintesi →</span>
                  </article>
                  <article className="preview-action">
                    <small>AZIONE PRIORITARIA</small>
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
                <div><b>Jarvis</b><small>Assistente AI nel contesto ActionAid</small></div>
                <p>Vuoi che confronti il bando con capacità e proposte già presentate?</p>
                <span>Apri la sintesi →</span>
              </div>
            </div>
          </div>

          <div className="floating-signal signal-one">
            <i className="dot green" />
            <span><small>OPPORTUNITÀ</small>Bando ad alta coerenza · 24 giorni</span>
          </div>
          <div className="floating-signal signal-two">
            <i className="dot amber" />
            <span><small>AZIONE PRIORITARIA</small>Segmento donatori da riattivare</span>
          </div>
        </div>
      </section>

      <section className="meeting-quote" aria-labelledby="meeting-quote-title">
        <div className="meeting-quote-inner">
          <div className="quote-context">
            <span>DAL PRIMO CONFRONTO</span>
            <p>29 luglio 2026 · Il punto emerso: trasformare la sperimentazione in una direzione operativa condivisa.</p>
          </div>
          <blockquote id="meeting-quote-title">
            “Abbiamo una Ferrari importantissima,<br />
            <em>ma in che direzione mandarla è un tema.”</em>
          </blockquote>
          <div className="quote-attribution">
            <span>ML</span>
            <p>
              <strong>Mariapaola Leporale</strong>
              <small>Head of Donors Analytics, Insights and Evolution · ActionAid</small>
            </p>
          </div>
        </div>
      </section>

      <section className="section scope-section" id="visione">
        <div className="section-kicker">IL PUNTO DI PARTENZA</div>
        <div className="split-heading">
          <h2>La base è già solida.<br /><em>Ora serve una direzione condivisa.</em></h2>
          <p>
            ActionAid ha già superato la fase della curiosità. L’investimento, la
            formazione e le iniziative interne — circa 170 persone abilitate e GPT
            creati dai team — mostrano una base reale da cui partire.
          </p>
        </div>

        <div className="scope-framework">
          <div className="scope-intro">
            <span>IL PRIMO PERIMETRO</span>
            <h3>Fundraising e bandi.<br /><em>Un ambito concreto e misurabile.</em></h3>
            <p>Qui bisogno, dati e capacità di misurare il valore sono già visibili. La proposta è un ambiente di lavoro ActionAid, costruito sui sistemi e sui processi già in uso.</p>
          </div>
          <div className="scope-cards">
            <article><span>01</span><h4>Osserva</h4><p>Incrocia opportunità, segnali dal CRM, storico, evidenze e scadenze.</p></article>
            <article><span>02</span><h4>Ordina</h4><p>Valuta coerenza, valore potenziale, impegno richiesto e rischi.</p></article>
            <article><span>03</span><h4>Prepara</h4><p>Propone la prossima azione e i materiali che le persone dovranno validare.</p></article>
          </div>
          <strong className="scope-formula">Dati ActionAid <i>+</i> Regole ActionAid <i>+</i> Voce ActionAid <b>=</b> un ambiente che lavora con voi</strong>
        </div>
      </section>

      <section className="dark-section" id="valore">
        <div className="section">
          <div className="section-kicker light">IL VANTAGGIO DELL’AI</div>
          <div className="split-heading value-heading">
            <h2>Non una chat in più da interrogare.<br /><em>Priorità ordinate, spiegate e pronte da attivare.</em></h2>
            <p>
              La dashboard porta in primo piano opportunità, azioni prioritarie,
              rischi e scadenze. Ogni raccomandazione mostra fonti e ragionamento;
              la decisione resta alle persone responsabili.
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
            <p>Le raccomandazioni mostrate sono scenari illustrativi costruiti su dati pubblici. Nel sistema operativo, ogni indicazione è collegata alle fonti autorizzate e validata dalle persone responsabili.</p>
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
            <small>Osserva · Ordina · Prepara · Impara</small>
          </div>
          <div className="decision-output">
            <span>OUTPUT OPERATIVO</span>
            <div><i className="dot green" /><p><b>Bando</b> qualificato per decidere se procedere</p><strong>ORA</strong></div>
            <div><i className="dot blue" /><p><b>Relazione</b> con azione prioritaria</p><strong>OGGI</strong></div>
            <div><i className="dot red" /><p><b>Rischio</b> con responsabile e mitigazione</p><strong>ALTO</strong></div>
          </div>
        </div>

        <div className="mission-chain">
          <div className="chain-copy">
            <span>IL CICLO DEL FUNDING</span>
            <h3>Dall’opportunità alla relazione.<br />Dalla proposta a nuova conoscenza.</h3>
            <p>Una sola vista mostra dove il percorso accelera, dove si blocca e dove un’azione può aumentarne probabilità e qualità.</p>
            <a href="#prossimo-passo">Portiamo il perimetro al prossimo incontro <b>→</b></a>
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

      </section>

      <section className="role-section">
        <div className="section role-inner">
          <div className="role-copy">
            <div className="section-kicker light">INTELLIGENZA PER RUOLO</div>
            <h2>Lo stesso segnale.<br /><em>La decisione utile per ogni responsabilità.</em></h2>
            <p>
              Un bando o un segnale dal CRM ha implicazioni diverse per Fundraising,
              Bandi, Programmi e Direzione. Streetbeat mostra a ciascun ruolo ciò che
              serve per assumere la propria decisione.
            </p>
          </div>
          <div className="role-stack">
            <article><small>FUNDRAISING</small><h3>Relazione & valore</h3><p>Segmento, azione prioritaria e contenuto.</p><span>01</span></article>
            <article><small>BANDI</small><h3>Coerenza & proposta</h3><p>Requisiti, probabilità, impegno e scadenza.</p><span>02</span></article>
            <article><small>PROGRAMMI</small><h3>Evidenze & capacità</h3><p>Esperienze, partner e contributo al dossier.</p><span>03</span></article>
            <article><small>DIREZIONE</small><h3>Priorità & portafoglio</h3><p>Valore, scelte, rischio e decisione.</p><span>04</span></article>
          </div>
        </div>
      </section>

      <section className="section governance-section" id="governance">
        <div className="section-kicker">ADOZIONE E GOVERNANCE</div>
        <div className="split-heading">
          <h2>L’AI entra nei processi con regole chiare.<br /><em>Le persone restano responsabili delle decisioni.</em></h2>
          <p>
            L’adozione parte dai flussi di lavoro reali, progettati con i team.
            Streetbeat inserisce l’AI dove riduce ricerca, frammentazione e attività
            ripetitive, mantenendo fonti, permessi e approvazioni sempre visibili.
          </p>
        </div>
        <div className="governance-grid">
          <article><span>01</span><h3>Progettazione con i team</h3><p>I flussi nascono con chi li usa e risolvono bisogni concreti.</p></article>
          <article><span>02</span><h3>Controllo umano</h3><p>Invii, contenuti, proposte e decisioni restano soggetti ad approvazione.</p></article>
          <article><span>03</span><h3>Fonti e permessi visibili</h3><p>Ogni indicazione mostra da quali dati autorizzati deriva e chi può accedervi.</p></article>
          <article><span>04</span><h3>Valore misurabile</h3><p>Tempo, qualità, conversione e capacità liberata vengono verificati.</p></article>
        </div>
      </section>

      <section className="streetbeat-section" id="streetbeat">
        <div className="section">
          <div className="section-kicker light">PERCHÉ STREETBEAT</div>
          <div className="split-heading streetbeat-heading">
            <h2>Controllo e affidabilità<br /><em>sono parte dell’architettura.</em></h2>
            <p>
              Fondata negli Stati Uniti da Damian Scavo, Streetbeat ha sviluppato
              la propria tecnologia nei servizi finanziari. Da questa esperienza
              derivano il rigore su dati, permessi, verificabilità e controllo umano
              che oggi portiamo nel nonprofit.
            </p>
          </div>

          <div className="streetbeat-proof-grid">
            <article>
              <span>01</span>
              <h3>Esperienza in contesti regolamentati</h3>
              <p>Un’architettura nata per dati sensibili, processi controllati e responsabilità chiare.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Garanzie fin dall’inizio</h3>
              <p>Fonti, permessi, verifiche e approvazioni sono parte del sistema, non controlli aggiunti alla fine.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Progettazione con le organizzazioni</h3>
              <p>La tecnologia viene adattata al linguaggio, ai ruoli e ai processi di chi la utilizza.</p>
            </article>
          </div>

          <div className="streetbeat-facts" aria-label="Streetbeat in breve">
            <div><strong>Palo Alto</strong><span>nata negli Stati Uniti</span></div>
            <div><strong>Europa</strong><span>hub di ingegneria</span></div>
            <div><strong>30+</strong><span>brevetti</span></div>
            <div><strong>$25M</strong><span>capitale raccolto</span></div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="prossimo-passo">
        <img src={asset("/actionaid-mission.jpg")} alt="" aria-hidden="true" />
        <div className="final-overlay" />
        <div className="final-copy">
          <span>PROSSIMO INCONTRO</span>
          <h2>Settembre 2026.<br /><em>Uffici ActionAid, Milano.</em></h2>
          <p>Il prossimo incontro si terrà nei vostri uffici. Lavoreremo insieme sul primo perimetro di ActionAid Funding Intelligence e sui criteri con cui valutarne il valore.</p>
          <div className="next-step-points" aria-label="Agenda del prossimo incontro">
            <span><b>01</b> Scegliere il primo flusso di lavoro</span>
            <span><b>02</b> Verificare dati e integrazioni</span>
            <span><b>03</b> Concordare indicatori e governance</span>
          </div>
        </div>
      </section>

      <footer>
        <Link className="footer-brand" href="/">
          <img src={asset("/streetbeat-logo-compact-dark-bg.svg")} alt="Streetbeat" />
        </Link>
        <p>Concept sviluppato da Streetbeat a partire da fonti pubbliche ActionAid e dalle priorità condivise nell’incontro. I dati di scenario sono indicati nelle visualizzazioni illustrative.</p>
        <div><a href="#top">Torna su ↑</a><a href="#prossimo-passo">Settembre, Milano ↗</a></div>
      </footer>
    </main>
  );
}
