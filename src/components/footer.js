import React from 'react';
import PropTypes from 'prop-types';
import { IconGithub, IconLinkedin, IconInstagram } from '@components/icons';
import { socialMedia } from '@config';
import styled from 'styled-components';
import { theme, mixins, media } from '@styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.navy};
  color: ${colors.slate};
  text-align: center;
  height: auto;
  min-height: 70px;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.div`
  margin: 10px 0;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
  line-height: 1;
`;
// eslint-disable-next-line no-unused-vars
const GithubLink = styled.a`
  color: ${colors.slate};
`;
// eslint-disable-next-line no-unused-vars
const GithubInfo = styled.div`
  margin-top: 10px;

  & > span {
    display: inline-flex;
    align-items: center;
    margin: 0 7px;
  }
  svg {
    display: inline-block;
    height: 15px;
    width: auto;
    margin-right: 5px;
  }
`;

// eslint-disable-next-line no-unused-vars
const Footer = ({ githubInfo }) => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <div>Copyright &copy; 2024 Atara Weinreb</div>
    </Copy>
  </FooterContainer>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
