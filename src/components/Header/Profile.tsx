import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leonardo Menezes</Text>
        <Text color="gray.300" fontSize="small">
          leonhard.menezes@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Leonardo Menezes" src="https://github.com/leo-nezes.png" />
    </Flex>
  );
}