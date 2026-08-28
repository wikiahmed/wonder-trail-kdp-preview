// Style reminder: Sunlit Storybook Desk — the book is the hero, with cream paper, garden ink, squash-gold proof accents, red thread details, and a quiet editorial workspace.
import { useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Eye,
  FileText,
  Grid2X2,
  Info,
  LayoutPanelTop,
  Maximize2,
  Menu,
  Monitor,
  MousePointer2,
  PanelRight,
  PenLine,
  Printer,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  Type,
  X,
} from "lucide-react";

const ASSETS = {
  mark: "/manus-storage/wonder-trail-leaf-mark_d4a36d1f.png",
  desk: "/manus-storage/sunlit-storybook-desk-hero_62f8f147.png",
  garden: "/manus-storage/wonder-trail-placeholder-garden_87fb0e20.png",
  clue: "/manus-storage/wonder-trail-clue-detail_4178e0bb.png",
  watercolor: "/manus-storage/temp-watercolor-garden_651f8747.jpg",
  path: "/manus-storage/temp-sunlit-path_bafb91b8.jpg",
};

type Spread = {
  number: number;
  title: string;
  image: string;
  caption: string;
  copy: React.ReactNode;
  accent?: "left" | "right" | "center";
  tag?: string;
};

const spreads: Spread[] = [
  {
    number: 1,
    title: "The Garden Wakes",
    image: ASSETS.watercolor,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>The garden hummed softly in the morning light.</p><p>Nia, Omar, and Tess followed the path to Willow Patch.</p></>,
    accent: "left",
    tag: "opening",
  },
  {
    number: 2,
    title: "A Curious Clue",
    image: ASSETS.path,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>Something yellow caught Nia’s eye.</p><p>It was not a petal. It was not a pebble.</p></>,
    accent: "right",
    tag: "clue 01",
  },
  {
    number: 3,
    title: "Meet the Visitors",
    image: ASSETS.garden,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>A bumblebee buzzed from flower to flower.</p><p>“It has a job to do,” Tess whispered.</p></>,
    accent: "left",
    tag: "clue 02",
  },
  {
    number: 4,
    title: "Morning-Only Flowers",
    image: ASSETS.watercolor,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>Some flowers opened wide in the morning.</p><p>By afternoon, they had folded themselves closed.</p></>,
    accent: "right",
    tag: "clue 03",
  },
  {
    number: 5,
    title: "The Evidence Table",
    image: ASSETS.desk,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>The detectives gathered every clue they could find.</p><p>Notebook. Telescope. Clipboard. One very suspicious flower.</p></>,
    accent: "left",
    tag: "evidence",
  },
  {
    number: 6,
    title: "A Bee’s Busy Route",
    image: ASSETS.garden,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>The bee carried a little dust from one flower to another.</p><p>“That dust is pollen,” said Nia.</p></>,
    accent: "right",
    tag: "clue 04",
  },
  {
    number: 7,
    title: "The Flower Changes",
    image: ASSETS.clue,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>Behind one flower, a tiny squash was beginning to grow.</p><p>The mystery was changing shape.</p></>,
    accent: "left",
    tag: "clue 05",
  },
  {
    number: 8,
    title: "No Flower-Folder",
    image: ASSETS.path,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>Omar inspected the garden with his cardboard telescope.</p><p>“I see no flower-folder,” he announced.</p></>,
    accent: "right",
    tag: "false lead",
  },
  {
    number: 9,
    title: "The Garden Listens",
    image: ASSETS.watercolor,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>They slowed down and watched.</p><p>When the bee arrived, the flower seemed to tell them the answer.</p></>,
    accent: "left",
    tag: "turning point",
  },
  {
    number: 10,
    title: "The Last Question",
    image: ASSETS.desk,
    caption: "Temporary reference art — replace with approved spread",
    copy: <><p>“What happens after the visitors leave?” asked Tess.</p><p>So the friends built a board for the clues.</p></>,
    accent: "right",
    tag: "setup",
  },
  {
    number: 11,
    title: "Clue-board Reconstruction",
    image: ASSETS.garden,
    caption: "Approved layout art placeholder — Spread 11 master goes here",
    copy: <><p>The friends hurried to their clue board.</p><p>Nia drew a line from the bee to the pollen. Then from the pollen to the flower. Then from the flower to the tiny squash.</p><p><strong>“The flowers were not being stolen,”</strong> Nia said slowly. “They were changing.”</p></>,
    accent: "right",
    tag: "approved art",
  },
  {
    number: 12,
    title: "Garden Sign",
    image: ASSETS.garden,
    caption: "Approved layout art placeholder — Spread 12 master goes here",
    copy: <><p>Omar grabbed a marker and made a new sign for Willow Patch.</p><p>Tess added a drawing of a bumblebee. Nia added a flower and a tiny green squash.</p><p><strong>“Case closed,”</strong> said Tess.</p></>,
    accent: "left",
    tag: "approved art",
  },
  {
    number: 13,
    title: "Open Day Community Scene",
    image: ASSETS.desk,
    caption: "Approved layout art placeholder — Spread 13 master goes here",
    copy: <><p>At Saturday’s Open Day, children and grown-ups visited Willow Patch.</p><p>Nia asked everyone to look for yellow dust. Tess asked them to notice which flowers were open in the morning.</p><p><strong>“I have found a giant bee!”</strong> Omar announced.</p></>,
    accent: "left",
    tag: "approved art",
  },
  {
    number: 14,
    title: "Golden-hour Conclusion",
    image: ASSETS.clue,
    caption: "Approved layout art placeholder — Spread 14 master goes here",
    copy: <><p>The sun stretched long shadows across Willow Patch. The yellow flowers folded softly for the day.</p><p>A squash leaf was covered in winding white lines.</p><p><strong>CASE: THE MYSTERY OF THE SECRET LEAF TUNNELS</strong></p><p><em>Case closed—for now.</em></p></>,
    accent: "right",
    tag: "closing spread",
  },
];

