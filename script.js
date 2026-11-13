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
        itemShield: "🛡 Щит (0.50$)",
        itemScanner: "🚩 Сканер (0.30$)",
        winDay: "🎉 ФАНТАСТИЧЕСКАЯ ПОБЕДА! Получено +1.00$",
        winAI: "🤖 Робот-ИИ собрал 3 в ряд и выиграл.",
        romanticAlert: "🤖💖 Робот поймал твоё сердечко! Настоящая цифровая любовь!"
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
        itemShield: "🛡 Щит (0.50$)",
        itemScanner: "🚩 Сканер (0.30$)",
        winDay: "🎉 ФАНТАСТИЧНА ПЕРЕМОГА! Отримано +1.00$",
        winAI: "🤖 Робот-ШІ зібрав 3 в ряд і виграв.",
        romanticAlert: "🤖💖 Робот упіймав твоє серденько! Справжнє цифрове кохання!"
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
        itemShield: "🛡 Shield (0.50$)",
        itemScanner: "🚩 Scanner (0.30$)",
        winDay: "🎉 FANTASTIC VICTORY! Received +1.00$",
        winAI: "🤖 AI Robot got 3 in a row and won.",
        romanticAlert: "🤖💖 The robot caught your heart! True digital love!"
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
        itemShield: "🛡 Schild (0.50$)",
        itemScanner: "🚩 Scanner (0.30$)",
        winDay: "🎉 FANTASTISCHER SIEG! +1.00$ erhalten",
        winAI: "🤖 KI-Roboter hat 3 in einer Reihe und gewinnt.",
        romanticAlert: "🤖💖 Der Roboter hat dein Herz gefangen! Echte digitale Liebe!"
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
        itemShield: "🛡 护盾 (0.50$)",
        itemScanner: "🚩 扫描仪 (0.30$)",
        winDay: "🎉 绝妙的胜利！获得 +1.00$",
        winAI: "🤖 人工智能机器人连成 3 个，赢了。",
        romanticAlert: "🤖💖 机器人抓住了你的心！真正的数字之恋！"
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
        itemShield: "🛡 护盾 (0.50$)",
        itemScanner: "🚩 扫描仪 (0.30$)",
        winDay: "🎉 绝妙的胜利！获得 +1.00$",
        winAI: "🤖 人工智能机器人连成 3 个，赢了。",
        romanticAlert: "🤖💖 机器人抓住了你的心！真正的数字之恋！"
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
        itemShield: "🛡 シールド (0.50$)",
        itemScanner: "🚩 スキャナー (0.30$)",
        winDay: "🎉 素晴らしい勝利！+1.00$ を獲得しました",
        winAI: "🤖 AIロボットが3つ並んで勝ちました。",
        romanticAlert: "🤖💖 ロボットがあなたのハートをキャッチしました！本物のデジタルラブ！"
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
        itemShield: "🛡 シールド (0.50$)",
        itemScanner: "🚩 スキャナー (0.30$)",
        winDay: "🎉 素晴らしい勝利！+1.00$ を獲得しました",
        winAI: "🤖 AIロボットが3つ並んで勝ちました。",
        romanticAlert: "🤖💖 ロボットがあなたのハートをキャッチしました！本物のデジタルラブ！"
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
        itemShield: "🛡 शील्ड (0.50$)",
        itemScanner: "🚩 स्कैनर (0.30$)",
        winDay: "🎉 शानदार जीत! प्राप्त हुए +1.00$",
        winAI: "🤖 एआई रोबोट ने लगातार 3 बनाए और जीत गया।",
        romanticAlert: "🤖💖 रोबोट ने आपका दिल जीत लिया! सच्चा डिजिटल प्यार!"
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
        itemShield: "🛡 शील्ड (0.50$)",
        itemScanner: "🚩 स्कैनर (0.30$)",
        winDay: "🎉 शानदार जीत! प्राप्त हुए +1.00$",
        winAI: "🤖 एआई रोबोट ने लगातार 3 बनाए और जीत गया।",
        romanticAlert: "🤖💖 रोबोट ने आपका दिल जीत लिया! सच्चा डिजिटल प्यार!"
    }
};





