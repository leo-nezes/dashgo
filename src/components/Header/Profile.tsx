import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leonardo Menezes</Text>
          <Text color="gray.300" fontSize="small">
            leonhard.menezes@gmail.com
          </Text>
        </Box>
      ) }

      <Avatar size="md" name="Leonardo Menezes" src="https://github.com/leo-nezes.png" />
    </Flex>
  );
}