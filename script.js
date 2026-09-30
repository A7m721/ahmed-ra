/* ===== عدّل بياناتك هنا فقط ===== */
const CONFIG = {
  brand: "معمل الواجهات",
  tagline: "واجهات متحركة، بالكود الكامل، وبالمجان",
  sub: "كل مشروع هنا تشغّله بنفسك وتنسخ كوده وتعدّل عليه.",
  about: "اكتب هنا نبذة قصيرة عنك وعن خبرتك.",
  links: [["يوتيوب", "#"], ["إنستجرام", "#"], ["تيليجرام", "#"]],
  colors: { a: "#ff5d8f", b: "#5ef2c1" }
};
const PROJECTS = [
  {"t": "كيك عيد ميلاد متحرك", "c": "JavaScript", "d": "25 سبتمبر 2026", "u": "https://codingstella.com/how-to-make-animated-birthday-cake-using-html-css-javascript/", "i": "cake"},
  {"t": "مولّد كروت واي فاي متحرك", "c": "JavaScript", "d": "22 سبتمبر 2026", "u": "https://codingstella.com/how-to-make-animated-wifi-card-generator-using-html-css-and-javascript/", "i": "wifi"},
  {"t": "آلة حاسبة Neumorphism بوضعين", "c": "CSS", "d": "20 سبتمبر 2026", "u": "https://codingstella.com/how-to-make-neumorphism-calculator-light-and-dark-themed-html-css/", "i": "calc"},
  {"t": "لعبة Cyber Dodge", "c": "React", "d": "16 سبتمبر 2026", "u": "https://codingstella.com/how-to-make-cyber-dodge-game-using-react/", "i": "gamepad"},
  {"t": "سلايدر سيارات متحرك", "c": "CSS", "d": "12 أغسطس 2026", "u": "https://codingstella.com/how-to-create-animated-car-slider-using-html-and-css/", "i": "car"},
  {"t": "فورم تسجيل دخول تفاعلي على شكل حقيبة", "c": "CSS", "d": "26 يوليو 2026", "u": "https://codingstella.com/how-to-create-interactive-login-bag-form-using-html-and-css/", "i": "bag"},
  {"t": "أنيميشن كروت 3D عند الـ hover", "c": "CSS", "d": "8 يوليو 2026", "u": "https://codingstella.com/how-to-create-3d-card-hover-animation-using-html-and-css/", "i": "cube"},
  {"t": "فورم تسجيل دخول بمصباح", "c": "CSS", "d": "4 يوليو 2026", "u": "https://codingstella.com/how-to-make-login-form-lamp-using-html-and-css/", "i": "lamp"},
  {"t": "أزرار سوشيال ميديا بساعة عند الـ hover", "c": "CSS", "d": "2 يوليو 2026", "u": "https://codingstella.com/how-to-make-social-media-button-hover-clock-using-html-and-css/", "i": "clock"},
  {"t": "لودر FIFA بكرة القدم", "c": "CSS", "d": "17 يونيو 2026", "u": "https://codingstella.com/how-to-make-fifa-loading-animation-football-using-html-and-css/", "i": "ball"},
  {"t": "أنيميشن مجلد 3D مستقبلي", "c": "CSS", "d": "5 يونيو 2026", "u": "https://codingstella.com/how-to-make-futuristic-3d-folder-animation-using-html-and-css/", "i": "folder"},
  {"t": "معرض صور دائري متحرك", "c": "CSS", "d": "1 يونيو 2026", "u": "https://codingstella.com/how-to-make-animated-circular-gallery-using-html-and-css/", "i": "gallery"},
  {"t": "لعبة Subway Surfers", "c": "JavaScript", "d": "27 مايو 2026", "u": "https://codingstella.com/how-to-make-subway-surfers-game-using-html-and-javascript/", "i": "train"},
  {"t": "شريط تنقل Tab Bar", "c": "JavaScript", "d": "9 يوليو 2025", "u": "https://codingstella.com/how-to-create-tab-bar-navigation-using-html-css-and-js/", "i": "tabbar"},
  {"t": "أنيميشن خفاش Pixel", "c": "CSS", "d": "20 سبتمبر 2025", "u": "https://codingstella.com/how-to-make-pixel-bat-animation-using-html-css/", "i": "bat"},
  {"t": "بيانو قابل للعزف", "c": "JavaScript", "d": "7 أبريل 2024", "u": "https://codingstella.com/how-to-make-playable-piano-using-html-css-javascript/", "i": "piano"},
  {"t": "أنيميشن I love you", "c": "JavaScript", "d": "14 فبراير 2024", "u": "https://codingstella.com/how-to-make-i-love-you-animation-in-html-css-javascript/", "i": "heart"},
  {"t": "كارت عيد الحب", "c": "CSS", "d": "13 فبراير 2024", "u": "https://codingstella.com/how-to-make-valentines-day-card-using-html-css/", "i": "mail"},
  {"t": "فورم تسجيل دخول Glassmorphism", "c": "CSS", "d": "11 يناير 2024", "u": "https://codingstella.com/modern-login-form-using-html-css/", "i": "user"}
];

