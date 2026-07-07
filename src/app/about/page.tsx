import FadeIn from '@/components/FadeIn'
import { getGitHubStats } from '@/lib/github'

function RepoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 opacity-50"
    >
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5Z" />
    </svg>
  )
}

const langDot: Record<string, string> = {
  ts: '#3178c6',
  html: '#e34c26',
  js: '#f1e05a',
}

const pillars = [
  {
    k: 'Strategy',
    t: 'Partnerships, distribution, GTM architecture, positioning, and the operating model that turns early traction into a repeatable growth engine.',
  },
  {
    k: 'Build',
    t: 'Operating systems shipped as code with agents, skills, internal tools, brand guides, event platforms, and the occasional public site.',
  },
  {
    k: 'Collaborate',
    t: 'Operator-in-the-loop. Hands on alongside your team, within your community and with strategic partners.',
  },
]

const systems = [
  'Sales playbooks',
  'Event operating systems',
  'Community-to-pipeline engines',
  'Prospect research skills',
  'Partner ecosystems',
  'Company foundation',
  'Resource centers',
  'GTM workflows',
]

const repos = [
  {
    name: 'demo-night',
    desc: 'Demo Night at NYTechWeek. Startups, prizes, tasty bites. Event page built and deployed end-to-end.',
    lang: 'html',
    langLabel: 'HTML',
    href: 'https://github.com/Missmoontaxi/demo-night',
    live: true,
  },
  {
    name: 'imagination-layer',
    desc: 'Experience site for ImaginationLayer. Hosted event at FOST global conference in NYC.',
    lang: 'html',
    langLabel: 'HTML',
    href: 'https://github.com/Missmoontaxi/imagination-layer',
    live: true,
  },
  {
    name: 'moontaxi-lab',
    desc: 'This. GTM + scale ops advisory practice for AI-native companies.',
    lang: 'ts',
    langLabel: 'TypeScript',
    href: 'https://github.com/Missmoontaxi/moontaxi-lab',
    live: false,
  },
  {
    name: 'paula-site',
    desc: 'The personal site behind the Lab. Next.js + Tailwind + Vercel.',
    lang: 'ts',
    langLabel: 'TypeScript',
    href: 'https://www.paulamcmahon.com',
    live: true,
  },
  {
    name: 'MemeMe',
    desc: 'Daily joy. Because sometimes that’s the whole point.',
    lang: 'js',
    langLabel: 'JavaScript',
    href: 'https://github.com/Missmoontaxi/MemeMe',
    live: false,
  },
  {
    name: 'WeddingDay',
    desc: 'A wedding ceremony page, built and hosted for the day.',
    lang: 'html',
    langLabel: 'HTML',
    href: 'https://www.moontaxilab.com/peanut',
    live: false,
  },
]

const labCards = [
  { label: '// project_001', status: 'status: building' },
  { label: '// project_002', status: 'status: early' },
  { label: '// project_003', status: 'status: thinking' },
]

const stack = [
  'Claude Code',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Vercel',
  'Lovable',
  'MCP',
  'n8n',
  'Notion',
  'Attio',
  'Codex',
]

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-8 flex items-center gap-3 font-mono text-sm sm:text-base uppercase tracking-[0.14em] text-lab-text">
      {children}
      <span className="h-px flex-1 bg-lab-border" />
    </p>
  )
}

