const tours = [
    { name: "Egypt – Sharm El-Sheikh", price: "$520", time: "7 Days", imgs: ["https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=600&q=80", "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=600&q=80"] },
    { name: "Thailand – Phuket", price: "$850", time: "10 Days", imgs: ["https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800", "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800", "https://i.pinimg.com/736x/18/be/1f/18be1f7af1db345172b4096613fef6a2.jpg"] },
    { name: "Vietnam – Phu Quoc", price: "$910", time: "8 Days", imgs: ["https://i.pinimg.com/1200x/04/e1/27/04e127d9b75d946f4bb9c251f78db072.jpg", "https://i.pinimg.com/736x/9a/e7/6e/9ae76eba19ce9e4df5b3524deeabee62.jpg", "https://i.pinimg.com/736x/7f/e8/f0/7fe8f0f3b5c57fb81f4478ee533560e0.jpg"] },
    { name: "BAA X Dubay, Abu-Dabi, Ras El-Xayma", price: "$490", time: "6 Days", imgs: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800", "https://i.pinimg.com/1200x/f1/59/83/f1598354df3f3f70ff19b26ada422a36.jpg"] },
    { name: "Bali – Indonesia", price: "$1180", time: "12 Days", imgs: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800", "https://i.pinimg.com/1200x/95/a3/be/95a3be7cb4236d9b002ca69e5c8b399a.jpg"] },
    { name: "China – Hainan Island", price: "$740", time: "8 Days", imgs: ["https://i.pinimg.com/736x/fd/8a/49/fd8a49362d23267dcfa86169d5543c96.jpg", "https://i.pinimg.com/1200x/d5/b9/10/d5b910c1ec9cb462e7af0131ce8c55f2.jpg", "https://i.pinimg.com/736x/56/1f/93/561f933ab98ad667cefb64df83502bfa.jpg"] },
    { name: "India – Goa Beaches", price: "$620", time: "9 Days", imgs: ["https://i.pinimg.com/736x/5a/a4/2a/5aa42abec78a31ccadcc9b1c1d31aa5f.jpg", "https://i.pinimg.com/1200x/d1/80/95/d18095e2d4de3ab6737d028f4e1484ed.jpg", "https://i.pinimg.com/1200x/aa/43/f9/aa43f96e8c01984a93f8663c6e36bcd3.jpg"] },
    { name: "Turkey – Antalya Coast", price: "$680", time: "7 Days", imgs: ["https://i.pinimg.com/1200x/c3/e5/6a/c3e56a4e1152593dc56d08c8f0b9c15d.jpg", "https://i.pinimg.com/1200x/bd/44/fe/bd44feccec1a77828ac79cefbc2c6ba6.jpg", "https://i.pinimg.com/1200x/53/72/fe/5372fef0badfe7bc5853155ef0b7e782.jpg"] },
    { name: "Malaysia – Langkavi", price: "$790", time: "7 Days", imgs: ["https://i.pinimg.com/1200x/ee/ba/e9/eebae9b9aee5fe1900fc18bb05229a9c.jpg", "https://i.pinimg.com/1200x/e2/dc/77/e2dc777bc28761c656f5e56febd0a3ab.jpg", "https://i.pinimg.com/1200x/c1/0a/e2/c10ae2919cbab6635fcfaab471716d59.jpg"] }
];

const dict = {
    en: { 
        nav_home: "Home", nav_services: "Services", nav_packages: "Packages", nav_contact: "Contact", 
        hero_title: "Explore the World with Safra", hero_desc: "Premium Visa Assistance & Tour Packages from Uzbekistan.", hero_btn: "Discover More", 
        dest_h: "Tour Packages", serv_h: "Our Services", 
        serv_1_h: "Visa Support", serv_1_p: "High success rates for Schengen, USA, UK, and Asian visas.", 
        serv_2_h: "Tour Packages", serv_2_p: "Handpicked holiday destinations for an unforgettable experience.", 
        serv_3_h: "Hotel Booking", serv_3_p: "Direct access to worldwide premium hotels at the best rates.",
        boss_label: "Director", work_h_label: "Work Hours", address_label: "Address",
        pp_link: "Privacy Policy", pp_title: "Privacy Policy", pp_head: "SAFRA TRAVEL does not mandatorily collect personal data from users on this website.", pp_i1_h: "1. Data Collection", pp_i1_b: "The site is for informational purposes only. Registration is not required.", pp_i2_h: "2. Communication", pp_i2_b: "If you connect via phone, email, or messengers, your data is used only for customer service.", pp_i3_h: "3. Cookies", pp_i3_b: "This site does not use cookies or hidden tracking technologies.", pp_i4_h: "4. Security", pp_i4_b: "User privacy is highly respected. No information is shared with third parties." 
    },
    ru: { 
        nav_home: "Главная", nav_services: "Услуги", nav_packages: "Туры", nav_contact: "Контакты", 
        hero_title: "Откройте мир с Safra", hero_desc: "Визовая поддержка и международные туры из Узбекистана.", hero_btn: "Начать", 
        dest_h: "Наши Туры", serv_h: "Наши Услуги", 
        serv_1_h: "Визовая Помощь", serv_1_p: "Высокий процент получения виз в Шенген, США и Азию.", 
        serv_2_h: "Мировой Туризм", serv_2_p: "Лучшие турпакеты по экзотическим направлениям мира.", 
        serv_3_h: "Бронь Отелей", serv_3_p: "Доступ к премиальным отелям по всему миру по агентским ценам.", 
        boss_label: "Директор", work_h_label: "Рабочее время", address_label: "Address",
        pp_link: "Политика конфиденциальности", pp_title: "Конфиденциальность", pp_head: "SAFRA TRAVEL не собирает личные данные пользователей в обязательном порядке.", pp_i1_h: "1. Сбор данных", pp_i1_b: "Сайт служит только в информационных целях. Регистрация не требуется.", pp_i2_h: "2. Связь", pp_i2_b: "Если вы связываетесь через телефон или мессенджеры, информация используется только для связи.", pp_i3_h: "3. Cookies", pp_i3_b: "Этот сайт не использует куки или технологии скрытого отслеживания.", pp_i4_h: "4. Безопасность", pp_i4_b: "Конфиденциальность пользователей уважается. Данные не передаются третьим лицам." 
    },
    uz: { 
        nav_home: "Asosiy", nav_services: "Xizmatlar", nav_packages: "Paketlar", nav_contact: "Aloqa", 
        hero_title: "Dunyo bo'ylab Safra bilan", hero_desc: "O'zbekistondan professional viza va tur xizmatlari.", hero_btn: "Ko'rish", 
        dest_h: "Tur Paketlar", serv_h: "Xizmatlarimiz", 
        serv_1_h: "Viza ko'magi", serv_1_p: "Shengen, AQSh va Osiyo vizalari uchun yuqori natijalar.", 
        serv_2_h: "Global turizm", serv_2_p: "Dunyoning go'zal va ekzotik joylariga tur paketlar.", 
        serv_3_h: "Mehmonxona bron", serv_3_p: "Premium mehmonxonalar uchun maxsus narxlar.", 
        boss_label: "Direktor", work_h_label: "Ish vaqti", address_label: "Manzil",
        pp_link: "Maxfiylik siyosati", pp_title: "Maxfiylik siyosati", pp_head: "SAFRA TRAVEL foydalanuvchilarning shaxsiy ma’lumotlarini majburiy ravishda to‘plamaydi.", pp_i1_h: "1. Ma’lumotlarni yig‘ish", pp_i1_b: "Sayt faqat axborot maqsadida xizmat qiladi. Ro‘yxatdan o‘tish talab qilinmaydi.", pp_i2_h: "2. Aloqa", pp_i2_b: "Agar foydalanuvchi telefon yoki messenjerlar orqali bog‘lansa, yuborilgan ma’lumotlar faqat aloqa uchun ishlatiladi.", pp_i3_h: "3. Cookies", pp_i3_b: "Ushbu sayt cookies yoki yashirin kuzatuv texnologiyalaridan foydalanmaydi.", pp_i4_h: "4. Xavfsizlik", pp_i4_b: "Foydalanuvchi maxfiyligi hurmat qilinadi va uchinchi shaxslarga ma’lumot berilmaydi." 
    }
};

const list = document.getElementById('tourList');
tours.forEach((t, i) => {
    list.innerHTML += `
        <div class="tour-card reveal">
            <div class="tour-gallery" id="gal-${i}">
                <div class="gal-dots" id="dots-${i}">
                    ${t.imgs.map((_, idx) => `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`).join('')}
                </div>
                ${t.imgs.map((img, idx) => `<img src="${img}" class="gallery-img ${idx === 0 ? 'active' : ''}">`).join('')}
                <div class="gallery-nav">
                    <button onclick="slide(${i}, -1)"><i class="fas fa-chevron-left"></i></button>
                    <button onclick="slide(${i}, 1)"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div class="tour-details">
                <h3>${t.name}</h3>
                <div class="tour-footer">
                    <span class="tour-price">${t.price}</span>
                    <span class="tour-time">${t.time}</span>
                </div>
            </div>
        </div>`;
});

function slide(tIdx, step) {
    const gal = document.getElementById(`gal-${tIdx}`);
    const imgs = gal.querySelectorAll('.gallery-img');
    const dots = document.getElementById(`dots-${tIdx}`).querySelectorAll('.dot');
    let idx = Array.from(imgs).findIndex(img => img.classList.contains('active'));
    imgs[idx].classList.remove('active');
    dots[idx].classList.remove('active');
    idx = (idx + step + imgs.length) % imgs.length;
    imgs[idx].classList.add('active');
    dots[idx].classList.add('active');
}

function toggleMenu() { document.getElementById('menu').classList.toggle('active'); }

function setLang(lang) {
    document.querySelectorAll('[data-t]').forEach(el => el.innerText = dict[lang][el.getAttribute('data-t')]);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.innerText.toLowerCase() === lang));
    if(window.innerWidth <= 992) {
        const menu = document.getElementById('menu');
        if(menu.classList.contains('active')) setTimeout(() => menu.classList.remove('active'), 300);
    }
}

function openPP() { document.getElementById('ppModal').style.display = 'flex'; document.body.style.overflow = 'hidden'; }
function closePP() { document.getElementById('ppModal').style.display = 'none'; document.body.style.overflow = 'auto'; }
function closePPOutside(e) { if(e.target.id === 'ppModal') closePP(); }

let hIdx = 0;
const hSlides = document.querySelectorAll('.hero-slide');
setInterval(() => {
    if(hSlides.length > 0) {
        hSlides[hIdx].classList.remove('active');
        hIdx = (hIdx + 1) % hSlides.length;
        hSlides[hIdx].classList.add('active');
    }
}, 6000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
window.addEventListener('scroll', () => { document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50); });