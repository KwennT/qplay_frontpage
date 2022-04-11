export default function AcquireNick() {
  return (
    <div>
      <section className="wrapper style1">
        <div className="container">
          Máš originální Minecraft, ale někdo má již zabraný tvůj nick? Nevadí,
          stačí postupovat podle tohoto návodu a můžeš si svůj nick získat: <br/>
          <br/>
          <ol style={{listStyleType: "decimal"}}>
            <li>
              Přihlaš se na stránce{" "}
              <a href="https://info.qplay.cz/" target="_blank" rel="noreferrer">
                https://info.qplay.cz
              </a>{" "}
              (jestliže ještě nemáš na QPlay žádný účet zaregistrovaný, tak
              nejdříve proveď registraci na{" "}
              <a href="https://registrace.qplay.cz/" target="_blank"
                 rel="noreferrer">https://registrace.qplay.cz</a>{" "}, pole &quot;Nick&quot; při registraci můžeš
              nechat prázdné)
            </li>
            <li>V menu vyber &quot;Změna nicku&quot;</li>
            <li>Zvol si svůj nick a klikni na tlačítko &quot;Změnit nick&quot;</li>
            <li>
              Pokud je nick již obsazený, tak se ti zobrazí tlačítko &quot;Přivlastnit
              nick&quot;
            </li>
            <li>Klikni na toto tlačítko a postupuj podle zobrazeného návodu</li>
          </ol>
        </div>
      </section>
    </div>
  )
}