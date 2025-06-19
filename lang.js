
const translations = {
  fr: {
    title: "La marketplace nouvelle génération",
    subtitle: "Macahoo combine NFT, crypto, et gamification pour créer un espace d’échange plus fiable et attractif.",
    ctaJoin: "Rejoindre la communauté",
    betaTitle: "🚀 Bêta bientôt disponible",
    betaText: "Participe à la version de test de Macahoo en avant-première et aide-nous à construire la meilleure marketplace communautaire !",
    subscribeBtn: "S’inscrire à la bêta",
    disclaimer: "Un lien d’inscription te sera envoyé par e-mail ou via Discord.",
    emailInput: "Ton adresse email"
  },
  en: {
    title: "The next-generation marketplace",
    subtitle: "Macahoo combines NFTs, crypto, and gamification to create a more trustworthy and dynamic exchange space.",
    ctaJoin: "Join the community",
    betaTitle: "🚀 Beta opening soon",
    betaText: "Join the early access beta and help us build the best community marketplace!",
    subscribeBtn: "Sign up for Beta",
    disclaimer: "A registration link will be sent via email or Discord.",
    emailInput: "Your email address"
  }
};

function switchLanguage(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;
  document.getElementById("ctaJoin").innerText = translations[lang].ctaJoin;
  document.getElementById("betaTitle").innerText = translations[lang].betaTitle;
  document.getElementById("betaText").innerText = translations[lang].betaText;
  document.getElementById("subscribeBtn").innerText = translations[lang].subscribeBtn;
  document.getElementById("disclaimer").innerText = translations[lang].disclaimer;
  document.getElementById("emailInput").placeholder = translations[lang].emailInput;
}
