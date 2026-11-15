// 1. Объект с переводами (добавляем в самое начало файла)
const translations = {
    ru: {
        modeAI: "🤖 Режим: Против ИИ",
        modeRomantic: "💖 Режим: Вечерний романтический",
        btnDay: "☀️ День",

        btnEvening: "🌙 Романтический вечер",
        wishTitle: "💖 Игра на желание 💖",
        wishSubtitle: "Выбери или напиши желание, которое исполнит проигравший:",
        wish1: "Помыть посуду 🍽️",
        wish2: "Сделать массаж 💆‍♂️",
        wish3: "Приготовить кофе ☕",
        wishPlaceholder: "Или впиши своё желание...",
        wishConfirm: "Подтвердить",
        wishEmptyAlert: "⚠️ Сначала выбери или напиши желание!",
        onTheLine: "На кону:",
        balance: "💰 Твой баланс: ",
        plane: "✈️ ВЖУХ! Самолёт скинул мину в строку №",
        shopTitle: "🛒 МАГАЗИН ДОП. ОПЦИЙ",
        itemShield: "🛡 Укрытие",
        itemScanner: "🚩 Сканер",
        shieldActive: "🛡️ Укрытие активировано на этот ход!",
        scannerActive: "🚩 РАЗВЕДКА: Бомба в строке №{row}, столбце №{col}!",
        adTitle: "🎬 Рекламная пауза",
        adDesc: "Поддержите проект просмотром рекламы",
        adWait: "Закрыть через {sec} сек...",
        adClose: "Продолжить ▶",
        winDay: "🎉 ФАНТАСТИЧЕСКАЯ ПОБЕДА! Получено +1.00$",
        winAI: "🤖 Робот-ИИ собрал 3 в ряд и выиграл.",
        romanticAlert: "🤖💖 Победа! Исполняется желание:"


    },
    uk: {
        modeAI: "🤖 Режим: Проти ШІ",
        modeRomantic: "💖 Режим: Вечірній романтичний",
        btnDay: "☀️ День",
        btnEvening: "🌙 Романтичний вечір",
        wishTitle: "💖 Гра на бажання 💖",
        wishSubtitle: "Обери або напиши бажання, яке виконає переможений:",
        wish1: "Помити посуд 🍽️",
        wish2: "Зробити масаж 💆‍♂️",
        wish3: "Приготувати каву ☕",
        wishPlaceholder: "Або впиши своє бажання...",
        wishConfirm: "Підтвердити",
        wishEmptyAlert: "⚠️ Спочатку обери або напиши бажання!",
        onTheLine: "На кону:",
        balance: "💰 Твій баланс: ",
        plane: "✈️ ВЖУХ! Літак скинув міну в рядок №",
        shopTitle: "🛒 МАГАЗИН ДОД. ОПЦІЙ",
        itemShield: "🛡 Укриття",
        itemScanner: "🚩 Сканер",
        shieldActive: "🛡️ Укриття активовано на цей хід!",
        scannerActive: "🚩 РОЗВІДКА: Бомба в рядку №{row}, стовпці №{col}!",
        adTitle: "🎬 Рекламна пауза",
        adDesc: "Підтримайте проєкт переглядом реклами",
        adWait: "Закрити через {sec} сек...",
        adClose: "Продовжити ▶",
        winDay: "🎉 ФАНТАСТИЧНА ПЕРЕМОГА! Отримано +1.00$",
        winAI: "🤖 Робот-ШІ зібрав 3 в ряд і виграв.",
        romanticAlert: "🤖💖 Перемога! Виконується бажання:"

    },
    en: {
        modeAI: "🤖 Mode: Against AI",
        modeRomantic: "💖 Mode: Evening Romantic",
        btnDay: "☀️ Day",
        btnEvening: "🌙 Romantic Evening",
        wishTitle: "💖 Wish Game 💖",
        wishSubtitle: "Choose or write a wish for the loser to fulfill:",
        wish1: "Wash the dishes 🍽️",
        wish2: "Give a massage 💆‍♂️",
        wish3: "Make coffee ☕",
        wishPlaceholder: "Or type your own wish...",
        wishConfirm: "Confirm",
        wishEmptyAlert: "⚠️ Please choose or enter a wish first!",
        onTheLine: "On the line:",
        balance: "💰 Your balance: ",
        plane: "✈️ WHOOSH! The airplane dropped a mine in row №",
        shopTitle: "🛒 BONUS SHOP",
        itemShield: "🛡 Shelter",
        itemScanner: "🚩 Scanner",
        shieldActive: "🛡️ Shelter activated for this turn!",
        scannerActive: "🚩 RECON: Bomb in row №{row}, col №{col}!",
        adTitle: "🎬 Ad Break",
        adDesc: "Support the project by watching an ad",
        adWait: "Close in {sec} sec...",
        adClose: "Continue ▶",
        winDay: "🎉 FANTASTIC VICTORY! Received +1.00$",
        winAI: "🤖 AI Robot got 3 in a row and won.",
        romanticAlert: "🤖💖 Victory! Wish to fulfill:"

    },
    de: {
        modeAI: "🤖 Modus: Gegen KI",
        modeRomantic: "💖 Modus: Romantischer Abend",
        btnDay: "☀️ Tag",
        btnEvening: "🌙 Romantischer Abend",
        wishTitle: "💖 Wunschspiel 💖",
        wishSubtitle: "Wähle oder schreibe einen Wunsch, den der Verlierer erfüllt:",
        wish1: "Geschirr spülen 🍽️",
        wish2: "Massage geben 💆‍♂️",
        wish3: "Kaffee kochen ☕",
        wishPlaceholder: "Oder eigenen Wunsch eingeben...",
        wishConfirm: "Bestätigen",
        wishEmptyAlert: "⚠️ Bitte wähle oder schreibe zuerst einen Wunsch!",
        onTheLine: "Auf dem Spiel:",
        balance: "💰 Ihr Guthaben: ",
        plane: "✈️ WUSCH! Das Flugzeug hat eine Mine in Zeile № abgeworfen ",
        shopTitle: "🛒 ZUSATZSHOP",
        itemShield: "🛡 Schutz",
        itemScanner: "🚩 Scanner",
        shieldActive: "🛡️ Schutz für diesen Zug aktiviert!",
        scannerActive: "🚩 AUFKLÄRUNG: Bombe in Zeile №{row}, Spalte №{col}!",
        adTitle: "🎬 Werbepause",
        adDesc: "Unterstütze das Projekt durch Werbung",
        adWait: "Schließen in {sec} Sek...",
        adClose: "Weiter ▶",
        winDay: "🎉 FANTASTISCHER SIEG! +1.00$ erhalten",
        winAI: "🤖 KI-Roboter hat 3 in einer Reihe und gewinnt.",
        romanticAlert: "🤖💖 Sieg! Wunsch wird erfüllt:"

    },
    zh: {
        modeAI: "🤖 模式: 对战人工智能",
        modeRomantic: "💖 模式: 浪漫晚安",
        btnDay: "☀️ 白天模式",
        btnEvening: "🌙 浪漫夜晚",
        wishTitle: "💖 愿望游戏 💖",
        wishSubtitle: "选择或写下输家要实现的愿望：",
        wish1: "洗碗 🍽️",
        wish2: "做按摩 💆‍♂️",
        wish3: "煮咖啡 ☕",
        wishPlaceholder: "或者输入你自己的愿望...",
        wishConfirm: "确认",
        wishEmptyAlert: "⚠️ 请先选择或输入一个愿望！",
        onTheLine: "赌注：",
        balance: "💰 你的余额: ",
        plane: "✈️ 嗖！ 飞机在第几行投下了地雷 №",
        shopTitle: "🛒 特色商店",
        itemShield: "🛡 掩体",
        itemScanner: "🚩 扫描仪",
        shieldActive: "🛡️ 本回合已激活掩体保护！",
        scannerActive: "🚩 侦察：炸弹在第 {row} 行，第 {col} 列！",
        adTitle: "🎬 广告时间",
        adDesc: "观看广告支持本项目",
        adWait: "{sec} 秒后可关闭...",
        adClose: "继续 ▶",
        winDay: "🎉 绝妙的胜利！获得 +1.00$",
        winAI: "🤖 人工智能机器人连成 3 个，赢了。",
        romanticAlert: "🤖💖 胜利！要实现的愿望："

    },
    chn: {
        modeAI: "🤖 模式: 对战人工智能",
        modeRomantic: "💖 模式: 浪漫晚安",
        btnDay: "☀️ 白天模式",
        btnEvening: "🌙 浪漫夜晚",
        wishTitle: "💖 愿望游戏 💖",
        wishSubtitle: "选择或写下输家要实现的愿望：",
        wish1: "洗碗 🍽️",
        wish2: "做按摩 💆‍♂️",
        wish3: "煮咖啡 ☕",
        wishPlaceholder: "或者输入你自己的愿望...",
        wishConfirm: "确认",
        wishEmptyAlert: "⚠️ 请先选择或输入一个愿望！",
        onTheLine: "赌注：",
        balance: "💰 你的余额: ",
        plane: "✈️ 嗖！ 飞机在第几行投下了地雷 №",
        shopTitle: "🛒 特色商店",
        itemShield: "🛡 掩体",
        itemScanner: "🚩 扫描仪",
        shieldActive: "🛡️ 本回合已激活掩体保护！",
        scannerActive: "🚩 侦察：炸弹在第 {row} 行，第 {col} 列！",
        adTitle: "🎬 广告时间",
        adDesc: "观看广告支持本项目",
        adWait: "{sec} 秒后可关闭...",
        adClose: "继续 ▶",
        winDay: "🎉 绝妙的胜利！获得 +1.00$",
        winAI: "🤖 人工智能机器人连成 3 个，赢了。",
        romanticAlert: "🤖💖 胜利！要实现的愿望："

    },
    ja: {
        modeAI: "🤖 モード: AI対戦",
        modeRomantic: "💖 モード: ロマンチックな夜",
        btnDay: "☀️ 昼モード",
        btnEvening: "🌙 ロマンチックな夜",
        wishTitle: "💖 お願いゲーム 💖",
        wishSubtitle: "負けた人が叶えるお願いを選ぶか入力してください：",
        wish1: "食器を洗う 🍽️",
        wish2: "マッサージをする 💆‍♂️",
        wish3: "コーヒーを淹れる ☕",
        wishPlaceholder: "または自分のお願いを入力...",
        wishConfirm: "確定",
        wishEmptyAlert: "⚠️ 先にお願いを選ぶか入力してください！",
        onTheLine: "賭け事：",
        balance: "💰 あなたの残高: ",
        plane: "✈️ ブーーーン！飛行機が列に鉱山を投下しました №",
        shopTitle: "🛒 追加ショップ",
        itemShield: "🛡 シェルター",
        itemScanner: "🚩 スキャナー",
        shieldActive: "🛡️ このターンのシェルターが有効になりました！",
        scannerActive: "🚩 偵察：爆弾は {row} 行目、{col} 列目にあります！",
        adTitle: "🎬 広告タイム",
        adDesc: "広告を見てプロジェクトを応援しよう",
        adWait: "あと {sec} 秒で閉じられます...",
        adClose: "続ける ▶",
        winDay: "🎉 素晴らしい勝利！+1.00$ を獲得しました",
        winAI: "🤖 AIロボットが3つ並んで勝ちました。",
        romanticAlert: "🤖💖 勝利！叶えるお願い："

    },
    jpn: {
        modeAI: "🤖 モード: AI対戦",
        modeRomantic: "💖 モード: ロマンチックな夜",
        btnDay: "☀️ 昼モード",
        btnEvening: "🌙 ロマンチックな夜",
        wishTitle: "💖 お願いゲーム 💖",
        wishSubtitle: "負けた人が叶えるお願いを選ぶか入力してください：",
        wish1: "食器を洗う 🍽️",
        wish2: "マッサージをする 💆‍♂️",
        wish3: "コーヒーを淹れる ☕",
        wishPlaceholder: "または自分のお願いを入力...",
        wishConfirm: "確定",
        wishEmptyAlert: "⚠️ 先にお願いを選ぶか入力してください！",
        onTheLine: "賭け事：",
        balance: "💰 あなたの残高: ",
        plane: "✈️ ブーーーン！飛行機が列に鉱山を投下しました №",
        shopTitle: "🛒 追加ショップ",
        itemShield: "🛡 シェルター",
        itemScanner: "🚩 スキャナー",
        shieldActive: "🛡️ このターンのシェルターが有効になりました！",
        scannerActive: "🚩 偵察：爆弾は {row} 行目、{col} 列目にあります！",
        adTitle: "🎬 広告タイム",
        adDesc: "広告を見てプロジェクトを応援しよう",
        adWait: "あと {sec} 秒で閉じられます...",
        adClose: "続ける ▶",
        winDay: "🎉 素晴らしい勝利！+1.00$ を獲得しました",
        winAI: "🤖 AIロボットが3つ並んで勝ちました。",
        romanticAlert: "🤖💖 勝利！叶えるお願い："

    },
    hi: {
        modeAI: "🤖 मोड: एआई के खिलाफ",
        modeRomantic: "💖 मोड: रोमांटिक शाम",
        btnDay: "☀️ दिन",
        btnEvening: "🌙 रोमांटिक शाम",
        wishTitle: "💖 विश गेम 💖",
        wishSubtitle: "हारने वाले के लिए एक इच्छा चुनें या लिखें:",
        wish1: "बर्तन धोना 🍽️",
        wish2: "मसाज करना 💆‍♂️",
        wish3: "कॉफी बनाना ☕",
        wishPlaceholder: "या अपनी खुद की इच्छा लिखें...",
        wishConfirm: "पुष्टि करें",
        wishEmptyAlert: "⚠️ कृपया पहले कोई इच्छा चुनें या लिखें!",
        onTheLine: "दांव पर:",
        balance: "💰 आपका बैलेंस: ",
        plane: "✈️ वूश! हवाई जहाज ने कतार में माइन गिरा दी №",
        shopTitle: "🛒 बोनस स्टोर",
        itemShield: "🛡 आश्रय",
        itemScanner: "🚩 स्कैनर",
        shieldActive: "🛡️ इस चाल के लिए आश्रय सक्रिय!",
        scannerActive: "🚩 टोही: बम पंक्ति №{row}, कॉलम №{col} में है!",
        adTitle: "🎬 विज्ञापन ब्रेक",
        adDesc: "विज्ञापन देखकर प्रोजेक्ट का समर्थन करें",
        adWait: "{sec} सेकंड में बंद करें...",
        adClose: "जारी रखें ▶",
        winDay: "🎉 शानदार जीत! प्राप्त हुए +1.00$",
        winAI: "🤖 एआई रोबोट ने लगातार 3 बनाए और जीत गया।",
        romanticAlert: "🤖💖 जीत! इच्छा पूरी होगी:"

    },
    hin: {
        modeAI: "🤖 मोड: एआई के खिलाफ",
        modeRomantic: "💖 मोड: रोमांटिक शाम",
        btnDay: "☀️ दिन",
        btnEvening: "🌙 रोमांटिक शाम",
        wishTitle: "💖 विश गेम 💖",
        wishSubtitle: "हारने वाले के लिए एक इच्छा चुनें या लिखें:",
        wish1: "बर्तन धोना 🍽️",
        wish2: "मसाज करना 💆‍♂️",
        wish3: "कॉफी बनाना ☕",
        wishPlaceholder: "या अपनी खुद की इच्छा लिखें...",
        wishConfirm: "पुष्टि करें",
        wishEmptyAlert: "⚠️ कृपया पहले कोई इच्छा चुनें या लिखें!",
        onTheLine: "दांव पर:",
        balance: "💰 आपका बैलेंस: ",
        plane: "✈️ वूश! हवाई जहाज ने कतार में माइन गिरा दी №",
        shopTitle: "🛒 बोनस स्टोर",
        itemShield: "🛡 आश्रय",
        itemScanner: "🚩 स्कैनर",
        shieldActive: "🛡️ इस चाल के लिए आश्रय सक्रिय!",
        scannerActive: "🚩 टोही: बम पंक्ति №{row}, कॉलम №{col} में है!",
        adTitle: "🎬 विज्ञापन ब्रेक",
        adDesc: "विज्ञापन देखकर प्रोजेक्ट का समर्थन करें",
        adWait: "{sec} सेकंड में बंद करें...",
        adClose: "जारी रखें ▶",
        winDay: "🎉 शानदार जीत! प्राप्त हुए +1.00$",
        winAI: "🤖 एआई रोबोट ने लगातार 3 बनाए और जीत गया।",
        romanticAlert: "🤖💖 जीत! इच्छा पूरी होगी:"

    }
};





