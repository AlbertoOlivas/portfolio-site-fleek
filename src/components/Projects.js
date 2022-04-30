// Import Assets
import uniswap from "../assets/uniswap.png";
import compound from "../assets/compound.png";
import aave from "../assets/aave.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Uniswap</h3>
          <img src={uniswap} alt="Uniswap Swap Page" />
          <p>Development in Progress</p>

          <a href="" target="_blank" className="button">
            Site
          </a>
          <a href="" target="_blank" className="button">
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Compound</h3>
          <img src={compound} alt="Compound Landing Page" />
          <p>Development in Progress</p>

          <a href="" target="_blank" className="button">
            Site
          </a>
          <a href="" target="_blank" className="button">
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Aave</h3>
          <img src={aave} alt="Aave Landing Page" />
          <p>Development in Progress</p>

          <a href="" target="_blank" className="button">
            Site
          </a>
          <a href="" target="_blank" className="button">
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
