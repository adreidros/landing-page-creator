import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <h1 className="font-heading font-light uppercase tracking-widest text-primary text-3xl md:text-4xl mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              1. Allgemeine Hinweise
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was
              mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen
              zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
              aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              EchoLore UG (haftungsbeschränkt)<br />
              August-Bebel-Str. 89<br />
              14482 Potsdam<br />
              Deutschland<br />
              Vertreten durch: Emre Yüzüncüoglu<br />
              E-Mail:{" "}
              <a href="mailto:info@echolore.de" className="text-primary hover:underline">
                info@echolore.de
              </a>
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt
              und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung
              und der Optimierung seiner Website – hierzu müssen die Server-Log-Dateien
              erfasst werden.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              4. Cookies und Tracking-Technologien
            </h2>
            <p>
              Diese Website verwendet keine Cookies, die nicht für den technischen
              Betrieb der Seite erforderlich sind. Es kommen keine Tracking-,
              Analyse- oder Marketing-Technologien zum Einsatz.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              5. Analyse-Tools und Werbung
            </h2>
            <p>
              Auf dieser Website werden keine Analyse-Tools (z. B. Google
              Analytics, Matomo) und keine Werbedienste eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              6. Plugins und externe Tools
            </h2>
            <p>
              Auf dieser Website werden keine externen Dienste, Social-Media-Plugins,
              Karten-, Schriftart- oder Videodienste (z. B. YouTube, Google Fonts,
              Google Maps) eingebunden, die personenbezogene Daten an Dritte
              übertragen.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              7. Kontaktformular und Kontaktaufnahme per E-Mail
            </h2>
            <p>
              Wenn Sie uns über das Kontaktformular auf dieser Website oder per
              E-Mail Anfragen zukommen lassen, werden Ihre Angaben (Name,
              E-Mail-Adresse, Betreff sowie Inhalt der Nachricht) ausschließlich
              zum Zweck der Bearbeitung Ihrer Anfrage verwendet.
            </p>
            <p className="mt-3">
              Hinweis: Das Kontaktformular auf dieser Website öffnet Ihr lokales
              E-Mail-Programm und überträgt die eingegebenen Daten <em>nicht</em>
              {" "}an unseren Server. Der Versand erfolgt direkt aus Ihrem
              E-Mail-Programm an uns. Die Datenverarbeitung beim E-Mail-Versand
              richtet sich nach den Datenschutzbestimmungen Ihres E-Mail-Anbieters.
            </p>
            <p className="mt-3">
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs.
              1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
              zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
              auf unserem berechtigten Interesse an der effektiven Bearbeitung der
              an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mt-3">
              Die von Ihnen übersandten Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen
              oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
              Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              8. Rechte der betroffenen Personen
            </h2>
            <p>
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
              <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
              <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
              <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
              <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
              <li>auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
              können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden.
            </p>
            <p className="mt-3">
              Ihnen steht zudem ein Beschwerderecht bei einer
              Datenschutzaufsichtsbehörde zu (Art. 77 DSGVO). Zuständig ist die
              Aufsichtsbehörde des Bundeslandes, in dem unser Unternehmen seinen
              Sitz hat:
            </p>
            <p className="mt-2">
              Die Landesbeauftragte für den Datenschutz und für das Recht auf
              Akteneinsicht Brandenburg, Stahnsdorfer Damm 77, 14532 Kleinmachnow.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              9. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://" auf „https://" wechselt und
              an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="font-heading uppercase tracking-wider text-primary text-lg mb-3">
              10. Hosting
            </h2>
            <p>
              Wir hosten unsere Website bei der Strato AG. Anbieter ist die
              Strato AG, Pascalstraße 10, 10587 Berlin (nachfolgend „Strato").
              Wenn Sie unsere Website besuchen, erfasst Strato verschiedene
              Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="mt-3">
              Weitere Informationen entnehmen Sie der Datenschutzerklärung von
              Strato:{" "}
              <a
                href="https://www.strato.de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.strato.de/datenschutz/
              </a>
              .
            </p>
            <p className="mt-3">
              Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
              möglichst zuverlässigen Darstellung unserer Website. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
              § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
              Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
              umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Mit Strato wurde ein Vertrag über Auftragsverarbeitung gemäß Art.
              28 DSGVO geschlossen.
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

export default Datenschutz;