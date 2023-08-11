import { Box, HTMLChakraProps } from "@chakra-ui/react"
import { ReactNode } from "react"

type CustomContainerProps = {
  children: ReactNode;
} & HTMLChakraProps<"div">;

export const CustomContainer = ({ children, ...rest }: CustomContainerProps) => {
  return (
    <Box as="div"
      w={'full'}
      px={{
        base: 5,
        md: 10,
        lg: 20
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}