/* رسمة لكل مشروع (SVG بسيط 64×64) + ألوان الخلفية بالتناوب */
const ICONS = {
  cake: '<path d="M12 54h40M14 54V38h36v16M14 46q6 4 12 0t12 0 12 0M32 38V26M32 12q-5 6 0 10 5-4 0-10z"/>',
  wifi: '<path d="M10 26q22-20 44 0M18 34q14-12 28 0M26 42q6-5 12 0"/><circle cx="32" cy="50" r="2.5" fill="#fff"/>',
  calc: '<rect x="14" y="8" width="36" height="48" rx="6"/><rect x="20" y="14" width="24" height="10" rx="2"/><path d="M22 34h.1M32 34h.1M42 34h.1M22 44h.1M32 44h.1M42 44h.1" stroke-width="5"/>',
  gamepad: '<path d="M18 22h28a10 10 0 0 1 10 10l2 12a6 6 0 0 1-10 4l-6-8H22l-6 8a6 6 0 0 1-10-4l2-12a10 10 0 0 1 10-10z"/><path d="M22 30v6M19 33h6M42 31h.1M47 35h.1" stroke-width="3"/>',
  car: '<path d="M8 42v-8l6-2 6-10h22l8 10 6 2v8z"/><path d="M20 32h24"/><circle cx="19" cy="44" r="5"/><circle cx="46" cy="44" r="5"/>',
  bag: '<path d="M14 24h36l3 30H11z"/><path d="M24 24v-4a8 8 0 0 1 16 0v4"/>',
  cube: '<path d="M32 8l20 10v20L32 48 12 38V18z"/><path d="M12 18l20 10 20-10M32 28v20"/>',
  lamp: '<path d="M20 14h24l8 20H12z"/><path d="M32 34v18M22 56h20M32 4v4M12 10l3 3M52 10l-3 3"/>',
  clock: '<circle cx="32" cy="32" r="22"/><path d="M32 18v14l9 6"/>',
  ball: '<circle cx="32" cy="32" r="22"/><path d="M32 22l9 7-3 11H26l-3-11z"/><path d="M32 22V10M41 29l12-4M38 40l7 10M26 40l-7 10M23 29L11 25"/>',
  folder: '<path d="M8 20a4 4 0 0 1 4-4h14l6 6h20a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4z"/><path d="M8 30h48"/>',
  gallery: '<circle cx="32" cy="32" r="8"/><circle cx="54" cy="32" r="4"/><circle cx="43" cy="51" r="4"/><circle cx="21" cy="51" r="4"/><circle cx="10" cy="32" r="4"/><circle cx="21" cy="13" r="4"/><circle cx="43" cy="13" r="4"/>',
  train: '<rect x="16" y="8" width="32" height="38" rx="8"/><path d="M16 26h32M24 36h.1M40 36h.1" stroke-width="5"/><path d="M22 46l-6 10M42 46l6 10"/>',
  tabbar: '<rect x="6" y="20" width="52" height="24" rx="12"/><circle cx="20" cy="32" r="4"/><path d="M32 32h.1M44 32h.1" stroke-width="5"/>',
  bat: '<path d="M32 22L28 14 26 22C18 18 8 20 4 28C10 27 13 29 15 34C19 31 23 32 25 37L28 44 32 38 36 44 39 37C41 32 45 31 49 34C51 29 54 27 60 28C56 20 46 18 38 22L36 14Z"/>',
  piano: '<rect x="8" y="14" width="48" height="36" rx="4"/><path d="M20 14v36M32 14v36M44 14v36"/><path d="M17 14h6v20h-6zM29 14h6v20h-6zM41 14h6v20h-6z" fill="#fff"/>',
  heart: '<path d="M32 54C10 38 8 24 16 18c6-4 13-2 16 6 3-8 10-10 16-6 8 6 6 20-16 36z"/>',
  mail: '<rect x="8" y="16" width="48" height="34" rx="4"/><path d="M8 20l24 18 24-18"/>',
  user: '<rect x="14" y="10" width="36" height="44" rx="8"/><circle cx="32" cy="26" r="6"/><path d="M22 42q10-8 20 0"/>'
};
const GRADS = [["#ff5d8f","#ffb36b"],["#5ef2c1","#4b7bff"],["#a78bfa","#ff5d8f"],["#4b7bff","#5ef2c1"],["#ffb36b","#ff5d8f"],["#5ef2c1","#a78bfa"]];

/* لعرض كود مشروع: ضيف code: {html, css, js} للمشروع في القائمة فوق */
const FALLBACK = {
  html: '<!-- لسه ما اتضافش كود المشروع ده -->\n<div class="box"></div>',
  css: 'body{display:grid;place-items:center;height:100vh;margin:0;background:#10142b}\n.box{width:90px;height:90px;background:#ff5d8f;border-radius:16px;animation:r 2s infinite}\n@keyframes r{50%{transform:rotate(180deg);border-radius:50%}}',
  js: '// ضيف كود JavaScript هنا لو محتاجه'
};

/* ===================== أكواد المشاريع =====================
   لكل مشروع: مفتاحه هو آخر جزء من لينكه، وجواه html وcss وjs.
   المشروع اللي ملوش كود هنا بيعرض كود تجريبي. */
