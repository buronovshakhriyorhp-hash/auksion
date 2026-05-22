// ─────────────────────────────────────────────
// CONSTANTS & CONFIG
// ─────────────────────────────────────────────
const SK = {
    USERS:   'mo_users',
    SESSION: 'mo_session',
    LOTS:    'mo_lots'
};

const CATS = {
    transport:  { label:"Transport",      icon:"fa-car",       cls:"text-orange-400 bg-orange-400/10" },
    realestate: { label:"Ko'chmas Mulk",  icon:"fa-building",  cls:"text-blue-400 bg-blue-400/10"    },
    art:        { label:"San'at",         icon:"fa-palette",   cls:"text-purple-400 bg-purple-400/10" },
    tech:       { label:"Texnologiya",    icon:"fa-microchip", cls:"text-cyan-400 bg-cyan-400/10"     },
    jewelry:    { label:"Zargarlik",      icon:"fa-gem",       cls:"text-yellow-400 bg-yellow-400/10" }
};

const SEED_LOTS = [
    {id:1,  name:"Bugatti Chiron Pur Sport",     cat:"transport",  price:3500000,  timer:7200,  img:"https://picsum.photos/seed/101/800/600", desc:"Dunyoning eng tez va eng chiroyli superkarlari biri", bids:[]},
    {id:2,  name:"Penthouse Dubai Marina",        cat:"realestate", price:5200000,  timer:10800, img:"https://picsum.photos/seed/102/800/600", desc:"Dubay marina qirg'og'ida 60-qavatda hashamatli penthouse", bids:[]},
    {id:3,  name:"SpaceX Starship NFT",           cat:"tech",       price:280000,   timer:3600,  img:"https://picsum.photos/seed/103/800/600", desc:"Elon Maskning shaxsan imzolagan eksklyuziv NFT kolleksiyasi", bids:[]},
    {id:4,  name:"Private Island — Bahamas",      cat:"realestate", price:12000000, timer:14400, img:"https://picsum.photos/seed/104/800/600", desc:"Karib dengizidagi 50 gektar shaxsiy orol", bids:[]},
    {id:5,  name:"Rolex Rainbow Daytona",         cat:"jewelry",    price:850000,   timer:5400,  img:"https://picsum.photos/seed/105/800/600", desc:"18K oltin va rangma-rang brilliantlardan iborat nodir soat", bids:[]},
    {id:6,  name:"Tesla Cyberbeast 2025",         cat:"transport",  price:120000,   timer:4800,  img:"https://picsum.photos/seed/106/800/600", desc:"Tesla Cybertruck — Cyberbeast konfiguratsiyasi, 2025 model", bids:[]},
    {id:7,  name:"Abstract Art #99 — Banksy",    cat:"art",        price:2100000,  timer:9000,  img:"https://picsum.photos/seed/107/800/600", desc:"Banksy original asari, autentiklik sertifikati bilan", bids:[]},
    {id:8,  name:"Vintage Porsche 911 (1973)",    cat:"transport",  price:450000,   timer:6600,  img:"https://picsum.photos/seed/108/800/600", desc:"1973 yilgi Porsche 911 RS Carrera, original holati", bids:[]},
    {id:9,  name:"Bali Ocean Villa",              cat:"realestate", price:1800000,  timer:12600, img:"https://picsum.photos/seed/109/800/600", desc:"Balidagi okean qirg'og'ida 5 xonali villa", bids:[]},
    {id:10, name:"Apple Vision Pro — Gold Ed.",   cat:"tech",       price:25000,    timer:2700,  img:"https://picsum.photos/seed/110/800/600", desc:"Apple Vision Pro eksklyuziv kollektor versiyasi, oltin rang", bids:[]},
    {id:11, name:"Mona Lisa NFT — Louvre",        cat:"art",        price:50000000, timer:86400, img:"https://picsum.photos/seed/111/800/600", desc:"Luvr muzeyining rasmiy Mona Lisa NFT sertifikati", bids:[]},
    {id:12, name:"Blue Diamond — 15 karat",       cat:"jewelry",    price:5500000,  timer:18000, img:"https://picsum.photos/seed/112/800/600", desc:"15 karatlik natural ko'k brilliant, GIA sertifikati bilan", bids:[]},
    {id:13, name:"Ferrari LaFerrari 2015",        cat:"transport",  price:3200000,  timer:8400,  img:"https://picsum.photos/seed/113/800/600", desc:"Ferrari LaFerrari — faqat 499 dona chiqarilgan", bids:[]},
    {id:14, name:"Monaco Penthouse",              cat:"realestate", price:45000000, timer:86400, img:"https://picsum.photos/seed/114/800/600", desc:"Monakoning eng prestijli joyidagi penthouse", bids:[]},
    {id:15, name:"IBM Quantum Computer Node",     cat:"tech",       price:8900000,  timer:7200,  img:"https://picsum.photos/seed/115/800/600", desc:"IBM kvant hisoblash moduli — 127 qubit", bids:[]},
    {id:16, name:"Van Gogh Original Sketch 1889", cat:"art",        price:18000000, timer:43200, img:"https://picsum.photos/seed/116/800/600", desc:"Van Gog tomonidan 1889-yilda yaratilgan original sketchlar", bids:[]},
];

const BOT_NAMES = [
    "Shavkat_Xan", "PremiumBidder", "Zara_Artistic", "Nodir_Supercars",
    "Dubai_Invest", "TechBro_2026", "CryptoApex", "Elena_Gems",
    "Sardor_RealEstate", "Starship_Pilot", "Banksy_Collector", "Kamron_Crypto"
];

// i18n Multilingual Dictionary
const LANGS = {
    uz: {
        title: "MathOyin | Premium Auktsion",
        statistika: "Statistika",
        lotQoshish: "Lot Qo'shish",
        balansToldirish: "Balans To'ldirish",
        kunRejimi: "Kun Rejimi",
        tunRejimi: "Tun Rejimi",
        chiqish: "Chiqish",
        balans: "Balans",
        activeAuksion: "Jonli Auktsion Faol",
        salom: "SALOM",
        savdolarniBoshlash: "Savdolarni Boshlash",
        jonliLotlar: "Jonli Lotlar",
        realvaqt: "Haqiqiy vaqt rejimida yangilanmoqda",
        lotQidirish: "Lot qidirish...",
        faolLotlar: "Faol Lotlar",
        jamiTakliflar: "Jami Takliflar",
        engQimmat: "Eng Qimmat",
        yakunlangan: "Yakunlangan",
        barchasi: "Barchasi",
        joriyNarx: "Joriy narx",
        status: "Status",
        taklif: "Taklif",
        tarix: "Tarix",
        yakunlandi: "YAKUNLANDI",
        faol: "Faol",
        tarixi: "ta taklif tarixi",
        hisobToldirishTitle: "Balans To'ldirish",
        joriyBalans: "Joriy Balans",
        maxsusMiqdor: "Maxsus miqdor ($)",
        balansQoshish: "Balansga Qo'shish",
        profilSozlamalari: "Profil Sozlamalari",
        ism: "Ism *",
        familiya: "Familiya *",
        avatarGrad: "Avatar Gradienti",
        saqlash: "Saqlash",
        yangiLot: "Yangi Lot",
        lotNomi: "Lot Nomi *",
        boshNarx: "Boshlang'ich narx ($) *",
        davomSoat: "Davomiyligi (soat)",
        kategoriya: "Kategoriya",
        rasmUrl: "Rasm URL (ixtiyoriy)",
        tavsif: "Tavsif",
        statistikaTitle: "Statistika Paneli",
        jamiLotlar: "Jami Lotlar",
        engQimmatLot: "🏆 Eng Qimmat Lot",
        engFaolLot: "🔥 Eng Faol Lot",
        foydalanuvchi: "👤 Foydalanuvchi (Tahrirlash)",
        adminTitle: "Admin Paneli",
        shaxsiyKabinet: "Shaxsiy Kabinet",
        yutilganLotlar: "Yutilgan Lotlar",
        faolBoshlashlar: "Faol Takliflar",
        sarflandi: "Sarflandi",
        foydalanuvchilar: "Foydalanuvchilar",
        lotlarBoshqaruvi: "Lotlar Boshqaruvi",
        rol: "Rol",
        amallar: "Amallar",
        nomi: "Nomi",
        uchirish: "O'chirish",
        majburanTugatish: "Tugatish",
        interact3d: "Sichqoncha orqali aylantiring",
        golib: "G'olib",
        toastWon: "Siz yutib oldingiz!",
        lider: "Joriy lider 🥇",
        noBids: "Hozircha taklif yo'q",
        noLots: "Lotlar topilmadi",
        adminRole: "⭐ Administrator",
        userRole: "👤 Foydalanuvchi",
        transport: "Transport",
        realestate: "Ko'chmas Mulk",
        art: "San'at",
        tech: "Texnologiya",
        jewelry: "Zargarlik"
    },
    ru: {
        title: "MathOyin | Премиум Аукцион",
        statistika: "Статистика",
        lotQoshish: "Добавить Лот",
        balansToldirish: "Пополнить Баланс",
        kunRejimi: "Дневной Режим",
        tunRejimi: "Ночной Режим",
        chiqish: "Выйти",
        balans: "Баланс",
        activeAuksion: "Живой Аукцион Активен",
        salom: "ПРИВЕТ",
        savdolarniBoshlash: "Начать Торги",
        jonliLotlar: "Живые Лоты",
        realvaqt: "Обновляется в реальном времени",
        lotQidirish: "Поиск лота...",
        faolLotlar: "Активные Лоты",
        jamiTakliflar: "Всего Ставок",
        engQimmat: "Самый Дорогой",
        yakunlangan: "Завершено",
        barchasi: "Все",
        joriyNarx: "Текущая цена",
        status: "Статус",
        taklif: "Ставка",
        tarix: "История",
        yakunlandi: "ЗАВЕРШЕНО",
        faol: "Активен",
        tarixi: "история ставок",
        hisobToldirishTitle: "Пополнение Баланса",
        joriyBalans: "Текущий Баланс",
        maxsusMiqdor: "Специальная сумма ($)",
        balansQoshish: "Пополнить Баланс",
        profilSozlamalari: "Настройки Профиля",
        ism: "Имя *",
        familiya: "Фамилия *",
        avatarGrad: "Градиент Аватара",
        saqlash: "Сохранить",
        yangiLot: "Новый Лот",
        lotNomi: "Название Лота *",
        boshNarx: "Начальная цена ($) *",
        davomSoat: "Продолжительность (ч)",
        kategoriya: "Категория",
        rasmUrl: "Ссылка на фото (опционально)",
        tavsif: "Описание",
        statistikaTitle: "Панель Статистики",
        jamiLotlar: "Всего Лотов",
        engQimmatLot: "🏆 Самый Дорогой Лот",
        engFaolLot: "🔥 Самый Активный Лот",
        foydalanuvchi: "👤 Пользователь (Редактировать)",
        adminTitle: "Панель Админа",
        shaxsiyKabinet: "Личный Кабинет",
        yutilganLotlar: "Выигранные Лоты",
        faolBoshlashlar: "Активные Ставки",
        sarflandi: "Потрачено",
        foydalanuvchilar: "Пользователи",
        lotlarBoshqaruvi: "Управление Лотами",
        rol: "Роль",
        amallar: "Действия",
        nomi: "Название",
        uchirish: "Удалить",
        majburanTugatish: "Завершить",
        interact3d: "Вращайте мышкой",
        golib: "Победитель",
        toastWon: "Вы выиграли!",
        lider: "Лидер 🥇",
        noBids: "Ставок пока нет",
        noLots: "Лоты не найдены",
        adminRole: "⭐ Администратор",
        userRole: "👤 Пользователь",
        transport: "Транспорт",
        realestate: "Недвижимость",
        art: "Искусство",
        tech: "Технологии",
        jewelry: "Ювелирные изделия"
    },
    en: {
        title: "MathOyin | Premium Auction",
        statistika: "Statistics",
        lotQoshish: "Add Lot",
        balansToldirish: "Top Up",
        kunRejimi: "Light Mode",
        tunRejimi: "Dark Mode",
        chiqish: "Logout",
        balans: "Balance",
        activeAuksion: "Live Auction Active",
        salom: "HELLO",
        savdolarniBoshlash: "Start Bidding",
        jonliLotlar: "Live Lots",
        realvaqt: "Updating in real time",
        lotQidirish: "Search lots...",
        faolLotlar: "Active Lots",
        jamiTakliflar: "Total Bids",
        engQimmat: "Most Expensive",
        yakunlangan: "Finished",
        barchasi: "All",
        joriyNarx: "Current Price",
        status: "Status",
        taklif: "Bid",
        tarix: "History",
        yakunlandi: "ENDED",
        faol: "Active",
        tarixi: "bid history",
        hisobToldirishTitle: "Top Up Balance",
        joriyBalans: "Current Balance",
        maxsusMiqdor: "Custom Amount ($)",
        balansQoshish: "Add to Balance",
        profilSozlamalari: "Profile Settings",
        ism: "First Name *",
        familiya: "Last Name *",
        avatarGrad: "Avatar Gradient",
        saqlash: "Save",
        yangiLot: "New Lot",
        lotNomi: "Lot Name *",
        boshNarx: "Starting Price ($) *",
        davomSoat: "Duration (hours)",
        kategoriya: "Category",
        rasmUrl: "Image URL (optional)",
        tavsif: "Description",
        statistikaTitle: "Statistics Panel",
        jamiLotlar: "Total Lots",
        engQimmatLot: "🏆 Top Valued Lot",
        engFaolLot: "🔥 Most Active Lot",
        foydalanuvchi: "👤 User (Click to edit)",
        adminTitle: "Admin Panel",
        shaxsiyKabinet: "Personal Cabinet",
        yutilganLotlar: "Won Lots",
        faolBoshlashlar: "Active Bids",
        sarflandi: "Spent",
        foydalanuvchilar: "Users",
        lotlarBoshqaruvi: "Lots Management",
        rol: "Role",
        amallar: "Actions",
        nomi: "Name",
        uchirish: "Delete",
        majburanTugatish: "Force End",
        interact3d: "Rotate with mouse",
        golib: "Winner",
        toastWon: "You won!",
        lider: "Current leader 🥇",
        noBids: "No bids yet",
        noLots: "No lots found",
        adminRole: "⭐ Administrator",
        userRole: "👤 User",
        transport: "Transport",
        realestate: "Real Estate",
        art: "Art",
        tech: "Technology",
        jewelry: "Jewelry"
    }
};

