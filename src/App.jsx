import { useEffect } from 'react'
import './App.css'

/* ── Inline SVG Components ─────────────────────────────────────────────── */

function OmSymbol() {
  return (
    <svg viewBox="0 0 100 100" className="om-svg" aria-label="Om symbol">
      <text x="50" y="72" textAnchor="middle" fontSize="70" fontFamily="serif" fill="#D4AF37">
        ॐ
      </text>
    </svg>
  )
}

function LotusIcon() {
  return (
    <svg viewBox="0 0 40 40" className="lotus-icon" aria-hidden="true">
      <ellipse cx="20" cy="28" rx="6" ry="3" fill="#E8960C" opacity="0.5" />
      <path d="M20 8 C20 8,12 18,12 24 C12 28,16 30,20 28 C24 30,28 28,28 24 C28 18,20 8,20 8Z" fill="#E8960C" opacity="0.8" />
      <path d="M20 10 C20 10,8 16,6 22 C4 26,8 28,12 26 C14 24,18 18,20 10Z" fill="#D4AF37" opacity="0.6" />
      <path d="M20 10 C20 10,32 16,34 22 C36 26,32 28,28 26 C26 24,22 18,20 10Z" fill="#D4AF37" opacity="0.6" />
    </svg>
  )
}

function Bell({ side }) {
  return (
    <div className={`bell bell-${side}`} aria-hidden="true">
      <div className="bell-rope" />
      <svg viewBox="0 0 50 70" className="bell-body">
        <path d="M25 2 L25 12" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <circle cx="25" cy="12" r="3" fill="#D4AF37" />
        <path d="M12 18 C12 18,10 40,6 50 L44 50 C40 40,38 18,38 18 C38 14,12 14,12 18Z" fill="#D4AF37" opacity="0.85" />
        <ellipse cx="25" cy="50" rx="19" ry="4" fill="#B8941F" />
        <circle cx="25" cy="56" r="3" fill="#8B6914" />
        <path d="M15 28 C15 28,18 26,25 26 C32 26,35 28,35 28" stroke="#FFF5CC" strokeWidth="0.8" fill="none" opacity="0.4" />
      </svg>
    </div>
  )
}

function GaneshaIcon() {
  return (
    <div className="ganesha-container" aria-label="Lord Ganesha">
      <div className="ganesha-glow" />
      <svg viewBox="0 0 80 80" className="ganesha-svg">
        {/* Head */}
        <circle cx="40" cy="28" r="16" fill="#E8960C" opacity="0.9" />
        {/* Ears */}
        <ellipse cx="22" cy="26" rx="8" ry="10" fill="#E8960C" opacity="0.7" />
        <ellipse cx="58" cy="26" rx="8" ry="10" fill="#E8960C" opacity="0.7" />
        {/* Crown */}
        <path d="M30 14 L35 6 L40 12 L45 6 L50 14" stroke="#D4AF37" strokeWidth="2" fill="#D4AF37" opacity="0.8" />
        {/* Eyes */}
        <circle cx="34" cy="26" r="2.5" fill="#3D1A00" />
        <circle cx="46" cy="26" r="2.5" fill="#3D1A00" />
        {/* Trunk */}
        <path d="M40 34 C40 34,36 42,32 46 C30 48,32 50,34 48 C36 46,38 44,40 38" stroke="#E8960C" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        {/* Body */}
        <ellipse cx="40" cy="56" rx="14" ry="12" fill="#E8960C" opacity="0.85" />
        {/* Belly */}
        <ellipse cx="40" cy="58" rx="8" ry="7" fill="#FDF3DC" opacity="0.3" />
        {/* Arms */}
        <line x1="26" y1="50" x2="18" y2="42" stroke="#E8960C" strokeWidth="3" strokeLinecap="round" />
        <line x1="54" y1="50" x2="62" y2="42" stroke="#E8960C" strokeWidth="3" strokeLinecap="round" />
        {/* Tilak */}
        <path d="M38 20 L40 16 L42 20 Z" fill="#8B1A1A" opacity="0.8" />
      </svg>
    </div>
  )
}

