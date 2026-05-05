import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="font-heading font-light uppercase tracking-widest text-primary text-3xl md:text-4xl mb-10">
          Impressum
        </h1>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              EchoLore UG (haftungsbeschränkt)<br />
              August-Bebel-Str. 89<br />
              14482 Potsdam<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Vertreten durch
            </h2>
            <p>Emre Yüzüncüoglu (Geschäftsführer)</p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:info@echolore.de"
                className="text-primary hover:underline"
              >
                info@echolore.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Emre Yüzüncüoglu<br />
              August-Bebel-Str. 89<br />
              14482 Potsdam
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
              hiervon unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;