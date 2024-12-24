/*
 * @Description:
 * @Date: 2024-12-23 17:04:05
 * @LastEditTime: 2024-12-24 11:49:47
 */

import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Password.module.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function Password(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        placeholder={props.placeholder}
        textAlign="center"
        h="48px"
        lineHeight="48px"
        borderRadius="15px"
        bg="#fff"
      />
      <InputRightElement width="4.5rem" mt="5px">
        <Button
          h="1.75rem"
          size="sm"
          bg="#fff"
          _hover={{ bg: "#fff" }}
          onClick={handleClick}
        >
          {show ? (
            <ViewIcon boxSize={5} color="#999" />
          ) : (
            <ViewOffIcon boxSize={5} color="#999" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