// ─────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────
let ME      = null;   // current user object
let balance = 2500000;
let lots    = [];
let curCat  = 'all';
let ticker  = null;
let botInterval = null;
let mobOpen = false;
let lastSave = 0;
let loadingState = false;
let curLang = localStorage.getItem('mo_lang') || 'uz';

// Tab-to-Tab Synchronization Engine
const SYNC = new BroadcastChannel('mo_sync');

// ─────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────
const $ = id => document.getElementById(id);

function t(key) {
    return (LANGS[curLang] && LANGS[curLang][key]) ? LANGS[curLang][key] : key;
}

function sHash(str) {
    const salt = 'mathOyin$ecret2025';
    let h = 5381;
    const s = salt + str;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h) ^ s.charCodeAt(i);
    return btoa(Math.abs(h).toString(36) + str.length.toString(16) + 'x');
}

function fMoney(n) {
    if (n >= 1e6) return '$' + (n/1e6).toFixed(1) + 'M';
    if (n >= 1e3) return '$' + (n/1e3).toFixed(0) + 'K';
    return '$' + n.toLocaleString();
}

function fTime(s) {
    if (s <= 0) return '00:00:00';
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
    return [h,m,sec].map(v=>String(v).padStart(2,'0')).join(':');
}

function fDate(ts) {
    return new Date(ts).toLocaleString(curLang === 'uz' ? 'uz-UZ' : (curLang === 'ru' ? 'ru-RU' : 'en-US'), {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function uid() { return Date.now() + Math.random().toString(36).slice(2,7); }

function initials(name) {
    return name.split(' ').map(n=>n[0]||'').join('').toUpperCase().slice(0,2) || 'U';
}

function getUserAliases(user) {
    if (!user) return [];
    return [
        `${user.first || ''} ${user.last || ''}`.trim(),
        user.username || '',
        user.email || ''
    ]
    .filter(Boolean)
    .map(v => v.toLowerCase());
}

function isBidFromUser(bid, user) {
    if (!bid || !user) return false;
    if (bid.uid && user.id && bid.uid === user.id) return true;
    const bidName = (bid.user || '').toLowerCase();
    return getUserAliases(user).includes(bidName);
}

// ─────────────────────────────────────────────
// SOUNDS (Synthesized Web Audio Engine)
// ─────────────────────────────────────────────
const AudioEngine = {
    ctx: null,
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },
    playBid() {
        try {
            this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
            osc.frequency.exponentialRampToValueAtTime(1046.50, this.ctx.currentTime + 0.1); // C6

            gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.12);
        } catch (e) { console.log('Audio error', e); }
    },
    playWin() {
        try {
            this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();

            const playNote = (freq, delay, duration) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

                gain.gain.setValueAtTime(0.0, this.ctx.currentTime + delay);
                gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + delay + 0.04);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

                osc.start(this.ctx.currentTime + delay);
                osc.stop(this.ctx.currentTime + delay + duration);
            };

            playNote(523.25, 0.0, 0.25); // C5
            playNote(659.25, 0.08, 0.25); // E5
            playNote(783.99, 0.16, 0.25); // G5
            playNote(1046.50, 0.24, 0.45); // C6
        } catch (e) { console.log('Audio error', e); }
    }
};

// ─────────────────────────────────────────────
// CONFETTI
// ─────────────────────────────────────────────
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

function triggerWinConfetti() {
    if (typeof confetti === 'function') {
        const duration = 2.5 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
}

// ─────────────────────────────────────────────
// SKELETON LOADER
// ─────────────────────────────────────────────
function renderSkeleton() {
    const grid = $('lotGrid');
    if (!grid) return;
    let skeletonHtml = '';
    for (let i = 0; i < 4; i++) {
        skeletonHtml += `
        <div class="lot-card glass opacity-80 pointer-events-none fade-up">
            <div class="h-44 skeleton rounded-[1.4rem] m-4"></div>
            <div class="px-5 py-4 space-y-4">
                <div class="h-5 skeleton w-2/3 rounded-lg"></div>
                <div class="h-4 skeleton w-full rounded-md"></div>
                <div class="flex justify-between mt-6">
                    <div class="space-y-2 w-1/3">
                        <div class="h-3 skeleton rounded"></div>
                        <div class="h-6 skeleton rounded"></div>
                    </div>
                    <div class="space-y-2 w-1/3 text-right flex flex-col items-end">
                        <div class="h-3 skeleton rounded w-1/2"></div>
                        <div class="h-4 skeleton rounded w-3/4"></div>
                    </div>
                </div>
                <div class="h-10 skeleton w-full rounded-xl mt-4"></div>
            </div>
        </div>`;
    }
    grid.innerHTML = skeletonHtml;
}

// ─────────────────────────────────────────────
// TOAST
// ─────────────────────────────────────────────
const TICO = {
    success:'fa-check-circle text-green-400',
    error:'fa-times-circle text-red-400',
    info:'fa-info-circle text-blue-400',
    warning:'fa-exclamation-triangle text-yellow-400'
};

function toast(msg, type='info', ms=4200) {
    const wrap = $('toastWrap');
    if (!wrap) return;
    const el   = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `
        <i class="fas ${TICO[type]||TICO.info} text-lg flex-shrink-0 mt-0.5"></i>
        <div class="flex-1 min-w-0">
            <p class="text-sm font-bold text-white leading-snug">${msg}</p>
        </div>
        <button onclick="rmToast(this.parentElement)" class="text-gray-500 hover:text-white transition flex-shrink-0 ml-1">
            <i class="fas fa-times text-xs"></i>
        </button>`;
    el.onclick = e => { if(!e.target.closest('button')) rmToast(el); };
    wrap.appendChild(el);
    setTimeout(() => rmToast(el), ms);
}

function rmToast(el) {
    if (!el || !el.parentElement) return;
    el.classList.add('out');
    setTimeout(() => el.remove(), 320);
}

// ─────────────────────────────────────────────
// THEME SWITCHER
// ─────────────────────────────────────────────
function initTheme() {
    const saved = localStorage.getItem('mo_theme') || 'light';
    setTheme(saved);
}

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light');
        const btn = $('themeToggleBtn');
        if (btn) btn.innerHTML = '<i class="fas fa-moon text-lg text-gray-800"></i>';
        const mobBtn = $('themeToggleBtnMob');
        if (mobBtn) mobBtn.innerHTML = '<i class="fas fa-moon mr-3"></i>' + t('tunRejimi');
    } else {
        document.body.classList.remove('light');
        const btn = $('themeToggleBtn');
        if (btn) btn.innerHTML = '<i class="fas fa-sun text-lg text-yellow-400"></i>';
        const mobBtn = $('themeToggleBtnMob');
        if (mobBtn) mobBtn.innerHTML = '<i class="fas fa-sun mr-3"></i>' + t('kunRejimi');
    }
    localStorage.setItem('mo_theme', theme);
}

function toggleTheme() {
    const isLight = document.body.classList.contains('light');
    setTheme(isLight ? 'dark' : 'light');
}

// ─────────────────────────────────────────────
// AUTH — USERS STORAGE
// ─────────────────────────────────────────────
function getUsers() {
    try { return JSON.parse(localStorage.getItem(SK.USERS) || '[]'); }
    catch { return []; }
}
function saveUsers(u) { localStorage.setItem(SK.USERS, JSON.stringify(u)); }

function seedAdmin() {
    const users = getUsers();
    if (!users.some(u => u.role === 'admin')) {
        users.push({
            id: 'admin_001',
            first: 'Jamshid', last: 'Eshpulatov',
            username: '345231100735',
            email: 'jamshid@mathoyin.uz',
            hash: sHash('881441507'),
            role: 'admin',
            bal: 2500000,
            created: Date.now(),
            ava: 'JE',
            avaBg: 'from-blue-500 to-purple-600'
        });
        saveUsers(users);
    }
}