const CODES = {
"how-to-make-animated-birthday-cake-using-html-css-javascript": {
html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Animated Birthday Cake | @coding.stella</title>
  <link rel="stylesheet" href="https://public.codepenassets.com/css/reset-2.0.min.css">
  <link rel="stylesheet" href="./style.css">
</head>

<body>

  <canvas id="magicCursor"></canvas>

  <div class="balloons">
    <div class="balloon balloon1"></div>
    <div class="balloon balloon2"></div>
    <div class="balloon balloon3"></div>
    <div class="balloon balloon4"></div>
    <div class="balloon balloon5"></div>
  </div>

  <div class="candle">
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
    <div class="fire"></div>
  </div>
  <svg id="cake" version="1.1" x="0px" y="0px" width="200px" height="500px" viewBox="0 0 200 500"
    enable-background="new 0 0 200 500" xml:space="preserve">
    <path fill="#a88679" d="M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z">
      <animate id="bizcocho_3" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1" begin="relleno_2.end"
        dur="0.3s" fill="freeze" values="
                          M173.667-13.94c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c44.697,0,96.586,0,147.334,0C177.667-29.942,177.668-13.94,173.667-13.94z
                          ;
                          M173.667,411.567c-47.995,12.408-102.955,12.561-147.334,0
        c-3.848-1.089-0.189-16.089,3.661-15.002c44.836,12.66,90.519,12.753,139.427,0.07
        C173.293,395.631,177.541,410.566,173.667,411.567z
                          ;
                          M173.667,427.569c-49.795,0-101.101,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c46.385,0,97.539,0,147.334,0C177.668,411.567,177.667,427.569,173.667,427.569z
                          " />
    </path>
    <path fill="#8b6a60" d="M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
        c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
        L100-178.521z">
      <animate id="relleno_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.58 1"
        begin="bizcocho_2.end" dur="0.5s" fill="freeze" values="
                          M100-178.521c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
        c0,19.144,0,57.431,0,76.574c0,10.152,0,40.607,0,40.607c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364c0,0,0-30.455,0-40.607c0-19.144,0-57.432,0-76.575c0-11.057,0-44.226,0-44.226C96.636-177.015,98.142-178.521,100-178.521
        L100-178.521z
                          ;
                          M100,267.257c1.858,0,3.364,1.506,3.364,3.363c0,0,0,33.17,0,44.227
        c0,19.143,0,57.43,0,76.574c0,10.151,0,40.606,0,40.606c0,1.858-1.506,3.364-3.364,3.364l0,0c-1.858,0-3.364-1.506-3.364-3.364
        c0,0,0-30.455,0-40.606c0-19.145,0-57.432,0-76.576c0-11.057,0-44.225,0-44.225C96.636,268.763,98.142,267.257,100,267.257
        L100,267.257z
                          ;
                          M93.928,405.433c-0.655,6.444-0.102,9.067,2.957,11.798c0,0,8.083,5.571,16.828,3.503
        c18.629-4.406,43.813,6.194,50.792,7.791c14.75,3.375,9.162,6.867,9.162,6.867c-2.412,2.258-58.328,0-73.667,0l0,0
        c-1.858,0-69.995,2.133-73.667,0c0,0-3.337-2.439,6.172-5.992c11.375-4.25,52.875,8.822,47.139-9.442
        c-6.333-20.167,5.226-21.514,5.226-21.514c3.435-0.915,12.78-6.663,10.923-0.546L93.928,405.433z
                          ;
                          M102.242,427.569c5.348,0,14.079,0,17.462,0c0,0,17.026,0,27.504,0
        c19.143,0,20.39-3.797,26.459,0c3,1.877,0,7.823,0,7.823c-2.412,2.258-58.328,0-73.667,0l0,0c-1.858,0-67.187,0-73.667,0
        c0,0-4.125-4.983,0-7.823c5.201-3.58,16.085,0,23.725,0c8.841,0,20.762,0,20.762,0c3.686,0,8.597,0,19.511,0H102.242z
                          " />
    </path>
    <path fill="#a88679" d="M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z">
      <animate id="bizcocho_2" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0.25 0 0.58 1"
        begin="relleno_1.end" dur="0.5s" fill="freeze" values="
                          M173.667-15.929c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c43.566,0,97.96,0,147.334,0C177.667-31.931,177.666-15.929,173.667-15.929z
                          ;
                          M173.434,445.393c-47.269,8.001-105.245,8.001-147.334,0c-3.929-0.747-0.692-16.543,3.243-15.824
        c43.828,8.001,92.165,8.001,140.739,0C174.029,428.918,177.377,444.726,173.434,445.393z
                          ;
                          M173.667,449.514c-47.576-5.454-102.799-5.744-147.333,0c-3.966,0.512-3.938-15.297,0-16.002
        c43.683-7.823,97.646-8.026,147.333,0C177.616,434.15,177.642,449.969,173.667,449.514z
                          ;
                          M173.667,451.394c-49.298,0-102.782,0-147.334,0c-3.999,0-4-16.002,0-16.002
        c44.697,0,96.586,0,147.334,0C177.667,435.392,177.668,451.394,173.667,451.394z
                          " />
    </path>
    <path fill="#8b6a60" d="M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
        c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
        C98.411-75.883,101.368-75.592,101.368-73.685z">
      <animate id="relleno_1" attributeName="d" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 0.6 1"
        begin="bizcocho_1.end" dur="0.5s" fill="freeze" values="
                          M101.368-73.685c0,12.164,0,15.18,0,28.519c0,22.702,0-13.661,0,8.304c0,14.48,0,18.233,0,30.512
        c0,1.753-2.958,1.847-2.958,0c0-12.68,0-16.277,0-30.401c0-21.983,0,11.66,0-8.305c0-13.027,0-15.992,0-28.628
        C98.411-75.883,101.368-75.592,101.368-73.685z
                          ;
                          M101.368,350.885c0,12.164,0,65.18,0,78.518c0,22.703,0-33.66,0-11.695c0,14.48,0,28.232,0,40.512
        c0,1.753-2.958,1.847-2.958,0c0-12.68,0-26.277,0-40.402c0-21.982,0,31.66,0,11.695c0-13.027,0-65.992,0-78.627
        C98.411,348.686,101.368,348.977,101.368,350.885z
                          ;
                          M128.38,447.567c37.626,6.312,39.303,13.658,26.833,12.833c-22.653-1.499-13.636-0.831-23.302-0.831
        c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-14.062,5.995-27.532,1.164
        c-12.629-4.529,38.667-3.167,46.833-17.333C100.077,432.94,105.546,443.736,128.38,447.567z
                          ;
                          M173.667,451.394c2.875,0,2.997,9.257,0,9.131c-22.662-0.956-32.09-0.956-41.756-0.956
        c-14.48,0-17.884,0-30.163,0c-2.087,0-2.068,0-3.915,0c-13.333,0-8.963,0-23.088,0c-11.668,0-34.99-0.294-48.412,1.831
        c-4.109,0.65-3.01-10.006,0-10.006C37.129,451.394,149.379,451.394,173.667,451.394z
                          " />
    </path>
    <path fill="#a88679" d="M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
        C177.668,5.569,177.667,21.571,173.667,21.571z">
      <animate id="bizcocho_1" attributeName="d" calcMode="spline"
        keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0.25 0 0.6 1" begin="2s" dur="0.8s" fill="freeze"
        values="
                          M173.667,21.571c-33.174,0-111.467,0-147.334,0c-4,0-4-16.002,0-16.002c39.836,0,105.982,0,147.334,0
        C177.668,5.569,177.667,21.571,173.667,21.571z
                          ;
                          M173.667,459.569c-33.197,16.002-110.782,16.002-147.334,0c-3.664-1.604,1.614-15.617,5.337-14.153
        c40.702,16.002,94.289,16.104,136.505,0.103C171.917,444.1,177.271,457.832,173.667,459.569z
                          ;
                          M171.817,475.571c-39.361-3.001-105.438-2.571-143.556,0c-3.991,0.27-7.377-14.736-3.387-15.014
        c41.553-2.888,104.421-3.121,150.51-0.233C179.378,460.574,175.806,475.875,171.817,475.571z
                          ;
                          M171.817,459.564c-38.8-12.188-104.504-13.762-143.556,0c-3.772,1.329-7.961-12.604-4.178-13.905
        c40.864-14.064,105.114-15.52,151.918-0.973C179.822,445.874,175.634,460.762,171.817,459.564z
                          ;
                          M173.667,475.571c-46.376-5.005-105.924-4.003-147.334,0c-3.981,0.385-3.479-15.421,0.479-16.002
        c43.087-6.327,97.705-7.083,146.855,0.438C177.621,460.613,177.644,476,173.667,475.571z
                          ;
                          M173.667,474.117c-46.376,1.866-105.638,2.01-147.334,0c-3.995-0.192-3.52-16.144,0.479-16.002
        c43.794,1.55,96.341,1.541,145.723,0C176.532,457.99,177.663,473.956,173.667,474.117z
                          ;
                          M173.667,475.571c-46.512,0-105.486,0-147.334,0c-3.999,0-4-16.002,0-16.002c43.566,0,97.96,0,147.334,0
        C177.667,459.569,177.666,475.571,173.667,475.571z
                          " />
    </path>
    <path fill="#fefae9" d="M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
    c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
    C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
    c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z">
      <animate id="crema" attributeName="d" calcMode="spline"
        keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0.25 0 1 1; 0 0 1 1; 0 0 0.58 1" begin="bizcocho_3.end" dur="2s"
        fill="freeze" values="
                          M104.812,113.216c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.375
    c0-5.143,0-15.427,0-20.568c0-7.333,0-21.998,0-29.33c0-5.523,0-16.569,0-22.092c0-3.295,0-9.885,0-13.181
    C95.188,2.551,97.353,0,100,0c2.648,0,4.812,2.551,4.812,5.669c0,3.248,0,9.743,0,12.991c0,5.428,0,16.284,0,21.711
    c0,7.618,0,22.854,0,30.472c0,4.952,0,14.854,0,19.807C104.812,96.292,104.812,107.576,104.812,113.216z
                          ;
                          M104.812,405.897c0,3.119-2.164,5.67-4.812,5.67c-2.646,0-4.812-2.551-4.812-5.67c0-5.594,0-16.782,0-22.376
    c0-5.143,0-15.426,0-20.568c0-7.332,0-21.997,0-29.33c0-5.522,0-16.568,0-22.092c0-3.295,0-9.885,0-13.181
    c0-3.118,2.165-5.669,4.812-5.669c2.648,0,4.812,2.551,4.812,5.669c0,3.247,0,9.743,0,12.991c0,5.428,0,16.283,0,21.711
    c0,7.618,0,22.854,0,30.473c0,4.951,0,14.854,0,19.807C104.812,388.972,104.812,400.256,104.812,405.897z
                          ;
                          M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-7.748,0-10.867,0c-7.086,0-12.698,0-18.292,0
    c-6.592,0-12.871,7.371-19.166,3.008c-10.043-6.961-7.776-10.169,2.991-17.745c12.61-8.873,27.713,1.994,25.919-7.531
    c-2.589-13.742,11.008-14.513,11.365-17.789c0.441-4.051,4.235-11.107,8.051-8.175c3.113,2.393,1.007,8.008,0,13.159
    c-1.871,9.569,8.058,2.113,9.494,14.155c2.592,21.732,21.184-0.675,29.309,7.976c5.216,5.553,18.413,5.552,15.426,12.942
    c-3.131,7.745-15.825-4.369-23.8,2.903C126.261,418.271,118.301,411.567,111.873,411.567z
                          ;
                          M111.873,411.567c-3.119,0-9.226,0-11.874,0c-2.646,0-9.734,4.069-12.853,4.069
    c-7.086,0-10.712-4.069-16.306-4.069c-6.592,0-12.12,6.013-19.166,3.008c-7.053-3.008-7.458,2.026-18.659,1.165
    c-6.832-0.525-7.522-3.034-7.533-6.265c-0.037-10.336,22.073-2.452,36.613-2.628c10.234-0.124,19.856-1.439,37.905-2.102
    c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,29.663-8.99,31.532,3.315c0.773,5.093-5.605,3.342-11.211,9.579
    c-5.093,5.667-7.59-4.605-12.965-3.832c-8.269,1.189-14.962-8.537-22.937-1.265C126.261,418.271,118.301,411.567,111.873,411.567z
                          ;
                          M110.946,413.652c-2.904-1.137-8.405-2.748-12.446-0.97c-6.099,2.685-7.273,10.358-13.253,8.242
    c-7.843-2.775-8.953-5.008-14.546-5.01c-24.653-0.011-4.849,26.507-18.264,26.507c-12.377,0,5.791-33.537-19.422-26.682
    c-7.703,2.095-9.806-0.942-9.817-4.173c-0.037-10.336,24.357-4.544,38.897-4.72c10.234-0.124,19.856-1.439,37.905-2.102
    c16.642-0.61,32.699,1.552,46.009,1.927c12.438,0.351,28.973-8.865,31.532,3.315c1.449,6.896,0.318,15.624-3.874,15.624
    c-7.619,0-1.788-15.192-19.243-7.111c-7.581,3.51-15.963-9.738-26.669,1.066C120.644,426.744,118.381,416.561,110.946,413.652z
                          ;
                          M111.547,413.9c-2.969-0.956-8.775-0.949-13.167-0.5c-14.667,1.5-8.325,16.508-14.667,16.666
    c-6.667,0.166-0.167-13.5-13.013-14.151c-30.471-1.545-5.572,46.651-18.987,46.651c-12.377,0,10.333-50.166-18.667-44.5
    c-7.835,1.531-9.537-1.417-9.548-4.647c-0.037-10.336,23.675-5.177,38.215-5.353c10.234-0.124,20.618-1.671,38.667-2.333
    c16.642-0.61,32.023,1.458,45.333,1.833c12.438,0.351,33.819-8.431,33.199,4.001c-0.532,10.666,0.414,26.166-5.245,25.833
    c-7.606-0.447-2.954-31.5-19.243-18.899c-7.985,6.177-17.658-5.969-27.377,5.732C118.88,434.066,121.38,417.067,111.547,413.9z
                          ;
                          M111.547,415.233c-6.667-0.834-9.667,4.667-13.833,3.333c-19.649-6.291-8.158,22.176-14.5,22.334
    c-6.667,0.166,2.833-18-13.333-22.167c-29.544-7.615-9.667,43.833-20.167,43.833c-10.333,0,8.004-55.006-16.833-39
    c-7.5,4.833-9.508-3.78-9.299-7.004c0.799-12.329,23.592-7.153,38.132-7.329c10.234-0.124,20.238-1.505,38.287-2.167
    c16.642-0.61,32.903,1.125,46.213,1.5c12.438,0.351,35.058-5.579,31.863,6.451c-5.532,20.833,1.25,28.216-4.409,27.883
    c-7.606-0.447-6.058-37.895-20.62-23.333c-10.167,10.166-15.972-0.747-25,12C119.547,443.568,121.798,416.515,111.547,415.233z
                          " />
    </path>
    <rect x="10" y="475.571" fill="#fefae9" width="180" height="4" />
  </svg>
  <div class="text">
    <h1>happy birthday!</h1>
    <p>Stella</p>
  </div>

  <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
  <script src="./script.js"></script>

</body>

</html>`,
css: `@import url(https://fonts.googleapis.com/css?family=Lato:300italic);
html,
body {
  width: 100%;
  height: 100%;
}

body {
  background: #252432;
}

#cake {
  display: block;
  position: relative;
  margin: -10em auto 0 auto;
}

.candle {
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  top: 228px;
  left: 50%;
  margin-left: -2.4px;
  margin-top: -8.33333333px;
  width: 5px;
  height: 35px;
  transform: translateY(-300px);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-animation: in 500ms 6s ease-out forwards;
          animation: in 500ms 6s ease-out forwards;
}

.candle:after,
.candle:before {
  background: rgba(255, 0, 0, 0.4);
  content: "";
  position: absolute;
  width: 100%;
  height: 2.22222222px;
}

.candle:after {
  top: 25%;
  left: 0;
}

.candle:before {
  top: 45%;
  left: 0;
}

.fire {
  border-radius: 100%;
  position: absolute;
  top: -20px;
  left: 50%;
  margin-left: -2.6px;
  width: 6.66666667px;
  height: 18px;
}

.fire:nth-child(1) {
  -webkit-animation: fire 2s 6.5s infinite;
          animation: fire 2s 6.5s infinite;
}

.fire:nth-child(2) {
  -webkit-animation: fire 1.5s 6.5s infinite;
          animation: fire 1.5s 6.5s infinite;
}

.fire:nth-child(3) {
  -webkit-animation: fire 1s 6.5s infinite;
          animation: fire 1s 6.5s infinite;
}

.fire:nth-child(4) {
  -webkit-animation: fire 0.5s 6.5s infinite;
          animation: fire 0.5s 6.5s infinite;
}

.fire:nth-child(5) {
  -webkit-animation: fire 0.2s 6.5s infinite;
          animation: fire 0.2s 6.5s infinite;
}

@-webkit-keyframes fire {
  0%, 100% {
    background: rgba(254, 248, 97, 0.5);
    box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
    transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
    transform: translateY(-20px) scale(0);
  }
}
@keyframes fire {
  0%, 100% {
    background: rgba(254, 248, 97, 0.5);
    box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
    transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    box-shadow: 0 0 40px 20px rgba(248, 233, 209, 0.2);
    transform: translateY(-20px) scale(0);
  }
}
@-webkit-keyframes in {
  to {
    transform: translateY(0);
  }
}
@keyframes in {
  to {
    transform: translateY(0);
  }
}
.text {
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-style: italic;
  text-align: center;
  position: relative;
  z-index: 50;
}
.text h1 {
  font-size: 2.4em;
  margin-bottom: 10px;
}
.text p {
  font-size: 1.5em;
}

#magicCursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}

.balloons {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  overflow: hidden;
}
.balloon {
  position: absolute;
  bottom: -120px;
  width: 50px;
  height: 65px;
  border-radius: 50% 50% 50% 50% / 45% 45% 55% 55%;
  box-shadow: inset -5px -5px 15px rgba(0,0,0,0.15), inset 5px 5px 10px rgba(255,255,255,0.5);
  animation: floatUp 10s infinite linear;
  pointer-events: auto;
  cursor: pointer;
}
.balloon::before {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 20px;
  width: 10px;
  height: 10px;
  background-color: inherit;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
.balloon::after {
  content: "";
  position: absolute;
  bottom: -60px;
  left: 24px;
  width: 1px;
  height: 60px;
  background-color: rgba(255,255,255,0.4);
}
.balloon1 { background-color: #D4AF37; left: 15%; animation-duration: 12s; animation-delay: 1s; }
.balloon2 { background-color: #C0C0C0; left: 35%; animation-duration: 15s; animation-delay: 3s; }
.balloon3 { background-color: #FFB6C1; left: 55%; animation-duration: 13s; animation-delay: 0s; }
.balloon4 { background-color: #87CEEB; left: 75%; animation-duration: 16s; animation-delay: 2s; }
.balloon5 { background-color: #F5F5DC; left: 85%; animation-duration: 14s; animation-delay: 5s; }

@keyframes floatUp {
  0% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-50vh) rotate(3deg); }
  100% { transform: translateY(-110vh) rotate(-3deg); }
}

.candle {
  cursor: pointer;
  z-index: 100;
}`,
js: `$(document).ready(function() {
    $('.candle').on('click', function() {
        $('.fire').fadeOut(500);
        
        var duration = 3000;
        var end = Date.now() + duration;
        var colors = ['#D4AF37', '#C0C0C0', '#ffffff', '#F5F5DC'];

        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors: colors
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    });

    $('.balloon').on('click', function(e) {
        var rect = e.target.getBoundingClientRect();
        var x = (rect.left + (rect.width / 2)) / window.innerWidth;
        var y = (rect.top + (rect.height / 2)) / window.innerHeight;

        confetti({
            particleCount: 40,
            spread: 60,
            origin: { x: x, y: y },
            colors: [$(this).css('background-color'), '#ffffff', '#C0C0C0']
        });

        $(this).remove();
    });

    const canvas = document.getElementById('magicCursor');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    const mouse = { x: null, y: null };

    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        
        if (Math.random() > 0.3) {
            particlesArray.push(new Particle());
        }
    });

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 2 + 1.5;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            
            const colors = ['rgba(255, 255, 255, 0.8)', 'rgba(255, 223, 0, 0.6)', 'rgba(255, 250, 205, 0.7)'];
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.life = 100;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 3;
            if (this.size > 0.05) this.size -= 0.05;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            if (particlesArray[i].life <= 0 || particlesArray[i].size <= 0.1) {
                particlesArray.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
});`
},
"how-to-make-animated-wifi-card-generator-using-html-css-and-javascript": {
html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Animated WiFi Card Generator | @coding.stella</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
<form>
  <h2>WiFi Login</h2>
  <div class="internal">
    <div class="qr-container">
      <img width="164" height="164" src="https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=WIFI:T:WPA;S:;P:;;">
      <div class="scanner"></div>
    </div>

    <div class="inputs">
      <label>
        Network name
        <input class="ssid" placeholder="e.g. Home_Network" autocomplete="off">
      </label>
      <label>
        Password
        <input class="password" placeholder="••••••••" autocomplete="off">
      </label>
    </div>
  </div>

  <div class="scan-notice">
    <div class="scan-icon">📱</div>
    <div class="scan-text">
      <strong>Connect Instantly</strong>
      <span>Point your camera at the QR code</span>
    </div>
  </div>

  <button type="button">Print WiFi Card</button>
</form>
  <script src="./script.js"></script>
</body>
</html>`,
css: `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');

:root {
  --card-bg: #FFFFFF;
  --text-main: #0F172A;
  --border-color: #0F172A;
  --shadow-color: #0F172A;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFB347;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%230F172A' stroke-width='2' stroke-opacity='0.15'/%3E%3C/svg%3E");
  animation: slideGrid 2.5s linear infinite;
  font-family: 'Space Grotesk', sans-serif;
  overflow: hidden;
}

/* Infinite sliding grid animation */
@keyframes slideGrid {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 40px 40px;
  }
}

form {
  background-color: var(--card-bg);
  border: 4px solid var(--border-color);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 12px 12px 0px var(--shadow-color);
  width: 90%;
  max-width: 520px;
  animation: cardEntrance 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 0;
  transform: translateY(50px);
}

@keyframes cardEntrance {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: -1px;
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 6px;
  background-color: #FF5757;
  /* Solid red accent */
  bottom: 4px;
  left: 0;
  z-index: -1;
}

.internal {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

/* QR Code Container with Scanner Animation */
.qr-container {
  position: relative;
  width: 164px;
  height: 164px;
  border: 4px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 4px 0px var(--shadow-color);
  flex-shrink: 0;
  background-color: white;
  transition: transform 0.15s ease;
}

.qr-container img {
  width: 100%;
  height: 100%;
  display: block;
}

.scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #00E676;
  /* Solid bright green */
  box-shadow: 0 0 10px #00E676;
  animation: scan 2s linear infinite;
}

@keyframes scan {

  0%,
  100% {
    top: 0%;
    opacity: 0;
  }

  10%,
  90% {
    opacity: 1;
  }

  50% {
    top: calc(100% - 4px);
  }
}

.inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input {
  margin-top: 0.5rem;
  height: 48px;
  padding: 0 16px;
  font-family: 'Space Grotesk', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  background-color: #F8FAFC;
  border: 3px solid var(--border-color);
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  box-shadow: inset 0 0 0 transparent;
}

input:focus {
  background-color: #FFF;
  border-color: #FF5757;
  box-shadow: 4px 4px 0px #FF5757;
  transform: translate(-2px, -2px);
}

.scan-notice {
  display: flex;
  align-items: center;
  background-color: #FFF;
  border: 3px solid var(--border-color);
  border-radius: 12px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  box-shadow: 4px 4px 0px #FF5757;
  transform: rotate(-1.5deg);
  transition: all 0.2s ease;
  cursor: default;
}

.scan-notice:hover {
  transform: rotate(0deg) translate(-2px, -2px);
  box-shadow: 6px 6px 0px #FF5757;
}

.scan-icon {
  background-color: #00E676;
  /* Solid bright green */
  border: 3px solid var(--border-color);
  border-radius: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-right: 15px;
  flex-shrink: 0;
  box-shadow: 2px 2px 0px var(--border-color);
  animation: floatIcon 2.5s infinite ease-in-out;
}

@keyframes floatIcon {

  0%,
  100% {
    transform: translateY(0) rotate(-5deg);
  }

  50% {
    transform: translateY(-5px) rotate(5deg);
  }
}

.scan-text {
  display: flex;
  flex-direction: column;
}

.scan-text strong {
  font-size: 1.1rem;
  color: var(--text-main);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  line-height: 1.2;
}

.scan-text span {
  font-size: 0.85rem;
  color: #334155;
  font-weight: 600;
  margin-top: 2px;
}

button {
  width: 100%;
  height: 3.5rem;
  background-color: var(--border-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  transition: all 0.1s ease;
  box-shadow: 6px 6px 0px #FF5757;
}

button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0px #FF5757;
}

button:active {
  transform: translate(4px, 4px);
  box-shadow: 2px 2px 0px #FF5757;
}

/* Printing styles */
@media print {
  body {
    background: none;
    align-items: flex-start;
  }

  form {
    box-shadow: none;
    border: 2px solid black;
    animation: none;
    transform: none;
    opacity: 1;
    margin-top: 2rem;
  }

  .scanner {
    display: none;
  }

  .scan-notice {
    box-shadow: none !important;
    transform: none !important;
    border-color: black !important;
  }

  .scan-icon {
    box-shadow: none !important;
    animation: none !important;
    border-color: black !important;
  }

  button {
    display: none;
  }

  input {
    box-shadow: none !important;
    transform: none !important;
    border-color: black !important;
  }
}

@media (max-width: 500px) {
  .internal {
    flex-direction: column;
    gap: 1.5rem;
  }

  form {
    padding: 1.5rem;
  }
}`,
js: `const img = document.querySelector('img');
const ssid = document.querySelector('.ssid');
const password = document.querySelector('.password');
const button = document.querySelector('button');
const qrContainer = document.querySelector('.qr-container');

function update() {
  const wifi = \`WIFI:T:WPA;S:\${ssid.value};P:\${password.value};;\`;
  img.src = \`https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=\${encodeURIComponent(wifi)}\`;
  
  // Interactive bounce animation when typing
  qrContainer.style.transform = 'scale(0.92)';
  setTimeout(() => {
    qrContainer.style.transform = 'scale(1)';
  }, 150);
}

ssid.addEventListener('input', update);
password.addEventListener('input', update);

button.addEventListener('click', () => {
  window.print();
});`
},
"how-to-make-neumorphism-calculator-light-and-dark-themed-html-css": {
html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Neumorphism Calculator Dark/Light Theme | @coding.stella</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Poppins:wght@300;400;500;600&display=swap">
  <link rel="stylesheet" href="./style.css">
</head>
<body>

  <!-- Glowing Orbs Background -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>

  <div class="theme-switch-wrapper">
    <span class="theme-label" id="theme-label">NORMAL MODE</span>
    <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div class="slider round"></div>
    </label>
  </div>

  <div class="calculator">
    <!-- Frosted Glass Display with digital reflection -->
    <div class="display">
      <div class="glass-reflection"></div>
      <div id="history"></div>
      <div id="value">0</div>
    </div>

    <!-- Neumorphic Buttons Grid -->
    <div class="buttons">
      <!-- Row 1 -->
      <button class="operator top-op" data-action="clear" id="clear">AC</button>
      <button class="operator top-op" data-action="+/-">+/-</button>
      <button class="operator top-op" data-action="%">%</button>
      <button class="operator right-op" data-action="/">÷</button>

      <!-- Row 2 -->
      <button class="num">7</button>
      <button class="num">8</button>
      <button class="num">9</button>
      <button class="operator right-op" data-action="*">×</button>

      <!-- Row 3 -->
      <button class="num">4</button>
      <button class="num">5</button>
      <button class="num">6</button>
      <button class="operator right-op" data-action="-">−</button>

      <!-- Row 4 -->
      <button class="num">1</button>
      <button class="num">2</button>
      <button class="num">3</button>
      <button class="operator right-op" data-action="+">+</button>

      <!-- Row 5 -->
      <button class="num zero">0</button>
      <button class="num dot">.</button>
      <button class="operator right-op equal-btn" data-action="=">=</button>
    </div>
  </div>

  <script src="./script.js"></script>
</body>
</html>`,
css: `/* General Styles & Variables */
:root {
  --bg-color: #e0e5ec;
  --text-color: #4d5b68;
  --history-color: #7a8b9a;

  --shadow-light: #ffffff;
  --shadow-dark: #a3b1c6;

  --op-right-color: #0984e3;
  --op-top-color: #7a8b9a;
  --ac-color: #d63031;

  --glass-bg: rgba(255, 255, 255, 0.25);
  --glass-border: rgba(255, 255, 255, 0.6);

  --orb-1: rgba(9, 132, 227, 0.4);
  --orb-2: rgba(214, 48, 49, 0.3);
}

body.dark {
  /* Dark Mode */
  --bg-color: #24252a;
  --text-color: #e2e8f0;
  --history-color: #a0aec0;

  /* Calibrated dark neumorphism */
  --shadow-light: #2c2d33;
  --shadow-dark: #1c1d21;

  /* Elegant, subdued accents */
  --op-right-color: #4facfe;
  --op-top-color: #a0aec0;
  --ac-color: #ff6b6b;

  --glass-bg: rgba(30, 31, 36, 0.65);
  --glass-border: rgba(255, 255, 255, 0.08);

  /* Deep, luxurious ambient background lighting */
  --orb-1: rgba(79, 172, 254, 0.15);
  --orb-2: rgba(102, 126, 234, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  user-select: none;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--bg-color);
  transition: background 0.6s ease;
  overflow: hidden;
}

/* Glowing Orbs Animation */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  z-index: -1;
  animation: float 12s ease-in-out infinite alternate;
  transition: background 0.6s ease;
}

.orb-1 {
  width: 350px;
  height: 350px;
  background: var(--orb-1);
  top: 5%;
  left: 15%;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: var(--orb-2);
  bottom: 5%;
  right: 15%;
  animation-delay: -6s;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(60px, 120px) scale(1.15);
  }

  100% {
    transform: translate(-60px, 60px) scale(0.9);
  }
}

/* Theme Switch */
.theme-switch-wrapper {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 10;
  background: var(--bg-color);
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 5px 5px 15px var(--shadow-dark),
    -5px -5px 15px var(--shadow-light);
  transition: all 0.6s ease;
}

.theme-label {
  font-family: 'Orbitron', sans-serif;
  color: var(--text-color);
  font-weight: 700;
  font-size: 0.9em;
  letter-spacing: 2px;
  transition: color 0.6s ease, text-shadow 0.6s ease;
}

body.dark .theme-label {
  text-shadow: 0 0 10px rgba(79, 172, 254, 0.4);
}

.theme-switch {
  display: inline-block;
  height: 30px;
  position: relative;
  width: 56px;
}

.theme-switch input {
  display: none;
}

.slider {
  background-color: var(--bg-color);
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .6s;
  box-shadow: inset 3px 3px 6px var(--shadow-dark),
    inset -3px -3px 6px var(--shadow-light);
}

.slider:before {
  background-color: var(--op-right-color);
  bottom: 4px;
  content: "";
  height: 22px;
  left: 4px;
  position: absolute;
  transition: .4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: 22px;
  box-shadow: 2px 2px 5px var(--shadow-dark);
}

input:checked+.slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Calculator Body (Neumorphism) */
.calculator {
  width: 340px;
  padding: 30px;
  border-radius: 35px;
  background: var(--bg-color);
  box-shadow: 15px 15px 35px var(--shadow-dark),
    -15px -15px 35px var(--shadow-light);
  transition: all 0.6s ease;
  z-index: 10;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.03);
}

@keyframes themeSwitchPulse {
  0% { transform: scale(1) translateY(0); }
  50% { transform: scale(0.96) translateY(5px); }
  100% { transform: scale(1) translateY(0); }
}

.calculator.animate-switch {
  animation: themeSwitchPulse 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Glassmorphism Display */
.display {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 110px;
  padding: 15px 20px;
  border-radius: 20px;
  overflow: hidden;

  background: var(--glass-bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  transition: all 0.6s ease;
}

@keyframes displayFlare {
  0% { filter: brightness(1); }
  50% { filter: brightness(1.4); }
  100% { filter: brightness(1); }
}

.display.animate-flare {
  animation: displayFlare 0.5s ease;
}

/* Glass Reflection Sheen */
.glass-reflection {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  animation: shine 6s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }

  20% {
    left: 200%;
  }

  100% {
    left: 200%;
  }
}

body.dark .glass-reflection {
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0) 100%);
}

.display #history {
  height: 20px;
  color: var(--history-color);
  font-size: 15px;
  margin-bottom: 5px;
  letter-spacing: 2px;
  font-family: 'Orbitron', sans-serif;
  font-weight: 500;
  transition: color 0.6s ease;
}

