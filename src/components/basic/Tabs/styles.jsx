import styled from "styled-components/macro";
import { Tab, TabList, TabPanel } from "react-tabs";
import { POPPINS_BOLD } from "../../../utils/fonts";
import {
  OFF_WHITE,
  PRIMARY_DEFAULT,
  GRAYSCALE_BODY,
  GRAYSCALE_TITLE_ACTIVE,
} from "../../../utils/colors";

export const TabListComponent = styled(TabList)`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  gap: 1.875rem;
  margin: 0 0 1.25rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${GRAYSCALE_TITLE_ACTIVE};
`;

export const TabComponent = styled(Tab)`
  ${POPPINS_BOLD}
  cursor: pointer;
  color: ${GRAYSCALE_BODY};
  font-size: 1.25rem;
  line-height: 2.1875rem;
  padding: 0 0 0.625rem 0;
  width: 6.25rem;
  text-align: center;

  &.react-tabs__tab--selected {
    color: ${OFF_WHITE};
    border-bottom: 0.1875rem solid ${PRIMARY_DEFAULT};
  }
`;

export const TabPanelComponent = styled(TabPanel)`
  display: flex;
  width: 27.5rem;
  flex-direction: column;
  margin: 0 auto;

  #button-wrapper {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
  }
`;
