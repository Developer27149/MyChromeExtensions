import { Button, Flex, Text } from "@radix-ui/themes"

export default function () {
  return (
    <div className="p-4">
      <div>login</div>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
    </div>
  )
}
