import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

/* ═══════════════════════════════════════════════
   PHASE DATA — 4 romantic chapters
   ═══════════════════════════════════════════════ */
const phases = [
  {
    id: 1,
    roman: 'I',
    title: 'You, The Girl I Love',
    narration:
      'It was in those innocent eyes that I first saw forever. Something in the universe quietly rearranged itself the moment I saw you…',
    background:
      'radial-gradient(ellipse at 30% 50%, #FFD6E7 0%, #FFF0F5 50%, #E8F4FF 100%)',
    accent: '#FFB3CB',
    ghostText: 'YOU',
    titleColor: '#C2185B',
    romanColor: '#F4A0C0',
    dotColor: '#FFB3CB',
    rotation: 'rotate-neg3',
    heartColor: '#FFB3CB',
    characterImage: '/stitch_svg_character_duo/a_high_fidelity_3d_animated_character_scene_in_a_pixar_style_aesthetic._the_boy_2/screen.png',
  },
  {
    id: 2,
    roman: 'II',
    title: 'The First Glance',
    narration:
      "The second time felt like the first time all over again. I didn't know then that I was already completely, helplessly yours…",
    background:
      'radial-gradient(ellipse at 70% 40%, #C9E8FF 0%, #EEF6FF 50%, #FFE8F2 100%)',
    accent: '#90C9F5',
    ghostText: 'GLANCE',
    titleColor: '#1565C0',
    romanColor: '#F4A0C0',
    dotColor: '#90C9F5',
    rotation: 'rotate-pos2',
    heartColor: '#90C9F5',
    characterImage: '/stitch_svg_character_duo/a_high_fidelity_3d_animated_character_scene_in_a_pixar_style_aesthetic._the_boy_3/screen.png',
  },
  {
    id: 3,
    roman: 'III',
    title: 'Growing Into My Heart',
    narration:
      'You grew more beautiful with every passing season — and so did everything I felt for you, quietly and without permission…',
    background:
      'radial-gradient(ellipse at 40% 60%, #FFB8D1 0%, #FFE4EE 50%, #D4EEFF 100%)',
    accent: '#F4A0C0',
    ghostText: 'HEART',
    titleColor: '#C2185B',
    romanColor: '#F4A0C0',
    dotColor: '#FFB3CB',
    rotation: 'rotate-neg2',
    heartColor: '#FFB3CB',
    characterImage: '/stitch_svg_character_duo/a_high_fidelity_3d_animated_character_scene_in_a_pixar_style_aesthetic._the_boy_4/screen.png',
  },
  {
    id: 4,
    roman: 'IV',
    title: 'Finally, Us',
    narration:
      'No more waiting. No more chapters without you in them. Just us, finally writing our own story, together…',
    background:
      'radial-gradient(ellipse at 60% 30%, #B8D8F8 0%, #E8F5FF 50%, #FFD6E7 100%)',
    accent: '#90BEF5',
    ghostText: 'US',
    titleColor: '#1565C0',
    romanColor: '#F4A0C0',
    dotColor: '#90C9F5',
    rotation: 'rotate-pos3',
    heartColor: '#90C9F5',
    characterImage: '/stitch_svg_character_duo/a_high_fidelity_3d_animated_character_scene_in_a_pixar_style_aesthetic._the_boy_2/screen.png',
  },
];

function GrainOverlay() {
  return (
    <svg className="grain-overlay" width="100%" height="100%">
      <filter id="grain-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}

function FloatingHeartsEmitter({ phase, trigger }) {
  const [hearts, setHearts] = useState([]);

  const emitHearts = () => {
    const newHearts = Array.from({ length: 25 }).map((_, i) => ({
      id: Date.now() + i,
      delay: i * 40,
      left: Math.random() * 30 - 15, // Random left offset -15% to +15%
      duration: 3 + Math.random() * 2, // Random duration 3-5s
      size: 12 + Math.random() * 16, // Random size 12-28px
      xDrift: Math.random() * 200 - 100, // Random horizontal drift
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 6000);
  };

  // Emit hearts when trigger changes or when page loads
  useEffect(() => {
    emitHearts();
  }, [trigger, phase.id]);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart-page"
          style={{
            '--heart-color': phase.heartColor,
            '--heart-delay': `${heart.delay}ms`,
            '--heart-duration': `${heart.duration}s`,
            '--heart-size': `${heart.size}px`,
            '--heart-x-drift': `${heart.xDrift}px`,
            left: `calc(180px + ${heart.left}%)`,
          }}
        >
          ♥
        </div>
      ))}
    </>
  );
}

