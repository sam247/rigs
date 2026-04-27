import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "447989205468"; // international format, no +
const DEFAULT_MSG = "Hi RIGS Electrical, I'd like a quote for some work in Tring.";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MSG)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {/* Chat card */}
      {open && (
        <div className="w-[280px] rounded-2xl bg-background shadow-2xl border border-border overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-primary text-primary-foreground p-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-700 text-sm leading-tight">RIGS Electrical</p>
              <p className="text-xs opacity-90 mt-0.5">Typically replies within an hour</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 bg-muted">
            <div className="bg-background rounded-lg p-3 text-sm text-foreground shadow-sm">
              👋 Hi there! Need a quote or got a question? Message us on WhatsApp and we'll get back to you shortly.
            </div>
          </div>
          <div className="p-3 bg-background border-t border-border">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-700 text-sm py-2.5 rounded-lg transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Start chat
            </a>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="group relative h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping" />
        )}
        <span className="relative">
          {open ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
        </span>
      </button>
    </div>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export default WhatsAppWidget;