let currentLang = 'ru';
let gameMode = 'day'; // 'day' или 'evening'
let activeWish = '';  // Текст выбранного желания

// Переключение режимов (День / Романтический вечер)
function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'evening') {
        document.body.style.backgroundColor = '#1a0f29';
        document.getElementById('wish-modal').style.display = 'flex';
    } else {
        document.body.style.backgroundColor = '#121212';
        document.getElementById('active-wish-panel').style.display = 'none';
        activeWish = '';
        resetGame();
    }
    changeLanguage(currentLang);
}

// Выбор быстрого желания по кнопке
function selectPresetWish(wishText) {
    document.getElementById('custom-wish').value = wishText;
}

// Подтверждение желания
function confirmWish() {
    let wishInput = document.getElementById('custom-wish').value.trim();
    if (!wishInput) {
        alert(translations[currentLang].wishEmptyAlert);
        return;
    }
    activeWish = wishInput;
    document.getElementById('wish-modal').style.display = 'none';
    document.getElementById('current-game-wish').innerText = activeWish;
    document.getElementById('active-wish-panel').style.display = 'block';
    resetGame();
}

// Эффект падающих сердечек
function createHeartRain() {
    const hearts = ['❤️', '💖', '💕', '💗', '👩‍❤️‍👨'];
    for (let i = 0; i < 40; i++) {
        let heart = document.createElement('div');
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.zIndex = '9999';
        heart.style.transition = 'transform ' + (Math.random() * 2 + 1) + 's linear, opacity 1s';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = 'translateY(' + (window.innerHeight + 100) + 'px) rotate(' + (Math.random() * 360) + 'deg)';
        }, 50);
        setTimeout(() => heart.remove(), 3000);
    }
}

