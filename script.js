const App = () => {
    const [{ themeName }] = useContext(ThemeContext);
  
    return (
      <div id='top' className={`${themeName} app`}>
        <Header />
  
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
  
        <ScrollToTop />
        <Footer />
      </div>
    );
  };
  
  const Navbar = () => {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [showNavList, setShowNavList] = useState(false);
  
    const toggleNavList = () => setShowNavList(!showNavList);
  
    return (
      <nav className='center nav'>
        <ul
          style={{ display: showNavList ? 'flex' : null }}
          className='nav__list'
        >
          {projects.length ? (
            <li className='nav__list-item'>
              <a
                href='#projects'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Projects
              </a>
            </li>
          ) : null}
  
          {skills.length ? (
            <li className='nav__list-item'>
              <a
                href='#skills'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Skills
              </a>
            </li>
          ) : null}
  
          {contact.email ? (
            <li className='nav__list-item'>
              <a
                href='#contact'
                onClick={toggleNavList}
                className='link link--nav'
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>
  
        <button
          type='button'
          onClick={toggleTheme}
          className='btn btn--icon nav__theme'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
  
        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon nav__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    );
  };
  
  const Header = () => {
    const { homepage, title } = header;
  
    return (
      <header className='header center'>
        <h3>
          {homepage ? (
            <a href={homepage} className='link'>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    );
  };
  
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  );
  
  const ProjectContainer = ({ project }) => (
    <div className='project'>
      <h3>{project.name}</h3>
  
      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
  
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}
  
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
  
  const Projects = () => {
    if (!projects.length) return null;
  
    return (
      <section id='projects' className='section projects'>
        <h2 className='section__title'>Projects</h2>
  
        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </section>
    );
  };
  
  const Skills = () => {
    if (!skills.length) return null;
  
    return (
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  const Contact = () => {
    if (!contact.email) return null;
  
    return (
      <section className='section contact center' id='contact'>
        <h2 className='section__title'>Contact</h2>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </section>
    );
  };
  
  const Footer = () => (
    <footer className='footer'>
      <a
        href='https://github.com/miquelyo'
        className='link footer__link'
      >
        Miquel Yosafat @2024
      </a>
    </footer>
  );
  