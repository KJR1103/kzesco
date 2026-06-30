import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import photo1 from "@/assets/photo1.jpeg.asset.json";
import photo2 from "@/assets/photo2.jpeg.asset.json";
import photo3 from "@/assets/photo3.jpeg.asset.json";
import photo4 from "@/assets/photo4.jpeg.asset.json";
import photo5 from "@/assets/photo5.jpeg.asset.json";
import photo6 from "@/assets/photo6.jpeg.asset.json";
import photo7 from "@/assets/photo7.jpeg.asset.json";
import photo8 from "@/assets/photo8.jpeg.asset.json";
import photo9 from "@/assets/photo9.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KZESCO — Créatrice de contenu UGC" },
      { name: "description", content: "Contenu UGC authentique pour votre marque — naturel, élégant, humain." },
    ],
  }),
  component: Index,
});

const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9].map(p => p.url);

const marqueeWords = ["UGC", "Lifestyle", "Beauté", "Mode", "Storytelling", "Créativité", "Authenticité", "Social Media"];

const portfolio = [
  { img: photos[1], tag: "Beauté", title: "Routine du matin", desc: "Un face caméra sensoriel autour d'un soin visage." },
  { img: photos[2], tag: "Unboxing", title: "Soin signature", desc: "Un déballage cinématographique mettant en valeur le packaging." },
  { img: photos[4], tag: "Mode", title: "Vestiaire d'été", desc: "Lookbook en mouvement pour une marque de prêt-à-porter." },
  { img: photos[6], tag: "Skincare", title: "Sérum dermato", desc: "Démonstration produit, gestes lents, lumière chaude." },
  { img: photos[5], tag: "Lifestyle", title: "Rituel cocooning", desc: "Scène de vie autour de soins quotidiens." },
  { img: photos[8], tag: "Mode", title: "Allure tailoring", desc: "Storytelling éditorial autour d'un blazer." },
];

const services = ["UGC", "Face caméra", "Unboxing", "Lifestyle", "Beauty", "Mode", "Storytelling", "Tutoriel", "Voice-over", "Photographie produit", "Montage", "Contenu vertical"];

const compare = [
  ["Ton de l'image", "Mise en scène publicitaire", "Naturel, vécu"],
  ["Perception", "Promotion assumée", "Recommandation sincère"],
  ["Engagement", "Souvent passif", "Conversations, partages"],
  ["Coût visuel", "Production lourde", "Léger, agile"],
  ["Adaptabilité", "Lente à itérer", "Plusieurs variations"],
];

const process = [
  ["Premier échange", "On apprend à se connaître et je comprends votre besoin."],
  ["Compréhension de votre marque", "J'étudie votre univers, votre ton et vos objectifs."],
  ["Réception du produit", "Le produit arrive, je prépare le shooting."],
  ["Création du contenu", "Tournage en studio, soin du cadre et de la lumière."],
  ["Validation", "Vous recevez un aperçu et nous ajustons ensemble."],
  ["Livraison", "Fichiers livrés, prêts à être publiés."],
];

const faq = [
  ["Comment se déroule une collaboration ?", "Nous échangeons d'abord pour cerner votre projet, puis je crée un contenu sur mesure que nous validons ensemble avant la livraison finale."],
  ["Travaillez-vous à distance ?", "Oui, le produit m'est envoyé puis je tourne en studio. Tout se gère par message ou visio."],
  ["Puis-je fournir un script ?", "Bien sûr. Je peux aussi proposer un angle créatif basé sur votre brief."],
  ["Faites-vous le montage ?", "Oui, livraison montée prête à publier, ou rushes bruts si vous préférez."],
  ["Quels formats livrez-vous ?", "Vertical 9:16 pour TikTok/Reels, carré 1:1 et horizontal sur demande."],
];

function Section({ id, n, label, children }: { id?: string; n: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="w-full px-4 sm:px-6 lg:px-12 py-20 sm:py-28 max-w-[1400px] mx-auto">
      <div className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-6">{n} — {label}</div>
      {children}
    </section>
  );
}

