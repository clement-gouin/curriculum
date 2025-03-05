import { createApp } from "vue";

/* eslint-disable camelcase */
const TEXTS = {
  fr: {
    education: "Formation",
    technologies: "Technologies",
    title: "Ingénieur informatique",
    work_experience: "Expérience",
    years: "ans",
  },
  en: {
    education: "Education",
    technologies: "Technologies",
    title: "IT engineer",
    work_experience: "Work experience",
    years: "",
  },
};
/* eslint-enable camelcase */

const EDUCATION = [
  {
    dates: "2014-2019",
    name: "ESEO, Angers",
    domain: "www.eseo.fr",
    texts: {
      fr: {
        title: "Diplôme d'ingénieur",
        description:
          "Classes préparatoires puis préparation d'un diplôme d'ingénieur généraliste orienté “cloud computing”.",
      },
      en: {
        title: "Engineering degree",
        description:
          "Preparatory classes followed by an engineering degree in “cloud computing”",
      },
    },
  },
];

const EXPERIENCES = [
  {
    icon: "fas fa-shield-halved",
    dates: `2021-${new Date().getUTCFullYear()}`,
    name: "Nameshield, Angers",
    domain: "www.nameshield.com",
    texts: {
      fr: {
        title: "Développeur",
        description:
          "Développement full-stack au sein d'une équipe maintenant une plateforme de gestion de certificats.",
      },
      en: {
        title: "Developer",
        description:
          "Full-stack development as part of a team maintaining a certificate management platform.",
      },
    },
  },
  {
    icon: "fas fa-building-columns",
    dates: "2020-2021",
    name: "EuroInformation, Nantes",
    domain: "www.e-i.com",
    texts: {
      fr: {
        title: "Analyste Développeur",
        description:
          "Amélioration et maintenance d'un ensemble d'applications SaaS internes en C# et ASP.NET au sein d'une petite équipe.",
      },
      en: {
        title: "Developer",
        description:
          "Improved and maintained a set of internal SaaS applications in C# and ASP.NET as part of a small team.",
      },
    },
  },
  {
    icon: "fas fa-industry",
    dates: "2019",
    name: "Thales SIX GTS, Cholet",
    domain: "www.thalesgroup.com",
    texts: {
      fr: {
        title: "Stage de fin d'études",
        description:
          "Conception et réalisation d'une preuve de concept sur le sujet de l'authentification sans mot de passe.",
      },
      en: {
        title: "Internship",
        description:
          "Design and production of a proof-of-concept on the subject of passwordless authentication.",
      },
    },
  },
];

const TECHNOLOGIES = [
  {
    icon: "fas fa-server",
    name: "Operations",
    brands: [
      { name: "Jenkins", domain: "www.jenkins.io" },
      { name: "Groovy", domain: "groovy-lang.org" },
      { name: "GitLab", domain: "about.gitlab.com" },
      { name: "GitLab CI", domain: "about.gitlab.com" },
      { name: "Docker", domain: "www.docker.com" },
      { name: "Docker Compose", domain: "www.docker.com" },
      { name: "Ansible", domain: "docs.ansible.com" },
      { name: "GitHub", domain: "github.com" },
      { name: "GitHub Actions", domain: "github.com" },
      { name: "Git", domain: "git-scm.com" },
      { name: "Debian", domain: "debian.org" },
      { name: "Linux", domain: "www.linux.org" },
      { name: "Nginx", domain: "nginx.org" },
      { name: "Apache/Httpd", domain: "httpd.apache.org" },
      { name: "Bash", domain: "www.gnu.org" },
    ],
  },
  {
    icon: "fas fa-gears",
    name: "Backend / Scripting",
    brands: [
      { name: "Python", domain: "python.org" },
      { name: "PHP", domain: "www.php.net" },
      { name: "Laravel", domain: "laravel.com" },
      { name: "NodeJS", domain: "nodejs.org" },
      { name: "C#", domain: "dotnet.microsoft.com" },
      { name: "ASP.NET", domain: "dotnet.microsoft.com" },
      { name: "Java", domain: "www.java.com" },
      { name: "NPM", domain: "www.npmjs.com" },
      { name: "Gradle", domain: "gradle.org" },
      { name: "Maven", domain: "maven.apache.org" },
    ],
  },
  {
    icon: "fas fa-database",
    name: "Data / Communication",
    brands: [
      { name: "PostgreSQL", domain: "www.postgresql.org" },
      { name: "Redis", domain: "redis.io" },
      { name: "MySQL", domain: "www.mysql.com" },
      { name: "RabbitMQ", domain: "www.rabbitmq.com" },
    ],
  },
  {
    icon: "fas fa-palette",
    name: "Frontend / Design",
    brands: [
      { name: "VueJS", domain: "vuejs.org" },
      { name: "Tailwind", domain: "tailwindcss.com" },
      { name: "Bootstrap", domain: "getbootstrap.com" },
      { name: "React", domain: "react.dev" },
      { name: "Typescript", domain: "typescriptlang.org" },
      { name: "CSS", icon: "fa-brands fa-css3" },
      { name: "HMTL", icon: "fa-brands fa-html5" },
    ],
  },
];

const app = createApp({
  data() {
    return {
      birthday: new Date(1996, 6, 25),
      lang: "en",
      education: EDUCATION,
      experiences: EXPERIENCES,
      technologies: TECHNOLOGIES,
    };
  },
  computed: {
    age() {
      const ageDifMs = Date.now() - this.birthday;
      const ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    today() {
      return new Date().getUTCFullYear();
    },
    text() {
      return TEXTS[this.lang];
    },
  },
  watch: {},
  beforeMount() {
    this.initApp();
  },
  mounted() {
    setTimeout(this.showApp);
  },
  methods: {
    showApp() {
      document.getElementById("app").setAttribute("style", "");
    },
    initApp() {
      const url = new URL(window.location);
      this.lang =
        url.searchParams.get("lang") ??
        (navigator.language || navigator.userLanguage).split("-")[0];
      if (!TEXTS[url.searchParams.get("lang")]) {
        this.lang = "en";
      }
    },
    brandIcon(domain) {
      return `https://s2.googleusercontent.com/s2/favicons?domain=${domain}`;
    },
  },
});

window.onload = () => {
  app.mount("#app");
};