function DecorativeArch() {
  return (
    <div className="arch" aria-hidden="true">
      <svg viewBox="0 0 600 120" className="arch-svg" preserveAspectRatio="xMidYMid meet">
        {/* Main arch */}
        <path d="M40 120 Q40 20,300 10 Q560 20,560 120" stroke="#D4AF37" strokeWidth="3" fill="none" />
        <path d="M50 120 Q50 30,300 20 Q550 30,550 120" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        {/* Center ornament */}
        <circle cx="300" cy="10" r="5" fill="#D4AF37" />
        <circle cx="300" cy="10" r="8" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.5" />
        {/* Decorative dots along arch */}
        {[0.15, 0.3, 0.45, 0.55, 0.7, 0.85].map((t, i) => {
          const x = 40 + (560 - 40) * t
          const y = 120 - (120 - 10) * Math.sin(t * Math.PI) * 0.9
          return <circle key={i} cx={x} cy={y} r="2.5" fill="#D4AF37" opacity="0.6" />
        })}
        {/* Hanging tassels */}
        {[120, 200, 400, 480].map((x, i) => (
          <g key={i}>
            <line x1={x} y1={80 + i * 3} x2={x} y2={100 + i * 3} stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
            <circle cx={x} cy={102 + i * 3} r="2" fill="#E8960C" opacity="0.5" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function MangoToran() {
  return (
    <svg viewBox="0 0 400 50" className="mango-toran" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {/* Main garland rope */}
      <path d="M0 8 Q50 35,100 22 Q150 8,200 22 Q250 35,300 22 Q350 8,400 22" stroke="#2D6A2D" strokeWidth="2" fill="none" />
      <path d="M0 10 Q50 37,100 24 Q150 10,200 24 Q250 37,300 24 Q350 10,400 24" stroke="#2D6A2D" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Mango leaves */}
      {[30,70,110,150,190,230,270,310,350].map((x, i) => (
        <g key={i} transform={`translate(${x}, ${14 + Math.sin(i * 0.7) * 8})`}>
          <ellipse rx="7" ry="13" fill="#2D6A2D" opacity={0.7 + (i % 2) * 0.15}
            transform={`rotate(${i % 2 === 0 ? -15 : 15})`} />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#4a9e4a" strokeWidth="0.5" opacity="0.5"
            transform={`rotate(${i % 2 === 0 ? -15 : 15})`} />
        </g>
      ))}
      {/* Marigold flowers at drape points */}
      {[100, 200, 300].map((x, i) => (
        <g key={`f${i}`}>
          <circle cx={x} cy={28} r="6" fill="#E8960C" opacity="0.8" />
          <circle cx={x} cy={28} r="3.5" fill="#D4AF37" opacity="0.9" />
          <circle cx={x} cy={28} r="1.5" fill="#8B1A1A" opacity="0.6" />
        </g>
      ))}
    </svg>
  )
}

function PaisleySide({ side }) {
  const flip = side === 'right' ? 'scaleX(-1)' : 'none'
  return (
    <svg viewBox="0 0 60 200" className={`paisley-side paisley-${side}`} aria-hidden="true"
      style={{ transform: flip }}>
      {/* Paisley motif */}
      <path d="M30 20 C45 20,55 40,50 60 C45 80,25 85,20 70 C15 55,20 35,30 20Z"
        fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.35" />
      <path d="M30 30 C40 30,48 45,44 58 C40 70,28 74,24 64 C20 54,25 40,30 30Z"
        fill="#D4AF37" opacity="0.08" />
      <circle cx="32" cy="45" r="3" fill="#D4AF37" opacity="0.2" />
      {/* Vine */}
      <path d="M30 80 C30 80,25 100,28 120 C31 140,26 160,30 180"
        stroke="#2D6A2D" strokeWidth="1" fill="none" opacity="0.25" />
      {/* Small leaves on vine */}
      {[95, 120, 145, 168].map((y, i) => (
        <ellipse key={i} cx={i % 2 === 0 ? 24 : 34} cy={y} rx="5" ry="8"
          fill="#2D6A2D" opacity="0.15" transform={`rotate(${i % 2 === 0 ? -20 : 20} ${i % 2 === 0 ? 24 : 34} ${y})`} />
      ))}
    </svg>
  )
}

function RangoliDots() {
  return (
    <div className="rangoli-dots" aria-hidden="true">
      <svg viewBox="0 0 300 40" className="rangoli-svg" preserveAspectRatio="xMidYMid meet">
        {/* Diamond center */}
        <path d="M150 4 L158 20 L150 36 L142 20 Z" fill="none" stroke="#D4AF37" strokeWidth="1.2" opacity="0.5" />
        <path d="M150 10 L155 20 L150 30 L145 20 Z" fill="#D4AF37" opacity="0.15" />
        <circle cx="150" cy="20" r="2" fill="#E8960C" opacity="0.6" />
        {/* Symmetrical dot pairs */}
        {[20, 40, 60, 80, 105].map((offset, i) => (
          <g key={i}>
            <circle cx={150 - offset} cy="20" r={1.5 - i * 0.1} fill="#D4AF37" opacity={0.5 - i * 0.06} />
            <circle cx={150 + offset} cy="20" r={1.5 - i * 0.1} fill="#D4AF37" opacity={0.5 - i * 0.06} />
          </g>
        ))}
        {/* Small arcs */}
        <path d="M120 20 Q135 8,150 20" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M150 20 Q165 8,180 20" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M120 20 Q135 32,150 20" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M150 20 Q165 32,180 20" stroke="#D4AF37" strokeWidth="0.8" fill="none" opacity="0.3" />
        {/* Outer swirl flourishes */}
        <path d="M40 20 Q30 10,20 20 Q30 30,40 20" stroke="#E8960C" strokeWidth="0.8" fill="none" opacity="0.3" />
        <path d="M260 20 Q270 10,280 20 Q270 30,260 20" stroke="#E8960C" strokeWidth="0.8" fill="none" opacity="0.3" />
      </svg>
    </div>
  )
}

function Kalash({ side }) {
  const flip = side === 'right' ? 'scaleX(-1)' : 'none'
  return (
    <svg viewBox="0 0 50 70" className={`kalash kalash-${side}`} aria-hidden="true"
      style={{ transform: flip }}>
      {/* Coconut */}
      <circle cx="25" cy="12" r="8" fill="#8B6914" opacity="0.7" />
      {/* Mango leaves from top */}
      <path d="M25 6 C20 -2,12 0,18 8" stroke="#2D6A2D" strokeWidth="1" fill="#2D6A2D" opacity="0.6" />
      <path d="M25 6 C30 -2,38 0,32 8" stroke="#2D6A2D" strokeWidth="1" fill="#2D6A2D" opacity="0.6" />
      <path d="M25 4 C25 -4,25 -4,25 4" stroke="#2D6A2D" strokeWidth="1.5" fill="#2D6A2D" opacity="0.5" />
      {/* Pot body */}
      <path d="M15 20 Q14 40,12 50 Q12 58,25 60 Q38 58,38 50 Q36 40,35 20Z"
        fill="#D4AF37" opacity="0.4" />
      <path d="M16 20 L34 20" stroke="#D4AF37" strokeWidth="1.5" opacity="0.5" />
      {/* Pot rim */}
      <ellipse cx="25" cy="20" rx="10" ry="3" fill="#D4AF37" opacity="0.5" />
      {/* Decoration lines */}
      <path d="M18 35 Q25 32,32 35" stroke="#E8960C" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M17 42 Q25 39,33 42" stroke="#E8960C" strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  )
}

function CardCorners() {
  return (
    <>
      <svg viewBox="0 0 40 40" className="card-corner corner-tl" aria-hidden="true">
        <path d="M2 38 C2 18,18 2,38 2" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M2 28 C2 14,14 2,28 2" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="6" cy="6" r="2" fill="#D4AF37" opacity="0.4" />
      </svg>
      <svg viewBox="0 0 40 40" className="card-corner corner-tr" aria-hidden="true">
        <path d="M38 38 C38 18,22 2,2 2" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M38 28 C38 14,26 2,12 2" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="34" cy="6" r="2" fill="#D4AF37" opacity="0.4" />
      </svg>
      <svg viewBox="0 0 40 40" className="card-corner corner-bl" aria-hidden="true">
        <path d="M2 2 C2 22,18 38,38 38" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M2 12 C2 26,14 38,28 38" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="6" cy="34" r="2" fill="#D4AF37" opacity="0.4" />
      </svg>
      <svg viewBox="0 0 40 40" className="card-corner corner-br" aria-hidden="true">
        <path d="M38 2 C38 22,22 38,2 38" stroke="#D4AF37" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M38 12 C38 26,26 38,12 38" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="34" cy="34" r="2" fill="#D4AF37" opacity="0.4" />
      </svg>
    </>
  )
}

function DiyaIllustration({ className }) {
  return (
    <svg viewBox="0 0 40 45" className={`diya-illust ${className || ''}`} aria-hidden="true">
      {/* Flame */}
      <path d="M20 4 C22 8,24 12,22 16 C20 20,18 20,18 16 C16 12,18 8,20 4Z"
        fill="#E8960C" opacity="0.8" />
      <path d="M20 8 C21 10,22 14,21 16 C20 18,19 18,19 16 C18 14,19 10,20 8Z"
        fill="#FFD700" opacity="0.9" />
      {/* Wick */}
      <line x1="20" y1="16" x2="20" y2="22" stroke="#3D1A00" strokeWidth="1" />
      {/* Bowl */}
      <path d="M10 22 Q8 32,12 36 Q16 40,20 40 Q24 40,28 36 Q32 32,30 22Z"
        fill="#D4AF37" opacity="0.5" />
      <ellipse cx="20" cy="22" rx="10" ry="3" fill="#D4AF37" opacity="0.6" />
      {/* Base */}
      <ellipse cx="20" cy="40" rx="6" ry="2" fill="#B8941F" opacity="0.4" />
    </svg>
  )
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider-line" />
      <span className="divider-symbol">✦</span>
      <span className="divider-dash">—</span>
      <span className="divider-symbol">✦</span>
      <span className="divider-line" />
    </div>
  )
}

function FloatingDiyas() {
  const count = 8
  return (
    <div className="floating-diyas" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="diya-particle"
          style={{
            left: `${10 + (i * 80) / count + Math.random() * 5}%`,
            animationDelay: `${i * 1.2 + Math.random() * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

function BottomScene() {
  return (
    <div className="bottom-scene" aria-hidden="true">
      {/* Grass */}
      <div className="grass" />
      {/* Fence */}
      <div className="fence">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="fence-picket" />
        ))}
        <div className="fence-rail fence-rail-top" />
        <div className="fence-rail fence-rail-bottom" />
      </div>
      {/* Ceremony figures */}
      <div className="ceremony-figures">
        {/* Guru */}
        <div className="figure figure-guru">
          <div className="figure-head" />
          <div className="figure-body guru-body" />
        </div>
        {/* Student */}
        <div className="figure figure-student">
          <div className="figure-head" />
          <div className="figure-body student-body" />
        </div>
        {/* Sacred fire */}
        <div className="sacred-fire">
          <div className="fire-base" />
          <div className="fire-flame flame-1" />
          <div className="fire-flame flame-2" />
          <div className="fire-flame flame-3" />
        </div>
      </div>
    </div>
  )
}

/* ── Main App ──────────────────────────────────────────────────────────── */

export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="invitation-page">
      {/* Background noise overlay */}
      <div className="bg-noise" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      {/* Floating diyas */}
      <FloatingDiyas />

      {/* ─── Side Paisley Decorations ─────────────────────────────────── */}
      <PaisleySide side="left" />
      <PaisleySide side="right" />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <header className="hero">
        <DecorativeArch />
        <Bell side="left" />
        <Bell side="right" />

        {/* Kalash pots flanking the hero */}
        <Kalash side="left" />
        <Kalash side="right" />

        <GaneshaIcon />
        <p className="hero-subtitle anim-fade-up" style={{ animationDelay: '0.3s' }}>
          Thread Ceremony
        </p>
        <h1 className="hero-title anim-fade-up" style={{ animationDelay: '0.6s' }}>
          Srihari&rsquo;s Upanayanam Ceremony
        </h1>
        <OmSymbol />

        {/* Mango leaf toran below hero */}
        <MangoToran />

        {/* Diyas flanking Om */}
        <DiyaIllustration className="diya-hero-left" />
        <DiyaIllustration className="diya-hero-right" />
      </header>

      {/* ─── Rangoli spacer between hero and message ──────────────────── */}
      <RangoliDots />

      {/* ─── INVITATION MESSAGE ───────────────────────────────────────── */}
      <section className="invitation-message reveal">
        <div className="message-card">
          <CardCorners />
          <Divider />
          <p className="message-text">
            We solicit your blessings for our son to progress on the path of knowledge and wisdom.
            Kindly grace the occasion of <strong>Upanayanam Ceremony</strong>.
          </p>
          <Divider />
        </div>
      </section>

      {/* ─── Rangoli spacer between message and details ───────────────── */}
      <RangoliDots />

      {/* ─── EVENT DETAILS ────────────────────────────────────────────── */}
      <section className="event-details reveal">
        <div className="details-card shimmer-border">
          <h2 className="section-heading reveal">Ceremony Details</h2>

          <div className="detail-row reveal" style={{ transitionDelay: '0.1s' }}>
            <LotusIcon />
            <div>
              <span className="detail-label">Date</span>
              <span className="detail-value">Sunday, 03rd May 2026</span>
            </div>
          </div>

          <div className="detail-row reveal" style={{ transitionDelay: '0.2s' }}>
            <LotusIcon />
            <div>
              <span className="detail-label">Muhurtham</span>
              <span className="detail-value">08:00 A.M. &nbsp;|&nbsp; Lunch Follows</span>
            </div>
          </div>

          <div className="detail-row reveal" style={{ transitionDelay: '0.3s' }}>
            <LotusIcon />
            <div>
              <span className="detail-label">Venue</span>
              <span className="detail-value">B. Korlam, Srikakulam, Andhra Pradesh</span>
            </div>
          </div>

          <div className="detail-row reveal" style={{ transitionDelay: '0.4s' }}>
            <LotusIcon />
            <div>
              <span className="detail-label">Invited By</span>
              <span className="detail-value">
                Panigrahi&rsquo;s Family &nbsp;|&nbsp;{' '}
                <a href="tel:+919908875599" className="phone-link">📞 9908875599</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM SCENE ─────────────────────────────────────────────── */}
      <BottomScene />

      {/* ─── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="footer reveal">
        <p className="footer-text">With Blessings &amp; Love — Panigrahi&rsquo;s Family</p>
        <div className="footer-om" aria-label="Om">ॐ</div>
      </footer>
    </div>
  )
}
