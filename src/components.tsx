import { useState } from 'react';
import type { ReactNode } from 'react';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Brand() {
  return <a className="brand" href="#inicio" aria-label="Vértice Arquitetura — início"><svg viewBox="0 0 44 44" aria-hidden="true"><path d="M4 6 22 38 40 6M13 6l9 16L31 6" /></svg><span>vértice<small>ARQUITETURA</small></span></a>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><Brand /><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Fechar −' : 'Menu +'}</button><nav id="navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
    {[['O escritório', '#escritorio'], ['Serviços', '#servicos'], ['Portfólio', '#portfolio']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contato" onClick={() => setOpen(false)}>Vamos conversar <Arrow /></a>
  </nav></header>;
}

export function SectionHeading({ label, title, children }: { label: string; title: ReactNode; children?: ReactNode }) {
  const ids: Record<string, string> = { '02 / O QUE FAZEMOS': 'services-title', 'NOSSA MANEIRA DE PROJETAR': 'philosophy-title', '03 / PORTFÓLIO': 'portfolio-title', '04 / PERGUNTAS FREQUENTES': 'faq-title' };
  return <div className="section-heading"><p className="eyebrow">{label}</p><h2 id={ids[label]}>{title}</h2>{children && <p className="section-description">{children}</p>}</div>;
}

export function PhotoSpace({ image, alt = '', label, tone = 'warm', hero = false }: { image?: string; alt?: string; label: string; tone?: string; hero?: boolean }) {
  return <div className={`photo-space ${tone} ${hero ? 'hero-photo' : ''}`}>
    {image ? <img src={image} alt={alt} loading={hero ? 'eager' : 'lazy'} decoding="async" width="1200" height="1500" /> : <><div className="architecture-study" aria-hidden="true"><span className="study-wall" /><span className="study-door" /><span className="study-plinth" /><span className="study-line" /></div><div className="photo-caption"><span>ESPAÇO PARA FOTOGRAFIA REAL</span><small>{label}</small></div></>}
  </div>;
}