let balance = 0; // При каждом входе баланс сбрасывается на 0
let board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
let bombBoard = [[false, false, false], [false, false, false], [false, false, false]];
let hasShield = false;
let bombRow, bombCol;
let gameOver = false;

// Счётчики рекламы для бонусов
let shieldAdCount = 0;
let scannerAdCount = 0;
let pendingAdReward = null; // 'shield', 'scanner' или 'endgame'
let adTimerInterval = null;

function updateShopButtonsText() {
    const t = translations[currentLang];
    const btnShieldEl = document.getElementById('shield-btn');
    const btnScannerEl = document.getElementById('scanner-btn');

    if (btnShieldEl) {
        btnShieldEl.innerText = hasShield
            ? `${t.itemShield} (✅)`
            : `${t.itemShield} (${shieldAdCount}/3 🎬)`;
    }
    if (btnScannerEl) {
        btnScannerEl.innerText = `${t.itemScanner} (${scannerAdCount}/1 🎬)`;
    }
}

function startNewRound() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) bombBoard[i][j] = false;
    }
    bombRow = Math.floor(Math.random() * 3);
    bombCol = Math.floor(Math.random() * 3);
    bombBoard[bombRow][bombCol] = true;

    const status = document.getElementById('status');
    status.innerText = `${translations[currentLang].plane}${bombRow + 1}!`;
    status.style.color = '#00bcd4';

    const shieldBtn = document.getElementById('shield-btn');
    const scannerBtn = document.getElementById('scanner-btn');
    if (shieldBtn) shieldBtn.disabled = hasShield;
    if (scannerBtn) scannerBtn.disabled = false;
    updateShopButtonsText();
}

