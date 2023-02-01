import { InfoIcon } from "@chakra-ui/icons"
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, useDisclosure } from "@chakra-ui/react"


export default function FlipCardPrompt() {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return isVisible ? (
    <Alert status='success' justifyContent='space-evenly'>
      <AlertIcon />
      <Box>
        <AlertDescription>
          Click on the Major Arcana cards to reveal their meanings, then click on "Get your reading!"
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        right={-10}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen} backgroundColor='transparent'><InfoIcon ></InfoIcon></Button>
  )
}