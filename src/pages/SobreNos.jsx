import React from "react";
import { Container, Typography, Box } from "@mui/material";

import imageBackground from "../../assets/image.png";
import premio1 from "../../assets/rectangle23.png";
import premio2 from "../../assets/rectangle24.png";
import mentoria from "../../assets/mentoria.png";

const SobreNos = () => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", overflowY: "auto", pb: 4 }}>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${imageBackground})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ bgcolor: "rgb(0, 30, 79)", color: "white", textAlign: "center", py: 2 }}>
          <Typography variant="h4" component="h1">
            Sobre Nós
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            color: "white",
            mt: 6, // Aumentei o espaçamento superior
            mb: 6, // Aumentei o espaçamento inferior
            mx: "auto",
            textAlign: "justify",
          }}
        >
          <Typography variant="body1">
            A Vagou.app é uma plataforma criada especialmente para ajudar universitários a encontrar a moradia ideal de forma prática, segura e descomplicada.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            color: "white",
            mt: 6,
            mb: 6,
            mx: "auto",
            textAlign: "justify",
          }}
        >
          <Typography variant="h4" component="h1">
            História
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            A Vagou surgiu entre julho e agosto de 2023. Criada por alunos da UFC - Campus Quixadá, nasceu da necessidade real dos estudantes por moradia segura.
          </Typography>
        </Box>

        <Box sx={{ bgcolor: "rgb(0, 30, 79)", py: 6 }}>
          <Typography variant="h4" component="h1" sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
            Prêmios
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              mt: 6, // Espaçamento maior antes dos prêmios
              px: 2,
            }}
          >
            <Box sx={{ width: { xs: "90%", md: "50%" }, color: "white", textAlign: "justify" }}>
              <Typography variant="body1">
                Em 2023 fomos selecionados na trilha de inovação Bora Criar, dos Corredores Digitais, onde ficamos entre as 10 melhores startups emergentes do Ceará.
              </Typography>
            </Box>

            <Box component="img" src={premio1} alt="Premio 1" sx={{ width: { xs: "50%", md: "12%" } }} />
            <Box component="img" src={premio2} alt="Premio 2" sx={{ width: { xs: "50%", md: "12%" } }} />
          </Box>
        </Box>

        <Box sx={{ bgcolor: "white", py: 6 }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: "center", color: "rgb(0, 30, 79)", fontWeight: "bold" }}>
            Função Social
          </Typography>
          <Box sx={{ color: "rgb(0, 30, 79)", textAlign: "center", mx: "auto", mt: 2, width: { xs: "90%", md: "80%" } }}>
            <Typography variant="body1">
              A função social da Vagou é facilitar o acesso a moradias para estudantes universitários, promovendo inclusão, segurança e praticidade no processo de encontrar e alugar imóveis.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ bgcolor: "rgb(0, 30, 79)", py: 6 }}>
          <Typography variant="h4" component="h1" sx={{ textAlign: "center", color: "white", fontWeight: "bold" }}>
            Membros
          </Typography>
          <Box component="img" src={mentoria} alt="Mentoria" sx={{ width: "100%", display: "block", mx: "auto", mt: 6 }} />
        </Box>
      </Box>
    </Container>
  );
};

export default SobreNos;