let currentLang = 'ru'; // Текущий язык по умолчанию

let gameMode = 'day'; // 'day' или 'evening'
let activeWish = '';  // Текст выбранного желания

// Переключение режимов
function setGameMode(mode) {
    gameMode = mode;
    if (mode === 'evening') {
        document.body.style.backgroundColor = '#1a0f29'; // Романтический вечерний фон
        document.getElementById('wish-modal').style.display = 'flex'; // Открываем ввод желаний
    } else {
        document.body.style.backgroundColor = '#121212'; // Стандартный дневной фон
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
        alert("Пожалуйста, выберите или введите желание!");
        return;
    }
    activeWish = wishInput;
    document.getElementById('wish-modal').style.display = 'none';
    document.getElementById('current-game-wish').innerText = activeWish;
    document.getElementById('active-wish-panel').style.display = 'block';
    resetGame();
}

// КРАСИВЫЙ ЭФФЕКТ СЫПЛЮЩИХСЯ СЕРДЕЧЕК (наша новая гордость)
function createHeartRain() {
    const hearts = ['❤️', '💖', '💕', '💗', '👩‍❤️‍👨'];
    for (let i = 0; i < 40; i++) {
        let heart = document.createElement('div');
        // Случайный выбор сердечка из массива
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

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

    let balance = 3.37;
    let board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
    let bombBoard = [[false, false, false], [false, false, false], [false, false, false]];
    let hasShield = false;
    let bombRow, bombCol;
    let gameOver = false;

        function startNewRound() {
        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) bombBoard[i][j] = false;
        }
        bombRow = Math.floor(Math.random() * 3);
        bombCol = Math.floor(Math.random() * 3);
        bombBoard[bombRow][bombCol] = true;

        const status = document.getElementById('status');
        /* ТЕПЕРЬ СТРОКИ БУДУТ НАЗЫВАТЬСЯ 1, 2, 3 вместо 0, 1, 2: */
        status.innerText = `${translations[currentLang].plane}${bombRow + 1}!`;
        status.style.color = '#00bcd4';
        document.getElementById('shield-btn').disabled = false;
        document.getElementById('scanner-btn').disabled = false;
    }


    function updateBalance() {
        const balanceEl = document.getElementById('balance');
        if (balanceEl) {
            balanceEl.innerText = `${translations[currentLang].balance}${balance.toFixed(2)}$`;
        }
    }


    function buyShield() {
        if (balance >= 0.50) {
            balance -= 0.50;
            hasShield = true;
            updateBalance();
            document.getElementById('status').innerText = "🛡️ Укрытие активировано на этот ход!";
            document.getElementById('status').style.color = "#2e8b57";
            document.getElementById('shield-btn').disabled = true;
        } else {
            alert("❌ Недостаточно средств для щита!");
        }
    }