export default async function About() {
  const githubStats = await getGitHubStats()
  const signalStats = [
    { n: githubStats.contributions, l: 'contributions in 2026' },
    { n: githubStats.activeRepos, l: 'active repositories' },
  ]

  return (
    <>
      <main className="mx-auto max-w-[860px] px-5 sm:px-8">
        {/* HERO */}
        <section className="border-b border-lab-borderlt pb-[4.5rem] pt-[6.5rem] sm:pt-[8.5rem]">
          <p className="mb-7 flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-honey">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-honey" />
            AI-native operating studio
          </p>
          <h1 className="mb-7 text-[clamp(2.6rem,7vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
            Growth strategy.
            <br />
            Scale ops.
            <br />
            Build.
          </h1>
          <p className="mb-2.5 max-w-[660px] text-[clamp(1.1rem,2.5vw,1.35rem)] leading-[1.55] text-lab-text">
            Helping <em className="not-italic text-honey">AI-native companies</em> turn early
            traction into durable growth.
          </p>
          <p className="mb-10 text-base italic text-lab-muted">
            Working alongside leaders and founders, not from a deck.
          </p>
          <div className="flex flex-wrap gap-2">
            {['GTM Architecture', 'Ecosystem OS', 'Operator-in-the-loop'].map((t) => (
              <span
                key={t}
                className="rounded-[3px] border border-lab-border px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-lab-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* WHAT THE LAB DOES */}
        <FadeIn className="border-b border-lab-borderlt py-[4.5rem]">
          <SectionLabel>{'// what the lab does'}</SectionLabel>
          <ul className="flex flex-col gap-[1.4rem]">
            {pillars.map((p) => (
              <li key={p.k} className="flex items-start gap-4">
                <span className="mt-0.5 shrink-0 font-mono text-sm text-honey">→</span>
                <span className="text-base leading-[1.5] text-lab-text">
                  <span className="font-medium text-honey">{p.k}.</span> {p.t}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* REPRESENTATIVE SYSTEMS */}
        <FadeIn className="border-b border-lab-borderlt py-[4.5rem]">
          <SectionLabel>{'// representative systems'}</SectionLabel>
          <p className="mb-7 max-w-[560px] text-[0.95rem] leading-[1.6] text-lab-muted">
            The kind of AI-native operating systems and workflows the Lab builds. Specifics stay
            confidential, these are the patterns.
          </p>
          <div className="flex flex-wrap gap-2">
            {systems.map((s) => (
              <span
                key={s}
                className="rounded-[5px] border border-lab-border bg-lab-surface px-3 py-2 font-mono text-[0.75rem] text-lab-text"
              >
                {s}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* SELECTED ARTIFACTS */}
        <FadeIn className="border-b border-lab-borderlt py-[4.5rem]">
          <SectionLabel>{'// selected artifacts'}</SectionLabel>
          <p className="mb-7 max-w-[560px] text-[0.95rem] leading-[1.6] text-lab-muted md:max-w-none md:whitespace-nowrap">
            Public artifacts, event platforms, sites, and tools the Lab has shipped and deployed.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[0.9rem]">
            {repos.map((repo) => {
              const inner = (
                <>
                  <div
                    className={`mb-2 flex items-center gap-1.5 font-mono text-[0.82rem] ${
                      repo.href ? 'text-honey' : 'text-lab-muted'
                    }`}
                  >
                    <RepoIcon />
                    {repo.name}
                  </div>
                  <p
                    className={`mb-4 flex-1 text-[0.83rem] leading-[1.5] ${
                      repo.href ? 'text-lab-text' : 'text-lab-muted'
                    }`}
                  >
                    {repo.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5 font-mono text-[0.72rem] text-lab-muted">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: langDot[repo.lang] }}
                      />
                      {repo.langLabel}
                    </span>
                    {repo.live && (
                      <span className="ml-auto flex items-center gap-1 font-mono text-[0.68rem] text-lab-green">
                        <span className="h-1.5 w-1.5 animate-blink-live rounded-full bg-lab-green" />
                        live
                      </span>
                    )}
                  </div>
                </>
              )

              const base =
                'flex flex-col rounded-[7px] border p-[1.2rem_1.4rem_1.1rem] transition-colors'

              return repo.href ? (
                <a
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener"
                  className={`${base} border-lab-border bg-lab-surface hover:border-lab-dim hover:bg-lab-surface2`}
                >
                  {inner}
                </a>
              ) : (
                <div key={repo.name} className={`${base} border-lab-border bg-lab-surface`}>
                  {inner}
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* IN THE LAB */}
        <FadeIn className="border-b border-lab-borderlt py-[4.5rem]">
          <SectionLabel>{'// in the lab'}</SectionLabel>
          <p className="mb-7 text-[0.9rem] italic leading-[1.6] text-lab-muted">
            Some things are in motion. Not ready to surface. Experiments, tools, and a few
            things that don’t have names yet.
          </p>
          <div className="mb-6 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[0.9rem]">
            {labCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[7px] border border-lab-border bg-lab-surface p-[1.2rem_1.4rem] opacity-55"
              >
                <p className="mb-3.5 font-mono text-[0.65rem] tracking-[0.1em] text-lab-dim">
                  {card.label}
                </p>
                <div className="mb-[0.45rem] h-[13px] w-[85%] rounded-[2px] bg-lab-border" />
                <div className="mb-[0.45rem] h-[13px] w-[65%] rounded-[2px] bg-lab-border" />
                <div className="mt-2.5 h-[9px] w-[45%] rounded-[2px] bg-lab-border" />
                <p className="mt-4 flex items-center gap-1 font-mono text-[0.68rem] text-lab-dim">
                  {card.status}
                  <span className="animate-cursor-blink">_</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono text-[0.78rem] text-lab-dim">
            →{' '}
            <a
              href="https://github.com/Missmoontaxi"
              target="_blank"
              rel="noopener"
              className="border-b border-lab-border text-lab-dim transition-colors hover:border-lab-muted hover:text-lab-muted"
            >
              github.com/Missmoontaxi
            </a>{' '}
            for what’s public. The rest stays in the lab.
          </p>
        </FadeIn>

        {/* SIGNAL */}
        <FadeIn className="border-b border-lab-borderlt py-[4.5rem]">
          <SectionLabel>{'// signal'}</SectionLabel>
          <a
            href="https://github.com/Missmoontaxi"
            target="_blank"
            rel="noopener"
            className="flex flex-wrap items-center overflow-hidden rounded-[7px] border border-lab-border bg-lab-surface transition-colors hover:border-lab-dim"
          >
            {signalStats.map((s) => (
              <div
                key={s.l}
                className="flex flex-1 flex-col gap-1 border-b border-lab-borderlt p-[1.6rem_2rem] sm:border-b-0 sm:border-r"
              >
                <span className="font-mono text-[1.9rem] font-medium leading-none text-honey">
                  {s.n}
                </span>
                <span className="text-[0.78rem] text-lab-muted">{s.l}</span>
              </div>
            ))}
            <span className="flex w-full items-center gap-2 whitespace-nowrap border-lab-borderlt p-[1.6rem_1.75rem] font-mono text-[0.78rem] text-honey sm:w-auto sm:border-l">
              github.com/Missmoontaxi →
            </span>
          </a>
        </FadeIn>

        {/* COLLABORATE */}
        <FadeIn className="py-[4.5rem]">
          <SectionLabel>{'// collaborate'}</SectionLabel>
          <h2 className="mb-3 text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold tracking-[-0.02em] text-white">
            Bring the Lab into your plan.
          </h2>
          <p className="mb-7 text-[0.95rem] leading-[1.6] text-lab-muted">
            Advisory, embedded operating work, or a system that needs to ship. The Lab works best
            with AI-native teams who have early traction and want a scale operator in the build with
            them shaping strategy, standing up the systems, and staying in the loop until it runs. If
            that’s where you are, start here.
          </p>
          <div className="mb-12 flex flex-wrap gap-2.5">
            <a
              href="mailto:hello@paulamcmahon.com"
              className="inline-flex items-center gap-2 rounded-[4px] border border-honey/40 bg-honey/[0.08] px-4 py-2.5 font-mono text-[0.78rem] text-honey transition-colors hover:border-honey hover:bg-honey/[0.14]"
            >
              Start a conversation →
            </a>
          </div>
          <h3 className="mb-3.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-lab-muted">
            Stack the Lab runs on
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-[3px] border border-lab-border bg-lab-surface px-2.5 py-1 font-mono text-[0.68rem] text-lab-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto flex max-w-[860px] flex-wrap items-center justify-between gap-5 border-t border-lab-borderlt px-5 pb-14 pt-10 sm:px-8">
        <a href="/" className="font-mono text-[0.78rem] text-lab-dim">
          moontaxi lab © 2026
        </a>
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://www.paulamcmahon.com"
            target="_blank"
            rel="noopener"
            className="font-mono text-[0.78rem] text-honey transition-opacity hover:opacity-80"
          >
            Run by Paula McMahon →
          </a>
          <ul className="flex gap-6">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paulamcmahon' },
              { label: 'GitHub', href: 'https://github.com/Missmoontaxi' },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="text-[0.82rem] text-lab-muted transition-colors hover:text-lab-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  )
}