// ─────────────────────────────────────────────
// AUTH — UI
// ─────────────────────────────────────────────
function switchTab(tab) {
    const isLogin = tab === 'login';
    $('formLogin').classList.toggle('hidden', !isLogin);
    $('formRegister').classList.toggle('hidden', isLogin);
    $('tabLogin').classList.toggle('on', isLogin);
    $('tabRegister').classList.toggle('on', !isLogin);
}

function togglePwd(inputId, btn) {
    const inp = $(inputId);
    const ico = btn.querySelector('i');
    if (inp.type === 'password') {
        inp.type = 'text';
        ico.classList.replace('fa-eye','fa-eye-slash');
    } else {
        inp.type = 'password';
        ico.classList.replace('fa-eye-slash','fa-eye');
    }
}

function strengthCheck(pass) {
    let sc = 0;
    if (pass.length >= 8)         sc++;
    if (/[A-Z]/.test(pass))       sc++;
    if (/[0-9]/.test(pass))       sc++;
    if (/[^A-Za-z0-9]/.test(pass)) sc++;

    const cols = ['bg-red-500','bg-orange-500','bg-yellow-500','bg-green-500'];
    const lbls = ['','Juda zaif','Zaif',"O'rtacha",'Kuchli'];
    const lcls = ['','text-red-500','text-orange-500','text-yellow-500','text-green-500'];

    ['sb1','sb2','sb3','sb4'].forEach((id,i) => {
        $(id).className = `s-bar flex-1 ${i < sc ? cols[sc-1] : 'bg-white/10'}`;
    });
    const lbl = $('strengthLabel');
    lbl.textContent = lbls[sc] || '';
    lbl.className = `text-[10px] mt-1 ml-1 h-4 ${lcls[sc] || 'text-gray-600'}`;
}

function doRegister() {
    const first   = $('rg_first').value.trim();
    const last    = $('rg_last').value.trim();
    const uname   = $('rg_user').value.trim();
    const email   = $('rg_email').value.trim().toLowerCase();
    const pass    = $('rg_pass').value;
    const confirm = $('rg_confirm').value;
    const agree   = $('rg_agree').checked;
    const box     = $('authBox');

    const shake = () => { box.classList.add('shake'); setTimeout(()=>box.classList.remove('shake'),500); };

    if (!first || !last)          { toast("Ism va familiyangizni kiriting",'error'); shake(); return; }
    if (!uname || uname.length<3) { toast("Username kamida 3 ta belgidan iborat bo'lishi kerak",'error'); return; }
    if (!email.includes('@'))     { toast("To'g'ri email manzil kiriting",'error'); return; }
    if (pass.length < 6)         { toast("Parol kamida 6 ta belgidan iborat bo'lishi kerak",'error'); return; }
    if (pass !== confirm)         { toast("Parollar bir xil emas!",'error'); shake(); return; }
    if (!agree)                   { toast("Foydalanish shartlarini qabul qiling",'warning'); return; }

    const users = getUsers();
    if (users.some(u => u.username.toLowerCase() === uname.toLowerCase()))
        { toast("Bu username band!",'error'); return; }
    if (users.some(u => u.email === email))
        { toast("Bu email allaqachon ro'yxatdan o'tgan!",'error'); return; }

    const newUser = {
        id: uid(),
        first, last,
        username: uname,
        email,
        hash: sHash(pass),
        role: 'user',
        bal: 2500000,
        created: Date.now(),
        ava: (first[0]+(last[0]||'')).toUpperCase(),
        avaBg: 'from-blue-500 to-purple-600'
    };
    users.push(newUser);
    saveUsers(users);

    toast(`🎉 Xush kelibsiz, ${first}! Hisobingiz yaratildi.`,'success',5000);
    beginSession(newUser);
}

function checkAuth() {
    const u = $('li_user').value.trim().toLowerCase();
    const p = $('li_pass').value;
    const box = $('authBox');
    const shake = () => { box.classList.add('shake'); setTimeout(()=>box.classList.remove('shake'),500); };

    if (!u || !p) { toast("Login va parolni to'ldiring",'error'); shake(); return; }

    const users = getUsers();
    const user  = users.find(x =>
        (x.username.toLowerCase() === u || x.email === u) && x.hash === sHash(p)
    );

    if (user) {
        beginSession(user);
    } else {
        toast("Xato login yoki parol!",'error');
        shake();
        $('li_pass').value = '';
    }
}

function beginSession(user) {
    ME = user;
    sessionStorage.setItem(SK.SESSION, JSON.stringify({ uid: user.id, ts: Date.now() }));
    showApp();
}

function showApp() {
    $('authOverlay').style.display = 'none';
    $('mainApp').style.display     = 'block';
    document.body.style.overflow   = 'auto';

    balance = ME.bal !== undefined ? ME.bal : 2500000;
    syncBalanceUI();

    $('heroName').textContent  = (ME.first || 'FOYDALANUVCHI').toUpperCase() + '!';
    updateAvatarUI();

    // Setup Admin Panel Button visibility
    if (ME && ME.role === 'admin') {
        $('adminBtn').classList.remove('hidden');
        $('adminBtnMob').classList.remove('hidden');
    } else {
        $('adminBtn').classList.add('hidden');
        $('adminBtnMob').classList.add('hidden');
    }

    // Set dynamic language
    setLang(curLang);

    // SKELETON LOADER ANIMATION (1.2 seconds simulation)
    loadingState = true;
    renderSkeleton();
    setTimeout(() => {
        loadingState = false;
        initApp();
        
        // Initializing three.js GOLD Hero background rotating crystal
        initHero3D();
        
        // Initializing AOS scroll animations
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true
            });
        }
    }, 1200);
}

function updateAvatarUI() {
    const el = $('navAvatar');
    if (!el) return;
    el.textContent = ME.ava || initials((ME.first||'')+(ME.last||''));
    el.title       = `${ME.first||''} ${ME.last||''}`;
    
    // Clear old gradients
    el.className = "w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-black cursor-pointer select-none bg-gradient-to-br transition hover:scale-105 active:scale-95";
    const bgGrad = ME.avaBg || 'from-blue-500 to-purple-600';
    bgGrad.split(' ').forEach(cls => el.classList.add(cls));
}

function logout() {
    if (ME) {
        const users = getUsers();
        const idx   = users.findIndex(u => u.id === ME.id);
        if (idx !== -1) { users[idx].bal = balance; saveUsers(users); }
    }
    sessionStorage.removeItem(SK.SESSION);
    if (ticker) clearInterval(ticker);
    if (botInterval) clearInterval(botInterval);
    location.reload();
}

// ─────────────────────────────────────────────
// APP INIT
// ─────────────────────────────────────────────
function initApp() {
    try { lots = JSON.parse(localStorage.getItem(SK.LOTS) || 'null') || JSON.parse(JSON.stringify(SEED_LOTS)); }
    catch { lots = JSON.parse(JSON.stringify(SEED_LOTS)); }
    
    // Convert old single objects to modern structures if required
    lots.forEach(l => {
        if (!l.bids) l.bids = [];
    });

    renderLots();
    updateStats();
    startTicker();
    startBotSimulator();
}

function saveLots() { localStorage.setItem(SK.LOTS, JSON.stringify(lots)); }

// ─────────────────────────────────────────────
// i18n ENGINE (Multilingual Translation Controller)
// ─────────────────────────────────────────────
function changeLang(lang) {
    setLang(lang);
}

function setLang(lang) {
    curLang = lang;
    localStorage.setItem('mo_lang', lang);
    
    const select = $('langSelect');
    if (select) select.value = lang;

    // Translate all static nodes having [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (LANGS[lang] && LANGS[lang][key]) {
            const ico = el.querySelector('i');
            if (ico) {
                el.innerHTML = '';
                el.appendChild(ico);
                el.appendChild(document.createTextNode(' ' + LANGS[lang][key]));
            } else {
                el.textContent = LANGS[lang][key];
            }
        }
    });

    // Translate all input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (LANGS[lang] && LANGS[lang][key]) {
            el.placeholder = LANGS[lang][key];
        }
    });

    // Update document title
    const pageTitle = $('pageTitle');
    if (pageTitle && LANGS[lang].title) pageTitle.textContent = LANGS[lang].title;

    // Update Hero subheadings specifically
    const subEl = $('heroSubtitle');
    if (subEl) {
        if (lang === 'uz') subEl.textContent = "Shaxsiy MathOyin auksion panelingizga xush kelibsiz. Real vaqt rejimida lotlarni kuzating va eng yaxshi narxni belgilang.";
        else if (lang === 'ru') subEl.textContent = "Добро пожаловать на вашу панель аукциона MathOyin. Отслеживайте лоты в реальном времени и делайте лучшие ставки.";
        else subEl.textContent = "Welcome to your personal MathOyin auction dashboard. Track lots in real-time and place the winning bids.";
    }

    const p3dDesc = $('p3dDesc');
    if (p3dDesc) {
        if (lang === 'uz') p3dDesc.textContent = "Matematik 3D modellar yuqori tezlikda va tarmoq yuklamasisiz ishlaydi. Sichqoncha orqali modelni aylantiring yoki kattalashtiring.";
        else if (lang === 'ru') p3dDesc.textContent = "Математические 3D-модели работают на высокой скорости и без нагрузки на сеть. Вращайте или приближайте модель мышкой.";
        else p3dDesc.textContent = "Mathematical 3D models load instantly with no network overhead. Rotate or zoom the model using your mouse.";
    }

    // Refresh Dynamic elements
    renderLots();
    updateStats();
}

// ─────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────
function catBadge(cat) {
    const c = CATS[cat] || CATS.art;
    const catLabel = t(cat);
    return `<span class="cat-b ${c.cls}"><i class="fas ${c.icon} text-[8px]"></i>${catLabel}</span>`;
}

