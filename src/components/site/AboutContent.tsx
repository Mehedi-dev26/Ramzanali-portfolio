import { Reveal } from "@/components/site/SectionShell";
import { usePrefs } from "@/lib/prefs";
import { bio, personalInfo, site, timeline } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function AboutContent({ withTimeline = true }: { withTimeline?: boolean }) {
  const { lang } = usePrefs();
  const bn = lang === "bn";

  return (
    <div className="space-y-14">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className={cn("space-y-6", bn && "font-bangla")}>
          {(bn ? bio.bn : bio.en).map((p, i) => (
            <p
              key={p}
              className={cn(
                i === 0
                  ? "text-xl font-extrabold leading-snug tracking-tight text-foreground md:text-3xl"
                  : "text-base font-medium leading-relaxed text-muted-foreground md:text-lg",
                bn && i === 0 && "font-bangla-display",
              )}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {personalInfo.map((info, i) => (
            <Reveal key={info.label} index={i}>
              <div className="glass h-full rounded-2xl p-6">
                <p
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
                    bn && "font-bangla normal-case",
                  )}
                >
                  {bn ? info.bnLabel : info.label}
                </p>
                <p className={cn("mt-2 text-sm font-semibold", bn && "font-bangla")}>
                  {bn ? info.bnValue : info.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {withTimeline ? (
        <div>
          <h3
            className={cn(
              "mb-8 text-2xl font-bold tracking-tight md:text-3xl",
              bn && "font-bangla-display",
            )}
          >
            {bn ? "আমার যাত্রা" : "The journey"}
          </h3>
          <ol className="relative space-y-6 border-l border-border pl-6">
            {timeline.map((item, i) => (
              <Reveal key={item.year} index={i}>
                <li className="glass rounded-2xl p-6">
                  <span className="absolute -left-[7px] mt-1.5 size-3 rounded-full bg-gradient-primary" />
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {item.year}
                  </span>
                  <h4
                    className={cn(
                      "mt-2 text-lg font-bold",
                      bn && "font-bangla-display",
                    )}
                  >
                    {bn ? item.bnTitle : item.title}
                  </h4>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed text-muted-foreground",
                      bn && "font-bangla",
                    )}
                  >
                    {bn ? item.bnBody : item.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      ) : null}

      <div className="glass grid gap-6 rounded-2xl p-6 md:grid-cols-[auto_1fr] md:p-7">
        <div className="mx-auto grid size-20 place-items-center rounded-2xl bg-card text-2xl font-bold text-foreground shadow-elegant md:mx-0">
          বই
        </div>
        <div className={cn("text-center md:text-left", bn && "font-bangla")}>
          <h3 className="text-xl font-bold">
            {bn ? "প্রতিষ্ঠাতা — " : "Founder of "}
            <span className="text-gradient font-signature text-2xl">{site.brand}</span>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {bn
              ? "বই বৃক্ষ একটি পাঠচক্র আন্দোলন — ৩০+ শাখা ও ক্যাম্পাস হাবে বই বিনিময়, পাঠ আসর ও তরুণদের জন্য কনটেন্ট তৈরি করে।"
              : "Boi Brikkho is a reading movement running across 30+ branches and campus hubs — book exchanges, reading circles and content built for young readers."}
          </p>
        </div>
      </div>
    </div>
  );
}
