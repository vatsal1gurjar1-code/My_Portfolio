import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEOHead } from "@/components/SEOHead";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const contactDetails = [
  { label: "Phone", value: "+91 9429151831", icon: Phone, href: "tel:+919429151831" },
  {
    label: "Email",
    value: "vatsal1gurjar1@gmail.com",
    icon: Mail,
    href: "mailto:vatsal1gurjar1@gmail.com",
  },
  {
    label: "Location",
    value: "Vadodara, Gujarat, India",
    icon: MapPin,
    href: "https://maps.google.com/?q=Vadodara,Gujarat,India",
  },
];

// Web3Forms endpoint configuration
const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "57d192df-6309-4a53-b421-c4a468506397";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: WEB3FORMS_ACCESS_KEY,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="page-shell py-16 sm:py-24"
    >
      <SEOHead
        title="Contact Vatsal K. Gurjar | Hire a Full Stack Web Developer - Vadodara, India"
        description="Get in touch with Vatsal K. Gurjar - Full Stack Software Engineer and Web Developer available for full-time roles, freelance projects, and consulting. Based in Vadodara, Gujarat, India."
        canonical="/contact"
      />
      <div className="mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">Contact</h2>
        <h1 className="section-title mt-4">Hire a Full Stack Software Engineer - let's talk.</h1>
        <p className="section-copy mt-4">
          Available for full-time software engineering roles, freelance web development projects, and consulting.
          Reach out via the form, email, or phone.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-white/10 bg-secondary/30 p-5 transition hover:border-primary/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                </a>
              );
            })}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name ? (
                  <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email ? (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message ? (
                  <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                ) : null}
              </div>

              <Button type="submit" size="lg" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" ? (
                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
                  ✨ Message sent successfully! I will get back to you soon.
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  ❌ Failed to send message. Please check your endpoint configuration or email directly.
                </div>
              ) : null}

              {!FORM_ENDPOINT && status === "success" ? (
                <p className="text-xs text-muted-foreground">
                  💡 Note: Demo success captured locally. To receive live forwarding emails, paste your Formspree URL into the <code className="text-primary">FORM_ENDPOINT</code> constant inside <code className="text-primary">Contact.tsx</code>.
                </p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
