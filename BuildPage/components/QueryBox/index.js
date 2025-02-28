/*
 * @Description:
 * @Date: 2025-02-28 15:58:43
 * @LastEditTime: 2025-02-28 16:19:22
 */
import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchIcon, RepeatIcon } from "@chakra-ui/icons";
export default (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => props.callback(inputValue);
  const repeatIconClick = () => {
    props.callback(null);
    setInputValue("");
  };
  return (
    <InputGroup size="md" height="40px">
      <Input
        pr="4.5rem"
        height="45px"
        color="#fff"
        value={inputValue}
        placeholder="Enter  name"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <InputRightElement width="80px" mt="3px">
        <IconButton
          onClick={handleClick}
          colorScheme="#000"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
        <IconButton
          onClick={repeatIconClick}
          colorScheme="#000"
          aria-label="Search database"
          icon={<RepeatIcon />}
        />
      </InputRightElement>
    </InputGroup>
  );
};