function renderLots() {
    if (loadingState) return; // Keep skeleton rendering
    const grid  = $('lotGrid');
    const empty = $('emptyMsg');
    if (!grid) return;

    const q = ($('searchBox')?.value||'').toLowerCase();
    const filtered = lots.filter(l =>
        (curCat === 'all' || l.cat === curCat) &&
        (!q || l.name.toLowerCase().includes(q))
    );

    if (!filtered.length) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        return;
    }
    empty.classList.add('hidden');

    grid.innerHTML = filtered.map(l => {
        const done = l.timer <= 0;
        const bLen = l.bids ? l.bids.length : 0;
        const tCol = done ? 'text-gray-400' : (l.timer < 300 ? 'text-orange-400' : 'text-red-400');

        return `
        <div class="lot-card glass fade-up ${done ? 'ended' : ''}">
            <!-- Image Container -->
            <div class="lot-img h-44 overflow-hidden relative" style="border-radius:1.4rem;margin-bottom:1rem;">
                <img src="${l.img}" alt="${l.name}" loading="lazy"
                     onerror="this.src='https://picsum.photos/seed/${l.id}/800/600'"
                     class="w-full h-full object-cover">
                <!-- Timer Badge -->
                <div class="absolute top-3 right-3 bg-black/70 backdrop-blur px-3 py-1.5 rounded-[10px] border border-white/10 ${tCol} font-mono text-[11px] font-bold flex items-center gap-1.5 z-10">
                    ${done
                        ? `<i class="fas fa-lock text-[9px]"></i><span>${t('yakunlandi')}</span>`
                        : `<i class="fas fa-clock text-[9px]"></i><span id="t${l.id}">${fTime(l.timer)}</span>`
                    }
                </div>
                <!-- Cat Badge -->
                <div class="absolute top-3 left-3 z-10">${catBadge(l.cat)}</div>
                
                <!-- 📦 3D Preview Floating Icon -->
                <button onclick="open3dPreview(${l.id}, event)" class="absolute bottom-3 left-3 bg-blue-600/80 hover:bg-blue-600 text-white w-8 h-8 rounded-[10px] backdrop-blur flex items-center justify-center border border-white/10 hover:border-blue-400 transition-all hover:scale-105 active:scale-95 z-10" title="3D Preview">
                    <i class="fas fa-cube text-xs"></i>
                </button>
            </div>

            <!-- Card Body -->
            <div class="flex flex-col flex-1 px-1 text-left">
                <h3 class="text-[15px] font-black uppercase italic tracking-tight truncate mb-0.5 text-white">${l.name}</h3>
                <p class="text-gray-600 text-[11px] mb-4 line-clamp-1">${l.desc||''}</p>

                <div class="flex items-end justify-between mb-4">
                    <div>
                        <span class="text-[9px] text-gray-600 font-bold uppercase tracking-widest block">${t('joriyNarx')}</span>
                        <span class="text-[20px] font-black text-blue-500 tracking-tighter font-mono">$${l.price.toLocaleString()}</span>
                    </div>
                    <div class="text-right">
                        <span class="text-[9px] text-gray-600 font-bold uppercase tracking-widest block">${t('status')}</span>
                        ${done
                            ? `<span class="text-[9px] font-black text-red-500 uppercase"><i class="fas fa-lock mr-1 text-[8px]"></i>${t('yakunlandi')}</span>`
                            : `<span class="text-[9px] font-black text-green-500 uppercase"><i class="fas fa-circle text-[7px] mr-1 animate-pulse"></i>${t('faol')}</span>`
                        }
                    </div>
                </div>

                <div class="border-t border-white/5 pt-3 mt-auto space-y-2">
                    ${done
                        ? `<button onclick="showHistory(${l.id})"
                                   class="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition flex items-center justify-center gap-2">
                               <i class="fas fa-history"></i>${bLen} ${t('tarixi')}
                           </button>`
                        : `<input type="number" id="inp${l.id}"
                                  placeholder="Min: $${(l.price + Math.ceil(l.price * 0.01)).toLocaleString()}"
                                  class="c-input text-center text-sm py-3" style="border-radius:12px;"
                                  onkeydown="if(event.key==='Enter')placeBid(${l.id})">
                           <div class="grid grid-cols-2 gap-2">
                               <button onclick="placeBid(${l.id})"
                                       class="py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-[10px] uppercase tracking-widest transition flex items-center justify-center gap-1.5 text-white">
                                   <i class="fas fa-gavel"></i>${t('taklif')}
                                </button>
                               <button onclick="showHistory(${l.id})"
                                       class="py-3 bg-white/5 hover:bg-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition flex items-center justify-center gap-1.5">
                                   <i class="fas fa-history"></i>${bLen}
                               </button>
                           </div>`
                    }
                </div>
            </div>
        </div>`;
    }).join('');

    // Trigger AOS refresh so scrolling animations bind properly to dynamic lots
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

function filterRender() { renderLots(); }

function setCat(cat, btn) {
    curCat = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
    btn.classList.add('on');
    renderLots();
}

// ─────────────────────────────────────────────
// BID PLACE LOGIC
// ─────────────────────────────────────────────
function placeBid(id) {
    const lot = lots.find(l => l.id === id);
    if (!lot) return;

    if (lot.timer <= 0) { toast("Bu lot yakunlangan, taklif berish mumkin emas",'error'); return; }

    const inp = $(`inp${id}`);
    const val = parseInt(inp.value);
    
    const minStep = Math.ceil(lot.price * 0.01); 
    const minAllowed = lot.price + minStep;

    if (!val || isNaN(val)) { toast("Iltimos narxni to'g'ri kiriting",'warning'); return; }
    if (val < minAllowed)   { 
        toast(`Narx joriy narxning kamida 1% qadami bilan yuqori bo'lishi kerak! Min: $${minAllowed.toLocaleString()}`,'error'); 
        inp.classList.add('shake'); 
        setTimeout(()=>inp.classList.remove('shake'),500); 
        return; 
    }

    const diff = val - lot.price;
    if (diff > balance) { toast(`Hisobingizda mablag' yetarli emas! Sarlab qo'shimcha: $${diff.toLocaleString()}`,'error'); return; }

    balance   -= diff;
    lot.price  = val;
    lot.timer = Math.max(lot.timer, 180); // sniper protection
    lot.timer += 120; // +2 min

    const myFullName = ME ? `${ME.first} ${ME.last}` : 'Siz';

    if (!lot.bids) lot.bids = [];
    lot.bids.unshift({
        user: myFullName,
        amount: val,
        ts: Date.now(),
        uid: ME ? ME.id : null
    });

    inp.value = '';
    if (ME) {
        ME.bal = balance;
        const users = getUsers();
        const idx = users.findIndex(u => u.id === ME.id);
        if (idx !== -1) { users[idx].bal = balance; saveUsers(users); }
    }

    saveLots();
    syncBalanceUI();
    renderLots();
    updateStats();
    
    // Play WOW audio effect & confetti
    AudioEngine.playBid();
    triggerConfetti();

    const textSuccess = curLang === 'uz' ? `taklifingiz qabul qilindi!` : (curLang === 'ru' ? 'ваша ставка принята!' : 'your bid has been placed!');
    toast(`🎉 ${lot.name} ${textSuccess}: $${val.toLocaleString()}`, 'success', 5000);

    // Sync other tabs side-by-side
    SYNC.postMessage({
        type: 'BID',
        senderId: ME ? ME.id : 'anon',
        data: {
            lots: lots,
            bidder: myFullName,
            amount: val
        }
    });
}

// ─────────────────────────────────────────────
// AUTOMATIC BOT BID SIMULATOR (WOW Real-time engine)
// ─────────────────────────────────────────────
function startBotSimulator() {
    if (botInterval) clearInterval(botInterval);
    
    // Run bot simulator every 24 seconds
    botInterval = setInterval(() => {
        if (!lots.length) return;
        
        const activeLots = lots.filter(l => l.timer > 0);
        if (!activeLots.length) return;
        
        const lot = activeLots[Math.floor(Math.random() * activeLots.length)];
        const botName = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)];
        
        const incrementPercent = 0.02 + (Math.random() * 0.04);
        const increment = Math.ceil(lot.price * incrementPercent);
        const newPrice = lot.price + increment;
        
        if (!lot.bids) lot.bids = [];
        lot.bids.unshift({
            user: botName,
            amount: newPrice,
            ts: Date.now(),
            uid: null
        });
        
        lot.price = newPrice;
        lot.timer = Math.max(lot.timer, 180); // Sniper protection
        lot.timer += 60; // Bot increases timer by 1 min
        
        saveLots();
        renderLots();
        updateStats();
        
        // Trigger alert & audio
        AudioEngine.playBid();
        
        const textBotBid = curLang === 'uz' ? 'lotiga' : (curLang === 'ru' ? 'сделал ставку на' : 'placed a bid on');
        const textAction = curLang === 'uz' ? 'taklif qildi!' : '';
        toast(`🔥 ${botName} — ${textAction ? `${lot.name} ${textBotBid} $${newPrice.toLocaleString()} ${textAction}` : `${textBotBid} ${lot.name}: $${newPrice.toLocaleString()}`}`, 'info', 5000);
        
        // Sync tabs so bots show up instantly in side-by-side tabs!
        SYNC.postMessage({
            type: 'BID',
            senderId: 'bot',
            data: {
                lots: lots,
                bidder: botName,
                amount: newPrice
            }
        });
        
    }, 24000);
}

// ─────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────
function updateStats() {
    const active    = lots.filter(l => l.timer > 0).length;
    const done      = lots.filter(l => l.timer <= 0).length;
    const totalBids = lots.reduce((s,l) => s + (l.bids?.length||0), 0);
    const topLot    = [...lots].sort((a,b) => b.price - a.price)[0];

    const activeEl = $('stActive');
    const doneEl = $('stDone');
    const bidsEl = $('stBids');
    const topEl = $('stTop');

    if (activeEl) activeEl.textContent = active;
    if (doneEl) doneEl.textContent   = done;
    if (bidsEl) bidsEl.textContent   = totalBids;
    if (topEl) topEl.textContent    = topLot ? fMoney(topLot.price) : '—';
}

function syncBalanceUI() {
    const cashStr = '$' + balance.toLocaleString();
    if ($('navBalance')) $('navBalance').textContent  = cashStr;
    if ($('balDisplay')) $('balDisplay').textContent  = cashStr;
}

// ─────────────────────────────────────────────
// TIMER COUNTDOWN LOGIC
// ─────────────────────────────────────────────
function startTicker() {
    if (ticker) clearInterval(ticker);
    let needRender = false;

    ticker = setInterval(() => {
        lots.forEach(l => {
            if (l.timer > 0) {
                l.timer--;
                const el = $(`t${l.id}`);
                if (el) {
                    if (l.timer <= 0) { 
                        needRender = true; 
                        
                        // Check if the current logged-in user won the lot
                        const lastBid = l.bids && l.bids[0];
                        const myFullName = ME ? `${ME.first} ${ME.last}` : 'Siz';
                        if (lastBid && isBidFromUser(lastBid, ME)) {
                            // Yes, we won!
                            setTimeout(() => {
                                AudioEngine.playWin();
                                triggerWinConfetti();
                                toast(`🏆 ${t('toastWon')} ${l.name}! $${l.price.toLocaleString()}`, 'success', 9000);
                            }, 500);
                        } else if (lastBid) {
                            toast(`🔒 ${l.name} — ${t('yakunlandi')}. ${t('golib')}: ${lastBid.user} ($${l.price.toLocaleString()})`, 'warning', 6000);
                        }
                    }
                    else { 
                        el.textContent = fTime(l.timer); 
                    }
                }
            }
        });

        if (needRender) {
            needRender = false;
            renderLots();
            updateStats();
            saveLots();
        }

        // Periodic save every 60 s
        const now = Date.now();
        if (now - lastSave > 60000) { saveLots(); lastSave = now; }

    }, 1000);
}

// ─────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────
function openModal(id) {
    $(id).classList.add('open');
    document.body.style.overflow = 'hidden';

    if (id === 'mStats')   buildStats();
    if (id === 'mBalance') syncBalanceUI();
    if (id === 'mAdmin')   renderAdminPanel();
}
function closeModal(id) {
    $(id).classList.remove('open');
    document.body.style.overflow = 'auto';
}

