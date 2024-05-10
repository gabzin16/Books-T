import Css from "./Home.css";


// Componente funcional Home
function Home() {
  return (

    
    <div>
      <div class="content">
        <div class="banner1">
          {/* <img class="banner1" src="assets/banners/livro detalhamento.jpg" alt="banner1"> */}
          <div class="text-banner">
            <h2 class="text-CH">Lily e Atlas estão de volta, mas desta vez terão que enfrentar os desafios de um novo relacionamento, ao mesmo tempo em que lidam com seu passado e presente.
            </h2>
          </div>
        </div>
      </div>

      {/* Sessão Romance */}

      <h2 className="section-title romance">Romance</h2>

      
      <div className="media-container">
        <div className="media-scroller">
          <div className="media-group" id="group-1">
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/71bCTWFK3mL._AC_UF1000,1000_QL80_.jpg" alt="livro_1" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/41EkPEF6jhL.jpg" alt="livro_2" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/61TCwzWV9hL._AC_UF1000,1000_QL80_.jpg" alt="livro_3" />
            </div>
            <div className="livro-button"> 
              <a href="/Detalhamento"
              > <img  src="https://m.media-amazon.com/images/I/81u8c5lziEL._AC_UF1000,1000_QL80_.jpg" alt="livro_4" /></a>
              
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/81hK-E1S3lL._AC_UF1000,1000_QL80_.jpg" alt="livro_5" />
            </div>

          </div>

          <div className="media-group" id="group-2">
            <a className="previous" href="#group-1">
              <svg>
                <use href="#previous" />
              </svg>
            </a>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/81ql6xkkliL._AC_UF1000,1000_QL80_.jpg" alt="livro_6" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/71SliYa-JkL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="livro_7" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/51DCDy0meIL._AC_UF1000,1000_QL80_.jpg" alt="livro_8" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91oyypSxfeS._AC_UF1000,1000_QL80_.jpg" alt="livro_9" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/81xPIpkYrcL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="livro_10" />
            </div>
          </div>
        </div>
        <div className="navigation-indicators">
          <div />
          <div />
        </div>
      </div>

      {/* Sessão Terror e Suspense */}
      <h2 className="section-title">Terror e Suspense</h2>
      <div className="media-container">
        <div className="media-scroller">
          <div className="media-group" id="group-3">
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91g9Dvtf+jL._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91SDZ2eUj+L._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91R8S52UP6L._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/810Wu74li3L._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/71RpvDjl2jL._AC_UF894,1000_QL80_.jpg" alt="" />
            </div>

          </div>

          <div className="media-group" id="group-4">
            <a className="previous" href="#group-3">
              <svg>
                <use href="#previous" />
              </svg>
            </a>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/71gayVVXUpL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/81WYMklv2pL._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91+caTCmA5L._AC_UF1000,1000_QL80_DpWeblab_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/91o6FMAy8UL._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div className="media-element">
              <img src="https://m.media-amazon.com/images/I/51muji+u8GL.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="navigation-indicators">
          <div />
          <div />
        </div>
      </div>

      
      

    </div>
  );
}

export default Home;