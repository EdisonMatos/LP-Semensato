import logo from "../assets/imgs/logo/logo.png";
import solidLogo from "../assets/imgs/logo/logo.png";
import heroImg from "../assets/imgs/hero/lawHero.jpg";
import bgHeroImg from "../assets/imgs/hero/bgHero.webp";

import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.png";

import imgSteps from "../assets/imgs/steps/imgSteps.jpg";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.jpg";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.jpg";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.jpg";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.jpg";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.png";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.png";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.png";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.png";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";

import {
  Calculator,
  User,
  House,
  Briefcase,
  HardHat,
  CircleUserRound,
  BadgePercent,
  FileCheck,
  Scale,
  FileX,
  HousePlus,
  Grid2x2Check,
  Building2,
  Network,
  Pickaxe,
  Wallet,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Dr. Lúcio Semenssato",
  email: "contato", // Email desejado pelo cliente
  domain: "A Definir", // Sem "www"
  phone: {
    ddd: "14",
    firstPart: "99810", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "1526", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>A Definir</p>
      <p>A Definir</p>
      <p>A Definir</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Atendimento Online 24h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "A definir", // Sem o @
  facebookProfile: "A Definir",
  linkeDinProfile: "A Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  slogan: "",
};

const content = {
  texts: {
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      adress: infos.endereco,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: solidLogo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ADVOGADO CÍVEL E EMPRESARIAL EM GARÇA - SP",
      title: (
        <h1 className="mb-[16px]">
          Soluções jurídicas para
          <span className="text-primary"> seus desafios</span>
        </h1>
      ),
      subtitle:
        "Especialização em Cível e Empresarial para soluções legais rápidas e eficazes.",
      heroImg: heroImg,
      ctaButtonText: "Entre em contato",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dbb14c"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        ),
        text: "Atendimento  online 24h",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "ESPECIALIDADES",
      title: "Soluções sob medida",
      subtitle:
        "Combinando especialização e estratégia, oferecemos suporte jurídico promovendo justiça em cada situação.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Direito de Família",
        subtitle: "Experiência em divórcio, guarda e revisão de pensão.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJNMTE3Ljc3NiAxNzQuMzQ1Yy0zLjktMy45LTEwLjI0LTMuOS0xNC4xMzkgMC0zLjkxIDMuOTEtMy45MSAxMC4yNCAwIDE0LjE0IDMuOSAzLjkxIDEwLjI0IDMuOTEgMTQuMTM5IDAgMy45MDktMy45IDMuOTA5LTEwLjIzIDAtMTQuMTR6TTI1My4xOTkgNDQ3LjcxOGM0LjQwOS01Ljk3MiA2Ljc5Mi0xMy4xNjcgNi43OTItMjAuNzMyIDAtMTkuMjk4LTE1LjctMzQuOTk5LTM0Ljk5OS0zNC45OTlINTQuOTk4Yy05LjM1MyAwLTE4LjE0MiAzLjY0LTI0Ljc0OSAxMC4yNDktNi42MSA2LjYwOC0xMC4yNSAxNS4zOTctMTAuMjUgMjQuNzVhMzQuODEgMzQuODEgMCAwIDAgNi44MTUgMjAuNzJDMTAuODkxIDQ1Ni4wNzggMCA0NzIuNzc4IDAgNDkxLjk4M3YxMGMwIDUuNTIzIDQuNDc4IDEwIDEwIDEwaDI1OS45OWM1LjUyMiAwIDEwLTQuNDc3IDEwLTEwdi0xMGMwLTE5LjE5Ni0xMC44OC0zNS44ODktMjYuNzkxLTQ0LjI2NXpNNDQuMzkgNDE2LjM3NmExNC45IDE0LjkgMCAwIDEgMTAuNjA4LTQuMzkxaDE2OS45OTRjOC4yNzEgMCAxNC45OTkgNi43MjkgMTQuOTk5IDE0Ljk5OSAwIDQuMDEtMS41NiA3Ljc3Ny00LjM5MiAxMC42MDlhMTQuOSAxNC45IDAgMCAxLTEwLjYwOCA0LjM5MUg1NC45OThjLTguMjcxIDAtMTQuOTk5LTYuNzI5LTE0Ljk5OS0xNC45OTkgMC00LjAwOSAxLjU1OS03Ljc3NyA0LjM5MS0xMC42MDl6bS0yNC4zOTEgNzUuNjA3YzAtMTYuNTQxIDEzLjQ1OC0yOS45OTkgMjkuOTk5LTI5Ljk5OWgxNzkuOTk0YzE2LjU0MSAwIDI5Ljk5OSAxMy40NTggMjkuOTk5IDI5Ljk5OUgxOS45OTl6IiBmaWxsPSIjMmQ0YTVmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTUwMi42OTMgNDIwLjEyNGMtMy4zOTYtNS4yNjMtNy40NDgtOS45MTctMTIuMDQ1LTEzLjgzM2wtNDYuNzI1LTQwLjc1M2ExMC4wNyAxMC4wNyAwIDAgMC0xLjI2OS0xLjU1MSA5Ljk3MiA5Ljk3MiAwIDAgMC0yLjcxLTEuOTE4bC0yOC4yNTctMjQuNjQ1LTEzMC43OS0xMTQuMDkxYzUuMzU0LTUuNTk3IDguMzAyLTEyLjkxNiA4LjMwMi0yMC42OTkgMC04LjAxOC0zLjEyMS0xNS41NTMtOC43OTQtMjEuMjI1YTI5LjY5IDI5LjY5IDAgMCAwLTguMjkxLTUuODM3bDEyLjEtMTIuMWE0MC4yNDIgNDAuMjQyIDAgMCAwIDEwLjMzNSAxLjM1OWMxMC4yNDEtLjAwMSAyMC40ODMtMy44OTkgMjguMjc5LTExLjY5NSA3LjU1OC03LjU1NyAxMS43Mi0xNy42MDIgMTEuNzItMjguMjg1cy00LjE2Mi0yMC43MjgtMTEuNzE5LTI4LjI4NUwyMzcuOTgxIDExLjcyQzIzMC40MjQgNC4xNjMgMjIwLjM3OC4wMDEgMjA5LjY5Mi4wMDFjLTEwLjY4MSAwLTIwLjcyNCA0LjE2Mi0yOC4yOCAxMS43MTktMTAuNDQ0IDEwLjQ0NC0xMy44ODIgMjUuMjczLTEwLjMzNiAzOC42MTVMNTAuMzUxIDE3MS4wNTlhNDAuMjQ2IDQwLjI0NiAwIDAgMC0xMC4zNTMtMS4zNTVjLTEwLjY4OCAwLTIwLjcyOSA0LjE1OS0yOC4yOCAxMS43MDktMTUuNTk2IDE1LjU5Ni0xNS41OTYgNDAuOTczIDAgNTYuNTdsODQuODQ3IDg0Ljg0OGM3Ljc5OSA3Ljc5OCAxOC4wNDIgMTEuNjk3IDI4LjI4NSAxMS42OTcgMTAuMjQ0IDAgMjAuNDg3LTMuODk5IDI4LjI4Ni0xMS42OTcgMTAuNDQ0LTEwLjQ0NSAxMy44ODItMjUuMjczIDEwLjMzNi0zOC42MTVsMTIuMDc1LTEyLjA3NmEzMC4wMTYgMzAuMDE2IDAgMCAwIDUuODY2IDguMjcxYzUuNjY2IDUuNjY2IDEzLjE5OSA4Ljc4NyAyMS4yMTUgOC43ODcgNy43NzUgMCAxNS4wOTEtMi45NDMgMjAuNjk2LTguMjkxTDM2Mi42MyA0NDAuOTYxYy4zODQuNi44MzIgMS4xNzEgMS4zNTYgMS42OTUuMTc5LjE3OS4zNjkuMzQyLjU1OC41MDRsNDEuNTExIDQ3LjY5NGE1OC45NTggNTguOTU4IDAgMCAwIDMuMjggMy41NjFjMTEuNDAxIDExLjM5NyAyNi40NiAxNy41ODIgNDIuMjcgMTcuNTgyIDIuNzg3IDAgNS42LS4xOTIgOC40MTctLjU4MiAxOC44MjktMi42MDYgMzUuMTAyLTEzLjg3IDQ0LjY0NC0zMC45MDggMTAuNDUzLTE4LjY3MyA5LjY3NS00Mi4zOC0xLjk3My02MC4zODN6TTE5NS41NTUgMjUuODYyYTE5Ljg2OCAxOS44NjggMCAwIDEgMTQuMTM4LTUuODYxIDE5Ljg3NSAxOS44NzUgMCAwIDEgMTQuMTQ3IDUuODYxbDg0Ljg0OCA4NC44NDdhMTkuODcyIDE5Ljg3MiAwIDAgMSA1Ljg2IDE0LjE0MyAxOS44NjggMTkuODY4IDAgMCAxLTUuODYxIDE0LjE0M2MtNy43OTUgNy43OTctMjAuNDgxIDcuNzk3LTI4LjI3NiAwTDE5NS41NiA1NC4xNDRsLS4wMDUtLjAwNWMtNy43OTctNy43OTYtNy43OTctMjAuNDgxIDAtMjguMjc3em0tNTYuNTYxIDI4Mi44MjdjLTcuNzk4IDcuNzk4LTIwLjQ4OSA3Ljc5OS0yOC4yODcgMEwyNS44NiAyMjMuODQyYy03Ljc5OS03Ljc5OS03Ljc5OS0yMC40ODcgMC0yOC4yODcgMy43NzItMy43NzMgOC43OTQtNS44NTEgMTQuMTM4LTUuODUxIDUuMzQzIDAgMTAuMzYyIDIuMDc3IDE0LjEzMyA1Ljg0N2w4NC44NjIgODQuODYyYzcuNzk4IDcuNzk1IDcuNzk4IDIwLjQ4MS4wMDEgMjguMjc2em00Mi4xMDItNzAuMzgtMjcuOTYxIDI3Ljk2Mi04NC44NTYtODQuODU2TDE4MS40MTIgNjguMjhsODQuODU1IDg0Ljg1Ni0yOC4wMTIgMjguMDEzYy0uMDkxLjA4Ni0uMTguMTctLjI3Ni4yNjVsLTU2LjUzOCA1Ni41MzljLS4xMTcuMTE1LS4yMy4yMzUtLjM0NS4zNTZ6bTM1LjcwNiAyMC44NjEtLjA1OS4wNTktNy4wNDIgNy4wNDJhOS45MzkgOS45MzkgMCAwIDEtNy4wNzQgMi45MjggOS45MzMgOS45MzMgMCAwIDEtNy4wNzMtMi45MjkgOS45NDIgOS45NDIgMCAwIDEtMi45MzItNy4wNzljMC0yLjYxOC45OTktNS4wODEgMi44MTItNi45MzlsNTYuODAxLTU2LjgwMWMzLjg5My0zLjc4NiAxMC4xODctMy43MzkgMTQuMDM0LjEwNGE5Ljk0NSA5Ljk0NSAwIDAgMSAyLjkzMSA3LjA3OSA5LjkwOCA5LjkwOCAwIDAgMS0yLjkzMiA3LjA2OWwtNy4wMDEgNy4wMDFhOS42NCA5LjY0IDAgMCAwLS4xNDMuMTQzbC00Mi4zMjIgNDIuMzIzem0yMC43MDggNy41NzUgMjkuMjI2LTI5LjIyNiAxMjMuNzQyIDEwNy45MzUtNDUuMTU0IDQ1LjE1NUwyMzcuNTEgMjY2Ljc0NXptMTIwLjk3NSAxMzguOTg2IDQ3LjA5OS00Ny4xIDE1LjEwNyAxMy4xNzctNDkuMDQ1IDQ5LjA0Ni0xMy4xNjEtMTUuMTIzem0xMjguNzMyIDY1LjAwNmMtNi40NTQgMTEuNTIzLTE3LjM2NSAxOS4xMjgtMjkuOTM2IDIwLjg2OC0xMi41NDIgMS43MzYtMjQuODY1LTIuMzk1LTMzLjgwNy0xMS4zMzNhMzguNDIxIDM4LjQyMSAwIDAgMS0yLjE5MS0yLjM4MWwtLjA5Ny0uMTEzLTM2LjM4LTQxLjgwMiA1MC45OTEtNTAuOTkyIDQxLjc1IDM2LjQxNy4wOTYuMDgzYzMuMTI1IDIuNjU3IDUuODk4IDUuODQ4IDguMjUxIDkuNDk0IDcuNTYyIDExLjY4NSA4LjA5MiAyNy42NjUgMS4zMjMgMzkuNzU5eiIgZmlsbD0iIzJkNGE1ZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0xODguNDg0IDEwMy42MzZjLTMuOTA2LTMuOTA1LTEwLjIzNi0zLjkwNS0xNC4xNDIgMGwtNDIuNDI4IDQyLjQyOGMtMy45MDUgMy45MDUtMy45MDUgMTAuMjM3IDAgMTQuMTQxYTkuOTY4IDkuOTY4IDAgMCAwIDcuMDcxIDIuOTI5IDkuOTcyIDkuOTcyIDAgMCAwIDcuMDcxLTIuOTI5bDQyLjQyOC00Mi40MjhjMy45MDUtMy45MDQgMy45MDUtMTAuMjM1IDAtMTQuMTQxeiIgZmlsbD0iIzJkNGE1ZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
        ),
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card2: {
        img: featuresImg2,
        title: "Direito Empresarial",
        subtitle: "Suporte em crédito, penhora e pesquisa extrajudicial.",
        description: (
          <div>
            A Definir <br />
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: <Building2 />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card3: {
        img: featuresImg3,
        title: "Direito Trabalhista",
        subtitle: "Defesa trabalhista com cálculos e orientações precisas.",
        description: (
          <div>
            A Definir <br />
            <br />A Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: <Pickaxe />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      card4: {
        img: featuresImg4,
        title: "Defesa do Devedor",
        subtitle: "Proteção ao devedor: revisão de contratos e dívidas.",
        description: (
          <div>
            A Definir <br />
            <br />
            A Definir <br />
            A Definir <br />
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: <Wallet />,
        buttonLabelModal: "A Definir",
        buttonLabel: "A Definir",
      },
      moreFeatures: {
        card1: {
          ico: "A Definir",
          title: "A Definir",
          subtitle: "A Definir",
        },
        card2: {
          ico: "A Definir",
          title: "A Definir",
          subtitle: "A Definir",
        },
        card3: {
          ico: "A Definir",
          title: "A Definir",
          subtitle: "A Definir",
        },
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem ilustrativa de escritório",
      },
      miniTag: "QUEM É DR. LÚCIO SEMENSSATO",
      title: "Minha trajetória",
      subtitle:
        "A busca por justiça, igualdade e honestidade sempre guiou minha jornada.",
      paragraph: (
        <div>
          Desde o início, essas convicções me conduziram ao Direito, onde
          encontrei não apenas uma profissão, mas uma verdadeira vocação.
          <br />
          Embora a graduação em Direito ofereça inúmeras possibilidades de
          carreira, foi na advocacia que vivenciei a oportunidade de fazer a
          diferença, atuando diretamente na defesa de direitos e na construção
          de soluções que promovam uma sociedade mais justa.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      titleModal: <strong>Minha trajetória</strong>,
      modal: (
        <p>
          <strong>
            A busca por justiça, igualdade e honestidade sempre guiou minha
            jornada.
          </strong>
          <br />
          <br />
          Desde o início, essas convicções me conduziram ao Direito, onde
          encontrei não apenas uma profissão, mas uma verdadeira vocação.
          <br />
          <br />
          Embora a graduação em Direito ofereça inúmeras possibilidades de
          carreira, foi na advocacia que vivenciei a oportunidade de fazer a
          diferença, atuando diretamente na defesa de direitos e na construção
          de soluções que promovam uma sociedade mais justa.
          <br />
          <br />
          Minha trajetória começou antes mesmo de concluir a formação acadêmica,
          ao ser aprovado no exame da Ordem. Depois disso, finalizei o curso de
          Direito pela UNIMAR (Universidade de Marília) e, ao longo da minha
          carreira, busquei especializações em Direito Cível e Empresarial –
          áreas que, desde o início, mostraram-me o quanto podem transformar a
          vida das pessoas.
          <br />
          <br />
          Em 2020, assumi um novo desafio como Assessor de Gabinete na
          Prefeitura Municipal de Garça (SP), oportunidade onde participei na
          elaboração de políticas para o povo dessa Cidade. Logo depois, fui
          convidado a ocupar o cargo de Diretor Municipal de Desenvolvimento
          Econômico, posição que mantive de 2021 a 2024. Essa experiência foi
          enriquecedora, ampliando meu conhecimento em Direito Público e na área
          empresarial, especialmente em questões de incentivo e desenvolvimento
          econômico.
          <br />
          <br />
          Hoje, dedico-me exclusivamente à advocacia, onde cada caso representa
          uma nova oportunidade de impactar vidas e resolver problemas de forma
          eficaz e acessível.
          <br />
          <br />
          Estamos comprometidos em oferecer soluções que realmente fazem
          diferença, sempre com a dedicação e a experiência que acumulei ao
          longo dessa trajetória.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "A Definir",
        title: "A Definir",
        subtitle: "A Definir",
        paragraph: <p>A Definir</p>,
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title: "Está com um problema e precisa de ajuda? ",
      subtitle: "Entre em contato para agendar uma reunião.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso processo de atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Reunião para entender seu caso e identificar suas necessidades.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Análise detalhada de documentos e evidências do seu caso.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Desenvolvemos uma estratégia personalizada para seu caso.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Procedimento eficaz",
          cardDescription:
            "Iniciamos ações pautadas na resolução do problema, judiciais e extrajudiciais.",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas.",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Agende sua consulta conosco via WhatsApp e conversaremos sobre suas necessidades e avaliaremos os custos.",
        },
        question2: {
          question: "Qual é o prazo médio para resolução de um caso?",
          answer:
            "O prazo médio varia conforme a complexidade, mas discutiremos uma estimativa durante a consulta inicial.",
        },
        question3: {
          question: "Quais documentos devo levar para a consulta?",
          answer:
            "Traga os documentos relevantes ao seu caso, como contratos, correspondências e registros, além de documentos pessoais e comprovante de residência.",
        },
        question4: {
          question: "Vocês oferecem serviços de consultoria preventiva?",
          answer:
            "Sim, oferecemos consultoria preventiva para evitar problemas futuros e garantir conformidade legal.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A Definir",
      title: "A Definir",
      subtitle: "A Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A Definir",
      subtitle: "A Definir",
      trustedMore: {
        title: "A Definir",
        subtitle: "A Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A Definir",
      number2: 500,
      number2Description: "A Definir",
      number3: 1000,
      number3Description: "A Definir",
    },
    team: {
      title: "A Definir",
      subtitle: "A Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
    },
  },
};

export default content;
