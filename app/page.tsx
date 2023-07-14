/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">West Sideeee, baby</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/tupak.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">2Pac</h2>
          <p>
           The perfect combination of cute and charming. 
            2PAC steals audience's hearts from an early age
             and enchants with his strong lyrics and association with
              social problems affected in the surrounding society.

          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Еминем</h2>
          <p>
          Eminem is known for his rapid and intricate rhymes, clever wordplay,
           and his ability to tackle controversial and sensitive topics. 
           He has often used his music to express his personal struggles, 
           including his battle with addiction and his tumultuous relationships.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/em.jpg" alt="image01" />
        </div>
      </div>


      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Fugees</h2>
          <p>
          The Fugees were a hip-hop group formed in the early 1990s.
         The group consisted of three members: Wyclef Jean, Lauryn Hill, and Pras Michel.
          They gained significant popularity in the mid-1990s with their fusion of rap, R&B, 
          and reggae elements.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/fugees.jpg" alt="image01" />
        </div>
      </div>

     

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/JayZ.jpg" alt="image01" />
          <img className="gallery-image" src="/Travis.jpg" alt="image01" />
          <img className="gallery-image" src="/tupak.jpg" alt="image01" />
          <img className="gallery-image" src="/Wayne.jpg" alt="image01" />
          <img className="gallery-image" src="/em.jpg" alt="image01" />
          <img className="gallery-image" src="/x.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Checheneca</h3>
            <p>
              Ahmat sila. 
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/Bojinkata.jpg" alt="avatar" />
            <h3 className="card-name">Bojinkata</h3>
            <p>
              Starta godina e kato novata, samo che e stara!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/Stoian.jpg" alt="avatar" />
            <h3 className="card-name">Stoqn</h3>
            <p>
            "Random rap pesen za klimatici" ili ne znam
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/s.png" alt="avatar" />
            <h3 className="card-name">Slavi</h3>
            <p>
              Moga da kaja che teq ne mogat da napravqt edna vtora ot shouto koeto az pravq 
              i sushto taka shte pomolq da glasuvate na buletina 70 bez 9, za da moje da opravim vuprosa za Makedonia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
