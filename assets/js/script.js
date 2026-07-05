'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.dataset.value || this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.dataset.value || this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach(link => {
  link.addEventListener("click", function() {
    const targetPage = this.dataset.nav;
    if (!targetPage) return;
    
    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(navLink => navLink.classList.remove("active"));
    
    const targetPageElement = document.querySelector(`[data-page="${targetPage}"]`);
    if (targetPageElement) {
      targetPageElement.classList.add("active");
      this.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});

// ===== i18n Multi-language =====

const translations = {
  en: {
    "nav-about": "About",
    "nav-resume": "Resume",
    "nav-portfolio": "Portfolio",
    "nav-blog": "Blog",
    "nav-contact": "Contact",
    "about-title": "About me",
    "about-p1": "I'm a passionate learner in the fields of networking and server security, with a growing interest in web technologies. I'm currently developing my skills through hands-on practice and continuous study, aiming to better understand how modern systems communicate and stay secure.",
    "about-p2": "My focus is on building a strong foundation in networking while exploring the practical aspects of server management, particularly in the context of web development. I enjoy discovering new tools and methods that improve system security and performance. I'm motivated by progress and always looking for new challenges to grow both personally and professionally.",
    "service-title": "What I'm doing",
    "service-web": "Web Development",
    "service-web-desc": "I'm learning to build simple and functional websites, with a focus on clean code and practical use cases.",
    "service-mobile": "Mobile Apps",
    "service-mobile-desc": "Exploring the basics of mobile development, working on small projects to understand Android app structure and functionality.",
    "service-net": "Networking",
    "service-net-desc": "Configuring and managing networks using routers, switches, and various protocols to ensure stable and efficient connectivity.",
    "service-sec": "Network Security",
    "service-sec-desc": "Assessing and securing network infrastructures through penetration testing, vulnerability analysis, and traffic monitoring.",
    "resume-title": "Resume",
    "education": "Education",
    "experience": "Experience",
    "skills-title": "My Skills",
    "portfolio-title": "Portfolio",
    "blog-title": "Blog",
    "contact-title": "Contact",
    "contact-form": "Contact Form",
    "form-name": "Full name",
    "form-email": "Email address",
    "form-message": "Your Message",
    "form-send": "Send Message",
    "download-cv": "Download CV",
    "show-contacts": "Show Contacts",
    "email": "Email",
    "phone": "Phone",
    "birthday": "Birthday",
    "location": "Location",
    "filter-all": "All",
    "filter-web-design": "Web design",
    "filter-apps": "Applications",
    "filter-web-dev": "Web development",
    "filter-networks": "Networks Labs",
    "filter-project": "Project",
    "select-category": "Select category",
    "skill-flutter": "Mobile App Development (Flutter)",
    "skill-networks": "Computer Networks & Configuration",
    "skill-linux": "Linux Systems & Server Administration",
    "skill-pentest": "Wireless Network Penetration Testing",
    "skill-sys-design": "Information Systems Design",
    "skill-store": "Basic Store & Inventory Management"
  },
  fr: {
    "nav-about": "À propos",
    "nav-resume": "CV",
    "nav-portfolio": "Portfolio",
    "nav-blog": "Blog",
    "nav-contact": "Contact",
    "about-title": "À propos de moi",
    "about-p1": "Je suis un apprenant passionné dans les domaines du réseautage et de la sécurité des serveurs, avec un intérêt croissant pour les technologies web. Je développe actuellement mes compétences par la pratique et l'étude continue, visant à mieux comprendre comment les systèmes modernes communiquent et restent sécurisés.",
    "about-p2": "Mon objectif est de construire une base solide en réseautage tout en explorant les aspects pratiques de l'administration de serveurs, particulièrement dans le contexte du développement web. Je suis motivé par le progrès et toujours à la recherche de nouveaux défis pour grandir personnellement et professionnellement.",
    "service-title": "Ce que je fais",
    "service-web": "Développement Web",
    "service-web-desc": "J'apprends à créer des sites web simples et fonctionnels, avec un accent sur un code propre et des cas d'utilisation pratiques.",
    "service-mobile": "Applications Mobiles",
    "service-mobile-desc": "Exploration des bases du développement mobile, en travaillant sur de petits projets pour comprendre la structure et les fonctionnalités des applications Android.",
    "service-net": "Réseautage",
    "service-net-desc": "Configuration et gestion de réseaux utilisant des routeurs, des commutateurs et divers protocoles pour assurer une connectivité stable et efficace.",
    "service-sec": "Sécurité Réseau",
    "service-sec-desc": "Évaluation et sécurisation des infrastructures réseau via des tests d'intrusion, l'analyse de vulnérabilités et la surveillance du trafic.",
    "resume-title": "CV",
    "education": "Éducation",
    "experience": "Expérience",
    "skills-title": "Mes Compétences",
    "portfolio-title": "Portfolio",
    "blog-title": "Blog",
    "contact-title": "Contact",
    "contact-form": "Formulaire de Contact",
    "form-name": "Nom complet",
    "form-email": "Adresse email",
    "form-message": "Votre message",
    "form-send": "Envoyer",
    "download-cv": "Télécharger CV",
    "show-contacts": "Voir contacts",
    "email": "Email",
    "phone": "Téléphone",
    "birthday": "Anniversaire",
    "location": "Localisation",
    "filter-all": "Tout",
    "filter-web-design": "Design web",
    "filter-apps": "Applications",
    "filter-web-dev": "Développement web",
    "filter-networks": "Labos Réseaux",
    "filter-project": "Projet",
    "select-category": "Sélectionner catégorie",
    "skill-flutter": "Développement Mobile (Flutter)",
    "skill-networks": "Réseaux & Configuration",
    "skill-linux": "Administration Linux & Serveurs",
    "skill-pentest": "Test de Pénétration Réseau",
    "skill-sys-design": "Conception de Systèmes d'Information",
    "skill-store": "Gestion de Base de Stock & Magasin"
  },
  ar: {
    "nav-about": "عن",
    "nav-resume": "السيرة",
    "nav-portfolio": "أعمالي",
    "nav-blog": "مدونة",
    "nav-contact": "اتصال",
    "about-title": "عنّي",
    "about-p1": "أنا متعلم شغوف في مجال الشبكات وأمن الخوادم، مع اهتمام متزايد بتقنيات الويب. أطور مهاراتي حالياً من خلال الممارسة العملية والدراسة المستمرة، بهدف فهم أفضل لكيفية تواصل الأنظمة الحديثة وبقائها آمنة.",
    "about-p2": "تركيزي ينصب على بناء أساس قوي في الشبكات مع استكشاف الجوانب العملية لإدارة الخوادم، خاصة في سياق تطوير الويب. أستمتع باكتشاف أدوات وأساليب جديدة تحسن أمن النظام وأداءه. أنا مدفوع بالتقدم وأبحث دائماً عن تحديات جديدة للنمو شخصياً ومهنياً.",
    "service-title": "ماذا أفعل",
    "service-web": "تطوير الويب",
    "service-web-desc": "أتعلم بناء مواقع ويب بسيطة وعملية، مع التركيز على كتابة أكواد نظيفة وحالات استخدام عملية.",
    "service-mobile": "تطبيقات الجوال",
    "service-mobile-desc": "استكشاف أساسيات تطوير تطبيقات الجوال، والعمل على مشاريع صغيرة لفهم هيكل ووظائف تطبيقات أندرويد.",
    "service-net": "الشبكات",
    "service-net-desc": "تكوين وإدارة الشبكات باستخدام أجهزة التوجيه والمحولات والبروتوكولات المختلفة لضمان اتصال مستقر وفعال.",
    "service-sec": "أمن الشبكات",
    "service-sec-desc": "تقييم وتأمين البنية التحتية للشبكات من خلال اختبار الاختراق وتحليل الثغرات ومراقبة حركة المرور.",
    "resume-title": "السيرة الذاتية",
    "education": "التعليم",
    "experience": "الخبرة",
    "skills-title": "مهاراتي",
    "portfolio-title": "أعمالي",
    "blog-title": "المدونة",
    "contact-title": "اتصل بي",
    "contact-form": "نموذج الاتصال",
    "form-name": "الاسم الكامل",
    "form-email": "البريد الإلكتروني",
    "form-message": "رسالتك",
    "form-send": "إرسال",
    "download-cv": "تحميل السيرة",
    "show-contacts": "إظهار جهات الاتصال",
    "email": "البريد",
    "phone": "الهاتف",
    "birthday": "تاريخ الميلاد",
    "location": "الموقع",
    "filter-all": "الكل",
    "filter-web-design": "تصميم ويب",
    "filter-apps": "تطبيقات",
    "filter-web-dev": "تطوير ويب",
    "filter-networks": "مختبرات الشبكات",
    "filter-project": "مشروع",
    "select-category": "اختر الفئة",
    "skill-flutter": "تطوير تطبيقات الجوال (Flutter)",
    "skill-networks": "الشبكات والتكوين",
    "skill-linux": "إدارة أنظمة لينكس والخوادم",
    "skill-pentest": "اختبار اختراق الشبكات اللاسلكية",
    "skill-sys-design": "تصميم نظم المعلومات",
    "skill-store": "إدارة المخازن والمخزون"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      if (el.hasAttribute("placeholder")) {
        el.setAttribute("placeholder", t[key]);
      } else {
        el.textContent = t[key];
      }
    }
  });

  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    applyLanguage(this.dataset.lang);
  });
});

applyLanguage(currentLang);