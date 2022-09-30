import React from "react";
import { DiFirebase, DiReact, DiUikit } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Curabitur vestibulum consectetur lacinia. Nunc ipsum sem, vehicula in
      nulla sit amet, vestibulum ultrices neque. Nunc lobortis sapien in porta
      facilisis.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js & Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUikit size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br /> Tools (like Figma, XD)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
