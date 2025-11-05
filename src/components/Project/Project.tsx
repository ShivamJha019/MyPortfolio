import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import whiteHatJr from '../../assets/WhitehatJr.png'

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/y3/r/y6QsbGgc866.svg"
                alt="Meta Logo"
                width="100"
                height="50"
              />
              <div className="project-links">
                <a href="https://www.meta.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Meta</h3>
              <p> Meta Platforms, Inc. is a leading American multinational technology company known for Facebook, Instagram, WhatsApp, and advancing the metaverse through augmented and virtual reality. As a Software Engineer at Meta, I leverage modern technologies and AI to build scalable web applications, drive productivity, and deliver innovative solutions across front-end, back-end, and cloud environments. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PHP</li> <li>Hack</li> <li>MySQL</li><li>React</li><li>Relay</li><li>GraphQL</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                //src="https://www.motilaloswalmf.com/assets/images/prelogin-header/moamc-mf-logo-new.png" 
                src="https://www.motilaloswalmf.com/reporthub/assets/MO_Asset_Management_Logo-DwyHcVGl.webp"
                alt="MOAMC Logo"
                width="100"
                height="50"
              //style={{ marginLeft: "-37px" }} 
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg> */}
              <div className="project-links">
                {/* <a href="https://github.com/Shivamjha019/gitrepo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://www.motilaloswalmf.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Motilal Oswal Asset Management Company</h3>
              <p> Developed a comprehensive asset management platform tailored for Motilal Oswal Asset Management Company (AMC), providing investors with robust tools for managing mutual funds, tracking portfolio performance, and conducting in-depth market analysis. </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS S3</li> <li>.NET Core</li> <li>MS SQL</li><li>MONGO DB</li><li>Cryptography</li><li>Hangfire</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://fc-euc1-00-pics-bkt-00.s3.eu-central-1.amazonaws.com/536979c0eed45c9d8fd0bf89a9080b7468614f925371077577ff74d4b0b287d4/f_marketingpicFull/u_6660f6084c0e887c39296c2fad77d16115b1fcf3c4d99eb0df6f826060a391f3/img_o7linohhnj_bab63f327562d3846d04e5d56c79da0d9a75f318344946dd2af58f6faf96339c.png"
                alt="Medefer Logo"
                width="60"
                height="50"
              //style={{ marginLeft: "-37px" }} 
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg> */}
              <div className="project-links">
                {/* <a href="https://github.com/Shivamjha019/gitrepo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
                <a href="https://www.medefer.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Medefer</h3>
              <p>
                Medefer is an NHS-approved platform designed to facilitate communication between consultants and patients, streamlining healthcare services and improving patient care. The application connects patients with specialist doctors, allowing for virtual consultations, reducing wait times, and improving accessibility to healthcare services.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 3.1</li>
                <li>Entity Framework</li>
                <li>Azure SQL</li>
                <li>MVC</li>
                <li>ABP</li>
                <li>Hangfire</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://conveloins.com/wp-content/themes/convelo-theme/assets/img/svg/logo.svg"
                alt="Convelo Logo"
                width="150"
                height="50"
              //style={{ marginLeft: "-20px" }} 
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg> */}
              <div className="project-links">
                {/* <a href="https://github.com/Shivamjha019/gitrepo" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://conveloins.com" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Convelo Insurance Service</h3>
              <p>
                Convelo Insurance Service is a comprehensive tool designed for managing insurance agencies and their operations. It facilitates seamless handling of agency details, policies, and performance tracking.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 6</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>MS SQL</li>
                <li>Angular</li>
                <li>CQRS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://lambis.com/wp-content/uploads/2023/05/logo-sticky.svg"
                alt="LAMB Logo"
                width="150"
                height="50"
                style={{ marginLeft: "-37px" }}
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                {/* <a href="https://github.com/Shivamjha019/gitrepo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://lambis.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LAMB Insurance Service</h3>
              <p>LAMB Insurance Service is a comprehensive tool designed to manage prospects and their associated insurance services. The system enables seamless tracking of client prospects, including their details, insurance needs, and progress through the sales funnel. It provides features for managing and monitoring services offered to each prospect, ensuring accurate follow-ups and tailored service offerings.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 6</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>SQL</li>
                <li>Angular</li>
                <li>CQRS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://www.mars.com/themes/custom/mars_acss/assets/images/logo-main.svg"
                alt="MARS Logo"
                width="100"
                height="40"
              // style={{ marginLeft: "-25px" }} 
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg> */}
              <div className="project-links">
                {/* <a href="https://github.com/Shivamjha019/gitrepo" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://www.mars.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mars</h3>
              <p>Global Landing Page (GLP) is tool which contains the list of all available different application which is used by different business users, and control of all the application for admin role.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 6</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>SQL</li>
                <li>Blazor</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://www.sabic.com/en/Images/SABIC-LOGO_tcm1010-14323.svg"
                alt="SABIC Logo"
                width="150"
                height="50"
                style={{ marginLeft: "-25px" }}
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://www.sabic.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SABIC</h3>
              <p>
                S&OP (Sales & Operations Planning) Application: A tool for demand forecasting and data sharing, enabling users to collaborate on planning. It includes a User Management interface for secure and customized access control.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 6</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>MS SQL</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://www.sabic.com/en/Images/SABIC-LOGO_tcm1010-14323.svg"
                alt="SABIC Logo"
                width="150"
                height="50"
                style={{ marginLeft: "-25px" }}
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://www.sabic.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SABIC</h3>
              <p>
                Olefins Application: A real-time tracking tool for plant data, inventories, and processes, helping businesses determine raw material needs. It also features a User Management interface for secure access control.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET 6</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>MS SQL</li>
                <li>React</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src={whiteHatJr}
                alt="WhiteHat Jr Logo"
                width="160"
                height="50"
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://www.whitehatjr.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>WhiteHat Jr</h3>
              <p>
                Developed and secured RESTful APIs using .NET Core for high-performance
                web applications. Performed unit and integration testing to ensure
                quality across multiple devices. Secured sensitive data using
                encryption techniques. Optimized SQL Server schemas and queries for
                real-time data processing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>.NET Core</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>React</li>
                <li>MS SQL Server</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src="https://firstreliableindustries.com/wp-content/uploads/2023/06/First-Reliable-Site-Logo.png"
                alt="First Reliable Industries Logo"
                width="80"
                height="50"
              />
              {/* <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> */}
              <div className="project-links">
                <a href="https://www.firstreliableindustries.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>First Reliable Industries</h3>
              <p>
                Developed a console application for the company to streamline production data analysis.
                Created dashboards and reports using Power BI and Excel, enabling management to make data-driven decisions.
                Contributed to automation and efficiency improvements in operational workflows.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ASP.NET Web Forms</li>
                <li>C#</li>
                <li>ADO.NET</li>
                <li>SQL Server</li>
                <li>Excel</li>
                <li>Power BI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

      </div>
    </Container>
  );
}