.display #value {
  width: 100%;
  text-align: right;
  color: var(--text-color);
  font-size: 3em;
  font-weight: 700;
  overflow-x: auto;
  white-space: nowrap;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  transition: color 0.6s ease, text-shadow 0.6s ease;
}

body.dark .display #value {
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
}

.display #value::-webkit-scrollbar {
  display: none;
}

.display #value {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Buttons Grid */
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

/* Neumorphic Buttons */
.buttons button {
  border: none;
  outline: none;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 1.4em;
  font-weight: 500;
  border-radius: 50%;
  aspect-ratio: 1/1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 7px 7px 15px var(--shadow-dark),
    -7px -7px 15px var(--shadow-light);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55), background 0.6s ease, color 0.6s ease, box-shadow 0.6s ease;
}

.buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 8px 8px 20px var(--shadow-dark),
    -8px -8px 20px var(--shadow-light);
}

.buttons button:active,
.buttons button.active {
  box-shadow: inset 5px 5px 10px var(--shadow-dark),
    inset -5px -5px 10px var(--shadow-light);
  color: var(--op-right-color);
  transform: scale(0.92);
  transition: all 0.1s;
}

/* Zero Button */
.buttons button.zero {
  grid-column: span 2;
  aspect-ratio: auto;
  border-radius: 40px;
  justify-content: flex-start;
  padding-left: 32px;
}