function updateBalance() {
    const balanceEl = document.getElementById('balance');
    if (balanceEl) {
        balanceEl.innerText = `${translations[currentLang].balance}${balance.toFixed(2)}$`;
    }
}

// Открытие рекламного окна с таймером на 5 секунд
function openAdModal(rewardType) {
    pendingAdReward = rewardType;
    const modal = document.getElementById('ad-modal');
    const titleEl = document.getElementById('ad-modal-title');
    const descEl = document.getElementById('ad-modal-desc');
    const closeBtn = document.getElementById('ad-close-btn');
    const t = translations[currentLang];

    if (titleEl) titleEl.innerText = t.adTitle;
    if (descEl) descEl.innerText = t.adDesc;

    let secondsLeft = 5;
    closeBtn.disabled = true;
    closeBtn.style.backgroundColor = '#555';
    closeBtn.style.color = '#aaa';
    closeBtn.style.cursor = 'not-allowed';
    closeBtn.innerText = t.adWait.replace('{sec}', secondsLeft);

    modal.style.display = 'flex';

    clearInterval(adTimerInterval);
    adTimerInterval = setInterval(() => {
        secondsLeft--;
        if (secondsLeft > 0) {
            closeBtn.innerText = t.adWait.replace('{sec}', secondsLeft);
        } else {
            clearInterval(adTimerInterval);
            closeBtn.disabled = false;
            closeBtn.style.backgroundColor = '#2e8b57';
            closeBtn.style.color = '#fff';
            closeBtn.style.cursor = 'pointer';
            closeBtn.innerText = t.adClose;
        }
    }, 1000);
}

