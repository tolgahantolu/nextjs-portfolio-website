import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>My Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => {
        return (
          <BlogCard key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree title>{project.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>
              {project.description.length > 200
                ? project.description.substring(0, 200) + ` ...`
                : project.description}
            </CardInfo>
            <div style={{ marginTop: "2rem" }}>
              <TitleContent
                style={{
                  backgroundColor: "#FFC300",
                  color: "#1c1d1c",
                  fontWeight: "bolder",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Stack
              </TitleContent>
              <TagList>
                {project.tags.map((tag, i) => {
                  return <Tag key={i}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={project.visit}>Source Code</ExternalLinks>
              <ExternalLinks href={project.source}>Live Demo</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;