function buildStats() {
    const active    = lots.filter(l => l.timer > 0);
    const done      = lots.filter(l => l.timer <= 0);
    const totalBids = lots.reduce((s,l) => s + (l.bids?.length||0), 0);
    const topPrize  = [...lots].sort((a,b) => b.price - a.price)[0];
    const topActive = [...lots].sort((a,b) => (b.bids?.length||0) - (a.bids?.length||0))[0];

    const bgGrad = ME.avaBg || 'from-blue-500 to-purple-600';

    $('statsContent').innerHTML = `
        <div class="grid grid-cols-2 gap-3 mb-5">
            <div class="s-card"><div class="text-2xl font-black text-blue-500 font-mono">${active.length}</div><div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">${t('faolLotlar')}</div></div>
            <div class="s-card"><div class="text-2xl font-black text-red-500 font-mono">${done.length}</div><div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">${t('yakunlangan')}</div></div>
            <div class="s-card"><div class="text-2xl font-black text-green-500 font-mono">${totalBids}</div><div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">${t('jamiTakliflar')}</div></div>
            <div class="s-card"><div class="text-2xl font-black text-purple-500 font-mono">${lots.length}</div><div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">${t('jamiLotlar')}</div></div>
        </div>
        ${topPrize ? `
        <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-4 mb-3">
            <div class="text-[9px] text-yellow-500 font-black uppercase tracking-widest mb-1">${t('engQimmatLot')}</div>
            <div class="font-black truncate text-white">${topPrize.name}</div>
            <div class="text-yellow-500 font-mono font-black text-xl">$${topPrize.price.toLocaleString()}</div>
        </div>` : ''}
        ${topActive && topActive.bids?.length ? `
        <div class="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 mb-3">
            <div class="text-[9px] text-green-500 font-black uppercase tracking-widest mb-1">${t('engFaolLot')}</div>
            <div class="font-black truncate text-white">${topActive.name}</div>
            <div class="text-green-500 text-xs font-bold">${topActive.bids.length} ta taklif</div>
        </div>` : ''}
        <div class="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 mb-3">
            <div class="text-[9px] text-blue-500 font-black uppercase tracking-widest mb-1">💰 ${t('joriyBalans')}</div>
            <div class="text-blue-500 font-mono font-black text-2xl">$${balance.toLocaleString()}</div>
        </div>
        ${ME ? `
        <div class="bg-white/5 border border-white/8 rounded-2xl p-4 cursor-pointer hover:border-blue-500 transition-all text-left" onclick="openProfileModal()">
            <div class="flex justify-between items-center mb-2">
                <div class="text-[9px] text-gray-500 font-black uppercase tracking-widest">${t('foydalanuvchi')}</div>
                <i class="fas fa-edit text-xs text-blue-500"></i>
            </div>
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-gradient-to-br ${bgGrad} rounded-xl flex items-center justify-center text-sm font-black text-white">${ME.ava||'U'}</div>
                <div>
                    <div class="font-black text-white">${ME.first} ${ME.last}</div>
                    <div class="text-gray-500 text-xs">@${ME.username}</div>
                    <div class="text-[9px] text-gray-600 mt-0.5">${ME.role==='admin'? t('adminRole') : t('userRole')}</div>
                </div>
            </div>
        </div>` : ''}
    `;
}

function showHistory(id) {
    const lot = lots.find(l => l.id === id);
    if (!lot) return;
    $('histSubtitle').textContent = lot.name;
    const bids = lot.bids || [];

    $('histContent').innerHTML = bids.length === 0 ? `
        <div class="text-center py-14">
            <i class="fas fa-history text-4xl text-gray-700 mb-3"></i>
            <p class="text-gray-600 text-sm font-bold uppercase tracking-widest">${t('noBids')}</p>
        </div>` : bids.map((b,i) => `
        <div class="bid-row">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-black flex-shrink-0 text-white">
                    ${initials(b.user||'U')}
                </div>
                <div>
                    <div class="text-sm font-bold text-white">${b.user||'Foydalanuvchi'}</div>
                    <div class="text-[10px] text-gray-500">${fDate(b.ts)}</div>
                </div>
            </div>
            <div class="text-right">
                <div class="font-black text-blue-500 font-mono">$${b.amount.toLocaleString()}</div>
                ${i===0?`<div class="text-[9px] text-green-500 font-bold">${t('lider')}</div>`:''}
            </div>
        </div>`).join('');

    openModal('mHistory');
}

// ─────────────────────────────────────────────
// SHAXSIY KABINET SYSTEM
// ─────────────────────────────────────────────
let activeCabinetTab = 'won';

function openCabinetModal() {
    if (!ME) return;
    
    $('cabName').textContent = `${ME.first} ${ME.last}`;
    $('cabUsername').textContent = `@${ME.username}`;
    $('cabAvatar').textContent = ME.ava || 'JE';
    $('cabAvatar').className = "w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white bg-gradient-to-br flex-shrink-0 " + (ME.avaBg || 'from-blue-500 to-purple-600');
    
    if (ME.role === 'admin') {
        $('cabRoleBadge').textContent = t('adminRole');
        $('cabRoleBadge').className = "inline-block text-[9px] uppercase tracking-widest font-black text-red-500 mt-1";
    } else {
        $('cabRoleBadge').textContent = t('userRole');
        $('cabRoleBadge').className = "inline-block text-[9px] uppercase tracking-widest font-black text-blue-500 mt-1";
    }

    $('cabBalance').textContent = fMoney(balance);
    
    const myFullName = `${ME.first} ${ME.last}`;
    const wonLots = lots.filter(l => {
        const done = l.timer <= 0;
        const lastBid = l.bids && l.bids[0];
        return done && lastBid && isBidFromUser(lastBid, ME);
    });
    
    const spentAmt = wonLots.reduce((sum, l) => sum + l.price, 0);
    
    $('cabWonCount').textContent = wonLots.length;
    $('cabSpentAmt').textContent = fMoney(spentAmt);

    renderCabinetTab();
    openModal('mCabinet');
}

function switchCabinetTab(tab) {
    activeCabinetTab = tab;
    $('cabTabWon').classList.toggle('on', tab === 'won');
    $('cabTabActive').classList.toggle('on', tab === 'active');
    renderCabinetTab();
}

