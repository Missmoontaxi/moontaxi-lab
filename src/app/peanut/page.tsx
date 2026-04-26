import Image from 'next/image'
import styles from './peanut.module.css'
import BackToTop from './BackToTop'

// Refined gold fan ornament — single fleuron used as a transition between
// the hero photo and the title. Replaces the previous repeating fan banner.
function FanOrnament() {
  return (
    <div className={styles.fanOrnament} aria-hidden="true">
      <svg viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="55" x2="100" y2="55" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <line x1="180" y1="55" x2="280" y2="55" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
        <path d="M 110 55 Q 140 28 170 55" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.45" />
        <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <line x1="140" y1="58" x2="140" y2="20" />
          <line x1="140" y1="58" x2="127" y2="22" />
          <line x1="140" y1="58" x2="153" y2="22" />
          <line x1="140" y1="58" x2="116" y2="28" />
          <line x1="140" y1="58" x2="164" y2="28" />
          <line x1="140" y1="58" x2="108" y2="36" />
          <line x1="140" y1="58" x2="172" y2="36" />
        </g>
        <circle cx="140" cy="62" r="5.5" fill="currentColor" />
        <circle cx="138" cy="60.5" r="1.4" fill="#082520" opacity="0.5" />
      </svg>
    </div>
  )
}

// ====================================================================
// Component primitives — keep all the run-of-show building blocks here
// so script edits stay close to the content.
// ====================================================================

function Paula({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.paula}>
      <div className={styles.line}>{children}</div>
    </div>
  )
}

function Couple({ speaker, children }: { speaker: string; children: React.ReactNode }) {
  return (
    <div className={styles.couple} data-speaker={speaker}>
      <div className={styles.line}>{children}</div>
    </div>
  )
}

function Stage({ children }: { children: React.ReactNode }) {
  return <div className={styles.stage}>{children}</div>
}

function MusicCue({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.music}>
      <div>
        <span className={styles.musicCueLabel}>{label}</span>
        <span className={styles.musicCueText}>{children}</span>
      </div>
    </div>
  )
}

function Track({ children }: { children: React.ReactNode }) {
  return <span className={styles.track}>{children}</span>
}

function Pause({ children = 'pause' }: { children?: React.ReactNode }) {
  return <div className={styles.pause}>{children}</div>
}

function Reaction({ children }: { children: React.ReactNode }) {
  return <div className={styles.reaction}>{children}</div>
}

function LegalCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.legal}>
      <div>
        <span className={styles.legalLabel}>Legally required</span>
        {children}
      </div>
    </div>
  )
}

function Section({
  num,
  title,
  duration,
  id,
  children,
}: {
  num: string
  title: React.ReactNode
  duration: string
  id: string
  children: React.ReactNode
}) {
  return (
    <article className={styles.section} id={id}>
      <header className={styles.sectionHeader}>
        <div className={styles.sectionNumber}>{num}</div>
        <div className={styles.sectionTitle}>{title}</div>
        <div className={styles.sectionDuration}>{duration}</div>
      </header>
      {children}
    </article>
  )
}

function Placeholder({
  tag,
  title,
  children,
  preview,
}: {
  tag: string
  title: string
  children?: React.ReactNode
  preview?: React.ReactNode
}) {
  return (
    <div className={styles.placeholder}>
      <div className={styles.placeholderTag}>{tag}</div>
      <div className={styles.placeholderTitle}>{title}</div>
      {children && <div className={styles.placeholderBody}>{children}</div>}
      {preview && <div className={styles.placeholderPreview}>{preview}</div>}
    </div>
  )
}

function Callout({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className={styles.callout}>
      {label && <strong className={styles.calloutLabel}>{label}</strong>}
      {children}
    </div>
  )
}

// ====================================================================
// Page
// ====================================================================