function Index() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 h-14 flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-xl tracking-widest shrink-0">KZESCO</a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#galerie" className="hover:text-foreground transition">Galerie</a>
            <a href="#portfolio" className="hover:text-foreground transition">Portfolio</a>
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#processus" className="hover:text-foreground transition">Processus</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a href="#contact" className="text-xs uppercase tracking-widest border border-primary/60 text-primary px-3 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition shrink-0">
            Discutons
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative w-full min-h-screen flex items-end overflow-hidden pt-20">
        <img src={photos[0]} alt="Portrait de KZESCO" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Créatrice de contenu UGC · Studio</div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Créer du contenu<br/>qui attire.<br/><em className="text-primary not-italic">Créer des émotions.</em>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground text-base sm:text-lg">
            Des vidéos qui ressemblent à de vraies recommandations — pensées pour inspirer confiance, faire ressentir et donner envie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#galerie" className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition">Découvrir mon univers</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-border text-sm uppercase tracking-widest hover:bg-secondary transition">Discutons</a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full overflow-hidden border-y border-border/60 bg-secondary/40 py-6">
        <div className="marquee flex gap-12 whitespace-nowrap w-max">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="font-display text-2xl sm:text-3xl text-muted-foreground">{w} <span className="text-primary/60 mx-2">✦</span></span>
          ))}
        </div>
      </div>

      {/* Une nouvelle voix */}
      <Section n="01" label="Une nouvelle voix">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">Une nouvelle voix pour votre marque.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Les consommateurs ne croient plus aux publicités classiques. Ils écoutent des voix humaines, regardent des visages familiers, suivent des créatrices qui leur ressemblent.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Je crée du contenu UGC pensé pour ressembler à une vraie recommandation — naturel, sincère, élégant — pour installer durablement la confiance autour de votre marque.
            </p>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={photos[3]} alt="KZESCO en shooting" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest bg-background/80 backdrop-blur px-3 py-2 rounded-full">Studio · 2026</div>
          </div>
        </div>
      </Section>

      {/* À propos */}
      <Section n="02" label="À propos">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img src={photos[4]} alt="Portrait éditorial" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">Un regard, une intuition, beaucoup de soin.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Je suis KZESCO. Ce qui me guide n'est pas un chiffre, c'est une passion : capter une émotion, sublimer un produit, raconter une histoire en quelques secondes.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mon travail repose sur la créativité, la justesse du cadre, et un vrai goût pour le détail. Chaque shooting est pensé comme une mini-campagne.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Créativité", "Esthétique", "Détail", "Sincérité"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-widest text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Galerie */}
      <Section id="galerie" n="03" label="Galerie">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl sm:text-5xl">Un univers visuel.</h2>
          <p className="text-muted-foreground max-w-md text-sm">Une sélection d'images shootées en studio. Cliquez pour ouvrir en plein écran.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((p, i) => (
            <button key={i} onClick={() => setLightbox(p)} className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
              <img src={p} alt={`Visuel KZESCO ${i+1}`} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition text-xs uppercase tracking-widest text-primary">Voir</span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="portfolio" n="04" label="Portfolio">
        <h2 className="font-display text-3xl sm:text-5xl mb-10">Styles de contenus.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-[10px] uppercase tracking-widest text-primary mb-2">{p.tag}</div>
                <h3 className="font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" n="05" label="Services">
        <h2 className="font-display text-3xl sm:text-5xl mb-10">Ce que je peux créer pour vous.</h2>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {services.map(s => (
            <span key={s} className="px-4 py-2 rounded-full border border-border text-sm hover:border-primary hover:text-primary transition cursor-default">{s}</span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="uppercase tracking-widest text-xs">Plateformes</span>
          {["TikTok", "Instagram", "Facebook"].map(p => (
            <span key={p} className="px-3 py-1.5 rounded-full bg-secondary">{p}</span>
          ))}
        </div>
      </Section>

      {/* Comparaison */}
      <Section n="06" label="Pourquoi le UGC ?">
        <h2 className="font-display text-3xl sm:text-5xl mb-10">L'authentique a remplacé la publicité.</h2>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] text-xs sm:text-sm">
            <div className="p-3 sm:p-5 bg-secondary/60 font-medium"></div>
            <div className="p-3 sm:p-5 bg-secondary/60 font-medium uppercase tracking-widest text-xs">Publicité</div>
            <div className="p-3 sm:p-5 bg-primary/10 font-medium uppercase tracking-widest text-xs text-primary">UGC</div>
            {compare.map((row, i) => (
              <div key={i} className="contents">
                <div className="p-3 sm:p-5 border-t border-border text-muted-foreground">{row[0]}</div>
                <div className="p-3 sm:p-5 border-t border-border">{row[1]}</div>
                <div className="p-3 sm:p-5 border-t border-border text-primary/90">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Processus */}
      <Section id="processus" n="07" label="Processus">
        <h2 className="font-display text-3xl sm:text-5xl mb-12">Comment se déroule une collaboration.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map(([t, d], i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition">
              <div className="text-primary font-display text-3xl mb-3">0{i+1}</div>
              <h3 className="font-display text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Inspirations */}
      <Section n="08" label="Inspirations">
        <h2 className="font-display text-3xl sm:text-5xl mb-4">Des collaborations que j'aimerais réaliser.</h2>
        <p className="text-muted-foreground max-w-xl mb-10">Quelques univers de marques qui m'inspirent.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Maison", "Atelier", "Studio", "Édition", "Maison N°4", "Parfumerie", "Soin", "Marque"].map(b => (
            <div key={b} className="aspect-[3/2] grid place-items-center border border-border rounded-xl text-muted-foreground font-display text-lg sm:text-xl hover:border-primary hover:text-primary transition">{b}</div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section n="09" label="FAQ">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl">Les essentiels.</h2>
            <p className="mt-4 text-muted-foreground">Tout ce qu'il faut savoir avant une première collaboration.</p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faq.map(([q, a], i) => (
              <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-5 group">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg sm:text-xl">{q}</span>
                  <span className="text-primary text-2xl shrink-0">{openFaq === i ? "−" : "+"}</span>
                </div>
                {openFaq === i && <p className="mt-3 text-sm text-muted-foreground">{a}</p>}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="relative w-full overflow-hidden">
        <img src={photos[7]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">10 — Contact</div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl leading-tight">Donnons vie à votre prochaine campagne.</h2>
              <p className="mt-6 text-muted-foreground">Parlez-moi de votre marque, de votre produit, de votre intention.</p>
              <div className="mt-8 space-y-3 text-sm">
                {[["Instagram", "@kzesco"], ["TikTok", "@kzesco"], ["WhatsApp", "Sur demande"], ["Email", "hello@kzesco.com"]].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-3 border-b border-border max-w-md">
                    <span className="uppercase tracking-widest text-xs text-muted-foreground">{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-4 p-6 sm:p-8 rounded-2xl bg-card/80 backdrop-blur border border-border" onSubmit={(e) => { e.preventDefault(); alert("Merci ! Je reviens vers vous très vite."); }}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Nom" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm" />
              </div>
              <input placeholder="Marque" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm" />
              <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm">
                <option>Type de projet</option>
                <option>UGC Beauté / Skincare</option>
                <option>UGC Mode / Lifestyle</option>
                <option>Unboxing</option>
                <option>Voice-over / Tutoriel</option>
                <option>Autre</option>
              </select>
              <textarea required placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm resize-none" />
              <button className="w-full py-3 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full overflow-hidden">
        <img src={photos[8]} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Prochaine campagne</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight">
            Un contenu qui <em className="text-primary not-italic">capte l'attention.</em>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Donnons vie à votre prochaine campagne grâce à un contenu authentique qui inspire confiance.
          </p>
          <a href="#contact" className="inline-block mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:opacity-90 transition">
            Me contacter
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-xs text-muted-foreground">
        © 2026 KZESCO — Tous droits réservés.
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex items-center justify-center p-4 cursor-zoom-out">
          <img src={lightbox} alt="" className="max-w-full max-h-full object-contain rounded-lg" />
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-secondary border border-border grid place-items-center text-xl">×</button>
        </div>
      )}
    </div>
  );
}