function renderCabinetTab() {
    const content = $('cabTabContent');
    const myFullName = `${ME.first} ${ME.last}`;
    
    if (activeCabinetTab === 'won') {
        const wonLots = lots.filter(l => {
            const done = l.timer <= 0;
            const lastBid = l.bids && l.bids[0];
            return done && lastBid && isBidFromUser(lastBid, ME);
        });

        if (wonLots.length === 0) {
            content.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-trophy text-3xl text-gray-700 mb-2"></i>
                <p class="text-xs font-bold uppercase tracking-widest">${t('noBids')}</p>
            </div>`;
        } else {
            content.innerHTML = wonLots.map(l => `
            <div class="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl">
                <div class="truncate max-w-[200px]">
                    <div class="font-bold text-white truncate">${l.name}</div>
                    <div class="text-[10px] text-gray-500">${t(l.cat)}</div>
                </div>
                <div class="text-right">
                    <div class="font-mono text-green-400 font-bold text-sm">$${l.price.toLocaleString()}</div>
                    <div class="text-[8px] text-green-500 font-black uppercase tracking-widest mt-0.5">${t('golib')}</div>
                </div>
            </div>`).join('');
        }
    } else {
        const activeBids = lots.filter(l => {
            const active = l.timer > 0;
            const bList = l.bids || [];
            const hasPlaced = bList.some(b => isBidFromUser(b, ME));
            return active && hasPlaced;
        });

        if (activeBids.length === 0) {
            content.innerHTML = `
            <div class="text-center py-8 text-gray-500">
                <i class="fas fa-gavel text-3xl text-gray-700 mb-2"></i>
                <p class="text-xs font-bold uppercase tracking-widest">${t('noBids')}</p>
            </div>`;
        } else {
            content.innerHTML = activeBids.map(l => {
                const isLeading = l.bids && l.bids[0] && (l.bids[0].user === myFullName || l.bids[0].user === 'Siz');
                return `
                <div class="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl">
                    <div class="truncate max-w-[200px]">
                        <div class="font-bold text-white truncate">${l.name}</div>
                        <div class="text-[10px] text-gray-500 font-mono">${fTime(l.timer)} left</div>
                    </div>
                    <div class="text-right">
                        <div class="font-mono text-blue-400 font-bold text-sm">$${l.price.toLocaleString()}</div>
                        <div class="text-[8px] uppercase tracking-widest font-black mt-0.5 ${isLeading ? 'text-green-500' : 'text-orange-500'}">
                            ${isLeading ? t('lider').split(' ')[0] : 'Ortda 🥈'}
                        </div>
                    </div>
                </div>`;
            }).join('');
        }
    }
}

// ─────────────────────────────────────────────
// PROFILE MODAL (New personalization system)
// ─────────────────────────────────────────────
function openProfileModal() {
    closeModal('mStats');
    closeModal('mCabinet');
    
    // Set current values
    $('up_first').value = ME.first || '';
    $('up_last').value  = ME.last || '';
    $('up_email').value = ME.email || '';
    
    // Highlight current gradient border
    const curBg = ME.avaBg || 'from-blue-500 to-purple-600';
    document.querySelectorAll('.gradient-option').forEach(el => {
        el.classList.toggle('border-blue-500', el.dataset.gradient === curBg);
        el.classList.toggle('border-transparent', el.dataset.gradient !== curBg);
    });

    openModal('mProfile');
}

function selectProfileGradient(el, grad) {
    document.querySelectorAll('.gradient-option').forEach(x => {
        x.classList.remove('border-blue-500');
        x.classList.add('border-transparent');
    });
    el.classList.remove('border-transparent');
    el.classList.add('border-blue-500');
}

function saveProfile() {
    const first = $('up_first').value.trim();
    const last  = $('up_last').value.trim();
    const email = $('up_email').value.trim();
    
    if (!first || !last || !email) {
        toast("Barcha maydonlarni to'ldiring!", 'error');
        return;
    }

    let selectedGrad = ME.avaBg || 'from-blue-500 to-purple-600';
    const activeGrad = Array.from(document.querySelectorAll('.gradient-option')).find(el => el.classList.contains('border-blue-500'));
    if (activeGrad) {
        selectedGrad = activeGrad.dataset.gradient;
    }

    ME.first = first;
    ME.last  = last;
    ME.email = email;
    ME.avaBg = selectedGrad;
    ME.ava   = (first[0] + (last[0]||'')).toUpperCase();

    // Update active user in localStorage
    const users = getUsers();
    const idx = users.findIndex(u => u.id === ME.id);
    if (idx !== -1) {
        users[idx] = ME;
        saveUsers(users);
    }

    closeModal('mProfile');
    
    // Refresh UI
    $('heroName').textContent  = first.toUpperCase() + '!';
    updateAvatarUI();
    toast("Profil ma'lumotlari muvaffaqiyatli saqlandi!", 'success');

    // Broadcast Tab-to-Tab change
    SYNC.postMessage({
        type: 'PROFILE',
        senderId: ME.id,
        data: { uid: ME.id, user: ME }
    });
}

// ─────────────────────────────────────────────
// ADD LOT
// ─────────────────────────────────────────────
function addLot() {
    const name  = $('nl_name').value.trim();
    const price = parseInt($('nl_price').value);
    const hrs   = parseInt($('nl_hours').value) || 24;
    const cat   = $('nl_cat').value;
    const img   = $('nl_img').value.trim();
    const desc  = $('nl_desc').value.trim();

    if (!name)          { toast("Lot nomini kiriting",'error'); return; }
    if (!price||price<1){ toast("To'g'ri boshlang'ich narx kiriting",'error'); return; }

    const newLot = {
        id: Date.now(), name, cat, price,
        timer: hrs * 3600,
        img: img || `https://picsum.photos/seed/${Date.now()%1000}/800/600`,
        desc: desc || 'Yangi lot',
        bids: []
    };
    lots.unshift(newLot);
    saveLots();
    closeModal('mAddLot');
    renderLots();
    updateStats();
    toast(`"${name}" lot qo'shildi!`,'success');

    ['nl_name','nl_price','nl_hours','nl_img','nl_desc'].forEach(id => $(id).value = '');

    // Sync real-time via channel
    SYNC.postMessage({
        type: 'ADD_LOT',
        senderId: ME ? ME.id : 'anon',
        data: { lots: lots, name: name }
    });
}

// ─────────────────────────────────────────────
// BALANCE
// ─────────────────────────────────────────────
function quickBal(n) { $('balAmt').value = n; }
function addBalance() {
    const n = parseInt($('balAmt').value);
    if (!n || n <= 0) { toast("To'g'ri miqdor kiriting",'error'); return; }
    balance += n;
    
    if (ME) {
        ME.bal = balance;
        const users = getUsers();
        const idx = users.findIndex(u => u.id === ME.id);
        if (idx !== -1) { users[idx].bal = balance; saveUsers(users); }
    }

    $('balAmt').value = '';
    closeModal('mBalance');
    syncBalanceUI();
    
    // Play WOW audio effect & confetti
    AudioEngine.playBid();
    triggerConfetti();

    const textSuccess = curLang === 'uz' ? `qo'shildi! Yangi balans:` : (curLang === 'ru' ? 'успешно добавлен! Новый баланс:' : 'added! New balance:');
    toast(`💰 $${n.toLocaleString()} ${textSuccess} $${balance.toLocaleString()}`,'success',5000);

    // Sync tabs real-time
    SYNC.postMessage({
        type: 'BALANCE',
        senderId: ME ? ME.id : 'anon',
        data: { uid: ME.id, balance: balance }
    });
}

// ─────────────────────────────────────────────
// ADMIN MODULE PANEL LOGIC
// ─────────────────────────────────────────────
let activeAdminTab = 'users';

function switchAdminTab(tab) {
    activeAdminTab = tab;
    const tabs = ['users','lots','stats','settings'];
    tabs.forEach(t => {
        const btn = $(`admTab${t.charAt(0).toUpperCase()+t.slice(1)}`);
        const content = $(`admContent${t.charAt(0).toUpperCase()+t.slice(1)}`);
        if (btn) btn.classList.toggle('on', t === tab);
        if (content) content.classList.toggle('hidden', t !== tab);
    });
    renderAdminPanel();
}

function renderAdminPanel() {
    if (activeAdminTab === 'users') {
        _renderAdminUsers();
    } else if (activeAdminTab === 'lots') {
        _renderAdminLots();
    } else if (activeAdminTab === 'stats') {
        _renderAdminStats();
    } else if (activeAdminTab === 'settings') {
        _renderAdminSettings();
    }
}

function _renderAdminUsers() {
    const users = getUsers();
    const search = ($('admUserSearch') || {}).value || '';
    const filter = ($('admUserFilter') || {}).value || 'all';

    let filtered = users.filter(u => {
        const matchSearch = !search || 
            (u.first+' '+u.last).toLowerCase().includes(search.toLowerCase()) ||
            u.username.toLowerCase().includes(search.toLowerCase()) ||
            (u.email||'').toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'all' || u.role === filter;
        return matchSearch && matchFilter;
    });

    // Summary cards
    const sumEl = $('admUsersSummary');
    if (sumEl) {
        const totalUsers = users.length;
        const adminCount = users.filter(u => u.role === 'admin').length;
        const totalBal = users.reduce((s,u) => s + (u.bal||0), 0);
        sumEl.innerHTML = `
            <div class="adm-stat-card">
                <div class="text-xl font-black text-blue-500 font-mono">${totalUsers}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Jami</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-xl font-black text-red-500 font-mono">${adminCount}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Adminlar</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-lg font-black text-green-500 font-mono">${fMoney(totalBal)}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Umumiy Balans</div>
            </div>`;
    }

    const tbody = $('admUsersTableBody');
    if (!tbody) return;
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="text-center text-gray-500 py-8 text-xs">Foydalanuvchi topilmadi</td></tr>`;
        return;
    }
    tbody.innerHTML = filtered.map(u => {
        const isSelf = ME && u.id === ME.id;
        const uBal = u.bal !== undefined ? u.bal : 2500000;
        const userAliases = getUserAliases(u);
        const userBids = lots.reduce((acc, l) => acc + (l.bids || []).filter(b => {
            if (b.uid) return b.uid === u.id;
            return userAliases.includes((b.user || '').toLowerCase());
        }).length, 0);
        const created = u.created ? new Date(u.created).toLocaleDateString('uz-UZ') : '—';
        return `
        <tr>
            <td>
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-xl bg-gradient-to-br ${u.avaBg||'from-blue-500 to-purple-600'} flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">${u.ava||'U'}</div>
                    <div>
                        <div class="font-bold" style="color:inherit">${u.first} ${u.last}</div>
                        <div class="text-gray-500 text-xs">@${u.username}</div>
                    </div>
                </div>
            </td>
            <td>
                <span class="px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${u.role==='admin'?'bg-red-500/15 text-red-500':'bg-blue-500/10 text-blue-400'}">
                    ${u.role==='admin'?'⭐ Admin':'👤 User'}
                </span>
            </td>
            <td><span class="font-mono text-green-500 font-bold">${fMoney(uBal)}</span></td>
            <td>
                <span class="text-xs text-gray-500">${userBids} taklif</span>
                <div class="text-[9px] text-gray-600">${created}</div>
            </td>
            <td>
                ${isSelf ? '<span class="text-xs text-gray-600 italic">Siz</span>' : `
                <div class="flex items-center gap-1.5 flex-wrap">
                    <input type="number" id="admBal_${u.id}" placeholder="Yangi balans" class="c-input text-xs py-1.5 px-2 w-24" style="padding:6px 10px;border-radius:8px;">
                    <button onclick="adminEditBalance('${u.id}')" class="px-2 py-1.5 rounded-lg bg-blue-600 text-[9px] font-black uppercase text-white hover:bg-blue-500 transition whitespace-nowrap">
                        <i class="fas fa-check mr-0.5"></i>Set
                    </button>
                    ${u.role!=='admin'?`<button onclick="adminToggleRole('${u.id}')" class="px-2 py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 text-[9px] font-black uppercase hover:bg-purple-600/30 transition whitespace-nowrap">
                        <i class="fas fa-user-shield mr-0.5"></i>Promote
                    </button>`:''}
                    <button onclick="adminDeleteUser('${u.id}')" class="px-2 py-1.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 text-[9px] font-black uppercase hover:bg-red-600/30 transition">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>`}
            </td>
        </tr>`;
    }).join('');
}

function _renderAdminLots() {
    const search = ($('admLotSearch') || {}).value || '';
    const filter = ($('admLotFilter') || {}).value || 'all';

    let filtered = lots.filter(l => {
        const done = l.timer <= 0;
        const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'all' || (filter === 'active' && !done) || (filter === 'ended' && done);
        return matchSearch && matchFilter;
    });

    // Summary cards
    const sumEl = $('admLotsSummary');
    if (sumEl) {
        const activeLots = lots.filter(l => l.timer > 0).length;
        const endedLots = lots.filter(l => l.timer <= 0).length;
        const totalBids = lots.reduce((s,l) => s + (l.bids||[]).length, 0);
        sumEl.innerHTML = `
            <div class="adm-stat-card">
                <div class="text-xl font-black text-blue-500 font-mono">${lots.length}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Jami Lotlar</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-xl font-black text-green-500 font-mono">${activeLots}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Faol</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-xl font-black text-yellow-500 font-mono">${totalBids}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Jami Takliflar</div>
            </div>`;
    }

    const tbody = $('admLotsTableBody');
    if (!tbody) return;
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-gray-500 py-8 text-xs">Lot topilmadi</td></tr>`;
        return;
    }
    tbody.innerHTML = filtered.map(l => {
        const done = l.timer <= 0;
        const cat = CATS[l.cat] || { label: l.cat, icon:'fa-tag', cls:'text-gray-400' };
        const bidCount = (l.bids||[]).length;
        const topBid = bidCount > 0 ? l.bids[bidCount-1] : null;
        return `
        <tr>
            <td>
                <div class="font-bold truncate max-w-[150px]" style="color:inherit">${l.name}</div>
                <div class="text-gray-500 text-[10px] mt-0.5">${done ? '00:00:00' : fTime(l.timer)}</div>
            </td>
            <td>
                <span class="cat-b text-[9px] ${cat.cls}">
                    <i class="fas ${cat.icon}"></i> ${cat.label}
                </span>
            </td>
            <td><span class="font-mono text-blue-400 font-bold text-sm">${fMoney(l.price)}</span></td>
            <td>
                <span class="text-sm font-black ${bidCount>0?'text-green-400':'text-gray-600'}">${bidCount}</span>
                ${topBid ? `<div class="text-[9px] text-gray-500 mt-0.5">${topBid.user}</div>` : ''}
            </td>
            <td>
                ${done
                    ? '<span class="px-2 py-1 rounded-lg bg-red-500/15 text-[9px] font-black text-red-500 uppercase">Yakunlandi</span>'
                    : '<span class="px-2 py-1 rounded-lg bg-green-500/15 text-[9px] font-black text-green-500 uppercase">Faol</span>'}
            </td>
            <td>
                <div class="flex gap-1.5">
                    ${!done ? `<button onclick="adminForceEndLot(${l.id})" class="px-2.5 py-1.5 rounded-lg bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-[9px] font-black uppercase hover:bg-yellow-600/30 transition">
                        <i class="fas fa-stop-circle mr-0.5"></i>Tugatish
                    </button>` : ''}
                    <button onclick="adminDeleteLot(${l.id})" class="px-2.5 py-1.5 rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 text-[9px] font-black uppercase hover:bg-red-600/30 transition">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>`;
    }).join('');
}