export default function PeanutPage() {
  return (
    <div className={styles.peanut}>
      {/* Hero photo */}
      <div className={styles.heroPhoto}>
        <Image
          src="/peanut/hero.webp"
          alt="Paddy and Amanda peeking out from behind plants"
          width={2880}
          height={1280}
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>
      <div className={styles.goldRibbon} />

      {/* Title strip */}
      <section className={styles.rosLabel}>
        <FanOrnament />
        <h1 className={styles.coupleTitle}>Paddy &amp; Amanda</h1>
        <div className={styles.coupleSubtitle}>May 2, 2026 · Madison, WI</div>
        <div className={styles.eyebrow}>Ceremony</div>
        <h2>Run of Show</h2>
        <div className={styles.detailsStrip}>
          <div className={styles.detail}>
            <div className={styles.label}>Date</div>
            <div className={styles.value}>Saturday, May 2, 2026</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.label}>Ceremony</div>
            <div className={styles.value}>4:30 PM</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.label}>Venue</div>
            <div className={styles.value}>The Tinsmith · Madison, WI</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.label}>Officiant</div>
            <div className={styles.value}>Paula McMahon</div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* TOC */}
        <nav className={styles.toc} aria-label="Table of contents">
          <div className={styles.eyebrow}>Order of Events</div>
          <ol>
            <li><a href="#sec-0"><span>Ring Warming</span><span className={styles.duration}>pre-4:30</span></a></li>
            <li><a href="#sec-1"><span>Begin</span><span className={styles.duration}>~1 min</span></a></li>
            <li><a href="#sec-2"><span>Paddy&apos;s Entrance</span><span className={styles.duration}>~1 min</span></a></li>
            <li><a href="#sec-3"><span>Processional</span><span className={styles.duration}>3–5 min</span></a></li>
            <li><a href="#sec-4"><span>Media Moment</span><span className={styles.duration}>~30 sec</span></a></li>
            <li><a href="#sec-5"><span>Officiant Speech</span><span className={styles.duration}>~4 min</span></a></li>
            <li><a href="#sec-6"><span>Exchange of Vows</span><span className={styles.duration}>3–5 min</span></a></li>
            <li><a href="#sec-7"><span>Exchange of Rings</span><span className={styles.duration}>~2 min</span></a></li>
            <li><a href="#sec-8"><span>Pronouncement</span><span className={styles.duration}>~1 min</span></a></li>
            <li><a href="#sec-9"><span>First Kiss</span><span className={styles.duration}>the moment</span></a></li>
            <li><a href="#sec-10"><span>Closing Remarks</span><span className={styles.duration}>~30 sec</span></a></li>
            <li><a href="#sec-11"><span>Recessional</span><span className={styles.duration}>as long as it takes</span></a></li>
            <li><a href="#sec-12"><span>Marriage License</span><span className={styles.duration}>immediately after</span></a></li>
          </ol>
        </nav>

        {/* 0 — Ring Warming */}
        <Section num="00" title="Pre-ceremony · Ring Warming" duration="Before 4:30 PM" id="sec-0">
          <Stage>Guests are arriving and finding seats.</Stage>
          <Stage>Paula takes position at the front, center.</Stage>
          <Paula>
            &ldquo;Hello and welcome! Before we begin, I would like to introduce Sarah McMahon, Paddy and Amanda&apos;s
            sister-in-law, who is today&apos;s keeper of the rings. We&apos;re going to start with an Irish wedding
            tradition called the warming of the rings. This is to infuse the wedding bands that Paddy and Amanda will
            place on each other&apos;s finger today with all the love and good wishes of everyone here in this room. The
            rings will be passed around to each person — when it comes to you, please hold them and take a moment to
            think of some love and positivity for the couple, then pass it on to the next person.&rdquo;
          </Paula>
          <Stage>Sarah supervises the rings&apos; passage through seated guests.</Stage>
        </Section>

        {/* 1 — Begin */}
        <Section num="01" title="Begin" duration="~1 minute" id="sec-1">
          <Stage>Paula in position at the front, center.</Stage>
          <Paula>&ldquo;Good afternoon, friends, family, loved ones. Are we ready to get this magic started?&rdquo;</Paula>
          <Stage>Beat — read the room.</Stage>
          <Paula>
            &ldquo;The couple asked to not have your phones out during the ceremony. Allow me to introduce Olivia and
            Bryan, who will be doing a wonderful job taking photos and capturing all the great moments today, including
            guests in the audience. There will be a media moment early in the ceremony, once everyone is up here, where
            you can take pictures. After that, please put phones away for the rest of the ceremony.&rdquo;
          </Paula>
        </Section>

        {/* 2 — Paddy's Entrance */}
        <Section num="02" title={<>Paddy&apos;s Entrance</>} duration="~1 minute" id="sec-2">
          <Paula>&ldquo;OK. Let&apos;s begin.&rdquo;</Paula>
          <MusicCue label="Music starts · Paddy's entrance">
            <Track>Chateau Lobby</Track> by Father John Misty
          </MusicCue>
          <Stage>All grandparents are seated.</Stage>
          <Stage>Paddy McMahon walks up with Kimmie &amp; Bubba. Greets grandparents.</Stage>
          <MusicCue label="Music fades · Paddy's entrance">
            <Track>Chateau Lobby</Track> by Father John Misty fades out
          </MusicCue>
        </Section>

        {/* 3 — Processional */}
        <Section num="03" title="Processional" duration="3–5 minutes" id="sec-3">
          <Paula>&ldquo;Please welcome the wedding party.&rdquo;</Paula>
          <MusicCue label="Music starts · Wedding party">
            <Track>Dancing Queen</Track>
          </MusicCue>
          <ol className={styles.processionalList}>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/danny.webp" alt="Danny McMahon" width={40} height={40} />
                <Image src="/peanut/wedding/Libby.webp" alt="Libby Lou McMahon" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Danny McMahon with flower girl Libby Lou McMahon</span>
            </li>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/taylor.webp" alt="Taylor Morrow" width={40} height={40} />
                <Image src="/peanut/wedding/Katelyn.webp" alt="Katelyn Hoffman" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Taylor Morrow (Brother of Honor) with Katelyn Hoffman</span>
            </li>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/Alex.webp" alt="Alex Pogosky" width={40} height={40} />
                <Image src="/peanut/wedding/Jack.webp" alt="Jack Ries" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Alex Pogosky and Jack Ries</span>
            </li>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/Lu.webp" alt="Lu Corporan" width={40} height={40} />
                <Image src="/peanut/wedding/Lucas.webp" alt="Lucas Heyvaert" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Lu Corporan and Lucas Heyvaert</span>
            </li>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/Elizabeth.webp" alt="Elizabeth Heckmüller" width={40} height={40} />
                <Image src="/peanut/wedding/Krista.webp" alt="Krista Owens" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Elizabeth Heckmüller and Krista Owens</span>
            </li>
            <li>
              <div className={styles.processionalFaces}>
                <Image src="/peanut/wedding/Megan.webp" alt="Megan Meloon" width={40} height={40} />
                <Image src="/peanut/wedding/Bailey.webp" alt="Bailey O'Malley" width={40} height={40} />
              </div>
              <span className={styles.processionalText}>Megan Meloon and Bailey O&apos;Malley</span>
            </li>
          </ol>
          <MusicCue label="Music stops · Wedding party">
            <Track>Dancing Queen</Track> fades out
          </MusicCue>
          <Paula>&ldquo;Please rise.&rdquo;</Paula>
          <Stage>Guests stand.</Stage>
          <MusicCue label="Music starts · Bride's entrance">
            <Track>Archie, Marry Me</Track> by Alvvays · piano instrumental
          </MusicCue>
          <Stage>Amanda is escorted by both of her parents and proceeds up the aisle.</Stage>
          <Stage>Paddy steps forward to receive Amanda.</Stage>
          <Stage>Handshakes, hugs, kisses with Amanda&apos;s escort and family.</Stage>
          <MusicCue label="Music stops · Bride's entrance">
            <Track>Archie, Marry Me</Track> fades out
          </MusicCue>
        </Section>

        {/* 4 — Media Moment */}
        <Section num="04" title="Media Moment" duration="~30 seconds" id="sec-4">
          <Paula>&ldquo;OK, now is the time to capture the moment.&rdquo;</Paula>
          <Stage>Paddy and Amanda do a little pose.</Stage>
          <Paula>
            &ldquo;Remember to tuck those phones away for the rest of the ceremony. Please be seated and we&apos;ll get
            started.&rdquo;
          </Paula>
          <Stage>Guests sit.</Stage>
        </Section>

        {/* 5 — Officiant Speech */}
        <Section num="05" title="Officiant Speech" duration="~4 minutes" id="sec-5">
          <Paula>
            &ldquo;I&apos;m Paula McMahon, Paddy&apos;s aunt, batting coach and co-conspirator. I did get ordained for
            this, so for the next 20 minutes I&apos;ve got some real authority here.&rdquo;
          </Paula>
          <Paula>
            &ldquo;I&apos;m truly honored to stand here, surrounded by the people who have shaped Paddy and Amanda
            into who they are today. Thank you all for taking the time to be here. This is a very special day, and
            you are all part of the reason why.&rdquo;
          </Paula>
          <Placeholder tag="Coming from Paula" title="The speech lives here" />
          <Stage>Sarah collects rings and passes them to Best Man, Danny, ahead of the vows.</Stage>
        </Section>

        {/* 6 — Vows */}
        <Section num="06" title="Exchange of Vows" duration="3–5 minutes" id="sec-6">
          <Paula>
            &ldquo;Now we will hear words from the groom and the bride. Amanda, please start by sharing your
            vows.&rdquo;
          </Paula>
          <Couple speaker="Amanda">Amanda reads her previously written vows to Paddy.</Couple>
          <Pause>pause</Pause>
          <Paula>&ldquo;Paddy.&rdquo;</Paula>
          <Couple speaker="Paddy">Paddy reads his previously written vows to Amanda.</Couple>
          <Pause>pause · let the emotion settle</Pause>
          <Stage>As Paddy finishes, Best Man Danny McMahon prepares to present the rings.</Stage>
        </Section>

        {/* 7 — Rings */}
        <Section num="07" title="Exchange of Rings" duration="~2 minutes" id="sec-7">
          <LegalCallout>The ring exchange language is part of the legal ceremony. Do not significantly alter.</LegalCallout>
          <Paula>&ldquo;We are now ready to exchange the rings.&rdquo;</Paula>
          <Pause>pause</Pause>
          <Callout>
            A ring is a circle: no beginning, no end. It&apos;s made of something that doesn&apos;t fade. And every time
            you look at it — on a hard day, on a wonderful day, on an ordinary Tuesday — it says the same thing:{' '}
            <em>I meant it.</em>
          </Callout>
          <Paula>
            &ldquo;Paddy, please repeat after me: Amanda — I give you this ring as a sign of my commitment to you.&rdquo;
          </Paula>
          <Stage>Paddy receives ring from Danny. Places ring on Amanda&apos;s finger.</Stage>
          <Couple speaker="Paddy">&ldquo;Amanda, I give you this ring as a sign of my commitment to you.&rdquo;</Couple>
          <Pause>pause</Pause>
          <Paula>
            &ldquo;Amanda, please repeat after me: Paddy — I give you this ring as a sign of my commitment to you.&rdquo;
          </Paula>
          <Stage>Amanda receives ring from Danny. Places ring on Paddy&apos;s finger.</Stage>
          <Couple speaker="Amanda">&ldquo;Paddy, I give you this ring as a sign of my commitment to you.&rdquo;</Couple>
          <Pause>pause · let that land</Pause>
          <Stage>Paula smiles, stays relaxed, lets the moment breathe.</Stage>
        </Section>

        {/* 8 — Pronouncement */}
        <Section num="08" title="Pronouncement" duration="~1 minute" id="sec-8">
          <LegalCallout>
            The pronouncement is the legal act of marriage. The authority language and declaration cannot be cut.
          </LegalCallout>
          <Paula>&ldquo;Well now… You did it!&rdquo;</Paula>
          <Pause>pause</Pause>
          <Paula>
            &ldquo;Paddy and Amanda — you came here today as two people who love each other. You are leaving as
            something much, much more.&rdquo;
          </Paula>
          <Paula>
            &ldquo;Today, May 2nd, 2026, in front of your closest friends, family, and loved ones, and by the authority
            vested in me by the State of Wisconsin…&rdquo;
          </Paula>
          <Pause>pause · hold this beat</Pause>
          <div className={styles.paula}>
            <div className={`${styles.line} ${styles.pronouncementBig}`}>
              &ldquo;I now pronounce you <strong>HUSBAND AND WIFE</strong>.&rdquo;
            </div>
          </div>
          <Reaction>Guests cheer</Reaction>
        </Section>

        {/* 9 — Kiss */}
        <Section num="09" title="First Kiss" duration="the moment" id="sec-9">
          <Paula>&ldquo;You may now seal your union with a kiss.&rdquo;</Paula>
          <Stage>Paula steps back and away from the couple — give them space for the kiss and photos.</Stage>
          <Reaction>Applause</Reaction>
        </Section>

        {/* 10 — Closing */}
        <Section num="10" title="Closing Remarks" duration="~30 seconds" id="sec-10">
          <div className={styles.paula}>
            <div className={styles.line}>
              &ldquo;It is my absolute honor to present to you — for the <strong>first time</strong> as newlyweds —
              <span className={styles.closingBig}>Paddy and Amanda!&rdquo;</span>
            </div>
          </div>
          <Reaction>Guests cheer</Reaction>
        </Section>

        {/* 11 — Recessional */}
        <Section num="11" title="Recessional" duration="as long as it takes" id="sec-11">
          <MusicCue label="Music starts · Recessional">
            <Track>Bad Mama Jama</Track>
          </MusicCue>
          <Stage>Paddy &amp; Amanda head down the aisle together.</Stage>
          <Stage>Paddy and Amanda pause toward the end of the aisle to do a dip kiss or some other photo moment.</Stage>
          <Stage>Both wedding parties follow in pairs.</Stage>
          <Stage>
            Paula exits last, or with the wedding parties — <em>to confirm.</em>
          </Stage>
          <Paula>
            &ldquo;Thank you all for being here. Please make your way out the side doors to the solarium and bar for a
            cocktail reception. Have the best night. See you on the dance floor.&rdquo;
          </Paula>
        </Section>

        {/* 12 — Marriage License */}
        <Section num="12" title="Marriage License" duration="immediately after" id="sec-12">
          <LegalCallout>
            Do not skip. Must happen immediately after the ceremony, before anyone leaves the venue.
          </LegalCallout>
          <ol className={styles.licenseSteps}>
            <li>Paula signs the marriage license.</li>
            <li>
              Two witnesses sign: <strong>Alex Pogosky</strong> and <strong>Danny McMahon</strong>.
            </li>
            <li>Paddy &amp; Amanda sign.</li>
            <li>
              License is handed to the designated person for return to the Dane County Clerk within 3 business days.
            </li>
          </ol>
          <Callout label="Updated Process">
            Paula will photograph and email the marriage license to{' '}
            <a href="mailto:rod.county.vitals@danecounty.gov">rod.county.vitals@danecounty.gov</a> within 72 hours of
            the ceremony.
          </Callout>
          <Stage>
            Right after this, Paddy and Amanda get a private 15 minutes together — either outside the venue or in the
            bridal suite — before joining cocktail hour.
          </Stage>
        </Section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.monogram}>P &amp; A</div>
          <div className={styles.footerDivider} />
          <div className={styles.footerDate}>5 · 2 · 2026</div>
        </footer>
      </div>

      <BackToTop />
    </div>
  )
}
