import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Box } from "@chakra-ui/react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />

      <Box w={'full'} minH={'100vh'}>
        {children}
      </Box>

      <Footer />
    </>
  )
}