let isBotMode = true;
let currentPlayer = 'X';
function toggleGameMode() {
    isBotMode = !isBotMode; // переключает режим
    const btn = document.getElementById("modeBtn");

    if (isBotMode) {
        btn.innerText = "🤖 Режим: Против ИИ";
        btn.style.backgroundColor = "#2e8b57";
    } else {
        btn.innerText = "👥 Режим: Вдвоем";
        btn.style.backgroundColor = "#ff4436";
    }

    resetGame(); // перезапуск поля при смене режима
}


    function buyScanner() {
        if (balance >= 0.30) {
            balance -= 0.30;
            updateBalance();
            document.getElementById('status').innerText = `🚩 РАЗВЕДКА: Бомба в строке №${bombRow}, столбце №${bombCol}!`;
            document.getElementById('status').style.color = "#ff9800";
            document.getElementById('scanner-btn').disabled = true;
        } else {
            alert("❌ Недостаточно средств для сканера!");
        }
    }

            function makeMove(row, col) {
        if (board[row][col] !== '.' || gameOver) return;

        let index = row * 3 + col;
        let cellBtn = document.getElementsByClassName('cell')[index];

        if (bombBoard[row][col]) {
            if (hasShield) {
                alert("🛡️ БУУУМ! Щит поглотил взрыв мины! Вы спасены!");
                hasShield = false;
                document.getElementById('shield-btn').disabled = false;
                board[row][col] = currentPlayer;
                cellBtn.innerText = currentPlayer;
                cellBtn.style.color = (currentPlayer === 'X') ? '#2e8b57' : '#ff4436';
            } else {
                cellBtn.innerText = '💥';
                cellBtn.style.backgroundColor = '#f44336';

                balance = Math.max(0, balance - 0.50);
                updateBalance();

                setTimeout(() => {
                    alert("БА-БАХ! 💥 Вы подорвались на авиабомбе!\nШтраф: -0.50$. Раунд перезапускается!");
                    currentPlayer = 'X';
                    resetGame();
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
            alert(translations[currentLang].winDay);
            currentPlayer = 'X';
            resetGame();
        }, 500);
    } else {
        balance += 1.00;
        updateBalance();
        createCoinRain();
        setTimeout(() => {
            alert("🎉 ФАНТАСТИЧЕСКАЯ ПОБЕДА! Получено +1.00$");
            currentPlayer = 'X';
            resetGame();
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
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if (board[i][j] === '.') emptyCells.push({r: i, c: j});
        }
    }

    if (emptyCells.length === 0) {
        alert("Ничья! На поле боя мест не осталось.");
        resetGame();
        return;
    }

    let targetCell = null;

    // 1. АТАКА: Проверяем, можем ли мы (нолики) выиграть этим ходом
    for (let cell of emptyCells) {
        board[cell.r][cell.c] = 'O';
        if (checkWin('O')) {
            targetCell = cell;
            board[cell.r][cell.c] = '.'; // ИСПРАВЛЕНО: возвращаем строго ТУ КЛЕТКУ И С ТОЧКОЙ
            break;
        }
        board[cell.r][cell.c] = '.'; // ИСПРАВЛЕНО: возвращаем строго ТУ КЛЕТКУ И С ТОЧКОЙ
    }

    // 2. ЗАЩИТА: Если выигрыша нет, блокируем игрока (крестики)
    if (!targetCell) {
        for (let cell of emptyCells) {
            board[cell.r][cell.c] = 'X';
            if (checkWin('X')) {
                targetCell = cell;
                board[cell.r][cell.c] = '.'; // ИСПРАВЛЕНО: возвращаем ТОЧКУ
                break;
            }
            board[cell.r][cell.c] = '.'; // ИСПРАВЛЕНО: возвращаем ТОЧКУ
        }
    }

    // 3. ЦЕНТР: Если центр свободен, занимаем его
    if (!targetCell) {
        let center = emptyCells.find(cell => cell.r === 1 && cell.c === 1);
        if (center) targetCell = center;
    }

    // 4. СЛУЧАЙНЫЙ ХОД: Если умных ходов нет, берем случайную клетку
    if (!targetCell) {
        targetCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    // Выполнение хода ИИ
    let aiRow = targetCell.r;
    let aiCol = targetCell.c;

    let index = aiRow * 3 + aiCol;
    let cellBtn = document.getElementsByClassName('cell')[index];

    // ПРОВЕРКА НА МИНУ (Ваша сохраненная логика)
    // ПРОВЕРКА НА МИНУ / СЕРДЕЧКО
if (bombBoard[aiRow][aiCol]) {
    if (gameMode === 'evening') {
        cellBtn.innerText = '💖';
        cellBtn.style.backgroundColor = '#e91e63';
        createHeartRain();
                        setTimeout(() => {
                            let winText = translations[currentLang].romanticAlert + "\n\n" + activeWish;
                            alert(winText);
                            resetGame();
                        }, 500);
                    } else {
                        cellBtn.innerText = '💣';
                        cellBtn.style.backgroundColor = '#f44336';
                        balance += 1.00;
                        updateBalance();
                        createCoinRain();
                        setTimeout(() => {
                            alert("💥 Робот подорвался на мине! Тебе начислено +1.00$");
                            resetGame();
                        }, 500);
                    }


} else {
    // Обычный ход без сюрпризов...
    board[aiRow][aiCol] = 'O';
    cellBtn.innerText = 'O';
    // Меняем цвет нолика: вечером делаем его нежно-розовым, днём — стандартным красным
    cellBtn.style.color = (gameMode === 'evening') ? '#ff4081' : '#f44336';


            if (checkWin('O')) {
                alert(translations[currentLang].winAI);

                resetGame();
            }
        }

        if (!gameOver) {
            startNewRound();
        }
    }


    function resetGame() {
    board = [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']];
    let cells = document.getElementsByClassName('cell');
    for(let i=0; i<cells.length; i++) {
        cells[i].innerText = '';
        // Подстраиваем цвет клеток под выбранное время суток
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

    // КРАСИВЫЙ ЭФФЕКТ СЫПЛЮЩИХСЯ МОНЕТ
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

            setTimeout(() => {
                coin.remove();
            }, 3000);
        }
    }

    startNewRound();

function changeLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Обновляем баланс
    updateBalance();

    // 2. Обновляем заголовок магазина
    const shopTitleEl = document.querySelector('.shop-title');
    if (shopTitleEl) {
        shopTitleEl.innerText = translations[currentLang].shopTitle;
    }

    // 3. Обновляем кнопки в магазине
    const btnShieldEl = document.getElementById('shield-btn');
    if (btnShieldEl) {
        btnShieldEl.innerText = translations[currentLang].itemShield;
    }

    const btnScannerEl = document.getElementById('scanner-btn');
    if (btnScannerEl) {
        btnScannerEl.innerText = translations[currentLang].itemScanner;
    }
        // 4. Обновляем кнопки режимов и окно желаний
        const t = translations[currentLang];

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


    // 4. Обновляем текст на зеленой кнопке режима
    const modeBtnEl = document.getElementById('modeBtn');
    if (modeBtnEl) {
        if (isBotMode) {
            modeBtnEl.innerText = translations[currentLang].modeAI;
        } else {
            // Массив переводов для режима "Вдвоем" (если ключа нет, покажет русский дефолт)
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
        }
    }

    // 5. Переводим строку самолёта прямо на лету!
    // Ищем элемент, где выводится текст самолёта (проверь его ID в своем коде, обычно это что-то вроде plane-info или plane-status)
    const planeLogEl = document.getElementById('plane-info') || document.querySelector('.plane-log');
    if (planeLogEl && planeLogEl.innerText.trim() !== "") {
        // Вытаскиваем номер строки из старого текста (ищем цифру в конце строки)
        const match = planeLogEl.innerText.match(/\d+/);
        if (match) {
            const rowNumber = match[0];
            planeLogEl.innerText = translations[currentLang].plane + rowNumber + "!";
        }
    }
}
// Автоматическое определение языка при старте игры
document.addEventListener("DOMContentLoaded", () => {
    // Получаем двухбуквенный код языка браузера (например, "ru", "en", "hi")
    const userLang = (navigator.language || navigator.userLanguage).substring(0, 2).toLowerCase();

    // Список поддерживаемых языков в нашей игре
    const supportedLangs = ['ru', 'uk', 'en', 'de', 'zh', 'chn', 'ja', 'jpn', 'hi', 'hin'];

    // Если язык пользователя есть в списке — включаем его, иначе ставим 'ru' (или 'en') по умолчанию
    if (supportedLangs.includes(userLang)) {
        changeLanguage(userLang);
    } else {
        changeLanguage('ru');
    }
});
