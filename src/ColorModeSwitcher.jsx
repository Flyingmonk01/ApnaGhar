import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  

  return (
    <IconButton
      size={[ "xsm", "sm", "md"]}
      boxShadow={'0 0 10px #6A0DAD'}
      fontSize={["xs", "lg"]}
      aria-label={`Switch to ${text} mode`}
      variant="outline"
      color="current"
      zIndex={'overlay'}
      position={'absolute'}
      top={["2", '8']}
      right={'4'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
