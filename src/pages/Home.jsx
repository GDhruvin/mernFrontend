export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT company</p>
              <h1>Welcome to dhruvin Gabani</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et impedit ad similique laudantium neque error, qui magni nesciunt unde assumenda mollitia? Doloribus sequi ducimus architecto, exercitationem commodi dolorum labore.</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Conntect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary">Learn now</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/src/images/image1.png"
                alt="image1"
              />
            </div>
          </div>
        </section>

        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>registered companies</p>
            </div>
            <div className="div2">
              <h2>100,00+</h2>
              <p>Happy clients</p>
            </div>
            <div className="div3">
              <h2>500+</h2>
              <p>Well known Developers</p>
            </div>
            <div className="div4">
              <h2>24/7</h2>
              <p>Service</p>
            </div>
          </div>
        </section>


        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-image">
              <img
                src="/src/images/image2.png"
                alt="image2"
              />
            </div>


            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Staeted Today</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et impedit ad similique laudantium neque error, qui magni nesciunt unde assumenda mollitia? Doloribus sequi ducimus architecto, exercitationem commodi dolorum labore.</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Conntect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary">Learn now</button>
                </a>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}
