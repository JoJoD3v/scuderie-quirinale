import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <main className="min-h-screen bg-softwhite flex justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        {/* Header */}
        <header className="mb-10 border-b border-gray-200 pb-8">
          <p className="font-body text-xs uppercase tracking-widest text-primary mb-3">
            Scuderie del Quirinale
          </p>
          <h1 className="font-title text-5xl text-primary leading-tight mb-3">
            Tesori dei Faraoni
          </h1>
          <p className="font-body text-darkgray text-base">
            Un viaggio straordinario nel cuore dell&apos;antica civiltà egizia
          </p>
        </header>

        {/* Body text */}
        <section aria-label="Descrizione della mostra">
          <div className="font-body text-darkgray text-lg space-y-6 leading-relaxed">
            <p>
              È in arrivo alle Scuderie del Quirinale la mostra <em>Tesori dei Faraoni</em>, un viaggio
              straordinario nel cuore dell&apos;antica civiltà egizia. Il progetto espositivo è
              un&apos;occasione imperdibile per poter osservare 130 capolavori provenienti dai più
              importanti musei dell&apos;Egitto. Le opere in mostra regaleranno al pubblico la
              possibilità di scoprire questa storia incredibile: dalle origini della civiltà faraonica
              fino allo splendore dei grandi sovrani del Nuovo Regno e del Terzo Periodo Intermedio,
              fino ad arrivare alle scoperte archeologiche più significative degli ultimi anni.
            </p>
            <p>
              Attraverso sei sezioni tematiche, la mostra esplora la complessità della società egizia,
              l&apos;autorità divina dei faraoni, la vita quotidiana, le credenze religiose, le pratiche
              funerarie e le più recenti scoperte archeologiche. Dalle spettacolari statue di Sennefer,
              Ramses VI e Thutmose III ai raffinati gioielli reali, dagli oggetti di uso quotidiano
              finemente lavorati ai sarcofagi decorati con simboli sacri, l&apos;esposizione svela
              l&apos;eccezionale sofisticazione artistica e la profonda spiritualità che hanno reso
              l&apos;antico Egitto una delle civiltà più affascinanti della storia.
            </p>
            <p>
              La mostra è il risultato di un&apos;importante iniziativa di diplomazia culturale tra
              Italia ed Egitto. Questa collaborazione ha reso possibile il prestito straordinario di
              capolavori provenienti da alcuni tra i più importanti musei egiziani, tra cui il Museo
              Egizio del Cairo e il Museo di Luxor. Molte di queste opere saranno esposte in Italia
              per la prima volta. La mostra vede la prestigiosa collaborazione del Museo Egizio di
              Torino che firma importanti contributi e un prestito eccezionale.
            </p>
            <p>
              La mostra, curata dal Dr. Tarek El Awady, sarà accompagnata da un catalogo curato dal
              Dr. Zahi Hawass e pubblicato da Allemandi Editore.
            </p>
            <p>
              <em>Tesori dei Faraoni</em> rappresenta un&apos;occasione imperdibile per esplorare
              l&apos;eredità straordinaria di una civiltà che continua ad esercitare uno
              straordinario fascino sul mondo contemporaneo.
            </p>
          </div>
        </section>

        {/* Audioguide section */}
        <section aria-label="Audioguida" className="mt-14">
          <h2 className="font-title text-2xl text-primary mt-10 mb-4">
            Ascolta l&apos;Audioguida
          </h2>
          <p className="font-body text-darkgray text-base leading-relaxed mb-6">
            <em>Tesori dei Faraoni</em> si arricchisce di audioguide d&apos;autore. Zahi Hawass e
            Roberto Giacobbo vi condurranno in un viaggio straordinario attraverso la Storia, i
            misteri e le meraviglie dell&apos;antico Egitto.
          </p>

          <AudioPlayer />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-body text-sm text-gray-400 text-center">
            &copy; Scuderie del Quirinale — Tutti i diritti riservati
          </p>
        </footer>
      </div>
    </main>
  );
}