/* Dot button uniqueness */
.buttons button.dot {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 2em;
  line-height: 0;
  padding-bottom: 15px;
}

/* Specific Operators */
.buttons button.top-op {
  color: var(--op-top-color);
  font-weight: 600;
  font-size: 1.2em;
}

.buttons button#clear {
  color: var(--ac-color);
  font-weight: 600;
}

.buttons button.right-op {
  color: var(--op-right-color);
  font-size: 1.8em;
  font-weight: 400;
}

.buttons button.equal-btn {
  background: var(--op-right-color);
  color: var(--bg-color);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15),
    -5px -5px 15px var(--shadow-light);
}

body.dark .buttons button.equal-btn {
  color: #ffffff;
}

.buttons button.equal-btn:active,
.buttons button.equal-btn.active {
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.3);
  color: var(--bg-color);
}`,
js: `const buttons = document.querySelectorAll(".buttons button");
const valueDisplay = document.getElementById("value");
const historyDisplay = document.getElementById("history");
const toggleTheme = document.getElementById("checkbox");
const body = document.querySelector("body");
const clearBtn = document.getElementById("clear");
const themeLabel = document.getElementById("theme-label");

let currentInput = "";
let previousInput = "";
let operation = null;
let shouldResetScreen = false;

// Theme toggle
toggleTheme.addEventListener("change", (e) => {
  const calcBody = document.querySelector(".calculator");
  const displayArea = document.querySelector(".display");
  
  // Remove animation classes to reset them
  calcBody.classList.remove("animate-switch");
  displayArea.classList.remove("animate-flare");
  
  // Trigger a browser reflow so the animation restarts
  void calcBody.offsetWidth;
  
  // Re-add animation classes
  calcBody.classList.add("animate-switch");
  displayArea.classList.add("animate-flare");

  if (e.target.checked) {
    body.classList.add("dark");
    themeLabel.innerText = "PRO MODE";
  } else {
    body.classList.remove("dark");
    themeLabel.innerText = "NORMAL MODE";
  }
});

