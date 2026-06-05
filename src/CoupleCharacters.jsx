/**
 * CoupleCharacters.jsx
 *
 * Two chunky, bold, 3D Pixar/Disney-adjacent SVG cartoon figurines:
 * - Girl: dark brown flowing wavy hair, blue floral Pakistani shalwar kameez,
 *         large expressive eyes, blush, warm smile, ~5'6"
 * - Boy: dark spiky hair, round glasses, grey oversized tee, dark jeans,
 *         confident grin showing teeth, ~6'0", arm over girl's shoulder
 *
 * Both slightly turned toward viewer (3/4 angle), candid happy pose.
 * Animated: dupatta sway, boy's free hand swing, breathing bob on whole group.
 */
export default function CoupleCharacters() {
  return (
    <svg
      viewBox="0 0 480 580"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Animated cartoon couple — boy with arm around girl's shoulder"
      role="img"
      className="couple-svg"
    >
      <defs>
        {/* ═══ Skin Gradients ═══ */}
        <radialGradient id="skinGirl" cx="0.45" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#FFCBA4" />
          <stop offset="70%" stopColor="#F5BA8C" />
          <stop offset="100%" stopColor="#E8A882" />
        </radialGradient>
        <radialGradient id="skinBoy" cx="0.45" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#FFCBA4" />
          <stop offset="70%" stopColor="#F0B484" />
          <stop offset="100%" stopColor="#E8A882" />
        </radialGradient>
        <linearGradient id="skinArmGirl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCBA4" />
          <stop offset="100%" stopColor="#E8A882" />
        </linearGradient>
        <linearGradient id="skinArmBoy" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFCBA4" />
          <stop offset="100%" stopColor="#E8A882" />
        </linearGradient>

        {/* ═══ Girl Dress Gradient — Deep Blue Ethnic ═══ */}
        <linearGradient id="girlDressMain" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#3B8DD4" />
          <stop offset="40%" stopColor="#2A6DB5" />
          <stop offset="100%" stopColor="#1E5490" />
        </linearGradient>
        {/* Dress shadow overlay */}
        <linearGradient id="girlDressShadow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
        </linearGradient>

        {/* Dupatta lighter blue */}
        <linearGradient id="dupattaGrad" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#7EB8F5" />
          <stop offset="50%" stopColor="#6AA8E8" />
          <stop offset="100%" stopColor="#5B9BD5" />
        </linearGradient>

        {/* ═══ Boy Shirt Gradient — Grey Oversized Tee ═══ */}
        <linearGradient id="boyShirtMain" x1="0" y1="0" x2="0.1" y2="1">
          <stop offset="0%" stopColor="#C5C5C5" />
          <stop offset="50%" stopColor="#9B9B9B" />
          <stop offset="100%" stopColor="#6B6B6B" />
        </linearGradient>
        <linearGradient id="boyShirtHighlight" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>

        {/* Boy Jeans */}
        <linearGradient id="boyJeansGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A4A7A" />
          <stop offset="50%" stopColor="#2D3561" />
          <stop offset="100%" stopColor="#1E2548" />
        </linearGradient>

        {/* ═══ Hair Gradients ═══ */}
        <linearGradient id="girlHairBase" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#6B3A2A" />
          <stop offset="50%" stopColor="#4A2818" />
          <stop offset="100%" stopColor="#3D1F0D" />
        </linearGradient>
        <linearGradient id="girlHairHighlight" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#8B5A3A" />
          <stop offset="100%" stopColor="#6B3A2A" />
        </linearGradient>

        <linearGradient id="boyHairBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A4A" />
          <stop offset="50%" stopColor="#1A1A2E" />
          <stop offset="100%" stopColor="#0F0F1E" />
        </linearGradient>

        {/* ═══ Soft Drop Shadow Filter ═══ */}
        <filter id="charShadow" x="-15%" y="-8%" width="130%" height="125%">
          <feDropShadow dx="0" dy="5" stdDeviation="7" floodColor="#000" floodOpacity="0.10" />
        </filter>
        {/* Stronger shadow for 3D depth on body */}
        <filter id="bodyDepth" x="-10%" y="-5%" width="120%" height="115%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.08" />
        </filter>

        {/* ═══ Blush ═══ */}
        <radialGradient id="blushPink" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FF8888" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FF8888" stopOpacity="0" />
        </radialGradient>

        {/* ═══ Floral Pattern for Dress ═══ */}
        <pattern id="floralPat" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
          {/* Small 5-petal flowers */}
          <circle cx="7" cy="7" r="1.8" fill="rgba(255,255,255,0.28)" />
          <circle cx="5.5" cy="5.5" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="8.5" cy="5.5" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="5.5" cy="8.5" r="1" fill="rgba(255,255,255,0.18)" />
          <circle cx="8.5" cy="8.5" r="1" fill="rgba(255,255,255,0.18)" />

          <circle cx="21" cy="21" r="1.5" fill="rgba(255,200,220,0.3)" />
          <circle cx="19.8" cy="19.8" r="0.8" fill="rgba(255,200,220,0.2)" />
          <circle cx="22.2" cy="19.8" r="0.8" fill="rgba(255,200,220,0.2)" />
          <circle cx="19.8" cy="22.2" r="0.8" fill="rgba(255,200,220,0.2)" />
          <circle cx="22.2" cy="22.2" r="0.8" fill="rgba(255,200,220,0.2)" />

          <circle cx="14" cy="4" r="1.2" fill="rgba(255,255,255,0.2)" />
          <circle cx="4" cy="18" r="1.4" fill="rgba(200,230,255,0.22)" />
          <circle cx="24" cy="12" r="1" fill="rgba(255,255,255,0.15)" />
          {/* Leaf accents */}
          <ellipse cx="10" cy="22" rx="1.2" ry="2.8" fill="rgba(255,255,255,0.1)" transform="rotate(-25 10 22)" />
          <ellipse cx="18" cy="10" rx="0.8" ry="2" fill="rgba(200,230,255,0.12)" transform="rotate(20 18 10)" />
        </pattern>

        {/* ═══ Ground Shadow ═══ */}
        <radialGradient id="groundShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000" stopOpacity="0.14" />
          <stop offset="80%" stopColor="#000" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>

        {/* ═══ Glossy highlight for 3D effect ═══ */}
        <radialGradient id="headGlossGirl" cx="0.35" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="headGlossBoy" cx="0.35" cy="0.25" r="0.5">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Eye shine */}
        <radialGradient id="eyeShine" cx="0.4" cy="0.3" r="0.5">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>

        {/* Glass lens gradient */}
        <radialGradient id="lensGlare" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      {/* ═══ Ground Shadow ═══ */}
      <ellipse cx="240" cy="565" rx="170" ry="14" fill="url(#groundShadow)" />

      {/* ════════════════════════════════════════════════════
           GIRL CHARACTER (left side, ~5'6")
           ════════════════════════════════════════════════════ */}
      <g filter="url(#charShadow)" className="breathing-bob">
        <g transform="translate(75, 60)">

          {/* ── Girl's Hair BACK layer (flowing, wavy) ── */}
          <path
            d="M 55 100 Q 42 130, 28 210 Q 22 260, 25 310 Q 28 340, 35 360
               Q 38 370, 42 355 Q 35 310, 38 260 Q 42 200, 50 150 Q 55 120, 60 105 Z"
            fill="url(#girlHairBase)"
            opacity="0.9"
          />
          <path
            d="M 105 95 Q 118 120, 132 210 Q 138 270, 130 330 Q 126 360, 118 375
               Q 114 382, 110 365 Q 120 320, 118 260 Q 115 200, 108 150 Q 104 120, 100 100 Z"
            fill="url(#girlHairBase)"
            opacity="0.9"
            className="dupatta-anim"
          />
          {/* Hair highlight strands back */}
          <path
            d="M 60 110 Q 48 150, 38 230 Q 35 260, 38 290"
            fill="none" stroke="#8B5A3A" strokeWidth="3" opacity="0.25"
          />
          <path
            d="M 100 105 Q 112 145, 122 230 Q 125 260, 122 290"
            fill="none" stroke="#8B5A3A" strokeWidth="3" opacity="0.25"
          />

          {/* ── Girl's Body / Kameez (upper) ── */}
          <path
            d="M 52 185 Q 45 195, 38 270 L 34 355 Q 36 368, 80 372
               Q 125 368, 127 355 L 122 270 Q 115 195, 108 185 Z"
            fill="url(#girlDressMain)"
          />
          {/* Dress shadow overlay for depth */}
          <path
            d="M 52 185 Q 45 195, 38 270 L 34 355 Q 36 368, 80 372
               Q 125 368, 127 355 L 122 270 Q 115 195, 108 185 Z"
            fill="url(#girlDressShadow)"
          />
          {/* Floral pattern overlay */}
          <path
            d="M 52 185 Q 45 195, 38 270 L 34 355 Q 36 368, 80 372
               Q 125 368, 127 355 L 122 270 Q 115 195, 108 185 Z"
            fill="url(#floralPat)"
          />
          {/* Dress fold shadows */}
          <path d="M 60 220 Q 65 260, 58 310" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
          <path d="M 100 225 Q 95 265, 102 310" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
          <path d="M 75 240 Q 80 280, 78 330" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />

          {/* Neckline decoration — embroidery detail */}
          <path
            d="M 58 188 Q 80 200, 102 188"
            fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2.5"
          />
          <path
            d="M 62 193 Q 80 203, 98 193"
            fill="none" stroke="rgba(255,200,220,0.35)" strokeWidth="1.8"
          />
          {/* Small embroidery dots */}
          <circle cx="65" cy="196" r="1" fill="rgba(255,255,255,0.3)" />
          <circle cx="80" cy="200" r="1" fill="rgba(255,255,255,0.3)" />
          <circle cx="95" cy="196" r="1" fill="rgba(255,255,255,0.3)" />

          {/* ── Shalwar (pants) ── */}
          <path
            d="M 42 355 L 38 465 Q 40 475, 58 475 Q 74 475, 72 465 L 76 355"
            fill="#2A6DB5"
          />
          <path
            d="M 84 355 L 88 465 Q 90 475, 108 475 Q 122 475, 120 465 L 115 355"
            fill="#2A6DB5"
          />
          {/* Shalwar fold shadows */}
          <path d="M 50 380 Q 52 420, 48 455" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />
          <path d="M 98 380 Q 96 420, 100 455" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1.5" />

          {/* ── Shoes (ethnic khussas) ── */}
          <ellipse cx="55" cy="478" rx="20" ry="8" fill="#D4A574" />
          <ellipse cx="55" cy="476" rx="18" ry="5" fill="#E0B88A" />
          <ellipse cx="108" cy="478" rx="20" ry="8" fill="#D4A574" />
          <ellipse cx="108" cy="476" rx="18" ry="5" fill="#E0B88A" />
          {/* Shoe detail */}
          <path d="M 45 476 Q 55 472, 65 476" fill="none" stroke="#C09060" strokeWidth="0.8" />
          <path d="M 98 476 Q 108 472, 118 476" fill="none" stroke="#C09060" strokeWidth="0.8" />

          {/* ── Girl's Dupatta (flowing scarf, draped over left shoulder) ── */}
          <g className="dupatta-anim">
            <path
              d="M 48 186 Q 32 210, 22 270 Q 16 330, 22 390 Q 26 420, 12 445
                 Q 6 455, 16 448 Q 28 435, 30 400 Q 35 350, 32 290
                 Q 30 240, 42 200 Z"
              fill="url(#dupattaGrad)"
              opacity="0.55"
            />
            {/* Dupatta pattern */}
            <path
              d="M 48 186 Q 32 210, 22 270 Q 16 330, 22 390 Q 26 420, 12 445
                 Q 6 455, 16 448 Q 28 435, 30 400 Q 35 350, 32 290
                 Q 30 240, 42 200 Z"
              fill="url(#floralPat)"
              opacity="0.5"
            />
            {/* Dupatta edge highlight */}
            <path
              d="M 48 186 Q 32 210, 22 270 Q 16 330, 22 390 Q 26 420, 12 445"
              fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"
            />
          </g>
          {/* Dupatta across chest */}
          <path
            d="M 48 186 Q 55 195, 105 188 Q 110 186, 108 190"
            fill="none" stroke="url(#dupattaGrad)" strokeWidth="14" strokeLinecap="round"
            opacity="0.4"
          />

          {/* ── Girl's Arms ── */}
          {/* Left arm (toward boy, slightly bent, behind body) */}
          <path
            d="M 108 200 Q 120 230, 125 270 Q 127 290, 122 305"
            fill="none" stroke="url(#skinArmGirl)" strokeWidth="18"
            strokeLinecap="round"
          />
          <circle cx="122" cy="305" r="9" fill="url(#skinGirl)" />
          {/* Right arm (resting at side, natural) */}
          <path
            d="M 50 200 Q 38 238, 35 278 Q 33 298, 38 318"
            fill="none" stroke="url(#skinArmGirl)" strokeWidth="18"
            strokeLinecap="round"
          />
          <circle cx="38" cy="318" r="9" fill="url(#skinGirl)" />
          {/* Fingers hint */}
          <path d="M 34 318 Q 30 324, 32 328" fill="none" stroke="url(#skinArmGirl)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 38 320 Q 36 326, 38 330" fill="none" stroke="url(#skinArmGirl)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 42 318 Q 44 324, 42 328" fill="none" stroke="url(#skinArmGirl)" strokeWidth="3" strokeLinecap="round" />

          {/* ── Girl's Neck ── */}
          <rect x="66" y="158" width="28" height="30" rx="14" fill="url(#skinGirl)" />
          {/* Neck shadow */}
          <ellipse cx="80" cy="162" rx="12" ry="4" fill="rgba(0,0,0,0.06)" />

          {/* ── Girl's Head (big, round, 3D) ── */}
          <ellipse cx="80" cy="125" rx="42" ry="46" fill="url(#skinGirl)" />
          {/* Head gloss for 3D */}
          <ellipse cx="80" cy="125" rx="42" ry="46" fill="url(#headGlossGirl)" />

          {/* ── Girl's Hair FRONT layer ── */}
          {/* Main hair dome */}
          <path
            d="M 38 118 Q 34 80, 48 62 Q 60 48, 80 45 Q 100 42, 114 55
               Q 124 66, 126 90 Q 128 108, 124 120
               Q 118 100, 105 88 Q 90 78, 75 80
               Q 58 83, 46 100 Q 40 110, 38 118 Z"
            fill="url(#girlHairBase)"
          />
          {/* Hair highlight band */}
          <path
            d="M 45 100 Q 50 82, 65 70 Q 75 62, 90 63 Q 105 66, 115 80
               Q 110 70, 95 65 Q 78 60, 62 68 Q 50 78, 45 100 Z"
            fill="url(#girlHairHighlight)"
            opacity="0.6"
          />
          {/* Side bangs left */}
          <path
            d="M 40 115 Q 36 95, 44 78 Q 38 92, 38 112 Q 38 118, 40 122"
            fill="url(#girlHairBase)"
          />
          {/* Side bangs right */}
          <path
            d="M 120 110 Q 124 92, 118 76 Q 122 88, 122 108 Q 122 115, 120 118"
            fill="url(#girlHairBase)"
          />
          {/* Hair parting */}
          <path d="M 78 50 Q 80 70, 82 90" fill="none" stroke="#3D1F0D" strokeWidth="1" opacity="0.25" />
          {/* Wavy texture lines */}
          <path d="M 50 92 Q 55 85, 62 82" fill="none" stroke="#8B5A3A" strokeWidth="1.2" opacity="0.2" />
          <path d="M 96 82 Q 104 85, 110 92" fill="none" stroke="#8B5A3A" strokeWidth="1.2" opacity="0.2" />

          {/* ── Girl's Face ── */}
          {/* Eyes — large, expressive */}
          {/* Left eye */}
          <ellipse cx="66" cy="126" rx="7" ry="8" fill="white" />
          <ellipse cx="66" cy="126" rx="7" ry="8" fill="url(#eyeShine)" />
          <circle cx="67" cy="127" r="4.5" fill="#3A2518" />
          <circle cx="67" cy="127" r="2.8" fill="#1A1008" />
          <circle cx="65" cy="125" r="1.8" fill="white" />
          <circle cx="69" cy="129" r="0.8" fill="white" opacity="0.6" />
          {/* Right eye */}
          <ellipse cx="94" cy="126" rx="7" ry="8" fill="white" />
          <ellipse cx="94" cy="126" rx="7" ry="8" fill="url(#eyeShine)" />
          <circle cx="95" cy="127" r="4.5" fill="#3A2518" />
          <circle cx="95" cy="127" r="2.8" fill="#1A1008" />
          <circle cx="93" cy="125" r="1.8" fill="white" />
          <circle cx="97" cy="129" r="0.8" fill="white" opacity="0.6" />

          {/* Eyelashes — curved, feminine */}
          <path d="M 58 121 Q 62 117, 67 120" fill="none" stroke="#3A2518" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 56 124 Q 58 120, 60 122" fill="none" stroke="#3A2518" strokeWidth="1" strokeLinecap="round" />
          <path d="M 87 119 Q 91 116, 96 119" fill="none" stroke="#3A2518" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 99 121 Q 101 118, 103 122" fill="none" stroke="#3A2518" strokeWidth="1" strokeLinecap="round" />

          {/* Eyebrows — soft, feminine arch */}
          <path d="M 58 115 Q 66 110, 74 114" fill="none" stroke="#4A2818" strokeWidth="2" strokeLinecap="round" />
          <path d="M 86 113 Q 94 109, 102 113" fill="none" stroke="#4A2818" strokeWidth="2" strokeLinecap="round" />

          {/* Nose — small, cute */}
          <path d="M 80 132 Q 82 139, 80 142 Q 77 141, 76 137" fill="none" stroke="#D49474" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="79" cy="141" r="1" fill="#D49474" opacity="0.3" />

          {/* Warm smile — fuller lips */}
          <path d="M 69 148 Q 80 158, 91 148" fill="none" stroke="#C96B6B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 69 148 Q 80 158, 91 148 Q 80 154, 69 148" fill="#E88B8B" opacity="0.45" />
          {/* Upper lip highlight */}
          <path d="M 74 148 Q 80 145, 86 148" fill="none" stroke="#D47878" strokeWidth="1" opacity="0.5" />

          {/* Blush circles on cheeks */}
          <ellipse cx="56" cy="140" rx="10" ry="7" fill="url(#blushPink)" />
          <ellipse cx="104" cy="140" rx="10" ry="7" fill="url(#blushPink)" />

          {/* Earrings (small golden jhumkas) */}
          <circle cx="39" cy="135" r="2.5" fill="#DAA520" opacity="0.85" />
          <circle cx="39" cy="140" r="2" fill="#DAA520" opacity="0.65" />
          <circle cx="39" cy="144" r="1.5" fill="#DAA520" opacity="0.5" />
        </g>
      </g>

      {/* ════════════════════════════════════════════════════
           BOY CHARACTER (right side, ~6'0")
           ════════════════════════════════════════════════════ */}
      <g filter="url(#charShadow)" className="breathing-bob">
        <g transform="translate(215, 25)">

          {/* ── Boy's Body / Grey Oversized T-Shirt ── */}
          <path
            d="M 45 200 Q 35 210, 28 285 L 22 375 Q 28 388, 82 392
               Q 140 388, 145 375 L 138 285 Q 130 210, 120 200 Z"
            fill="url(#boyShirtMain)"
          />
          {/* Shirt highlight overlay for 3D volume */}
          <path
            d="M 45 200 Q 35 210, 28 285 L 22 375 Q 28 388, 82 392
               Q 140 388, 145 375 L 138 285 Q 130 210, 120 200 Z"
            fill="url(#boyShirtHighlight)"
          />
          {/* T-shirt neckline (crew) */}
          <path
            d="M 55 204 Q 82 220, 110 204"
            fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="2.5"
          />
          {/* Shirt wrinkle/fold details */}
          <path d="M 60 260 Q 65 280, 62 310" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
          <path d="M 100 265 Q 105 285, 102 305" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
          <path d="M 80 250 Q 82 290, 80 330" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
          {/* Shirt hem */}
          <path
            d="M 25 375 Q 82 395, 142 375"
            fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"
          />

          {/* ── Boy's Jeans ── */}
          <path
            d="M 30 375 L 24 478 Q 28 490, 52 490 Q 74 490, 72 478 L 78 375"
            fill="url(#boyJeansGrad)"
          />
          <path
            d="M 88 375 L 94 478 Q 98 490, 120 490 Q 140 490, 138 478 L 130 375"
            fill="url(#boyJeansGrad)"
          />
          {/* Jeans details */}
          <path d="M 45 400 Q 48 440, 42 475" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" />
          <path d="M 108 400 Q 105 440, 110 475" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.2" />
          {/* Jean pocket line */}
          <path d="M 35 385 Q 55 392, 75 385" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          <path d="M 90 385 Q 110 392, 130 385" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />

          {/* ── Shoes (sneakers) ── */}
          <path d="M 26 488 Q 30 496, 58 496 Q 76 496, 78 488 L 76 484 Q 58 490, 30 484 Z" fill="#3A3A3A" />
          <path d="M 28 486 Q 52 492, 76 486" fill="none" stroke="#555" strokeWidth="1.5" />
          <ellipse cx="52" cy="490" rx="24" ry="4" fill="#2A2A2A" />
          {/* Sole accent */}
          <path d="M 30 492 Q 52 496, 74 492" fill="none" stroke="#666" strokeWidth="1.5" />

          <path d="M 90 488 Q 94 496, 122 496 Q 140 496, 142 488 L 140 484 Q 122 490, 94 484 Z" fill="#3A3A3A" />
          <path d="M 92 486 Q 116 492, 140 486" fill="none" stroke="#555" strokeWidth="1.5" />
          <ellipse cx="116" cy="490" rx="24" ry="4" fill="#2A2A2A" />
          <path d="M 94 492 Q 116 496, 138 492" fill="none" stroke="#666" strokeWidth="1.5" />

          {/* ── Boy's Left Arm (draped over girl's shoulder) ── */}
          <path
            d="M 45 218 Q 25 240, -15 258 Q -50 272, -80 262 Q -98 256, -105 248"
            fill="none" stroke="url(#skinArmBoy)" strokeWidth="22"
            strokeLinecap="round"
          />
          {/* Hand on girl's shoulder */}
          <circle cx="-100" cy="252" r="11" fill="url(#skinBoy)" />
          {/* Fingers on shoulder */}
          <path d="M -105 248 Q -112 252, -110 258" fill="none" stroke="url(#skinArmBoy)" strokeWidth="4" strokeLinecap="round" />
          <path d="M -100 250 Q -108 256, -106 262" fill="none" stroke="url(#skinArmBoy)" strokeWidth="3.5" strokeLinecap="round" />
          {/* Shirt sleeve (left) */}
          <path
            d="M 43 200 Q 32 208, 25 225 Q 20 238, 30 242 Q 38 228, 48 215 Z"
            fill="url(#boyShirtMain)"
          />

          {/* ── Boy's Right Arm (free, slightly swinging) ── */}
          <g className="hand-swing">
            <path
              d="M 124 218 Q 142 260, 148 310 Q 150 335, 146 355"
              fill="none" stroke="url(#skinArmBoy)" strokeWidth="22"
              strokeLinecap="round"
            />
            <circle cx="146" cy="355" r="11" fill="url(#skinBoy)" />
            {/* Fingers */}
            <path d="M 142 355 Q 138 362, 140 368" fill="none" stroke="url(#skinArmBoy)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 146 358 Q 144 364, 146 370" fill="none" stroke="url(#skinArmBoy)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 150 355 Q 152 362, 150 368" fill="none" stroke="url(#skinArmBoy)" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          {/* Shirt sleeve (right) */}
          <path
            d="M 120 200 Q 132 208, 138 225 Q 142 238, 134 242 Q 128 228, 118 215 Z"
            fill="url(#boyShirtMain)"
          />

          {/* ── Boy's Neck (thicker, masculine) ── */}
          <rect x="65" y="170" width="35" height="35" rx="17" fill="url(#skinBoy)" />
          {/* Neck shadow */}
          <ellipse cx="82" cy="175" rx="14" ry="5" fill="rgba(0,0,0,0.06)" />

          {/* ── Boy's Head (bigger, slightly angular jaw) ── */}
          {/* Jaw shape for angular look */}
          <path
            d="M 36 145 Q 34 100, 42 78 Q 52 58, 82 52 Q 112 55, 125 75
               Q 132 90, 132 120 Q 132 145, 128 158 Q 122 172, 110 178
               Q 95 185, 82 186 Q 65 185, 54 178 Q 42 170, 36 155 Z"
            fill="url(#skinBoy)"
          />
          {/* Head gloss for 3D */}
          <path
            d="M 36 145 Q 34 100, 42 78 Q 52 58, 82 52 Q 112 55, 125 75
               Q 132 90, 132 120 Q 132 145, 128 158 Q 122 172, 110 178
               Q 95 185, 82 186 Q 65 185, 54 178 Q 42 170, 36 155 Z"
            fill="url(#headGlossBoy)"
          />
          {/* Jaw definition line */}
          <path
            d="M 42 165 Q 60 180, 82 182 Q 104 180, 122 165"
            fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5"
          />

          {/* ── Boy's Hair (dark, spiky, styled) ── */}
          <path
            d="M 34 135 Q 30 90, 44 65 Q 56 48, 82 42 Q 108 40, 122 52
               Q 135 65, 136 95 Q 138 115, 134 135
               Q 126 105, 112 88 Q 96 75, 78 78
               Q 60 82, 48 98 Q 38 112, 36 132 Z"
            fill="url(#boyHairBase)"
          />
          {/* Spiky top tufts — bolder */}
          <path d="M 55 60 Q 48 38, 54 32 Q 58 42, 62 56" fill="url(#boyHairBase)" />
          <path d="M 70 50 Q 66 28, 74 22 Q 76 34, 76 48" fill="url(#boyHairBase)" />
          <path d="M 85 46 Q 86 24, 94 22 Q 94 34, 90 46" fill="url(#boyHairBase)" />
          <path d="M 100 52 Q 106 34, 114 38 Q 110 48, 104 58" fill="url(#boyHairBase)" />
          <path d="M 115 62 Q 122 46, 128 50 Q 124 58, 118 68" fill="url(#boyHairBase)" />
          <path d="M 44 82 Q 36 62, 40 52 Q 46 66, 48 82" fill="url(#boyHairBase)" />
          {/* Hair highlight streaks */}
          <path d="M 68 45 Q 70 35, 74 30" fill="none" stroke="#4A4A6A" strokeWidth="2" opacity="0.5" />
          <path d="M 86 42 Q 88 32, 92 28" fill="none" stroke="#4A4A6A" strokeWidth="2" opacity="0.5" />
          <path d="M 56 55 Q 52 42, 54 36" fill="none" stroke="#4A4A6A" strokeWidth="1.8" opacity="0.4" />
          <path d="M 102 50 Q 108 38, 112 42" fill="none" stroke="#4A4A6A" strokeWidth="1.8" opacity="0.4" />

          {/* ── Boy's Face ── */}
          {/* Eyes — wide, expressive behind glasses */}
          {/* Left eye */}
          <ellipse cx="68" cy="130" rx="7" ry="7.5" fill="white" />
          <circle cx="69" cy="131" r="4.8" fill="#2C1810" />
          <circle cx="69" cy="131" r="3" fill="#0F0A06" />
          <circle cx="67" cy="129" r="1.8" fill="white" />
          <circle cx="71" cy="133" r="0.8" fill="white" opacity="0.5" />
          {/* Right eye */}
          <ellipse cx="98" cy="130" rx="7" ry="7.5" fill="white" />
          <circle cx="99" cy="131" r="4.8" fill="#2C1810" />
          <circle cx="99" cy="131" r="3" fill="#0F0A06" />
          <circle cx="97" cy="129" r="1.8" fill="white" />
          <circle cx="101" cy="133" r="0.8" fill="white" opacity="0.5" />

          {/* ── GLASSES (thin round frames) ── */}
          {/* Left lens */}
          <circle cx="68" cy="130" r="13" fill="none" stroke="#4A4A5A" strokeWidth="2" />
          <circle cx="68" cy="130" r="13" fill="url(#lensGlare)" />
          {/* Right lens */}
          <circle cx="98" cy="130" r="13" fill="none" stroke="#4A4A5A" strokeWidth="2" />
          <circle cx="98" cy="130" r="13" fill="url(#lensGlare)" />
          {/* Bridge between lenses */}
          <path d="M 81 128 Q 83 125, 85 128" fill="none" stroke="#4A4A5A" strokeWidth="2" />
          {/* Temple arms (going to ears) */}
          <path d="M 55 128 Q 42 128, 36 135" fill="none" stroke="#4A4A5A" strokeWidth="1.8" />
          <path d="M 111 128 Q 124 128, 130 135" fill="none" stroke="#4A4A5A" strokeWidth="1.8" />

          {/* Eyebrows (thick, masculine, above glasses) */}
          <path d="M 54 112 Q 65 106, 78 111" fill="none" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" />
          <path d="M 88 110 Q 100 105, 112 111" fill="none" stroke="#1A1A2E" strokeWidth="3" strokeLinecap="round" />

          {/* Nose — slightly wider */}
          <path d="M 83 140 Q 86 148, 83 152 Q 80 150, 78 146" fill="none" stroke="#D49474" strokeWidth="1.5" strokeLinecap="round" />

          {/* Confident grin showing teeth */}
          <path d="M 64 160 Q 83 174, 102 160" fill="none" stroke="#B85555" strokeWidth="2.5" strokeLinecap="round" />
          {/* Teeth showing */}
          <path d="M 68 162 Q 83 172, 98 162 Q 83 168, 68 162" fill="white" opacity="0.85" />
          {/* Tooth line */}
          <path d="M 83 162 L 83 168" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
          {/* Lower lip shadow */}
          <path d="M 70 168 Q 83 174, 96 168" fill="none" stroke="#C96B6B" strokeWidth="1" opacity="0.3" />

          {/* Ears */}
          <ellipse cx="35" cy="140" rx="7" ry="11" fill="url(#skinBoy)" />
          <ellipse cx="35" cy="140" rx="4" ry="7" fill="rgba(0,0,0,0.04)" />
          <ellipse cx="131" cy="140" rx="7" ry="11" fill="url(#skinBoy)" />
          <ellipse cx="131" cy="140" rx="4" ry="7" fill="rgba(0,0,0,0.04)" />
        </g>
      </g>
    </svg>
  );
}
