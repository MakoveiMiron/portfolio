const rootStyles = getComputedStyle(document.documentElement);
const bg = rootStyles.getPropertyValue("--card").trim();
const text = rootStyles.getPropertyValue("--text").trim();
const border = rootStyles.getPropertyValue("--border").trim();
const radius = rootStyles.getPropertyValue("--radius").trim();
const shadow = rootStyles.getPropertyValue("--shadow").trim();
function cssVar(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
let currentLang = "en";

const translations = {
      en: {
        title: "Miron Makovei",
        eyebrow: "AUTOMATE • INTEGRATE • SCALE",
        heroTitle: "Custom n8n Workflows for Busy Teams",
        heroSubtitle: "I design, build and maintain automations that save hours every week. Elegant solutions, zero fluff — and a free consultation to get you started.",
        cta1: "Tell me what you need",
        card1Title: "Custom Workflow Design",
        card1Text: "I design reliable automations tailored to your tools and goals — from simple triggers to multi-step processes.",
        card2Title: "Integrations that click",
        card2Text: "Connect CRMs, spreadsheets, forms, webhooks and APIs. If it talks HTTP, we can make it work together.",
        card3Title: "Care & Monitoring",
        card3Text: "Health checks, error alerts and docs so your workflows remain transparent and easy to maintain.",
        processTitle: "How the Process Works",
        step1Title: "Discovery & Planning",
        step1Text: "We discuss your goals, current tools, and identify automation opportunities.",
        step2Title: "Design & Build",
        step2Text: "I make the custom DEMO n8n workflow, tailored to your needs.",
        step3Title: "Testing & Handover",
        step3Text: "Workflows are tested and delivered with monitoring setup.",  
        contactTitle: "Contact Me",
        contactText: "Have a workflow idea? Let's discuss how to save hours of work with custom automation.",
        formName: "Your Name",
        formEmail: "Your Email",
        formMessage: "Your Message",
        formSubmit: "Send Message",
        footerName: "Miron Makovei",
        toastSuccess: "Message sent successfully!",
        toastError: "Failed to send message. Please try again later."
      },
      hu: {
        title: "Makovei Miron",
        eyebrow: "AUTOMATIZÁLJ • INTEGRÁLJ • NÖVEKEDJ",
        heroTitle: "Egyedi n8n munkafolyamatok elfoglalt csapatoknak",
        heroSubtitle: "Egyedi munkafolyamatokat tervezek, építek és tartok karban, amelyek órákat spórolnak meg Önnek. Elegáns megoldások, sallang nélkül — és egy ingyenes konzultáció, hogy elinduljunk.",
        cta1: "Mondja el, mire van szüksége",
        card1Title: "Egyedi munkafolyamat-tervezés",
        card1Text: "Megbízható automatizált folyamatokat tervezek az Ön eszközeihez és céljaihoz igazítva — egyszerű triggertől a többlépéses folyamatig.",
        card2Title: "Integrációk, amelyek működnek",
        card2Text: "Kapcsoljon össze CRM-eket, táblázatokat, űrlapokat, webhookokat és API-kat. Ha HTTP alapú akkor menni fog.",
        card3Title: "Felügyelet és karbantartás",
        card3Text: "Állapotellenőrzés, hibariasztások és dokumentáció, hogy a munkafolyamatok átláthatóak és könnyen karbantarthatóak maradjanak.",
        processTitle: "Hogyan működik a folyamat",
        step1Title: "Felmérés és tervezés",
        step1Text: "Megbeszéljük céljait, jelenlegi eszközeit, és azonosítjuk az automatizálási lehetőségeket.",
        step2Title: "Tervezés és építés",
        step2Text: "Elkészítem a DEMO munkafolyamatot az Ön igényeire szabva.",
        step3Title: "Tesztelés és átadás",
        step3Text: "A munkafolyamatot bemutataom majd beépítem az Ön rendszerébe",
        contactTitle: "Kapcsolatfelvétel",
        contactText: "Van egy munkafolyamat-ötlete? Beszéljük meg, hogyan spórolhat meg munkaórákat egyedi automatizálással.",
        formName: "Az Ön neve",
        formEmail: "Az Ön email címe",
        formMessage: "Az Ön üzenete",
        formSubmit: "Üzenet küldése",
        footerName: "Makovei Miron",
        toastSuccess: "Üzenet sikeresen elküldve!",
        toastError: "Az üzenetet nem sikerült elküldeni. Kérjük, próbálja meg később."
      }
    };

    const switchLang = (lang) => {
      const t = translations[lang];
      currentLang = lang;
      document.documentElement.lang = lang;
      document.getElementById("site-title").textContent = t.title;
      document.getElementById("hero-eyebrow").textContent = t.eyebrow;
      document.getElementById("hero-title").textContent = t.heroTitle;
      document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
      document.getElementById("cta-1").textContent = t.cta1;
      document.getElementById("card1-title").textContent = t.card1Title;
      document.getElementById("card1-text").textContent = t.card1Text;
      document.getElementById("card2-title").textContent = t.card2Title;
      document.getElementById("card2-text").textContent = t.card2Text;
      document.getElementById("card3-title").textContent = t.card3Title;
      document.getElementById("card3-text").textContent = t.card3Text;
      document.getElementById("process-title").textContent = t.processTitle;
      document.getElementById("step1-title").textContent = t.step1Title;
      document.getElementById("step1-text").textContent = t.step1Text;
      document.getElementById("step2-title").textContent = t.step2Title;
      document.getElementById("step2-text").textContent = t.step2Text;
      document.getElementById("step3-title").textContent = t.step3Title;
      document.getElementById("step3-text").textContent = t.step3Text;
      document.getElementById("contact-title").textContent = t.contactTitle;
      document.getElementById("contact-text").textContent = t.contactText;
      document.getElementById("form-name").placeholder = t.formName;
      document.getElementById("form-email").placeholder = t.formEmail;
      document.getElementById("form-message").placeholder = t.formMessage;
      document.getElementById("form-submit").textContent = t.formSubmit;
      document.getElementById("footer-name").textContent = t.footerName;

      document.getElementById("lang-en").setAttribute("aria-pressed", lang === "en");
      document.getElementById("lang-hu").setAttribute("aria-pressed", lang === "hu");
    };

    document.getElementById("lang-en").addEventListener("click", () => switchLang("en"));
    document.getElementById("lang-hu").addEventListener("click", () => switchLang("hu"));

 //emailjs.init({publicKey: "ZIDCvq_z1aaxYXD13"});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

     emailjs.sendForm('service_7shkhou', 'template_xpdcguy', form)
  .then(function(response) {
      console.log('Success:', response);
      Toastify({
          text: translations[currentLang].toastSuccess,
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
              background: "var(--card)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              padding: "12px 16px",
              fontWeight: "600",
          },
          stopOnFocus: true,
      }).showToast();
      form.reset();
  }, function(error) {
      console.error('Error:', error);
      Toastify({
          text: translations[currentLang].toastError,
          duration: 3000,
          gravity: "top",
          position: "right",
          style: {
              background: "var(--card)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              boxShadow: "var(--shadow)",
              padding: "12px 16px",
              fontWeight: "600",
          },
          stopOnFocus: true,
      }).showToast();
  });


});