function watchAdForBonus(bonusType) {
    if (bonusType === 'shield' && hasShield) return;
    openAdModal(bonusType);
}

function closeAdModal() {
    const modal = document.getElementById('ad-modal');
    modal.style.display = 'none';
    const t = translations[currentLang];

    if (pendingAdReward === 'shield') {
        shieldAdCount++;
        if (shieldAdCount >= 3) {
            shieldAdCount = 0;
            hasShield = true;
            document.getElementById('status').innerText = t.shieldActive;
            document.getElementById('status').style.color = '#2e8b57';
            document.getElementById('shield-btn').disabled = true;
        }
        updateShopButtonsText();
    } else if (pendingAdReward === 'scanner') {
        scannerAdCount++;
        if (scannerAdCount >= 1) {
            scannerAdCount = 0;
            const scanText = t.scannerActive
                .replace('{row}', bombRow + 1)
                .replace('{col}', bombCol + 1);
            document.getElementById('status').innerText = scanText;
            document.getElementById('status').style.color = '#ff9800';
            document.getElementById('scanner-btn').disabled = true;
        }
        updateShopButtonsText();
    } else if (pendingAdReward === 'endgame') {
        currentPlayer = 'X';
        resetGame();
    }

    pendingAdReward = null;
}
let isBotMode = true;
let currentPlayer = 'X';

