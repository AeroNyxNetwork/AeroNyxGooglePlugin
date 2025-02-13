/*
 * @Description:
 * @Date: 2025-02-13 14:03:46
 * @LastEditTime: 2025-02-13 15:11:25
 */
import { Box, Button, HStack } from "@chakra-ui/react";
import styles from "./PrivacyPolicy.module.scss";
import { observer } from "mobx-react-lite";
import { counterStore } from "./../Stores/counterStore";
function PrivacyPolicy() {
  return (
    <Box color="#fff">
      <Box className={styles.privacyPolicy_text}>
        <h1>Data Collection Instructions</h1>
        <Box mt="30px">
          <Box>
            To provide better privacy network service and protect your privacy
            under U.S. law, we collect the following essential information:
          </Box>
          <Box>Data We Collect:</Box>
          <Box mt="20px">
            Connection metrics: server connection time, duration, and bandwidth
            usage
          </Box>
          <Box>
            Device information: device type and OS version Network status:
            connection quality and network type
          </Box>
          <Box mt="20px">Our Commitments:</Box>
          <Box mt="20px">
            We DO NOT log your browsing history or app usage We DO NOT collect
            or store any personal identifiable information
          </Box>
          <Box>All data is encrypted</Box>
          <Box>
            Data is used only for service improvement and technical support
          </Box>
          <Box>Connection records are regularly purged</Box>
          <Box mt="20px">Under U.S. Privacy Laws, You Have the Right to:</Box>
          <Box mt="20px">
            View the data we collect about you Request deletion of your
            data（hi@aeronyx.network） Opt-out of data collection (may affect
            service quality)
          </Box>
          <Box mt="20px">
            Your trust is important to us. Contact our support team if you have
            any questions.
          </Box>
        </Box>
      </Box>
      {/* <Button>Cancel authorization</Button> */}
      <HStack className={styles.privacyPolicy_button}>
        <Button onClick={() => counterStore.SwitchPrivacyPolicyYype(false)}>
          Not Now
        </Button>
        <Button onClick={() => counterStore.SwitchPrivacyPolicyYype(true)}>
          Agree & Continue
        </Button>
      </HStack>
    </Box>
  );
}
export default observer(PrivacyPolicy);
