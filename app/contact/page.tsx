
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {

    return (
      <div className="min-h-screen text-white">
        <div
          className="relative py-20 sm:pt-34"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 283' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(14.52 20.919 -43.938 9.1299 511.22 166.42)'><stop stop-color='rgba(12,34,48,1)' offset='0'/><stop stop-color='rgba(8,12,22,1)' offset='1'/></radialGradient></defs></svg>\")",
          }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-semibold mb-4">
              Let&apos;s Talk About Your Next Product
            </h1>
            <p className="text-[#738bb1] text-sm sm:text-lg leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll suggest the
              fastest, safest way to make it real.
            </p>
          </div>
        </div>
        <p className="text-[#738bb1] mx-auto text-center text-sm sm:text-lg leading-relaxed my-10">
          Share a few details about your project – business model, jurisdiction,
          timelines – and our team will get back to <br /> you with next steps,
          a high-level plan and an estimated timeline.
        </p>
        <div className="mx-auto container grid grid-cols-1 lg:grid-cols-3 max-lg:px-8 gap-8 py-10">
          {/* Left side - Form */}
          <div className="lg:col-span-2">
            <form className="space-y-4">
              {/* Name and Company Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="info@iteller.io"
                  className="bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
                <input
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Timezone */}
              <input
                type="text"
                placeholder="UAE / GMT +4"
                className="w-full bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Describe your project idea, target market, and any specific requirements..."
                rows={5}
                className="w-full bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
              />

              {/* Budget */}
              <input
                type="text"
                placeholder="3 months, $50k-100k"
                className="w-full bg-[#0A0F1A] border border-[#151B2B] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg hover:bg-cyan-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right side - Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-[#0A0F1A] border border-[#151B2B] rounded-2xl p-6 space-y-6">
              <h2 className="text-xl font-bold text-white">
                Contact Information
              </h2>

              {/* Email */}
              <div className="flex gap-4">
                <div
                  className={`flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-primary/10 text-primary`}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-slate-400">Sales@iteller.tech</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div
                  className={`flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-primary/10 text-primary`}
                >
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone / WhatsApp</p>
                  <p className="text-slate-400">+971 54 444 1137</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div
                  className={`flex h-10 w-10 p-2 items-center justify-center rounded-lg bg-primary/10 text-primary`}
                >
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
