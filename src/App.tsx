import { FormEvent, useEffect, useRef, useState } from "react"

type IconName = "arrow" | "check" | "chevron" | "close" | "code" | "external" | "filter" | "github" | "graduation" | "help" | "home" | "linkedin" | "mail" | "menu" | "moon" | "phone" | "search" | "spark" | "sun" | "user" | "whatsapp" | "work"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m10 14 10-10" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    filter: (
      <>
        <path d="M4 5h16" />
        <path d="M7 12h10" />
        <path d="M10 19h4" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5.1 5.1 0 0 0 19.1.5S18 0 15 1.8a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5.1 5.1 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
    ),
    graduation: (
      <>
        <path d="m3 10 9-5 9 5-9 5z" />
        <path d="M7 12v5c3 2 7 2 10 0v-5" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 3.4 2c-.8.5-1.2 1-1.2 2" />
        <path d="M12 17h.01" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 3h.01" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.9.7 2 2 0 0 1 1.7 2z" />
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m4.9 19.1 1.4-1.4" />
        <path d="m17.7 6.3 1.4-1.4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-5.4A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M8.2 7.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.2.6 0l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.3-.7 1.7-.5.5-1.3.8-2.1.7-1.2-.2-2.8-.7-4.6-2.3-1.5-1.3-2.5-3-2.8-4.2-.3-1 .1-2 .5-2.5z" />
      </>
    ),
    work: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3" />
        <path d="M3 12h18" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    title: "Investigación en Machine Learning aplicada a Glaciares",
    short:
      "Análisis del retroceso del glaciar Antisana 15 mediante modelos predictivos y datos climáticos.",
    description:
      "Participación en un proyecto de investigación sobre el retroceso del glaciar Antisana 15 mediante técnicas de Machine Learning en Python, aplicando modelos como KNN y Random Forest con datos climáticos e índices oceánicos. El estudio permitió analizar patrones de cambio glaciar y fortalecer habilidades en análisis de datos y modelado predictivo.",
    technologies: ["Python", "Machine Learning", "KNN", "Random Forest"],
    category: "Datos e IA",
    image: "/images/projects/antisana1.png",
    alt: "Visualización del proyecto de Machine Learning aplicado al glaciar Antisana 15",
  },
  {
    title: "iPets / SIGACCEM-PetGlow",
    short:
      "Sistema modular para gestionar clientes, mascotas, citas e inventario de una tienda de mascotas.",
    description:
      "Proyecto de la materia de Ingeniería de Software y de Requerimientos. Se desarrolló el sistema SIGACCEM-PetGlow utilizando C# sobre la plataforma .NET, enfocado en la gestión y agendamiento de citas para servicios estéticos de mascotas. El sistema automatiza procesos en la tienda de mascotas iPets Shop como el registro de clientes y mascotas, la programación de citas y el control de inventario mediante una arquitectura modular, mejorando la eficiencia operativa y reduciendo errores asociados a la gestión manual. Además, integra una interfaz intuitiva que facilita la organización de la información y optimiza la atención al cliente.",
    technologies: ["C#", ".NET", "Arquitectura modular"],
    category: "Software",
    image: "/images/projects/ipets.png",
    alt: "Interfaz del sistema SIGACCEM-PetGlow para iPets",
  },
  {
    title: "Problema del Agente Viajero",
    short:
      "Simulación interactiva del TSP con rutas óptimas sobre mapas basados en OpenStreetMap.",
    description:
      "Proyecto de la materia de EDA II. Trata de una aplicación interactiva en Java para la simulación del Problema del Viajero (TSP), implementando algoritmos de grafos y técnicas de optimización como backtracking y ramificación y poda. El sistema permite al usuario ingresar ciudades sobre un mapa, calcular la ruta óptima y visualizar el recorrido en una interfaz gráfica construida con librerías como Swing y herramientas de mapas basadas en OpenStreetMap.",
    technologies: ["Java", "Swing", "OpenStreetMap", "Algoritmos"],
    category: "Software",
    image: "/images/projects/agenteViajero.png",
    alt: "Mapa y ruta del simulador del Problema del Agente Viajero",
  },
  {
    title: "Sistema de Gestión de Ayudantes de Investigación",
    short:
      "Control y seguimiento de estudiantes en proyectos académicos mediante una arquitectura MVC.",
    description:
      "Proyecto realizado en la materia de Diseño de Software. Se desarrolló un sistema de gestión de ayudantes de investigación utilizando Java, enfocado en el control y seguimiento de la participación de estudiantes en proyectos académicos. El sistema implementa el patrón de arquitectura MVC (Modelo-Vista-Controlador), integrando una interfaz gráfica desarrollada con JavaFX y una capa de persistencia basada en JPA/Hibernate conectada a MySQL.",
    technologies: ["Java", "JavaFX", "JPA/Hibernate", "MySQL"],
    category: "Software",
    image: "/images/projects/sistemaAyudantes.png",
    alt: "Interfaz del Sistema de Gestión de Ayudantes de Investigación",
  },
  {
    title: "ElectroStock IA",
    short:
      "Agente inteligente para la gestión de inventarios en PYMES ecuatorianas.",
    description:
      "Proyecto realizado en la materia de Inteligencia Artificial y Aprendizaje Automático. Se desarrolló un agente inteligente para la gestión de inventarios en PYMES ecuatorianas, implementado en Python. El sistema utiliza un modelo de lenguaje (LLM) ejecutado localmente con Ollama, integrando una arquitectura por capas que incluye una API REST desarrollada con FastAPI, un agente de razonamiento (ToolCallingAgent) y una base de datos en SQL Server.",
    technologies: ["Python", "Ollama", "FastAPI", "SQL Server"],
    category: "Datos e IA",
    image: "/images/projects/agenteIA.png",
    alt: "Interfaz del agente inteligente ElectroStock IA",
  },
  {
    title: "Tienda Maruja",
    short:
      "Aplicación de ventas e inventario con una base de datos distribuida entre sucursales.",
    description:
      "Proyecto de la materia de Bases de Datos Distribuidas. Se desarrolló un sistema de base de datos distribuida con fragmentación y replicación de datos, integrando una aplicación que permite realizar operaciones CRUD y gestionar ventas e inventario en múltiples sucursales en tiempo real. Para la interfaz se utilizó C# sobre la plataforma .NET.",
    technologies: ["C#", ".NET", "Bases de datos distribuidas"],
    category: "Software",
    image: "/images/projects/tiendaMaruja.png",
    alt: "Interfaz de gestión de ventas e inventario de Tienda Maruja",
  },
  {
    title: "Aplicación de Realidad Aumentada",
    short:
      "Detección de marcadores ArUco y superposición de modelos 3D en tiempo real.",
    description:
      "Aplicación desarrollada en la materia de Computación Gráfica. Se implementó una aplicación de Realidad Aumentada en Python con OpenCV y OpenGL para detectar marcadores ArUco calibrados y superponer un modelo 3D sobre ellos en tiempo real.",
    technologies: ["Python", "OpenCV", "OpenGL", "ArUco"],
    category: "Gráficos",
    image: "/images/projects/realidadAumentada.png",
    alt: "Demostración de la aplicación de Realidad Aumentada",
  },
  {
    title: "Dron Simulator",
    short:
      "Simulador 3D de dron con texturas, materiales, iluminación y modelos importados.",
    description:
      "Proyecto desarrollado en la materia de Computación Gráfica. Se implementó un simulador de dron en OpenGL. El proyecto integró conceptos avanzados de gráficos computacionales como texturas, visualización 3D, materiales, iluminación (point lights y flash lights) y carga de modelos 3D importados.",
    technologies: ["OpenGL", "Gráficos 3D", "Iluminación"],
    category: "Gráficos",
    image: "/images/projects/dronSimulator.png",
    alt: "Escenario tridimensional del proyecto Dron Simulator",
  },
  {
    title: "Polinvaders",
    short:
      "Videojuego inspirado en Space Invaders con lógica, eventos e interfaz en tiempo real.",
    description:
      "Proyecto de la materia Programación II sobre el desarrollo de un videojuego en Java basado en Space Invaders, implementado con arquitectura en capas y programación orientada a objetos, integrando lógica de juego, interfaz gráfica y manejo de eventos en tiempo real.",
    technologies: ["Java", "POO", "Arquitectura en capas"],
    category: "Software",
    image: "/images/projects/polinvaders.png",
    alt: "Pantalla del videojuego Polinvaders",
  },
]

