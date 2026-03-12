import { motion } from "motion/react";
import { useMemo, useRef, useState, type FormEvent } from "react";
import { MotifInput, MotifTextarea, MotifIcon, MotifButton, MotifInlineMessage } from "@ey-xd/motif-wc-react";
import { IconoirUser, IconoirMail, IconoirLabel, IconoirMessage } from "@ey-xd/motif-icon";
import { supabase } from "../lib/supabaseClient";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  companyWebsite: string; // honeypot
};

type FormErrors = Partial<Record<keyof Omit<FormState, "companyWebsite">, string>>;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());
}

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Merci d'indiquer votre nom.";

  const email = values.email.trim();
  if (!email) errors.email = "Merci d'indiquer votre email.";
  else if (!isValidEmail(email)) errors.email = "Email invalide.";

  if (!values.subject.trim()) errors.subject = "Merci d'indiquer un sujet.";

  const msg = values.message.trim();
  if (!msg) errors.message = "Merci d'écrire votre message.";
  else if (msg.length < 20) errors.message = "Merci de préciser (au moins 20 caractères).";
  else if (msg.length > 2000) errors.message = "Message trop long (max 2000 caractères).";

  return errors;
}

function hasErrors(errors: FormErrors) {
  return Object.keys(errors).length > 0;
}

export default function ContactSection() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    companyWebsite: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const formStartAtRef = useRef<number>(Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  const errors = useMemo(() => validateForm(values), [values]);
  const canSubmit = !isSubmitting && !hasErrors(errors);

  const onValueChange = (field: keyof FormState) => (e: CustomEvent) => {
    let val = e.detail;
    if (typeof val !== "string") val = (val as any)?.detail ?? (val as any)?.value ?? "";
    setValues((prev) => ({ ...prev, [field]: String(val) }));
  };

  const onBlur = (field: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    setSuccessMessage(null);
    setSubmitError(null);

    if (values.companyWebsite.trim()) {
      setSuccessMessage("Merci — votre message a bien été envoyé.");
      setValues({ name: "", email: "", subject: "", message: "", companyWebsite: "" });
      formStartAtRef.current = Date.now();
      return;
    }

    if (Date.now() - formStartAtRef.current < 1500) {
      setSubmitError("Merci de réessayer dans un instant.");
      return;
    }

    const currentErrors = validateForm(values);
    if (hasErrors(currentErrors)) return;

    if (!supabase) {
      setSubmitError(
        "Le formulaire n'est pas encore configuré (variables Supabase manquantes).",
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });

      if (error) {
        throw error;
      }

      setSuccessMessage("Merci — votre message a bien été envoyé.");
      setValues({ name: "", email: "", subject: "", message: "", companyWebsite: "" });
      setTouched({});
      formStartAtRef.current = Date.now();
    } catch {
      setSubmitError("Une erreur est survenue. Merci de réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Contact</h2>
          <p className="text-primary-60 max-w-3xl leading-relaxed">
            Une question sur l'immersion, le format, ou les prochains créneaux ?
            Laissez-nous un message — nous revenons vers vous rapidement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Écrivez-nous</h3>
            <p className="text-primary-60 text-sm leading-relaxed mb-6">
              Réponse sous 24–48h ouvrées. Vos informations restent strictement
              confidentielles.
            </p>

            <form ref={formRef} onSubmit={submit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <MotifInput
                  label="Nom"
                  placeholder="Votre nom"
                  value={values.name}
                  onValueChanged={onValueChange("name")}
                  onBlurEvent={onBlur("name")}
                  error={touched.name && !!errors.name}
                  errorMessage={touched.name ? errors.name ?? "" : ""}
                  useTouchedForError={false}
                  hideClearButton
                  required
                >
                  <MotifIcon slot="prefix" src={IconoirUser} size={20} />
                </MotifInput>

                <MotifInput
                  label="Email"
                  placeholder="nom@entreprise.com"
                  type="email"
                  value={values.email}
                  onValueChanged={onValueChange("email")}
                  onBlurEvent={onBlur("email")}
                  error={touched.email && !!errors.email}
                  errorMessage={touched.email ? errors.email ?? "" : ""}
                  useTouchedForError={false}
                  hideClearButton
                  required
                >
                  <MotifIcon slot="prefix" src={IconoirMail} size={20} />
                </MotifInput>
              </div>

              <MotifInput
                label="Sujet"
                placeholder="Ex: Informations sur l'immersion IA"
                value={values.subject}
                onValueChanged={onValueChange("subject")}
                onBlurEvent={onBlur("subject")}
                error={touched.subject && !!errors.subject}
                errorMessage={touched.subject ? errors.subject ?? "" : ""}
                useTouchedForError={false}
                hideClearButton
                required
              >
                <MotifIcon slot="prefix" src={IconoirLabel} size={20} />
              </MotifInput>

              <MotifTextarea
                label="Message"
                placeholder="Décrivez votre besoin ou posez votre question..."
                value={values.message}
                onTextareaValueChanged={onValueChange("message")}
                onBlurEvent={onBlur("message")}
                error={touched.message && !!errors.message}
                errorMessage={touched.message ? errors.message ?? "" : ""}
                useTouchedForError={false}
                rows={6}
                maxlength={2000}
                minlength={20}
                showCounter
                required
              >
                <MotifIcon slot="prefix" src={IconoirMessage} size={20} />
              </MotifTextarea>

              {/* Honeypot field */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company-website">Company website</label>
                <input
                  id="company-website"
                  name="companyWebsite"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.companyWebsite}
                  onChange={(e) => setValues((prev) => ({ ...prev, companyWebsite: e.target.value }))}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <MotifButton
                  variant="primary"
                  disabled={!canSubmit}
                  onClick={() => formRef.current?.requestSubmit()}
                >
                  {isSubmitting ? "Envoi…" : "Envoyer"}
                </MotifButton>

                {successMessage && (
                  <MotifInlineMessage variant="success">
                    <span slot="content">{successMessage}</span>
                  </MotifInlineMessage>
                )}
                {submitError && (
                  <MotifInlineMessage variant="error">
                    <span slot="content">{submitError}</span>
                  </MotifInlineMessage>
                )}
              </div>
            </form>
          </div>

          <div className="rounded-lg glass-panel p-6 md:p-8">
            <div className="mb-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-primary-40 font-medium">
                Infos pratiques
              </p>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight text-primary">
                Pour aller plus vite
              </h3>
              <p className="mt-4 text-primary-60 text-sm leading-relaxed">
                Indiquez votre contexte, vos objectifs et votre horizon (ex: 2026–2028).
                Nous pourrons vous proposer un cadrage adapté.
              </p>
            </div>

            <ul className="space-y-3 text-primary-70 text-sm">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>Objectifs prioritaires (stratégie, use cases, gouvernance, delivery)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>Niveau de maturité IA et disponibilité data</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>Contraintes (délais, équipes, sécurité, conformité)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
