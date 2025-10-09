export const HomePage = () => {
  return (
    <div className="about-container">
      <h1>🍸 Welcome to the Potions Bar! 🎃</h1>

      <section className="about-intro">
        <p>
          Here you will find a variety of cocktail recipes to try at home. This
          react based project was built by two students exploring front-end
          development and trying out concepts such as components, routing and
          API integration.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet The Brewmasters</h2>

        <div className="team-members">
          <div className="member">
            <h3>Fabian</h3>
            <p>
              Loves UI design and bringing creative ideas to life; a proud
              member of Hufflepuff House 🦡
            </p>
            <a href="https://github.com/fabian-dietrich">
              Fabian's Github Profile
            </a>
          </div>
          <div className="member">
            <h3>Kelechi</h3>
            <p>Enjoys coding with APIs and making smooth interactive apps.</p>
            <a href="https://github.com/Kelechiibeleche">
              Kelechi's Github Profile
            </a>
          </div>
        </div>
      </section>
      <footer>
        <p>Made with ❤️ by Fabian & Kelechi - October 2025</p>
        <a href="https://github.com/fabian-dietrich/m2-cocktail-project">
          Our Github Repo
        </a>
      </footer>
    </div>
  );
};
