import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function FloatingComponent() {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      style={{ position: 'fixed', bottom: '20px', right: '20px' }}
    >
      <Box
        width="50px"
        height="50px"
        borderRadius="full"
        bg="blue.500"
        color="white"
        textAlign="center"
        lineHeight="50px"
      >
        Hello
      </Box>
    </motion.div>
  );
}

export default FloatingComponent;
