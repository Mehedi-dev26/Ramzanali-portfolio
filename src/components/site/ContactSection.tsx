import { Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { site } from "@/lib/site-config";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Tell me a bit more (10+ characters)").max(1000),
});

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Project or collaboration" },
] as const;

export function ContactSection() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    toast.success("Message sent — I'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 md:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.name} className={f.name === "subject" ? "sm:col-span-2" : undefined}>
              <label
                htmlFor={f.name}
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {f.label}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                placeholder={f.placeholder}
                aria-invalid={Boolean(errors[f.name])}
                className="mt-2 min-h-11 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
              {errors[f.name] ? (
                <p className="mt-1 text-xs text-destructive">{errors[f.name]}</p>
              ) : null}
            </div>
          ))}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What are we making together?"
              aria-invalid={Boolean(errors['message'])}
              className="mt-2 w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
            />
            {errors['message'] ? (
              <p className="mt-1 text-xs text-destructive">{errors['message']}</p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-105"
        >
          Send message <Send className="size-4" />
        </button>
      </form>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        <a
          href={`mailto:${site.email}`}
          className="glass flex flex-col gap-2 rounded-2xl p-6 transition-colors hover:border-primary md:p-7"
        >
          <Mail className="size-5 text-primary" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Email
          </span>
          <span className="text-sm font-semibold break-all">{site.email}</span>
        </a>
        <div className="glass flex flex-col gap-2 rounded-2xl p-6 md:p-7">
          <MapPin className="size-5 text-primary" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Based in
          </span>
          <span className="text-sm font-semibold">{site.location}</span>
        </div>
      </div>
    </div>
  );
}