function _renderAdminStats() {
    const users = getUsers();
    const totalBids = lots.reduce((s,l) => s + (l.bids||[]).length, 0);
    const activeLots = lots.filter(l => l.timer > 0).length;
    const endedLots = lots.filter(l => l.timer <= 0).length;
    const totalMoney = lots.reduce((s,l) => s + l.price, 0);

    // Top stat cards
    const statsEl = $('admStatsCards');
    if (statsEl) {
        statsEl.innerHTML = `
            <div class="adm-stat-card">
                <div class="text-2xl font-black text-blue-500 font-mono">${lots.length}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Jami Lotlar</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-2xl font-black text-green-500 font-mono">${activeLots}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Faol</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-2xl font-black text-yellow-500 font-mono">${totalBids}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Jami Takliflar</div>
            </div>
            <div class="adm-stat-card">
                <div class="text-xl font-black text-purple-400 font-mono">${users.length}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">Foydalanuvchilar</div>
            </div>`;
    }

    // Top 5 expensive lots
    const topLotsEl = $('admTopLots');
    if (topLotsEl) {
        const sorted = [...lots].sort((a,b) => b.price - a.price).slice(0,5);
        topLotsEl.innerHTML = sorted.map((l,i) => `
            <div class="flex items-center justify-between py-2 border-b border-white/5" style="border-color:rgba(0,0,0,0.05)">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-black text-gray-600 w-4">${i+1}</span>
                    <div>
                        <div class="text-xs font-bold" style="color:inherit">${l.name.slice(0,28)}${l.name.length>28?'…':''}</div>
                        <div class="text-[9px] text-gray-500">${(l.bids||[]).length} taklif</div>
                    </div>
                </div>
                <span class="text-sm font-black text-blue-400 font-mono">${fMoney(l.price)}</span>
            </div>`).join('');
    }

    // Top active users (by bid count)
    const topUsersEl = $('admTopUsers');
    if (topUsersEl) {
        const userBidMap = {};
        lots.forEach(l => (l.bids||[]).forEach(b => {
            userBidMap[b.user] = (userBidMap[b.user]||0) + 1;
        }));
        const topU = Object.entries(userBidMap).sort((a,b) => b[1]-a[1]).slice(0,5);
        topUsersEl.innerHTML = topU.length === 0
            ? '<p class="text-xs text-gray-600 py-4 text-center">Hali taklif yo\'q</p>'
            : topU.map(([uname, cnt], i) => `
            <div class="flex items-center justify-between py-2 border-b border-white/5">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-black text-gray-600 w-4">${i+1}</span>
                    <div class="text-xs font-bold" style="color:inherit">@${uname}</div>
                </div>
                <span class="text-sm font-black text-green-400 font-mono">${cnt} taklif</span>
            </div>`).join('');
    }

    // Category distribution
    const catEl = $('admCatStats');
    if (catEl) {
        catEl.innerHTML = Object.entries(CATS).map(([key, cat]) => {
            const count = lots.filter(l => l.cat === key).length;
            const pct = lots.length > 0 ? Math.round(count/lots.length*100) : 0;
            return `
            <div class="adm-stat-card text-left">
                <div class="text-lg font-black font-mono ${cat.cls.split(' ')[0]}">${count}</div>
                <div class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">${cat.label}</div>
                <div class="mt-2 h-1.5 rounded-full bg-white/10">
                    <div class="h-full rounded-full ${cat.cls.split(' ')[0].replace('text-','bg-')}" style="width:${pct}%"></div>
                </div>
            </div>`;
        }).join('');
    }
}

function _renderAdminSettings() {
    // System info
    const sysEl = $('admSysInfo');
    if (sysEl) {
        const users = getUsers();
        const totalStorage = JSON.stringify(localStorage).length;
        sysEl.innerHTML = `
            <div class="adm-stat-card text-left">
                <div class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Versiya</div>
                <div class="text-sm font-black mt-1" style="color:inherit">MathOyin v2.0</div>
            </div>
            <div class="adm-stat-card text-left">
                <div class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Xotira</div>
                <div class="text-sm font-black mt-1 text-blue-400">${(totalStorage/1024).toFixed(1)} KB</div>
            </div>
            <div class="adm-stat-card text-left">
                <div class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Foydalanuvchilar</div>
                <div class="text-sm font-black mt-1 text-green-400">${users.length} ta</div>
            </div>
            <div class="adm-stat-card text-left">
                <div class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Lotlar</div>
                <div class="text-sm font-black mt-1 text-yellow-400">${lots.length} ta</div>
            </div>`;
    }
    // Sync bot toggle state
    const botBtn = $('admBotToggle');
    if (botBtn) {
        const botRunning = !!botInterval;
        botBtn.classList.toggle('on', botRunning);
    }
}

function adminEditBalance(uid) {
    const inp = $(`admBal_${uid}`);
    const amt = parseInt(inp.value);
    if (!amt || amt < 0) { toast("To'g'ri miqdor kiriting", 'error'); return; }

    const users = getUsers();
    const idx = users.findIndex(u => u.id === uid);
    if (idx !== -1) {
        users[idx].bal = amt;
        saveUsers(users);
        if (ME && ME.id === uid) {
            ME.bal = amt;
            balance = amt;
            syncBalanceUI();
        }
        SYNC.postMessage({ type: 'ADMIN_RESET', senderId: ME ? ME.id : 'admin', data: { uid, balance: amt } });
        toast(`✅ Foydalanuvchi balansi ${fMoney(amt)} qilib belgilandi!`, 'success');
        renderAdminPanel();
    }
}

function adminToggleRole(uid) {
    if (ME && uid === ME.id) {
        toast("O'zingizning rolni o'zgartira olmaysiz", 'warning');
        return;
    }
    const users = getUsers();
    const idx = users.findIndex(u => u.id === uid);
    if (idx !== -1) {
        users[idx].role = users[idx].role === 'admin' ? 'user' : 'admin';
        saveUsers(users);
        toast(`⭐ Foydalanuvchi roli yangilandi: ${users[idx].role}`, 'info');
        renderAdminPanel();
    }
}

function adminDeleteUser(uid) {
    if (ME && uid === ME.id) {
        toast("O'zingizni o'chira olmaysiz", 'warning');
        return;
    }
    if (!confirm('Bu foydalanuvchini o\'chirishni tasdiqlaysizmi?')) return;
    let users = getUsers();
    const u = users.find(u => u.id === uid);
    if (!u) return;
    users = users.filter(u => u.id !== uid);
    saveUsers(users);
    toast(`🗑️ "${u.first} ${u.last}" o'chirildi`, 'warning');
    renderAdminPanel();
}

function adminForceEndLot(id) {
    const lot = lots.find(l => l.id === id);
    if (lot) {
        lot.timer = 0;
        saveLots();
        SYNC.postMessage({ type: 'LOTS_UPDATED', senderId: ME.id, data: { lots } });
        toast(`⏹ "${lot.name}" auksioni majburan yakunlandi!`, 'success');
        renderLots();
        updateStats();
        renderAdminPanel();
    }
}

function adminDeleteLot(id) {
    const idx = lots.findIndex(l => l.id === id);
    if (idx !== -1) {
        const name = lots[idx].name;
        lots.splice(idx, 1);
        saveLots();
        SYNC.postMessage({ type: 'LOTS_UPDATED', senderId: ME.id, data: { lots } });
        toast(`🗑️ "${name}" loti o'chirildi!`, 'success');
        renderLots();
        updateStats();
        renderAdminPanel();
    }
}

function adminResetLots() {
    if (!confirm('Barcha lotlarni seed ma\'lumotlari bilan tiklashni tasdiqlaysizmi?')) return;
    lots = JSON.parse(JSON.stringify(SEED_LOTS));
    saveLots();
    SYNC.postMessage({ type: 'LOTS_UPDATED', senderId: ME.id, data: { lots } });
    renderLots();
    updateStats();
    renderAdminPanel();
    toast('🔄 Barcha lotlar tikLandi!', 'success');
}

function adminClearAll() {
    if (!confirm('DIQQAT! Barcha foydalanuvchilar va lotlar o\'chadi. Davom etasizmi?')) return;
    lots = JSON.parse(JSON.stringify(SEED_LOTS));
    saveLots();
    // Keep only admin
    const admUser = getUsers().find(u => u.role === 'admin');
    saveUsers(admUser ? [admUser] : []);
    renderLots();
    updateStats();
    renderAdminPanel();
    toast('🗑️ Barcha ma\'lumotlar tozalandi!', 'warning', 6000);
}

function toggleAdminBot() {
    if (botInterval) {
        clearInterval(botInterval);
        botInterval = null;
        toast('🤖 Bot simulyatori to\'xtatildi', 'warning');
    } else {
        startBotSimulator();
        toast('🤖 Bot simulyatori ishga tushirildi', 'success');
    }
    const btn = $('admBotToggle');
    if (btn) btn.classList.toggle('on', !!botInterval);
}

// ─────────────────────────────────────────────
// THREE.JS GRAPHICS ENGINES (CORS-friendly Procedural setups)
// ─────────────────────────────────────────────

// 1. Hero floating diamond background
let heroScene, heroCamera, heroRenderer, heroMesh;
function initHero3D() {
    const canvas = $('heroCanvas3d');
    if (!canvas) return;
    
    // Ensure Three.js is loaded
    if (typeof THREE === 'undefined') {
        console.warn('Three.js CDN not available. Skipping 3D Hero background.');
        return;
    }

    const rect = canvas.parentElement.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || 450;
    
    heroScene = new THREE.Scene();
    heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    heroCamera.position.z = 8;
    
    heroRenderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    heroRenderer.setSize(width, height);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Procedural GOLD Diamond (faceted Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({
        color: 0xd4af37, // Gold
        shininess: 95,
        specular: 0xffffff,
        flatShading: true
    });
    
    heroMesh = new THREE.Mesh(geometry, material);
    heroScene.add(heroMesh);
    
    // Wireframe diamond outline slightly larger
    const wireframeGeom = new THREE.IcosahedronGeometry(2.03, 0);
    const wireframeMat = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        wireframe: true,
        transparent: true,
        opacity: 0.22
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeom, wireframeMat);
    heroMesh.add(wireframeMesh);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    heroScene.add(ambientLight);
    
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight1.position.set(5, 5, 5);
    heroScene.add(dirLight1);
    
    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 0.65); // Vibrant blue ambient highlight
    dirLight2.position.set(-5, -5, 5);
    heroScene.add(dirLight2);
    
    // Interpolated mouse hover controls
    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    });
    
    function animate() {
        requestAnimationFrame(animate);
        if (heroMesh) {
            heroMesh.rotation.y += 0.005;
            heroMesh.rotation.x += 0.002;
            
            // Tilting mechanics responsive to user cursor
            heroMesh.rotation.y += (mouseX * 0.4 - heroMesh.rotation.y) * 0.04;
            heroMesh.rotation.x += (mouseY * 0.4 - heroMesh.rotation.x) * 0.04;
        }
        heroRenderer.render(heroScene, heroCamera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        if (!heroCamera || !heroRenderer) return;
        const w = canvas.parentElement.clientWidth;
        const h = canvas.parentElement.clientHeight;
        heroCamera.aspect = w / h;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(w, h);
    });
}

// 2. Procedural interactive Lot 3D Previews
let previewScene, previewCamera, previewRenderer, previewMesh, previewAnimId;

