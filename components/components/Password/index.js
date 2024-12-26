/*
 * @Description:
 * @Date: 2024-12-23 17:04:05
 * @LastEditTime: 2024-12-25 12:31:31
 */

import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Password.module.css";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function Password(props) {
  const [view, setView] = useState(false);
  const handleClick = () => setView(!view);

  return (
    <InputGroup size="md" onChange={(e) => props.callBack(e.target.value)}>
      <Input
        type={view ? "text" : "password"}
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
          {view ? (
            <ViewIcon boxSize={5} color="#999" />
          ) : (
            <ViewOffIcon boxSize={5} color="#999" />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
