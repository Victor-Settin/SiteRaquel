import React from 'react';
import './Home.css';
import deusaGregaImg from '../../Images/deusa-grega.jpg'; // Corrigido o caminho da imagem
import cliente1 from '../../Images/deusa-grega.jpg'; // Importe imagens fictícias
import cliente2 from '../../Images/deusa-grega.jpg';
import cliente3 from '../../Images/deusa-grega.jpg';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowDown } from 'react-icons/fa'; // Importa o ícone da seta
import { motion } from 'framer-motion'; // Importa o framer-motion
import Slider from 'react-slick'; // Importa o componente Slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import DoulaServices from '../../Components/DoulaServices/DoulaServices';
import { useMediaQuery } from 'react-responsive'; // Importa o hook para responsividade
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate

const Home = () => {
  const navigate = useNavigate(); // Usar o hook useNavigate

  // Função para redirecionar para a página de Contato
  const handleContactClick = () => {
    navigate('/contact'); // Redireciona para a página /contact
  };

  const recommendations = [
    {
      name: "Nath",
      image: cliente1,
      rating: 5,
      comment: "Excellent service, very professional and caring throughout the entire process."
    },
    {
      name: "Cliente2",
      image: cliente2,
      rating: 4,
      comment: "Amazing experience! Made us feel so comfortable and supported."
    },
    {
      name: "Cliente3",
      image: cliente3,
      rating: 5,
      comment: "Highly recommend! Great attention to detail and a very warm presence."
    }, 
    // Mais recomendações
  ];

  // Define a lógica para diferentes tamanhos de tela
  const isSmallScreen = useMediaQuery({ maxWidth: 400 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true, // Ativa espaçamento entre os slides
    centerPadding: isSmallScreen ? '60px' : '280px', // Muda dinamicamente
  };
  

  return (
    <div className="home-wrapper">
      <div className="content-box">
        <div className="overlay">
          {/* Animação do texto */}
          <motion.div
            className="message-home"
            initial={{ opacity: 0, y: -50 }} // Começa invisível e levemente acima
            animate={{ opacity: 1, y: 0 }} // Aparece com opacidade e se move para a posição original
            transition={{ duration: 2, ease: 'easeOut' }} // Duração e suavização
          >
           Purple Turtle Nanny & Doula Services
            <br />
            Bay Area Doula Postpartum
          </motion.div>

          {/* Animação do botão */}
          <motion.button
            className="schedule-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            onClick={handleContactClick} // Ação ao clicar
          >
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </motion.button>
        </div>
      </div>

      {/* Seta animada */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <FaArrowDown className="arrow-icon" />
      </motion.div>

      <div className="section-about-me">
        <div className="photo-about-me">
          <motion.img
            src={deusaGregaImg}
            alt="Deusa Grega"
            className="home-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </div>
        <div className="description-about-me">
          <div className="content-side-about-me">
            <motion.b
              className="title-about-me"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              About Me
            </motion.b>
            <br />
            aqui
          </div>
          <motion.button
            className="schedule-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.8 }}
            onClick={handleContactClick} // Ação ao clicar
          >
            <AiOutlineCalendar style={{ marginRight: '8px', fontSize: '20px' }} />
            Schedule a Free Consultation
          </motion.button>
        </div>
      </div>
      <DoulaServices></DoulaServices>
      {/* Secção de recomendações */}
      <div className="recommendations-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <Slider {...settings}>
          {recommendations.map((rec, index) => (
            <div key={index} className="recommendation-card">
              <img src={rec.image} alt={rec.name} className="client-image" />
              <h3 className="client-name">{rec.name}</h3>
              <div className="client-rating">
                {"★".repeat(rec.rating)}{"☆".repeat(5 - rec.rating)}
              </div>
              <div className="date-time">12/12/2024</div>
              <p className="client-comment">{rec.comment}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