const navItems = [
  ["inicio", "Inicio"],
  ["sobre-mi", "Sobre mí"],
  ["proyectos", "Proyectos"],
  ["experiencia", "Experiencia"],
  ["contacto", "Contacto"],
]

function Brand() {
  return (
    <a
      className="brand"
      href="#inicio"
      aria-label="Fernanda Rueda, ir al inicio"
    >
      <span>FR</span>
      <strong>Fernanda Rueda</strong>
    </a>
  )
}

function Header({
  active,
  theme,
  toggleTheme,
}: {
  active: string
  theme: "light" | "dark"
  toggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-button"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          aria-label="Navegación principal"
          className={open ? "nav open" : "nav"}
        >
          {navItems.map(([id, label]) => (
            <a
              aria-current={active === id ? "page" : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            aria-label={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Cambiar a modo ${theme === "light" ? "oscuro" : "claro"}`}
          >
            <Icon name={theme === "light" ? "moon" : "sun"} size={17} />
            <span>{theme === "light" ? "Modo oscuro" : "Modo claro"}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function ProjectModal({
  project,
  close,
}: {
  project: typeof projects[number]
  close: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const previous = document.activeElement as HTMLElement
    document.body.classList.add("modal-open")
    closeRef.current?.focus()
    const key = (event: KeyboardEvent) => event.key === "Escape" && close()
    window.addEventListener("keydown", key)
    return () => {
      document.body.classList.remove("modal-open")
      window.removeEventListener("keydown", key)
      previous?.focus()
    }
  }, [close])
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        aria-labelledby="project-modal-title"
        aria-modal="true"
        className="project-modal"
        role="dialog"
      >
        <button
          aria-label="Cerrar detalles"
          className="modal-close"
          onClick={close}
          ref={closeRef}
        >
          <Icon name="close" />
        </button>
        <div className="modal-image">
          <img alt={project.alt} src={project.image} />
        </div>
        <div className="modal-content">
          <p className="eyebrow">{project.category}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.description}</p>
          <h3>Tecnologías y enfoques</h3>
          <div className="tag-row">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
          <button className="button secondary modal-done" onClick={close}>
            Cerrar detalles
          </button>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const filters = ["Todos", "Software", "Datos e IA", "Gráficos"]
  const [filter, setFilter] = useState("Todos")
  const [selected, setSelected] = useState<typeof projects[number] | null>(null)
  const visible =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.category === filter)
  return (
    <section className="section projects-section" id="proyectos">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio seleccionado"
          title="Proyectos que conectan ideas con tecnología"
          text="Una colección de proyectos académicos y de investigación en software, inteligencia artificial y computación gráfica."
        />
        <div className="project-toolbar">
          <div
            aria-label="Filtrar proyectos por categoría"
            className="filters"
            role="group"
          >
            <span className="filter-label">
              <Icon name="filter" size={17} /> Filtrar:
            </span>
            {filters.map((item) => (
              <button
                aria-pressed={filter === item}
                className={filter === item ? "filter active" : "filter"}
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="result-count">
            {visible.length} {visible.length === 1 ? "proyecto" : "proyectos"}
          </p>
        </div>
        <div className="project-grid">
          {visible.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img alt={project.alt} loading="lazy" src={project.image} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <div className="tag-row">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span className="tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
                <button
                  className="text-button"
                  onClick={() => setSelected(project)}
                >
                  Ver detalles <Icon name="arrow" size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <ProjectModal close={() => setSelected(null)} project={selected} />
      )}
    </section>
  )
}

type FormValues = { name: string email: string phone: string message: string }
const emptyForm = { name: "", email: "", phone: "", message: "" }

function Contact() {
  const [form, setForm] = useState<FormValues>(emptyForm)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const [status, setStatus] = useState<"idle" | "checking" | "valid">("idle")
  const update = (field: keyof FormValues, value: string) => {
    setForm({ ...form, [field]: value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
    if (status === "valid") setStatus("idle")
  }
  const validate = () => {
    const next: Partial<FormValues> = {}
    if (form.name.trim().length < 2)
      next.name = "Escribe tu nombre con al menos 2 caracteres."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Ingresa un correo válido, por ejemplo: nombre@dominio.com."
    if (!/^\+?[\d\s-]{7,15}$/.test(form.phone))
      next.phone =
        "Usa entre 7 y 15 dígitos; puedes incluir +, espacios o guiones."
    if (form.message.trim().length < 10)
      next.message = "Cuéntame un poco más: escribe al menos 10 caracteres."
    return next
  }
  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      setStatus("idle")
      document.getElementById(`field-${Object.keys(next)[0]}`)?.focus()
      return
    }
    setStatus("checking")
    window.setTimeout(() => setStatus("valid"), 650)
  }
  const reset = () => {
    if (
      Object.values(form).some(Boolean) &&
      !window.confirm("¿Quieres limpiar todos los campos del formulario?")
    )
      return
    setForm(emptyForm)
    setErrors({})
    setStatus("idle")
  }
  return (
    <section className="section contact-section" id="contacto">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro">
            <p className="eyebrow">Contacto</p>
            <h2>Conversemos sobre tu próxima idea</h2>
            <p>
              ¿Tienes un proyecto en mente o quieres conversar? Me encantará
              saber de ti.
            </p>
            <div className="contact-list">
              <a
                href="https://wa.me/593999999999"
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <Icon name="whatsapp" />
                </span>
                <div>
                  <small>WhatsApp</small>
                  <strong>+593 99 999 9999</strong>
                </div>
                <Icon name="external" size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ruth-fernanda-rueda"
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <Icon name="linkedin" />
                </span>
                <div>
                  <small>LinkedIn</small>
                  <strong>Conectemos profesionalmente</strong>
                </div>
                <Icon name="external" size={18} />
              </a>
              <a
                href="https://github.com/fernygeek"
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  <Icon name="github" />
                </span>
                <div>
                  <small>GitHub</small>
                  <strong>Explora mi perfil</strong>
                </div>
                <Icon name="external" size={18} />
              </a>
            </div>
          </div>
          <form className="contact-form" noValidate onSubmit={submit}>
            <div className="form-header">
              <div>
                <p className="form-kicker">Formulario de contacto</p>
                <h3>Envíame un mensaje</h3>
              </div>
              <Icon name="mail" size={28} />
            </div>
            <p className="form-note">
              Los campos marcados con <span>*</span> son obligatorios. Este
              formulario es una demostración y no envía datos a un servidor.
            </p>
            <div className="field-grid">
              <div className={errors.name ? "field error" : "field"}>
                <label htmlFor="field-name">
                  Nombre <span aria-hidden="true">*</span>
                </label>
                <input
                  aria-describedby={errors.name ? "error-name" : undefined}
                  aria-invalid={!!errors.name}
                  id="field-name"
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Tu nombre completo"
                  value={form.name}
                />
                {errors.name && (
                  <small id="error-name" role="alert">
                    {errors.name}
                  </small>
                )}
              </div>
              <div className={errors.email ? "field error" : "field"}>
                <label htmlFor="field-email">
                  Correo <span aria-hidden="true">*</span>
                </label>
                <input
                  aria-describedby={errors.email ? "error-email" : "hint-email"}
                  aria-invalid={!!errors.email}
                  id="field-email"
                  inputMode="email"
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="nombre@dominio.com"
                  type="email"
                  value={form.email}
                />
                {errors.email ? (
                  <small id="error-email" role="alert">
                    {errors.email}
                  </small>
                ) : (
                  <small className="hint" id="hint-email">
                    No compartiré tu correo.
                  </small>
                )}
              </div>
              <div className={errors.phone ? "field error" : "field"}>
                <label htmlFor="field-phone">
                  Celular <span aria-hidden="true">*</span>
                </label>
                <input
                  aria-describedby={errors.phone ? "error-phone" : "hint-phone"}
                  aria-invalid={!!errors.phone}
                  id="field-phone"
                  inputMode="tel"
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+593 99 999 9999"
                  type="tel"
                  value={form.phone}
                />
                {errors.phone ? (
                  <small id="error-phone" role="alert">
                    {errors.phone}
                  </small>
                ) : (
                  <small className="hint" id="hint-phone">
                    Entre 7 y 15 dígitos.
                  </small>
                )}
              </div>
              <div
                className={errors.message ? "field error full" : "field full"}
              >
                <label htmlFor="field-message">
                  Mensaje <span aria-hidden="true">*</span>
                </label>
                <textarea
                  aria-describedby={
                    errors.message ? "error-message" : "hint-message"
                  }
                  aria-invalid={!!errors.message}
                  id="field-message"
                  maxLength={800}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Cuéntame sobre tu idea o consulta..."
                  rows={5}
                  value={form.message}
                />
                {errors.message ? (
                  <small id="error-message" role="alert">
                    {errors.message}
                  </small>
                ) : (
                  <small className="hint" id="hint-message">
                    {form.message.length}/800 caracteres
                  </small>
                )}
              </div>
            </div>
            <div aria-live="polite">
              {status === "valid" && (
                <div className="form-status success">
                  <Icon name="check" />
                  <span>
                    <strong>Datos validados correctamente.</strong> Como es una
                    demostración, el mensaje no fue enviado.
                  </span>
                </div>
              )}
              {Object.keys(errors).length > 0 && (
                <div className="form-status danger">
                  <Icon name="help" />
                  <span>
                    <strong>
                      Revisa{" "}
                      {Object.keys(errors).length === 1
                        ? "el campo indicado"
                        : "los campos indicados"}
                      .
                    </strong>{" "}
                    Tus demás datos se conservaron.
                  </span>
                </div>
              )}
            </div>
            <div className="form-actions">
              <button
                className="button primary"
                disabled={status === "checking"}
                type="submit"
              >
                {status === "checking" ? (
                  <>
                    <span className="spinner" /> Validando...
                  </>
                ) : (
                  <>
                    Enviar mensaje <Icon name="arrow" size={18} />
                  </>
                )}
              </button>
              <button
                className="button ghost"
                disabled={status === "checking"}
                onClick={reset}
                type="button"
              >
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [active, setActive] = useState("inicio")
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = window.localStorage.getItem("portfolio-theme")
    if (saved === "light" || saved === "dark") return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem("portfolio-theme", theme)
  }, [theme])
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 500)
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: "-30% 0px -60%" },
    )
    navItems.forEach(([id]) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
    }
  }, [])
  if (loading)
    return (
      <div aria-live="polite" className="app-loader" role="status">
        <div className="loader-mark">FR</div>
        <div>
          <strong>Preparando portafolio</strong>
          <span>Cargando proyectos y experiencia...</span>
        </div>
      </div>
    )
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header
        active={active}
        theme={theme}
        toggleTheme={() =>
          setTheme((current) => (current === "light" ? "dark" : "light"))
        }
      />
      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="availability">
                <span /> Disponible para aprender y crear
              </p>
              <p className="hero-intro">Hola, soy Fernanda Rueda</p>
              <h1>
                Construyo soluciones con <em>código y datos.</em>
              </h1>
              <p className="hero-lead">
                Estudiante de Ingeniería de Software en la Escuela Politécnica
                Nacional. Me interesa el desarrollo de software, el análisis de
                datos y el aprendizaje continuo.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#proyectos">
                  Ver mis proyectos <Icon name="arrow" size={18} />
                </a>
                <a className="button secondary" href="#contacto">
                  Contactarme
                </a>
              </div>
              <div className="tech-list" aria-label="Tecnologías principales">
                {["Java", "Python", "C#", ".NET", "MySQL"].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img
                  alt="Retrato de Fernanda Rueda"
                  src="/images/fernanda-rueda.jpg"
                />
              </div>
              <span className="portrait-dots" aria-hidden="true" />
            </div>
          </div>
          <a className="scroll-cue" href="#sobre-mi">
            <span>Descubrir más</span>
            <i>↓</i>
          </a>
        </section>

        <section className="section about-section" id="sobre-mi">
          <div className="container">
            <div className="about-layout">
              <div>
                <SectionHeading
                  eyebrow="Sobre mí"
                  title="Aprender, crear y seguir creciendo."
                  text="Una mirada a mi formación, motivaciones y forma de trabajar."
                />
                <p className="about-copy">
                  Hola, mi nombre es Fernanda Rueda, estudiante de la carrera de
                  Ingeniería de Software en la Escuela Politécnica Nacional y
                  puedo describirme como una persona amigable, perseverante y
                  entusiasta. Me gusta aprender nuevos temas, disfrutar de las
                  cosas sencillas de la vida, capacitarme para mejorar mis
                  habilidades, enfrentarme a nuevos retos y estoy comprometida
                  con mi formación profesional y con mi desarrollo personal.
                </p>
                <a className="text-button" href="#experiencia">
                  Conoce mi experiencia <Icon name="arrow" size={18} />
                </a>
              </div>
              <div className="about-cards">
                <article>
                  <span className="feature-icon">
                    <Icon name="graduation" />
                  </span>
                  <p>Formación</p>
                  <h3>Escuela Politécnica Nacional</h3>
                  <small>Ingeniería de Software</small>
                </article>
                <article>
                  <span className="feature-icon">
                    <Icon name="spark" />
                  </span>
                  <p>Intereses</p>
                  <h3>Software y análisis de datos</h3>
                  <small>Soluciones útiles basadas en tecnología</small>
                </article>
                <article className="wide">
                  <span className="feature-icon">
                    <Icon name="code" />
                  </span>
                  <div>
                    <p>Habilidades técnicas</p>
                    <h3>Del desarrollo al modelado predictivo</h3>
                    <div className="tag-row">
                      {[
                        "Java",
                        "Python",
                        "C#",
                        ".NET",
                        "MySQL",
                        "Machine Learning",
                      ].map((item) => (
                        <span className="tag" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section className="section experience-section" id="experiencia">
          <div className="container">
            <SectionHeading
              eyebrow="Trayectoria"
              title="Experiencia que transforma conocimiento en práctica"
              text="Experiencia profesional e investigación aplicada, presentadas sin fechas añadidas ni cargos no verificados."
            />
            <div className="timeline">
              <article className="timeline-item">
                <div className="timeline-marker">
                  <Icon name="work" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>Experiencia profesional</span>
                    <span>
                      Agencia de Regulación y Control de Energía y Recursos
                      Naturales no Renovables
                    </span>
                  </div>
                  <h3>Pasante</h3>
                  <p>
                    Revisión de información del sector energético reportada por
                    empresas distribuidoras.
                  </p>
                  <h4>Actividades principales</h4>
                  <ul>
                    <li>Revisión y validación de la información reportada.</li>
                    <li>Análisis de mediciones de energía y demanda.</li>
                    <li>
                      Trabajo con datos de consumidores regulados con SGDA.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="timeline-item">
                <div className="timeline-marker violet">
                  <Icon name="search" />
                </div>
                <div className="timeline-card">
                  <div className="timeline-meta">
                    <span>Participación en investigación</span>
                    <span>Glaciar Antisana 15</span>
                  </div>
                  <h3>Investigación en Machine Learning</h3>
                  <p>
                    Aplicación de modelos predictivos para analizar el retroceso
                    glaciar.
                  </p>
                  <h4>Aportes y aprendizajes</h4>
                  <ul>
                    <li>Integración de variables climáticas en el análisis.</li>
                    <li>Aplicación de Random Forest y K-Nearest Neighbors.</li>
                    <li>
                      Fortalecimiento de habilidades en análisis de datos,
                      modelado y resolución de problemas.
                    </li>
                  </ul>
                  <a
                    className="text-button"
                    href="https://doi.org/10.13140/RG.2.2.10598.74561"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Leer investigación en ResearchGate{" "}
                    <Icon name="external" size={17} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <Contact />

        <section className="help-section" aria-labelledby="ayuda-title">
          <div className="container help-layout">
            <div>
              <p className="eyebrow">Ayuda rápida</p>
              <h2 id="ayuda-title">¿Cómo explorar este portafolio?</h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  ¿Cómo encuentro proyectos por área?
                  <Icon name="chevron" />
                </summary>
                <p>
                  En la sección Proyectos, selecciona Software, Datos e IA o
                  Gráficos. “Todos” restaura la galería completa.
                </p>
              </details>
              <details>
                <summary>
                  ¿Cómo consulto la información completa?
                  <Icon name="chevron" />
                </summary>
                <p>
                  Activa “Ver detalles” en cualquier tarjeta. Cierra la ventana
                  con el botón, haciendo clic fuera o presionando Escape.
                </p>
              </details>
              <details>
                <summary>
                  ¿El formulario envía mensajes reales?
                  <Icon name="chevron" />
                </summary>
                <p>
                  No. Es un prototipo de validación: revisa los datos y explica
                  los errores, pero no transmite información a un servidor.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <Brand />
          <p>© 2026 Fernanda Rueda. Todos los derechos reservados.</p>
          <div>
            <a
              aria-label="GitHub de Fernanda Rueda"
              href="https://github.com/fernygeek"
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="github" />
            </a>
            <a
              aria-label="LinkedIn de Fernanda Rueda"
              href="https://www.linkedin.com/in/ruth-fernanda-rueda"
              rel="noreferrer"
              target="_blank"
            >
              <Icon name="linkedin" />
            </a>
            <a href="#inicio">Volver al inicio ↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return <Portfolio />
}