function toggleGameMode() {
    isBotMode = !isBotMode;
    changeLanguage(currentLang);
    resetGame();
}

function makeMove(row, col) {
    if (board[row][col] !== '.' || gameOver) return;

    let index = row * 3 + col;
    let cellBtn = document.getElementsByClassName('cell')[index];

    if (bombBoard[row][col]) {
        if (hasShield) {
            alert("🛡️ БУУУМ! Укрытие поглотило взрыв мины! Вы спасены!");
            hasShield = false;
            document.getElementById('shield-btn').disabled = false;
            updateShopButtonsText();
            board[row][col] = currentPlayer;
            cellBtn.innerText = currentPlayer;
            cellBtn.style.color = (currentPlayer === 'X') ? '#2e8b57' : '#ff4436';
        } else {
            cellBtn.innerText = '💥';
            cellBtn.style.backgroundColor = '#f44336';

            if (gameMode !== 'evening') {
                balance = Math.max(0, balance - 0.50);
                updateBalance();
            }

            setTimeout(() => {
                alert("БА-БАХ! 💥 Вы подорвались на авиабомбе!");
                openAdModal('endgame');
            }, 100);
            return;
        }
    } else {
        board[row][col] = currentPlayer;
        cellBtn.innerText = currentPlayer;
        cellBtn.style.color = (currentPlayer === 'X') ? '#2e8b57' : '#ff4436';
    }

    if (checkWin(currentPlayer)) {
        if (gameMode === 'evening') {
            createHeartRain();
            setTimeout(() => {
                let winText = translations[currentLang].romanticAlert + "\n\n💖 " + activeWish;
                alert(winText);
                openAdModal('endgame');
            }, 500);
        } else {
            balance += 1.00;
            updateBalance();
            createCoinRain();
            setTimeout(() => {
                alert(translations[currentLang].winDay);
                openAdModal('endgame');
            }, 500);
        }
        return;
    }

    if (isBotMode) {
        makeAIMove();
    } else {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        if (!gameOver) {
            startNewRound();
        }
    }
}

