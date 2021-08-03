import React from 'react';

import { Box, Stack, Center, useTheme, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useDarkMode } from '@/hooks/useDarkMode';

const Illustration = ({ colorScheme = 'gray', ...rest }) => {
  const theme = useTheme();
  const { colorModeValue } = useDarkMode();
  const color = theme?.colors?.[colorScheme] ?? {};
  return (
    <Box
      as="svg"
      width={400}
      height={300}
      maxW="full"
      viewBox="0 0 400 300"
      fill="none"
      {...rest}
    >
      <path
        // Left Hand
        d="M65.013 104.416s-12.773-.562-13.719 11.938c-.946 12.5 16.13 8.397 13.719-11.938z"
        fill={color[colorModeValue('300', '700')]}
      />
      <path
        // Left Arm
        d="M182.326 67.705s-35.463-20.529-67.804-13.535c-32.342 6.993-60.624 52.94-60.624 52.94l11.499 6.837s49.74-51.775 83.275-21.444c33.535 30.331 33.654-24.798 33.654-24.798z"
        fill={color[colorModeValue('800', '600')]}
      />
      <path
        // Search Zone
        d="M334.098 220.092a14.333 14.333 0 01-9.838-7.37v-.106l-50.465-96.17-27.774 19.677 19.642 61.796a10.575 10.575 0 01-5.617 12.799 10.563 10.563 0 01-4.945.97 1037.507 1037.507 0 00-47.278-1.067c-85.178 0-154.23 9.93-154.23 22.184 0 12.255 69.052 22.195 154.23 22.195C293.001 255 362 245.07 362 232.837c0-4.756-10.328-9.14-27.902-12.745z"
        fill={color[colorModeValue('200', '900')]}
      />
      <path
        // Foots
        d="M173.611 225.563s1.578 5.333 6.256 5.962c4.679.63 5.66 5.333 1.365 6.293-4.296.96-14.921-5.066-14.921-5.066l.671-6.773 6.629-.416zM82.518 224.657s-5.414 1.173-6.395 5.791c-.98 4.618-5.734 5.237-6.395.875-.66-4.362 6.193-14.484 6.193-14.484l6.693 1.205-.096 6.613z"
        fill={color[colorModeValue('900', '600')]}
      />
      <path
        // Left Leg
        d="M83.5 143s-5.245 25.322 12.713 35.305c17.959 9.983 74.606-7.988 65.856 48.592h12.64s16.338-46.928-26.048-63.609l-12.864-14.601L83.5 143z"
        fill={color[colorModeValue('600', '700')]}
      />
      <path
        // Magnifying Glass Shadow
        d="M257.632 128.216l-4.299-4.112-26.891 28.16 4.299 4.111 26.891-28.159z"
        fill={color[colorModeValue('700', '500')]}
      />
      <path
        // Magnifying Glass Handle
        d="M255.537 126.2l-4.299-4.112-26.891 28.16 4.299 4.111 26.891-28.159z"
        fill={color[colorModeValue('500', '600')]}
      />
      <path
        // Magnifying Glass Shadow 2
        d="M267.233 131.381c6.913-7.239 8.606-16.849 3.78-21.464-4.826-4.615-14.342-2.487-21.256 4.752-6.913 7.24-8.605 16.85-3.779 21.465 4.825 4.615 14.342 2.487 21.255-4.753z"
        fill={color[colorModeValue('700', '500')]}
      />
      <path
        // Magnifying Glass Ring
        d="M265.133 129.382c6.914-7.24 8.606-16.849 3.78-21.464-4.825-4.615-14.342-2.487-21.255 4.752-6.913 7.24-8.606 16.849-3.78 21.464 4.826 4.615 14.342 2.487 21.255-4.752z"
        fill={color[colorModeValue('500', '600')]}
      />
      <path
        // Magnifying Glass
        d="M262.167 126.545c4.566-4.782 5.685-11.13 2.497-14.178-3.187-3.048-9.473-1.642-14.04 3.14-4.567 4.782-5.685 11.13-2.498 14.178 3.188 3.048 9.474 1.642 14.041-3.14z"
        fill={color[colorModeValue('50', '900')]}
      />
      <path
        // Head
        d="M217.261 74.257c1.932-2.325 3.256-4.248 3.256-4.248 3.133-4.106-.267-11.743-6.096-12.084a7.606 7.606 0 00-7.759 4.095l-.966 2.572-19.039 7.678 2.664 15.443 14.063-11.483c.418 1.245 1.052 2.35 1.7 3.26a4.269 4.269 0 004.448 1.638 4.267 4.267 0 001.51-.7 25.197 25.197 0 002.341-1.98l1.613.893a1.364 1.364 0 002.014-1.067l.256-4.02-.005.003z"
        fill={color[colorModeValue('300', '700')]}
      />
      <path
        // Body
        d="M192.199 93.056l-1.791-10.42a25.45 25.45 0 00-15.251-19.325 45.122 45.122 0 00-10.754-2.827c-4.732-.66-11.361 0-18.779 1.952-31.953 8.394-55.4 35.484-60.25 68.141L83 145l52.797 3.687s-2.664-14.931 15.987-14.931 42.269.192 40.415-40.7z"
        fill={color[colorModeValue('700', '500')]}
      />
      <path
        // Right Arm
        d="M169.945 95.488c4.977-16.617-14.324-30.055-28.084-19.496-11.51 8.82-24.513 24.701-25.024 51.503-.885 48.368 45.413 39.718 108.071 21.192l-1.993-14.089s-75.032 14.196-64.843-10.207c4.263-10.206 9.23-20.061 11.873-28.903z"
        fill={color[colorModeValue('800', '600')]}
      />
      <path
        // Right Leg
        d="M143.609 163.406s1.545 53.487-60.995 63.491l-2.42-11.338s50.092-12.425 17.735-45.712l45.68-6.441z"
        fill={color[colorModeValue('600', '700')]}
      />
      <path
        // Right Hand
        d="M223.298 137.307s17.244-1.824 18.758 4.917c1.513 6.741-1.791 10.313-17.309 5.333l-1.449-10.25z"
        fill={color[colorModeValue('300', '700')]}
      />
      <path
        // Hair
        d="M218.673 68.942a34.11 34.11 0 01-5.649-5.44 7.094 7.094 0 01-4.934 5.994 5.752 5.752 0 01-6.821-2.655l7.034-8.319a8.644 8.644 0 018.27-3.2c1.33.23 2.643.543 3.933.939 3.197 1.066 5.425 5.567 8.942 5.717a2.044 2.044 0 011.946 2.1c-.01.354-.111.7-.294 1.003-1.727 2.87-5.499 6.517-10.114 5.056a7.933 7.933 0 01-2.313-1.195z"
        fill={color[colorModeValue('800', '500')]}
      />
    </Box>
  );
};

export const Error404 = () => {
  const { t } = useTranslation();
  const { colorModeValue } = useDarkMode();
  return (
    <Center flex="1" p="8">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align="center"
        spacing="0"
      >
        <Illustration />
        <Box textAlign={{ base: 'center', md: 'left' }}>
          <Heading>{t('errors:404.title')}</Heading>
          <Text color={colorModeValue('gray.600', 'gray.400')}>
            {t('errors:404.description')}
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};