function open3dPreview(id, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    
    if (typeof THREE === 'undefined') {
        toast("Three.js kutubxonasi yuklanmagan. 3D rejim faollashmadi.", "warning");
        return;
    }

    const lot = lots.find(l => l.id === id);
    if (!lot) return;

    $('p3dTitle').innerHTML = `${lot.name} — <span class="text-blue-500">3D Preview</span>`;
    $('p3dSubtitle').textContent = t(lot.cat);
    
    if (curLang === 'uz') {
        $('p3dDesc').textContent = `Ushbu 3D model "${lot.name}" lotining auksiondagi o'ziga xosligini ko'rsatish uchun proceduraviy ravishda yaratildi. Tizim ishlashi mutlaqo xavfsiz va cheklovlarisiz ishlaydi.`;
    } else if (curLang === 'ru') {
        $('p3dDesc').textContent = `Эта 3D-модель была создана процедурно, чтобы подчеркнуть уникальность лота "${lot.name}" на аукционе. Работа системы абсолютно безопасна и работает без ограничений.`;
    } else {
        $('p3dDesc').textContent = `This 3D model is procedurally generated to highlight the custom premium attributes of the lot "${lot.name}" under auction. Completely zero-latency and CORS-safe.`;
    }

    openModal('m3dPreview');
    
    setTimeout(() => {
        initPreview3D(lot.cat);
    }, 100);
}

function initPreview3D(category) {
    const container = $('previewCanvas3d');
    if (!container) return;
    
    container.innerHTML = '';
    if (previewAnimId) {
        cancelAnimationFrame(previewAnimId);
        previewAnimId = null;
    }

    const width = container.clientWidth || 450;
    const height = 280;

    previewScene = new THREE.Scene();
    previewCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    previewCamera.position.z = 6;

    previewRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    previewRenderer.setSize(width, height);
    previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(previewRenderer.domElement);

    let geometry;
    let color = 0xd4af37; // gold
    let wireframe = false;

    if (category === 'transport') {
        // Torus knot for sleek aerodynamic structure
        geometry = new THREE.TorusKnotGeometry(0.75, 0.25, 100, 16);
        color = 0xff3b30; // Sporty red/gold blend
    } else if (category === 'realestate') {
        // Architectural nested double wireframe cube
        geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
        wireframe = true;
        color = 0x007aff; // Architectural corporate blue
    } else if (category === 'jewelry') {
        // Diamond faceted Octahedron
        geometry = new THREE.OctahedronGeometry(1.3, 0);
        color = 0x5ac8fa; // Shiny diamond cyan
    } else if (category === 'tech') {
        // High-tech Dodecahedron
        geometry = new THREE.DodecahedronGeometry(1.1, 0);
        color = 0x30d158; // Digital green
    } else {
        // Art: Nested golden ring systems
        geometry = new THREE.TorusGeometry(0.9, 0.22, 16, 100);
        color = 0xaf52de; // Artistic purple
    }

    const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        specular: 0xffffff,
        flatShading: true,
        wireframe: wireframe
    });

    previewMesh = new THREE.Mesh(geometry, material);
    previewScene.add(previewMesh);

    // Add nested secondary wireframe if not already wireframed
    if (!wireframe) {
        const wireGeom = geometry.clone();
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const wireMesh = new THREE.Mesh(wireGeom, wireMat);
        previewMesh.add(wireMesh);
    } else {
        // glowing core sphere inside wireframe cube
        const coreGeom = new THREE.SphereGeometry(0.5, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
        const coreMesh = new THREE.Mesh(coreGeom, coreMat);
        previewMesh.add(coreMesh);
    }

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    previewScene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dir1.position.set(3, 3, 3);
    previewScene.add(dir1);

    const dir2 = new THREE.DirectionalLight(color, 0.5);
    dir2.position.set(-3, -3, 3);
    previewScene.add(dir2);

    // Drag to rotate controls mathematically
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleStart = (x, y) => {
        isDragging = true;
        previousMousePosition = { x, y };
    };

    const handleMove = (x, y) => {
        if (!isDragging || !previewMesh) return;
        const deltaMove = {
            x: x - previousMousePosition.x,
            y: y - previousMousePosition.y
        };

        previewMesh.rotation.y += deltaMove.x * 0.007;
        previewMesh.rotation.x += deltaMove.y * 0.007;

        previousMousePosition = { x, y };
    };

    const handleEnd = () => { isDragging = false; };

    const handlers = {
        down: (e) => handleStart(e.offsetX, e.offsetY),
        move: (e) => handleMove(e.offsetX, e.offsetY),
        up: handleEnd,
        touchStart: (e) => {
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            handleStart(touch.clientX - rect.left, touch.clientY - rect.top);
        },
        touchMove: (e) => {
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            handleMove(touch.clientX - rect.left, touch.clientY - rect.top);
        },
        touchEnd: handleEnd
    };

    if (container._previewHandlers) {
        container.removeEventListener('mousedown', container._previewHandlers.down);
        container.removeEventListener('mousemove', container._previewHandlers.move);
        container.removeEventListener('touchstart', container._previewHandlers.touchStart);
        container.removeEventListener('touchmove', container._previewHandlers.touchMove);
        container.removeEventListener('touchend', container._previewHandlers.touchEnd);
        window.removeEventListener('mouseup', container._previewHandlers.up);
    }

    container._previewHandlers = handlers;
    container.addEventListener('mousedown', handlers.down);
    container.addEventListener('mousemove', handlers.move);
    window.addEventListener('mouseup', handlers.up);

    // Mobile touch support
    container.addEventListener('touchstart', handlers.touchStart);
    container.addEventListener('touchmove', handlers.touchMove);
    container.addEventListener('touchend', handlers.touchEnd);

    function render() {
        previewAnimId = requestAnimationFrame(render);
        if (previewMesh && !isDragging) {
            previewMesh.rotation.y += 0.01;
            previewMesh.rotation.x += 0.005;
        }
        previewRenderer.render(previewScene, previewCamera);
    }
    render();
}

function close3dPreview() {
    closeModal('m3dPreview');
    if (previewAnimId) {
        cancelAnimationFrame(previewAnimId);
        previewAnimId = null;
    }
    if (previewRenderer) {
        previewRenderer.dispose();
        previewRenderer = null;
    }
    const container = $('previewCanvas3d');
    if (container) {
        container.innerHTML = '';
        if (container._previewHandlers) {
            container.removeEventListener('mousedown', container._previewHandlers.down);
            container.removeEventListener('mousemove', container._previewHandlers.move);
            container.removeEventListener('touchstart', container._previewHandlers.touchStart);
            container.removeEventListener('touchmove', container._previewHandlers.touchMove);
            container.removeEventListener('touchend', container._previewHandlers.touchEnd);
            window.removeEventListener('mouseup', container._previewHandlers.up);
            container._previewHandlers = null;
        }
    }
}

// ─────────────────────────────────────────────
// REAL-TIME TAB-TO-TAB BROADCAST CHANNEL LOGIC
// ─────────────────────────────────────────────
SYNC.onmessage = (event) => {
    const { type, data, senderId } = event.data;
    
    // Skip if it is from current logged in user to avoid duplicate calls
    if (ME && senderId === ME.id) return;

    if (type === 'BID') {
        lots = data.lots;
        localStorage.setItem(SK.LOTS, JSON.stringify(lots));
        
        // Sync our local user state if changed
        if (ME) {
            const users = getUsers();
            const syncedMe = users.find(u => u.id === ME.id);
            if (syncedMe) {
                ME = syncedMe;
                balance = ME.bal;
                syncBalanceUI();
            }
        }
        
        renderLots();
        updateStats();
        
        // Play audio & dynamic notifications
        AudioEngine.playBid();
        
        const bidText = curLang === 'uz' ? 'tashladi!' : (curLang === 'ru' ? 'сделал ставку!' : 'placed a bid!');
        toast(`🔔 Real-Time: ${data.bidder} $${data.amount.toLocaleString()} ${bidText}`, 'info', 5000);
        triggerConfetti();
    } 
    else if (type === 'BALANCE') {
        if (ME && ME.id === data.uid) {
            balance = data.balance;
            ME.bal = balance;
            syncBalanceUI();
            renderLots();
            updateStats();
            AudioEngine.playBid();
            
            const balText = curLang === 'uz' ? 'Balansingiz yangilandi!' : (curLang === 'ru' ? 'Ваш баланс обновлен!' : 'Your balance was updated!');
            toast(`💰 Real-Time: ${balText} Total: $${balance.toLocaleString()}`, 'success');
        }
    }
    else if (type === 'PROFILE') {
        if (ME && ME.id === data.uid) {
            ME = data.user;
            balance = ME.bal;
            syncBalanceUI();
            updateAvatarUI();
            $('heroName').textContent = ME.first.toUpperCase() + '!';
            
            const profText = curLang === 'uz' ? 'Profil sinxronizatsiya qilindi!' : (curLang === 'ru' ? 'Профиль синхронизирован!' : 'Profile synchronized!');
            toast(`👤 Real-Time: ${profText}`, 'success');
        }
    }
    else if (type === 'ADD_LOT') {
        lots = data.lots;
        renderLots();
        updateStats();
        
        const lotText = curLang === 'uz' ? "yangi lot qo'shildi:" : (curLang === 'ru' ? 'добавлен новый лот:' : 'new lot was added:');
        toast(`🆕 Real-Time: ${lotText} ${data.name}`, 'success');
    }
    else if (type === 'ADMIN_RESET') {
        if (ME && ME.id === data.uid) {
            balance = data.balance;
            ME.bal = balance;
            syncBalanceUI();
            
            const admText = curLang === 'uz' ? 'Admin balansingizni tahrirladi!' : (curLang === 'ru' ? 'Админ изменил ваш баланс!' : 'Admin adjusted your balance!');
            toast(`⚠️ ${admText} New: $${balance.toLocaleString()}`, 'warning', 8000);
        }
    }
    else if (type === 'LOTS_UPDATED') {
        lots = data.lots;
        renderLots();
        updateStats();
    }
};

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────
function toggleMobMenu() {
    mobOpen = !mobOpen;
    $('mobileMenu').classList.toggle('open', mobOpen);
    $('burgerIco').className = `fas ${mobOpen ? 'fa-times' : 'fa-bars'} text-gray-400 text-sm`;
    document.body.style.overflow = mobOpen ? 'hidden' : 'auto';
}
function closeMobMenu() {
    mobOpen = false;
    $('mobileMenu').classList.remove('open');
    $('burgerIco').className = 'fas fa-bars text-gray-400 text-sm';
    document.body.style.overflow = 'auto';
}

// ─────────────────────────────────────────────
// BOOTSTRAP / INITIALIZATION WINDOW HANDLER
// ─────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    seedAdmin();
    initTheme();

    const raw = sessionStorage.getItem(SK.SESSION);
    if (raw) {
        try {
            const { uid: uid_ } = JSON.parse(raw);
            const user = getUsers().find(u => u.id === uid_);
            if (user) { ME = user; showApp(); return; }
        } catch {}
    }

    $('authOverlay').style.display = 'flex';
});