function PolaroidFrame({ photo, phase, onUpload, phaseIndex, defaultImage }) {
  const inputRef = useRef(null);
  const displayImage = photo || defaultImage;

  return (
    <div className="polaroid-container">
      <div
        className={`polaroid-frame ${phase.rotation}`}
        onClick={() => inputRef.current?.click()}
      >
        <div className="polaroid-inner">
          {displayImage ? (
            <img
              src={displayImage}
              alt={`Chapter ${phase.roman} memory`}
            />
          ) : (
            <>
              <span className="polaroid-placeholder-icon">📷</span>
              <span className="polaroid-placeholder-text">
                Add her photo ✦
              </span>
            </>
          )}
        </div>
        <span className="polaroid-caption">{phase.title}</span>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="polaroid-upload"
          onChange={(e) => onUpload(phaseIndex, e)}
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

function NarrationPanel({ phase }) {
  return (
    <div className="narration-panel phase-enter">
      <div className="narration-roman" style={{ color: phase.romanColor }}>
        Chapter {phase.roman}
      </div>
      <div
        className="narration-divider-line"
        style={{ color: phase.romanColor }}
      >
        ✦
      </div>
      <div className="narration-title" style={{ color: phase.titleColor }}>
        {phase.title}
      </div>
      <p className="narration-text">
        &ldquo;{phase.narration}&rdquo;
      </p>
    </div>
  );
}

export default function Page() {
  const { pageNum } = useParams();
  const currentPhase = phases.find(p => p.id === parseInt(pageNum)) || phases[0];
  const [photo, setPhoto] = useState(null);
  const [heartsTrigger, setHeartsTrigger] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio on component mount
  useEffect(() => {
    const audio = new Audio('/main.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.muted = true;
    audio.preload = 'auto';
    audioRef.current = audio;
    
    // Try to play, but don't error if it fails
    audio.play().catch(err => {
      console.log('Audio play deferred:', err?.message);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Unmute on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (audioRef.current) {
          audioRef.current.muted = false;
          setIsMuted(false);
          audioRef.current.play().catch(err => {
            console.log('Audio play on interaction error:', err?.message);
          });
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
      if (!newMuted) {
        audioRef.current.play().catch(err => {
          console.log('Audio play error:', err?.message);
        });
      }
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (photo) URL.revokeObjectURL(photo);
    setPhoto(url);
  };

  const handleNext = () => {
    setHeartsTrigger(prev => prev + 1);
  };

  return (
    <main
      className="page-main"
      style={{ backgroundImage: currentPhase.background }}
    >
      <GrainOverlay />

      {/* Hearts Emitter Container */}
      <FloatingHeartsEmitter phase={currentPhase} trigger={heartsTrigger} />

      {/* Top-Left Label */}
      <div className="top-label">OUR STORY</div>

      {/* Mute Button */}
      <button
        className="mute-btn"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Polaroid Photo Frame — top-left */}
      <PolaroidFrame
        photo={photo}
        phase={currentPhase}
        phaseIndex={currentPhase.id - 1}
        onUpload={handlePhotoUpload}
        defaultImage={`/${currentPhase.id}.jpeg`}
      />

      {/* Narration Panel — center-left */}
      <NarrationPanel phase={currentPhase} />

      {/* Character Image — bottom-right */}
      <div className="character-container-page">
        <div className="character-wrapper-page">
          <img
            src={currentPhase.characterImage}
            alt={`Chapter ${currentPhase.roman}`}
            className="character-image-page"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="page-navigation">
        {currentPhase.id > 1 && (
          <Link to={`/chapter/${currentPhase.id - 1}`} className="nav-btn-page nav-prev">
            ← Previous
          </Link>
        )}
        
        {currentPhase.id < 4 && (
          <Link 
            to={`/chapter/${currentPhase.id + 1}`} 
            className="nav-btn-page nav-next"
            onClick={handleNext}
          >
            Next →
          </Link>
        )}
      </div>

      {/* Chapter indicators */}
      <div className="chapter-indicators-page">
        {phases.map((phase) => (
          <Link
            key={phase.id}
            to={`/chapter/${phase.id}`}
            className={`indicator-page ${currentPhase.id === phase.id ? 'active' : ''}`}
            style={{
              backgroundColor: currentPhase.id === phase.id ? phase.accent : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </main>
  );
}
