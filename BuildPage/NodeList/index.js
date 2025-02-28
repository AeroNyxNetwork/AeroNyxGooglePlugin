/*
 * @Description:
 * @Date: 2025-02-28 13:35:12
 * @LastEditTime: 2025-02-28 16:43:58
 */
import { Box, HStack } from "@chakra-ui/react";
import styles from "./nodelist.module.scss";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { size, concat } from "lodash";
import QueryBox from "./../components/QueryBox";
export default () => {
  const listRef = useRef(null);
  const loadMoreRef = useRef(null);
  const [list, setList] = useState([]);
  const [listSize, setListSize] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const [loading, setLoading] = useState(false);
  const [queryName, setQueryName] = useState(null);
  useEffect(() => {
    getAllPdaList();
  }, [pageSize, queryName]);

  const getAllPdaList = () => {
    axios
      .get(
        `https://nodev2.aeronyx.network/v2/onchain/get_info_account?page_index=${
          pageSize - 1
        }&${queryName && `name=${queryName}`}`
      )
      .then((res) => {
        setList((prevList) => [...prevList, ...res.data.data.items]);
        setListSize(res.data.data.all_count);
      })
      .catch((err) => {
        setList([]);
      });
  };

  const handleScroll = () => {
    if (size(list) < listSize) {
      if (listRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listRef.current;
        if (scrollHeight - scrollTop === clientHeight && !loading) {
          setPageSize((pageSize) => pageSize + 1);
          console.log("1", 1);
          setTimeout(() => {
            if (listRef.current) {
              listRef.current.scrollTop -= 50;
            }
          }, 100);
        }
      }
    } else {
      setLoading(true);
    }
  };

  const QueryBoxCallback = (e) => {
    setQueryName(e);
    setList([]);
    setPageSize(1);
  };

  return (
    <>
      <QueryBox callback={(e) => QueryBoxCallback(e)}></QueryBox>
      <Box
        ref={listRef}
        onScroll={handleScroll}
        className={styles.list_scrollbars}
      >
        {size(list) > 0 &&
          list.map((item, index) => {
            return (
              <HStack
                justify="space-between"
                className={styles.listStyles}
                key={index}
              >
                <HStack>
                  {/* <Image src=""   /> */}
                  <Box lineHeight="30px">
                    <Box>Name：{item.name}</Box>
                    <Box>IP：{item.offchain_ip}</Box>
                  </Box>
                </HStack>
                <Box textAlign="right" lineHeight="30px">
                  <Box>City：{item.city}</Box>
                  <Box>TVL：{item.total}</Box>
                </Box>
              </HStack>
            );
          })}
        {loading && (
          <Box mt="20px" h="50px" textAlign="center" color="#fff">
            No more
          </Box>
        )}
        {/* {size(list) < 1 && (
          <Box mt="20px" h="50px" textAlign="center" color="#fff">
            No data
          </Box>
        )} */}
      </Box>
    </>
  );
};
