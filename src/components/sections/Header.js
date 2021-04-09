import React from "react"
import useMenu from "../useMenu"
import useTranslations from "../useTranslations"

import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Flex } from "@chakra-ui/react"

import NavLink from "../ui/NavLink"
import ToggleMenu from "../ui/ToggleMenu"
import Languages from "../ui/Languages"
import LocalizedLink from "../ui/LocalizedLink"

const Header = () => {
  const menuItems = useMenu()
  const { home } = useTranslations()
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      h={show ? "auto" : "100px"}
      w="full"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      zIndex="1"
      align="center"
      justify="space-between"
      p={4}
      mx="auto"
      bg="white"
      color="mangoTango.500"
      borderBottom="1px"
      borderBottomColor="mangoTango.500"
      wrap="wrap"
    >
      <LocalizedLink to="/" title={home} as={GatsbyLink}>
        <StaticImage
          src="../../images/LogoRecreat.png"
          alt="Recrea't"
          loading="eager"
          layout="fixed"
          placeholder="tracedSVG"
          width={200}
        />
      </LocalizedLink>

      <Languages />

      <ToggleMenu show={show} toggleMenu={toggleMenu}>
        {menuItems.map((menu, index) => (
          <NavLink key={index} to={menu.link} onClick={toggleMenu}>
            {menu.name}
          </NavLink>
        ))}
      </ToggleMenu>

      <Flex
        display={{ base: "none", md: "inherit" }}
        align="center"
        direction="row"
        justify={{ md: "space-between", lg: "flex-end" }}
      >
        {menuItems.map((menu, index) => (
          <NavLink key={index} to={menu.link}>
            {menu.name}
          </NavLink>
        ))}
      </Flex>
    </Flex>
  )
}

export default Header