function updateDisplay() {
  valueDisplay.innerText = currentInput === "" ? "0" : formatNumber(currentInput);
  
  if (operation != null) {
    let opSymbol = operation;
    if(opSymbol === '*') opSymbol = '×';
    if(opSymbol === '/') opSymbol = '÷';
    if(opSymbol === '-') opSymbol = '−';
    historyDisplay.innerText = \`\${formatNumber(previousInput)} \${opSymbol}\`;
  } else {
    historyDisplay.innerText = "";
  }
  
  // Toggle AC to C
  if (currentInput !== "" || previousInput !== "") {
    clearBtn.innerText = "C";
  } else {
    clearBtn.innerText = "AC";
  }

  valueDisplay.scrollLeft = valueDisplay.scrollWidth;
}

// Add commas for large numbers
function formatNumber(num) {
  if (num === "") return "";
  if (num === "-") return "-";
  if (num === "Error") return "Error";
  
  let parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
  return parts.join(".");
}

function handleInput(action) {
  if (action === "clear" || action === "AC" || action === "C") {
    currentInput = "";
    previousInput = "";
    operation = null;
  } else if (action === "⌫" || action === "Backspace") {
    currentInput = currentInput.toString().slice(0, -1);
  } else if (action === "+/-") {
    if (currentInput !== "") {
      currentInput = (parseFloat(currentInput) * -1).toString();
    }
  } else if (action === "%") {
    if (currentInput !== "") {
      currentInput = (parseFloat(currentInput) / 100).toString();
    }
  } else if (["+", "-", "*", "/"].includes(action)) {
    if (currentInput === "" && previousInput !== "") {
      operation = action;
    } else if (currentInput !== "") {
      if (previousInput !== "") {
        currentInput = evaluate(previousInput, currentInput, operation).toString();
      }
      operation = action;
      previousInput = currentInput;
      shouldResetScreen = true;
    }
  } else if (action === "=") {
    if (currentInput !== "" && previousInput !== "") {
      currentInput = evaluate(previousInput, currentInput, operation).toString();
      operation = null;
      previousInput = "";
      shouldResetScreen = true;
    }
  } else {
    // Numbers and dot
    if (shouldResetScreen) {
      currentInput = "";
      shouldResetScreen = false;
    }
    if (action === "." && currentInput.includes(".")) return;
    if (currentInput.replace(".", "").length >= 10) return; // limit digit count
    
    // Prevent multiple leading zeros
    if (currentInput === "0" && action !== ".") {
      currentInput = action;
    } else {
      currentInput += action;
    }
  }
  
  updateDisplay();
}

function evaluate(a, b, op) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  if (isNaN(num1) || isNaN(num2)) return "";
  
  let res = 0;
  switch (op) {
    case "+": res = num1 + num2; break;
    case "-": res = num1 - num2; break;
    case "*": res = num1 * num2; break;
    case "/": res = num2 !== 0 ? num1 / num2 : "Error"; break;
  }
  
  if (res !== "Error") {
    res = parseFloat(res.toFixed(10)); // prevent floating point weirdness
  }
  return res;
}

// Click events
buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    let action = this.getAttribute("data-action") || this.innerText;
    handleInput(action);
  });
});

// Keyboard Mapping
const keyMap = {
  '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  '.': '.', '+': '+', '-': '-', '*': '*', '/': '/',
  'Enter': '=', '=': '=',
  'Backspace': 'Backspace', 'Escape': 'clear',
  '%': '%'
};

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (keyMap[key]) {
    e.preventDefault();
    let action = keyMap[key];
    
    buttons.forEach(btn => {
      let btnAction = btn.getAttribute("data-action") || btn.innerText;
      if (btnAction === '×') btnAction = '*';
      if (btnAction === '÷') btnAction = '/';
      if (btnAction === '−') btnAction = '-';
      if (btnAction === 'AC' || btnAction === 'C') btnAction = 'clear';

      if (btnAction === action || (action === '=' && btnAction === '=')) {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 150);
      }
    });

    handleInput(action);
  }
});`
}
};
/* ========================================================= */
/* ================================ */
const $ = s => document.querySelector(s);
const root = document.documentElement;
document.querySelectorAll("[data-brand]").forEach(e => e.textContent = CONFIG.brand);
$("[data-tagline]").textContent = CONFIG.tagline;
$("[data-sub]").textContent = CONFIG.sub;
$("[data-about]").textContent = CONFIG.about;
document.title = CONFIG.brand;
$("#y").textContent = new Date().getFullYear();
root.style.setProperty("--a", CONFIG.colors.a);
root.style.setProperty("--b", CONFIG.colors.b);
$("#links").innerHTML = CONFIG.links.map(([n, h]) => `<a href="${h}" target="_blank" rel="noopener">${n}</a>`).join("");