function NavItem({ icon: Icon, label, active, onClick }: { icon: typeof BookOpen; label: string; active?: boolean; onClick?: () => void }) {
  return <button className={`nav-item ${active ? "active" : ""}`} onClick={onClick} aria-current={active ? "page" : undefined}><Icon className="nav-icon" /><span className="nav-label">{label}</span></button>;
}

function CheckItem({ children, pending = false }: { children: React.ReactNode; pending?: boolean }) {
  return <div className="check-item"><span className={`check ${pending ? "pending" : ""}`}>{pending ? "·" : <Check size={11} strokeWidth={3} />}</span><span>{children}</span></div>;
}

export default function Home() {
  const [currentNumber, setCurrentNumber] = useState(11);
  const [showText, setShowText] = useState(true);
  const [showGutter, setShowGutter] = useState(false);
  const [showSafeArea, setShowSafeArea] = useState(false);
  const [readingSize, setReadingSize] = useState(100);
  const [proofMode, setProofMode] = useState("reader");
  const spread = useMemo(() => spreads.find((item) => item.number === currentNumber) ?? spreads[10], [currentNumber]);
  const isFinalArt = spread.number >= 11;

  const moveSpread = (direction: number) => {
    setCurrentNumber((value) => Math.min(14, Math.max(1, value + direction)));
  };

  const copyStyle = { fontSize: `${readingSize}%` };

  return (
    <div className="app-shell">
      <aside className="left-rail">
        <div className="brand-block">
          <img className="brand-mark" src={ASSETS.mark} alt="Wonder Trail leaf mark" />
          <div className="brand-copy" style={{ marginTop: 11 }}>
            <div className="brand-name" style={{ fontSize: 22, lineHeight: .9 }}>Wonder Trail</div>
            <div style={{ fontSize: 10, color: "rgba(248,241,223,.62)", marginTop: 5, letterSpacing: ".06em" }}>MYSTERIES / PROOF 01</div>
          </div>
        </div>

        <div className="rail-label" style={{ marginTop: 47, marginBottom: 9 }}>Review desk</div>
        <nav className="rail-nav" aria-label="Preview sections">
          <NavItem icon={BookOpen} label="Book preview" active />
          <NavItem icon={Grid2X2} label="Page map" onClick={() => document.getElementById("page-map")?.scrollIntoView({ behavior: "smooth" })} />
          <NavItem icon={Type} label="Type system" onClick={() => document.getElementById("type-system")?.scrollIntoView({ behavior: "smooth" })} />
          <NavItem icon={Printer} label="KDP preflight" onClick={() => document.getElementById("preflight")?.scrollIntoView({ behavior: "smooth" })} />
        </nav>

        <div className="rail-label" style={{ marginTop: 35, marginBottom: 9 }}>Current case</div>
        <div className="brand-copy" style={{ color: "rgba(248,241,223,.78)", fontSize: 12, lineHeight: 1.45, padding: "0 12px" }}>
          The Mystery of the<br /><span style={{ color: "#f2d183", fontWeight: 700 }}>Morning-Only Flowers</span>
        </div>
        <div className="brand-copy" style={{ color: "rgba(248,241,223,.52)", fontSize: 11, lineHeight: 1.5, padding: "0 12px", marginTop: 12 }}>
          14 spreads · Ages 5–8<br />Square trim prototype
        </div>
        <div className="rail-footer-copy" style={{ marginTop: "auto", padding: "0 12px", color: "rgba(248,241,223,.45)", fontSize: 10, lineHeight: 1.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#f2d183", marginBottom: 8 }}><Sparkles size={12} /> Sunlit Storybook Desk</div>
          Preview only — temporary art is clearly marked.
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <div className="eyebrow">Illustrated eBook production / internal proof</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 7 }}>
              <h1 className="page-title" style={{ margin: 0 }}>The Mystery of the<br /><span style={{ color: "var(--garden)" }}>Morning-Only Flowers</span></h1>
              <span className="proof-label" style={{ alignSelf: "flex-end", marginBottom: 4 }}>Draft proof</span>
            </div>
          </div>
          <div className="toolbar-group">
            <button className="text-button"><CircleHelp size={15} /> <span className="brand-copy">Guide</span></button>
            <button className="text-button"><Settings2 size={15} /> <span className="brand-copy">Proof settings</span></button>
            <button className="text-button primary"><BookOpen size={15} /> Read full book</button>
          </div>
        </header>

        <div className="main-content">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 18 }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--muted-foreground)" }}>Current page pair</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 11, marginTop: 6 }}>
                <h2 className="rail-heading" style={{ fontSize: 27, margin: 0 }}>{String(spread.number).padStart(2, "0")} / 14</h2>
                <span style={{ color: "var(--muted-foreground)", fontSize: 13 }}>{spread.title}</span>
              </div>
            </div>
            <div style={{ textAlign: "right", color: "var(--muted-foreground)", fontSize: 11, lineHeight: 1.45 }}>
              <div><span style={{ color: "var(--garden)", fontWeight: 700 }}>Reader mode</span> · Text overlays on</div>
              <div>Last reviewed today · Art placeholders intentionally used</div>
            </div>
          </div>

          <div className="workspace">
            <section className="book-stage" aria-label="Book spread preview">
              <div className="stage-toolbar">
                <div className="toolbar-group">
                  <button className="text-button" onClick={() => moveSpread(-1)} disabled={currentNumber === 1}><ChevronLeft size={15} /> Previous</button>
                  <button className="text-button" onClick={() => moveSpread(1)} disabled={currentNumber === 14}>Next <ChevronRight size={15} /></button>
                </div>
                <div className="toolbar-group">
                  <button className={`text-button ${proofMode === "reader" ? "primary" : ""}`} onClick={() => setProofMode("reader")}><Eye size={14} /> Reader</button>
                  <button className={`text-button ${proofMode === "proof" ? "primary" : ""}`} onClick={() => setProofMode("proof")}><LayoutPanelTop size={14} /> Proof overlay</button>
                </div>
              </div>

              <div className={`spread-frame ${proofMode === "proof" ? "proof-on" : ""}`}>
                <div className="spread-art fade-in" key={spread.number}>
                  <img src={spread.image} alt={`${spread.title} temporary page-art placeholder`} />
                  <div className="spread-overlay" />
                  {showSafeArea && <div style={{ position: "absolute", inset: "6%", border: "1px dashed rgba(46,99,73,.7)", pointerEvents: "none" }} />}
                  {showGutter && <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, borderLeft: "1px dashed rgba(184,76,60,.85)", boxShadow: "0 0 0 8px rgba(184,76,60,.06)", pointerEvents: "none" }} />}
                  {showText && <div className={`spread-copy ${spread.accent === "right" ? "right" : ""}`} style={copyStyle}><div className="copy-panel">{spread.copy}</div></div>}
                  {spread.number === 12 && <div className="sign-copy">BUSY FLOWER<br />VISITORS AT WORK<span>LOOK WITH YOUR EYES. GIVE THEM SPACE.</span></div>}
                  {spread.number === 14 && <div className="spread-copy right" style={{ top: "59%", width: "34%", ...copyStyle }}><div className="copy-panel" style={{ padding: "9px 12px" }}><strong style={{ fontSize: ".95em" }}>CASE: THE MYSTERY OF THE SECRET LEAF TUNNELS</strong><p style={{ margin: "5px 0 0", fontStyle: "italic" }}>Case closed—for now.</p></div></div>}
                  {proofMode === "proof" && <div style={{ position: "absolute", right: 12, top: 12, padding: "6px 8px", borderRadius: 4, background: "rgba(35,73,54,.85)", color: "#fff7e8", fontSize: 9, letterSpacing: ".12em", textTransform: "uppercase" }}>Text layer / live</div>}
                </div>
                <div className="folio"><span>Wonder Trail Mysteries · Proof 01</span><span>Spread {spread.number}</span></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", marginTop: 13 }}>
                <div style={{ color: "var(--muted-foreground)", fontSize: 11, maxWidth: 500, lineHeight: 1.45 }}><Info size={13} style={{ verticalAlign: "-2px", marginRight: 5, color: "var(--gold)" }} /> {spread.caption}</div>
                <button className="text-button"><Maximize2 size={14} /> Full canvas</button>
              </div>

              <div className="thumbnail-row" id="page-map">
                {spreads.slice(0, 14).map((item) => <button key={item.number} className={`thumb ${currentNumber === item.number ? "active" : ""}`} onClick={() => setCurrentNumber(item.number)} aria-label={`Open spread ${item.number}`}><img src={item.image} alt="" /><div className="thumb-meta"><span>{String(item.number).padStart(2, "0")}</span><span style={{ color: item.number >= 11 ? "var(--garden)" : "var(--muted-foreground)" }}>{item.number >= 11 ? "art" : "ref"}</span></div></button>)}
              </div>
            </section>

            <aside className="proof-rail" aria-label="Proof details">
              <div>
                <div className="eyebrow">Production note</div>
                <h3 className="rail-heading" style={{ margin: "7px 0 0" }}>A calm page turn</h3>
                <p style={{ color: "var(--muted-foreground)", fontSize: 12, lineHeight: 1.55, margin: "9px 0 0" }}>Keep the open sky quiet. The clue should feel discovered—not announced.</p>
              </div>

                <div className="thread-bridge" aria-hidden="true"><span /><span /><span /></div>
                <dl className="spec-list">
                <div className="spec-row"><dt>Trim direction</dt><dd>8.5 × 8.5 in</dd></div>
                <div className="spec-row"><dt>Spread source</dt><dd>2560 × 1440</dd></div>
                <div className="spec-row"><dt>Text size</dt><dd>{readingSize}% · 17 px base</dd></div>
                <div className="spec-row"><dt>Current art</dt><dd>{isFinalArt ? "Final master slot" : "Temp reference"}</dd></div>
              </dl>

              <div style={{ marginTop: 19 }}>
                <div className="eyebrow">Visibility controls</div>
                <div className="check-list">
                  <label className="check-item" style={{ cursor: "pointer" }}><input type="checkbox" checked={showText} onChange={(event) => setShowText(event.target.checked)} style={{ accentColor: "var(--garden)", marginTop: 2 }} /><span>Show live text layer</span></label>
                  <label className="check-item" style={{ cursor: "pointer" }}><input type="checkbox" checked={showSafeArea} onChange={(event) => setShowSafeArea(event.target.checked)} style={{ accentColor: "var(--garden)", marginTop: 2 }} /><span>Show trim-safe area</span></label>
                  <label className="check-item" style={{ cursor: "pointer" }}><input type="checkbox" checked={showGutter} onChange={(event) => setShowGutter(event.target.checked)} style={{ accentColor: "var(--thread)", marginTop: 2 }} /><span>Show center gutter</span></label>
                </div>
              </div>

              <div style={{ marginTop: 19 }}>
                <div className="eyebrow">Reading size</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}><Type size={14} color="var(--garden)" /><input aria-label="Reading size" type="range" min="85" max="125" step="5" value={readingSize} onChange={(event) => setReadingSize(Number(event.target.value))} style={{ width: "100%", accentColor: "var(--gold)" }} /><Type size={18} color="var(--garden)" /></div>
              </div>

              <div className="thread-note"><strong>Clue thread</strong><br />Text currently avoids the evidence board, flower visitors, and the next-case leaf. Check the red gutter guide before export.</div>
            </aside>
          </div>

          <div className="bottom-section">
            <section className="paper-card" id="type-system">
              <div className="eyebrow">Type & voice</div>
              <h2 className="card-title" style={{ margin: "7px 0 0" }}>The page should sound observant.</h2>
              <p className="card-subtitle">Fraunces carries wonder; DM Sans keeps every sentence easy to follow.</p>
              <div className="type-sample"><div className="type-label">Display</div><div><div className="type-title">A clue can be quiet.</div><div className="type-body">Warm ink, wide leading, and short blocks make room for the illustration to breathe.</div></div></div>
              <div className="type-sample"><div className="type-label">Body</div><div><div className="type-body" style={{ marginTop: 0, fontSize: 15 }}>“Look with your eyes. Give them space.”</div><div className="type-body">A friendly rule should read clearly on a tablet, a phone, and a printed page.</div></div></div>
              <div className="micro-grid"><div className="micro-card"><div className="kicker">Body size</div><strong>17 px</strong></div><div className="micro-card"><div className="kicker">Leading</div><strong>1.55</strong></div><div className="micro-card"><div className="kicker">Ink</div><strong style={{ color: "var(--garden)" }}>Garden</strong></div><div className="micro-card"><div className="kicker">Accent</div><strong style={{ color: "var(--gold)" }}>Squash</strong></div></div>
            </section>

            <section className="paper-card" id="preflight">
              <div className="eyebrow">Preflight snapshot</div>
              <h2 className="card-title" style={{ margin: "7px 0 0" }}>Ready for the layout pass.</h2>
              <p className="card-subtitle">The prototype is structured like a real proof, while art slots remain replaceable.</p>
              <div className="mini-cover" style={{ marginTop: 16 }}><img src={ASSETS.desk} alt="Temporary cover reference" /><img className="cover-stamp" src={ASSETS.mark} alt="" /><div className="mini-cover-copy"><div className="small">A Willow Patch mystery</div><h3>Morning-Only<br />Flowers</h3><p>Wonder Trail Mysteries · Book one</p></div></div>
              <div className="check-list" style={{ marginTop: 16 }}><CheckItem>Text is separate from illustration layers.</CheckItem><CheckItem>Gutter and safe-area overlays are available.</CheckItem><CheckItem>Page map contains all 14 spreads.</CheckItem><CheckItem pending>Replace temporary reference images with final masters.</CheckItem><CheckItem pending>Export print PDF and fixed-layout Kindle files.</CheckItem></div>
              <button className="text-button primary" style={{ marginTop: 17, width: "100%", justifyContent: "center" }}><FileText size={14} /> Export checklist</button>
            </section>
          </div>

          <div className="footer-note"><PenLine size={12} style={{ verticalAlign: "-2px", marginRight: 5 }} /> Internal proof prototype for editorial review. Temporary internet/reference images are not cleared for publication and must be replaced before any KDP upload.</div>
        </div>
      </main>
    </div>
  );
}
