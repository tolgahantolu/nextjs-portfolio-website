import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personel Portfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis
        quam nec posuere tincidunt. Nam at feugiat ante. Nulla iaculis mi ut
        felis iaculis, vitae hendrerit ligula pulvinar. Morbi tempus orci eu sem
        accumsan laoreet.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/tolgahantolu")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