// theme
try { const s = localStorage.getItem("theme"); if (s) root.dataset.theme = s; } catch (e) {}
$("#theme").onclick = () => {
  const n = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = n;
  try { localStorage.setItem("theme", n); } catch (e) {}
};

// projects
let cat = "الكل", term = "";
const cats = ["الكل", ...new Set(PROJECTS.map(p => p.c))];
$("#chips").innerHTML = cats.map(c => `<button class="chip" aria-pressed="${c === cat}">${c}</button>`).join("");
$("#chips").onclick = e => {
  if (!e.target.classList.contains("chip")) return;
  cat = e.target.textContent;
  document.querySelectorAll(".chip").forEach(b => b.setAttribute("aria-pressed", b === e.target));
  render();
};
$("#q").oninput = e => { term = e.target.value.trim(); render(); };
function render() {
  const list = PROJECTS.filter(p => (cat === "الكل" || p.c === cat) && p.t.includes(term));
  $("#grid").innerHTML = list.map(p => { const i = PROJECTS.indexOf(p); return `
    <button class="card" data-i="${i}">
      <div class="thumb" style="background:linear-gradient(135deg,${GRADS[i % GRADS.length][0]},${GRADS[i % GRADS.length][1]})"><svg viewBox="0 0 64 64" aria-hidden="true">${ICONS[p.i]}</svg></div>
      <div class="info"><h3>${p.t}</h3><small>${p.c} · ${p.d}</small></div>
    </button>`; }).join("");
  $("#empty").hidden = list.length > 0;
}
render();

