import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { SobreNosContent } from "@/components/site/SobreNosContent";

export const Route = createFileRoute("/sobre-nos")({
  head: () => ({
    meta: [
      { title: "CCA — Sobre nós" },
      {
        name: "description",
        content:
          "A CCA estrutura tecnicamente a informação do ativo construído. Engenharia Diagnóstica, inspeção, reabilitação e governança técnica em predial e industrial.",
      },
    ],
  }),
  component: SobreNosPage,
});

function SobreNosPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Navbar solid />
      <main className="pt-16">
        <SobreNosContent />
      </main>
      <footer className="border-t border-border py-10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <Link to="/" className="font-display text-foreground hover:text-cyan-electric transition-colors">
            ← Voltar ao site
          </Link>
          <Link to="/contato" className="hover:text-cyan-electric transition-colors">
            Fale com a CCA
          </Link>
        </div>
      </footer>
    </div>
  );
}