function makeAIMove() {
    let emptyCells = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '.') emptyCells.push({ r: i, c: j });
        }
    }

    if (emptyCells.length === 0) {
        alert("Ничья! На поле боя мест не осталось.");
        openAdModal('endgame');
        return;
    }

    let targetCell = null;

    // 1. АТАКА
    for (let cell of emptyCells) {
        board[cell.r][cell.c] = 'O';
        if (checkWin('O')) {
            targetCell = cell;
            board[cell.r][cell.c] = '.';
            break;
        }
        board[cell.r][cell.c] = '.';
    }

    // 2. ЗАЩИТА
    if (!targetCell) {
        for (let cell of emptyCells) {
            board[cell.r][cell.c] = 'X';
            if (checkWin('X')) {
                targetCell = cell;
                board[cell.r][cell.c] = '.';
                break;
            }
            board[cell.r][cell.c] = '.';
        }
    }

    // 3. ЦЕНТР
    if (!targetCell) {
        let center = emptyCells.find(cell => cell.r === 1 && cell.c === 1);
        if (center) targetCell = center;
    }

    // 4. СЛУЧАЙНЫЙ ХОД
    if (!targetCell) {
        targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    let aiRow = targetCell.r;
    let aiCol = targetCell.c;
    let index = aiRow * 3 + aiCol;
    let cellBtn = document.getElementsByClassName('cell')[index];

    if (bombBoard[aiRow][aiCol]) {
        if (gameMode === 'evening') {
            cellBtn.innerText = '💖';
            cellBtn.style.backgroundColor = '#e91e63';
            createHeartRain();
            setTimeout(() => {
                let winText = translations[currentLang].romanticAlert + "\n\n💖 " + activeWish;
                alert(winText);
                openAdModal('endgame');
            }, 500);
        } else {
            cellBtn.innerText = '💣';
            cellBtn.style.backgroundColor = '#f44336';
            balance += 1.00;
            updateBalance();
            createCoinRain();
            setTimeout(() => {
                alert(translations[currentLang].winDay);
                openAdModal('endgame');
            }, 500);
        }
        return;
    } else {
        board[aiRow][aiCol] = 'O';
        cellBtn.innerText = 'O';
        cellBtn.style.color = (gameMode === 'evening') ? '#ff4081' : '#f44336';

        if (checkWin('O')) {
            setTimeout(() => {
                alert(translations[currentLang].winAI);
                openAdModal('endgame');
            }, 200);
            return;
        }
    }

    if (!gameOver) {
        startNewRound();
    }
}


   function resetGame() {
       board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
       let cells = document.getElementsByClassName('cell');
       for (let i = 0; i < cells.length; i++) {
           cells[i].innerText = '';
           if (gameMode === 'evening') {
               cells[i].style.backgroundColor = '#2a1b3d';
               cells[i].style.borderColor = '#ff4081';
           } else {
               cells[i].style.backgroundColor = '#2a2a2a';
               cells[i].style.borderColor = '#3d3d3d';
           }
       }
       startNewRound();
   }

   function checkWin(sign) {
       for (let i = 0; i < 3; i++) {
           if (board[i][0] === sign && board[i][1] === sign && board[i][2] === sign) return true;
           if (board[0][i] === sign && board[1][i] === sign && board[2][i] === sign) return true;
       }
       if (board[0][0] === sign && board[1][1] === sign && board[2][2] === sign) return true;
       if (board[0][2] === sign && board[1][1] === sign && board[2][0] === sign) return true;
       return false;
   }

   function createCoinRain() {
       for (let i = 0; i < 40; i++) {
           let coin = document.createElement('div');
           coin.innerText = Math.random() > 0.5 ? '💰' : '🪙';
           coin.style.position = 'fixed';
           coin.style.left = Math.random() * 100 + 'vw';
           coin.style.top = '-50px';
           coin.style.fontSize = Math.random() * 20 + 20 + 'px';
           coin.style.zIndex = '9999';
           coin.style.transition = 'transform ' + (Math.random() * 2 + 1) + 's linear, opacity 1s';

           document.body.appendChild(coin);

           setTimeout(() => {
               coin.style.transform = 'translateY(' + (window.innerHeight + 100) + 'px) rotate(' + (Math.random() * 360) + 'deg)';
           }, 50);

           setTimeout(() => coin.remove(), 3000);
       }
   }

   startNewRound();

   function changeLanguage(lang) {
       if (!translations[lang]) return;
       currentLang = lang;
       const t = translations[currentLang];

       // 1. Обновляем баланс
       updateBalance();

       // 2. Обновляем заголовок магазина
       const shopTitleEl = document.querySelector('.shop-title');
       if (shopTitleEl) shopTitleEl.innerText = t.shopTitle;

       // 3. Обновляем кнопки в магазине со счётчиком рекламы
       updateShopButtonsText();

       // 4. Обновляем кнопки режимов и окно желаний
       const btnDay = document.getElementById('btn-day');
       if (btnDay && t.btnDay) btnDay.innerText = t.btnDay;

       const btnEvening = document.getElementById('btn-evening');
       if (btnEvening && t.btnEvening) btnEvening.innerText = t.btnEvening;

       const wishTitle = document.getElementById('wish-modal-title');
       if (wishTitle && t.wishTitle) wishTitle.innerText = t.wishTitle;

       const wishSub = document.getElementById('wish-modal-subtitle');
       if (wishSub && t.wishSubtitle) wishSub.innerText = t.wishSubtitle;

       const wish1 = document.getElementById('wish-preset-1');
       if (wish1 && t.wish1) wish1.innerText = t.wish1;

       const wish2 = document.getElementById('wish-preset-2');
       if (wish2 && t.wish2) wish2.innerText = t.wish2;

       const wish3 = document.getElementById('wish-preset-3');
       if (wish3 && t.wish3) wish3.innerText = t.wish3;

       const wishInput = document.getElementById('custom-wish');
       if (wishInput && t.wishPlaceholder) wishInput.placeholder = t.wishPlaceholder;

       const btnConfirm = document.getElementById('btn-confirm-wish');
       if (btnConfirm && t.wishConfirm) btnConfirm.innerText = t.wishConfirm;

       const onTheLineEl = document.getElementById('on-the-line-label');
       if (onTheLineEl && t.onTheLine) onTheLineEl.innerText = t.onTheLine;

       // 5. Обновляем кнопку режима (Против ИИ / Вдвоем)
       const modeBtnEl = document.getElementById('modeBtn');
       if (modeBtnEl) {
           if (isBotMode) {
               modeBtnEl.innerText = t.modeAI;
               modeBtnEl.style.backgroundColor = '#2e8b57';
           } else {
               const twoPlayersTranslations = {
                   ru: "👥 Режим: Вдвоем",
                   uk: "👥 Режим: Вдвох",
                   en: "👥 Mode: Two Players",
                   de: "👥 Modus: Zwei Spieler",
                   zh: "👥 模式: 双人对战",
                   chn: "👥 模式: 双人对战",
                   ja: "👥 モード: 2人対戦",
                   jpn: "👥 モード: 2人対戦",
                   hi: "👥 मोड: दो खिलाड़ी",
                   hin: "👥 मोड: दो खिलाड़ी"
               };
               modeBtnEl.innerText = twoPlayersTranslations[currentLang] || "👥 Режим: Вдвоем";
               modeBtnEl.style.backgroundColor = '#ff4436';
           }
       }

       // 6. Переводим строку самолёта на лету
       const statusEl = document.getElementById('status');
       if (statusEl && statusEl.innerText.trim() !== "") {
           const match = statusEl.innerText.match(/\d+/);
           if (match && !statusEl.innerText.includes(':')) {
               statusEl.innerText = t.plane + match[0] + "!";
           }
       }
   }

   // Автоматическое определение языка при старте игры
   document.addEventListener("DOMContentLoaded", () => {
       const userLang = (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();
       const supportedLangs = ['ru', 'uk', 'en', 'de', 'zh', 'chn', 'ja', 'jpn', 'hi', 'hin'];

       if (supportedLangs.includes(userLang)) {
           changeLanguage(userLang);
       } else {
           changeLanguage('ru');
       }
   });