// hero tilt
const stage = $("#stage"), tilt = $("#tilt");
stage.parentElement.addEventListener("pointermove", e => {
  const r = stage.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  tilt.style.transform = `rotateY(${x * 35}deg) rotateX(${-y * 35}deg)`;
});

// newsletter (وصّله بخدمتك لاحقاً)
$("#form").onsubmit = e => {
  e.preventDefault();
  $("#msg").textContent = "تم الاشتراك. هتوصلك أول رسالة قريب.";
  e.target.reset();
};

// code viewer
const dlg = $("#viewer"), src = $("#vsrc");
let cur = null, tab = "html";
$("#grid").onclick = e => {
  const b = e.target.closest(".card"); if (!b) return;
  const p = PROJECTS[b.dataset.i];
  cur = p.code || CODES[p.u.replace(/\/$/, "").split("/").pop()] || FALLBACK;
  $("#vt").textContent = p.t;
  show("html");
  dlg.showModal();
};
function show(t) {
  tab = t; src.textContent = cur[t] || "";
  src.parentElement.scrollTop = 0;
  document.querySelectorAll(".tabs [data-t]").forEach(x => x.setAttribute("aria-selected", x.dataset.t === t));
}
document.querySelector(".tabs").onclick = e => { if (e.target.dataset.t) show(e.target.dataset.t); };
async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (err) {}
  // بديل لما المتصفح يمنع الـ Clipboard API (مثلاً لما الصفحة مفتوحة كملف مباشر)
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
  dlg.appendChild(ta); ta.select();
  let ok = false;
  try { ok = document.execCommand("copy"); } catch (err) {}
  ta.remove();
  return ok;
}
$("#vcopy").onclick = async e => {
  const b = e.currentTarget;
  b.textContent = (await copyText(cur[tab] || "")) ? "تم النسخ ✓" : "تعذّر النسخ";
  setTimeout(() => b.textContent = "نسخ الكود", 1600);
};
$("#vclose").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
