import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Container, Text, Flex } from '@chakra-ui/react';
import HeroSection from './HeroSection.jsx';
import FloatingComponent from './FloatingComponent.jsx';
import ContactUs from '../../pages/ContectUs.jsx'; 
import MySkills from './MySkills.jsx';
import ProjectSection from './ProjectSection.jsx';



function Home() {
  const { isAuthorized } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/signin');
    }
  }, [isAuthorized, navigate]);

  return (
    <Container maxW="container.xl" p={0} >
      {isAuthorized ? (
        <>
          
          <HeroSection />
          <MySkills />
          <ProjectSection />
          <Flex direction="column" alignItems="center" mt={10}>
            
            <ContactUs />
          </Flex>
    
          
          
          <FloatingComponent />
      

        </>
      ) : null}

    </Container>
  );
}

export default Home;
