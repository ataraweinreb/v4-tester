import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section, Heading } from '@styles';

const WorkExperienceContainer = styled(Section)``;

const ExperienceSubtitle = styled.h4`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const CompanyName = styled.h3`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceDates = styled.h5`
  text-align: center;
  margin-bottom: 40px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Thumbnail = styled.div`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '150px'};
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #000;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
`;

const Modal = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const VideoFrame = styled.div`
  width: 80%;
  height: 80%;
  background-color: #000;
  position: relative;
  z-index: 1001;
  cursor: auto;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 36px;
  cursor: pointer;
  z-index: 1002;
`;

const BoxLabel = styled.h6`
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const WorkExperience = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = index => {
    setActiveVideo(index);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    if (activeVideo !== null) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on component unmount
    };
  }, [activeVideo]);

  const videos = [
    {
      url: 'https://www.youtube.com/embed/PiKg9DTusHQ',
      label: 'Creator Growth, Spotlight, Stories',
      thumbnail: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/spot.png',
    },
    {
      url: 'https://www.youtube.com/embed/lrR7nc_rHJE',
      label: 'Scan',
      thumbnail: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/foodscan.gif',
    },
    {
      url: 'https://eng.snap.com/meet-snaps-design-engineers',
      label: 'Design Prototyping',
      thumbnail: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/deseng2.png',
      isLink: true,
    },
    {
      url: 'https://www.youtube.com/embed/oZiBqPApLgY',
      label: 'Application Performance Monitoring',
      thumbnail: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/dd-pretty.jpg',
    },
    {
      url: 'https://www.youtube.com/embed/fGBQqdLqCxg',
      label: 'Providers',
      thumbnail: 'https://raw.githubusercontent.com/ataraweinreb/Public-Images/main/td2.jpg',
    },
  ];

  const openLink = url => {
    window.open(url, '_blank');
  };

  return (
    <WorkExperienceContainer id="work">
      <Heading>Work</Heading>

      <CompanyName onClick={() => openLink('https://www.snapchat.com/')}>Snapchat</CompanyName>
      <ExperienceSubtitle>Software Engineer (iOS) / Product Design Prototyper</ExperienceSubtitle>
      <ExperienceDates>May 2020 - Present</ExperienceDates>

      <FlexColumn>
        <Thumbnail
          width="600px"
          height="300px"
          onClick={() => openVideo(0)}
          image={videos[0].thumbnail}
        />
        <BoxLabel onClick={() => openVideo(0)}>{videos[0].label}</BoxLabel>
      </FlexColumn>

      <FlexColumn>
        <Thumbnail
          width="600px"
          height="300px"
          onClick={() => openVideo(1)}
          image={videos[1].thumbnail}
        />
        <BoxLabel onClick={() => openVideo(1)}>{videos[1].label}</BoxLabel>
      </FlexColumn>

      <FlexColumn>
        <Thumbnail
          width="600px"
          height="300px"
          onClick={() => openLink(videos[2].url)}
          image={videos[2].thumbnail}
        />
        <BoxLabel onClick={() => openLink(videos[2].url)}>{videos[2].label}</BoxLabel>
      </FlexColumn>

      <CompanyName onClick={() => openLink('https://www.datadoghq.com/')}>Datadog</CompanyName>
      <ExperienceSubtitle>Software Engineer (Frontend) Intern</ExperienceSubtitle>
      <ExperienceDates>Jan 2020 - Apr 2020</ExperienceDates>

      <FlexColumn>
        <Thumbnail
          width="600px"
          height="300px"
          onClick={() => openVideo(3)}
          image={videos[3].thumbnail}
        />
        <BoxLabel onClick={() => openVideo(3)}>{videos[3].label}</BoxLabel>
      </FlexColumn>

      <CompanyName onClick={() => openLink('https://www.teladochealth.com/')}>Teladoc</CompanyName>
      <ExperienceSubtitle>Software Engineer (iOS) Intern</ExperienceSubtitle>
      <ExperienceDates>Jan 2019 - May 2019</ExperienceDates>

      <FlexColumn>
        <Thumbnail
          width="600px"
          height="300px"
          onClick={() => openVideo(4)}
          image={videos[4].thumbnail}
        />
        <BoxLabel onClick={() => openVideo(4)}>{videos[4].label}</BoxLabel>
      </FlexColumn>

      {activeVideo !== null && (
        <Modal isOpen={activeVideo !== null} onClick={closeVideo}>
          <VideoFrame onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeVideo}>&times;</CloseButton>
            <iframe
              src={`${videos[activeVideo].url}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen></iframe>
          </VideoFrame>
        </Modal>
      )}
    </WorkExperienceContainer>
  );
};

// test
function convertHtmlToDotSpace(html, charsPerLine = 250) {
  let result = '';
  let lineCount = 0;
  let isWhite = false;

  // Regular expression to match color and content
  const regex = /<b style="color:(#[A-F0-9]{6})">(.*?)<\/b>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    const color = match[1];
    const text = match[2];

    isWhite = color === '#FFFFFF';

    for (let char of text) {
      result += isWhite ? '.' : ' ';
      lineCount++;

      if (lineCount === charsPerLine) {
        result += '\n';
        result += '\n'; // Add a blank line after the current line
        lineCount = 0;
      }
    }
  }

  return result.trim();
}

// Usage:
const html = `
<pre id="tiresult" style="font-size: 9px; background-color: #000000; font-weight: bold; padding: 4px 5px; --fs: 9px;"><b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................................................................................................................................................................</b>
<b style="color:#000000">...........................................................................................................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">........................................................................................................................................</b>
<b style="color:#000000">..........................................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............................................................................................................................................</b>
<b style="color:#000000">.........................................................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...............................................................................................................</b>
<b style="color:#000000">.....................................................................................................................</b><b style="color:#FFFFFF">..............................</b><b style="color:#000000">.......................................................................................................</b>
<b style="color:#000000">.................................................................................................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">..........................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">...................................................................................................</b>
<b style="color:#000000">.......................................................................................................</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">......</b><b style="color:#000000">...............................................................................................</b>
<b style="color:#000000">....................................................................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.................................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">............................................................................................</b>
<b style="color:#000000">..................................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">......................................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">..........................................................................................</b>
<b style="color:#000000">...............................................................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">..........................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.........................................................................................</b>
<b style="color:#000000">.............................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...............................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.......................................................................................</b>
<b style="color:#000000">...........................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.....................................................................................</b>
<b style="color:#000000">.....................................................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">....................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">...................................................................................</b>
<b style="color:#000000">.......................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">........................</b><b style="color:#000000">.............................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................................................................................</b>
<b style="color:#000000">......................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">...................................</b><b style="color:#000000">........................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">................................................................................</b>
<b style="color:#000000">....................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">........................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...............................................................................</b>
<b style="color:#000000">...................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">...........................................</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..............................................................................</b>
<b style="color:#000000">..................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..............................................</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............................................................................</b>
<b style="color:#000000">................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">.................................................</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............................................................................</b>
<b style="color:#000000">...............................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">...................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...........................................................................</b>
<b style="color:#000000">..............................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">....................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........................................................................</b>
<b style="color:#000000">.............................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">....................................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................................................</b>
<b style="color:#000000">.............................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">......................................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.........................................................................</b>
<b style="color:#000000">............................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">.......................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">........................................................................</b>
<b style="color:#000000">............................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................</b><b style="color:#FFFFFF">........................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">........................................................................</b>
<b style="color:#000000">............................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................</b><b style="color:#FFFFFF">.........................................................</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.......................................................................</b>
<b style="color:#000000">...........................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..................</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.....................</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.......................................................................</b>
<b style="color:#000000">...........................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">..........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">......................................................................</b>
<b style="color:#000000">...........................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">....</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">...............</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">............</b><b style="color:#000000">.........................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.....................................................................</b>
<b style="color:#000000">..........................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">..................</b><b style="color:#000000">....</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">......</b><b style="color:#000000">........................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....................................................................</b>
<b style="color:#000000">..........................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">....</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">..</b><b style="color:#000000">........................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................................................................</b>
<b style="color:#000000">.........................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">......</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...............................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................................................................</b>
<b style="color:#000000">.................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.........................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...................................................................</b>
<b style="color:#000000">................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">......</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">....</b><b style="color:#FFFFFF">.......................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.........................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...................................................................</b>
<b style="color:#000000">................................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">......</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">......</b><b style="color:#FFFFFF">..................................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..................................................................</b>
<b style="color:#000000">......................................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">..................................................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................................................................</b>
<b style="color:#000000">..............................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">......</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">........</b><b style="color:#FFFFFF">....................................................................</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.................................................................</b>
<b style="color:#000000">.............................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">....................................................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.................................................................</b>
<b style="color:#000000">............................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">....................................................................</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">................................................................</b>
<b style="color:#000000">..............................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">............</b><b style="color:#FFFFFF">....................................................................</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">................................................................</b>
<b style="color:#000000">.............................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">...............................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">........</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">......</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...............................................................</b>
<b style="color:#000000">............................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">.............................</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">....</b><b style="color:#000000">........</b><b style="color:#FFFFFF">....................</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..............................................................</b>
<b style="color:#000000">...........................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">................</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...............</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.....................</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..............................................................</b>
<b style="color:#000000">...........................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">................</b><b style="color:#FFFFFF">......................................................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............................................................</b>
<b style="color:#000000">............................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">..</b><b style="color:#000000">................</b><b style="color:#FFFFFF">......................................................</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............................................................</b>
<b style="color:#000000">...........................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">......................................</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............................................................</b>
<b style="color:#000000">..........................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">................</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............................................................</b>
<b style="color:#000000">..........................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">..................</b><b style="color:#000000">....</b><b style="color:#FFFFFF">.......................</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........................................................</b>
<b style="color:#000000">.........................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">....</b><b style="color:#FFFFFF">..................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.</b><b style="color:#000000">....</b><b style="color:#FFFFFF">............</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........................................................</b>
<b style="color:#000000">........................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.........................</b><b style="color:#FFFFFF">...............................</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">............</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........................................................</b>
<b style="color:#000000">........................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..........................</b><b style="color:#FFFFFF">........................................</b><b style="color:#000000">...</b><b style="color:#FFFFFF">............</b><b style="color:#000000">....................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................................</b>
<b style="color:#000000">.......................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............................</b><b style="color:#FFFFFF">..................................</b><b style="color:#000000">........</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">......................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................................</b>
<b style="color:#000000">.......................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............................</b><b style="color:#FFFFFF">.......................</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">............</b><b style="color:#000000">........................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................................</b>
<b style="color:#000000">.......................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">................................</b><b style="color:#FFFFFF">..............................................</b><b style="color:#000000">..........................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................................</b>
<b style="color:#000000">......................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">.........................................</b><b style="color:#000000">.............................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.........................................................</b>
<b style="color:#000000">......................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....................................</b><b style="color:#FFFFFF">.....................................</b><b style="color:#000000">...............................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.........................................................</b>
<b style="color:#000000">.....................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">................................</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">........................................................</b>
<b style="color:#000000">.....................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...........................</b><b style="color:#000000">....................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">........................................................</b>
<b style="color:#000000">.....................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">...............................</b><b style="color:#000000">..........................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">.....................................................</b>
<b style="color:#000000">.....................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">.......................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">....................................................</b>
<b style="color:#000000">....................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.......................</b><b style="color:#000000">....................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................................</b>
<b style="color:#000000">....................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">..........................</b><b style="color:#000000">...................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.....................................................</b>
<b style="color:#000000">...................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">...............................</b><b style="color:#000000">...............................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">...</b><b style="color:#000000">....................................................</b>
<b style="color:#000000">...................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">................................</b><b style="color:#000000">................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................................................</b>
<b style="color:#000000">...................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">........................................</b><b style="color:#000000">.........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...................................................</b>
<b style="color:#000000">................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">.........................................</b><b style="color:#000000">.........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................................................</b>
<b style="color:#000000">.............................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">..........................................</b><b style="color:#000000">..........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.................................................</b>
<b style="color:#000000">...........................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">............................................</b><b style="color:#000000">...........................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...</b><b style="color:#000000">................................................</b>
<b style="color:#000000">..........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">..............................................</b><b style="color:#000000">...........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">....</b><b style="color:#000000">................................................</b>
<b style="color:#000000">.........................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">...............................................</b><b style="color:#000000">.............................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">....</b><b style="color:#000000">..............................................</b>
<b style="color:#000000">.......................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.................................</b><b style="color:#FFFFFF">.................................................</b><b style="color:#000000">..............................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">............................................</b>
<b style="color:#000000">......................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...............................................</b><b style="color:#FFFFFF">..................................................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">......................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..........................................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...............................................</b><b style="color:#FFFFFF">................................................................</b><b style="color:#000000">.............................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.........................................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..............................................</b><b style="color:#FFFFFF">......................................................................</b><b style="color:#000000">...</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..</b><b style="color:#FFFFFF">..</b><b style="color:#000000">........................................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.......................................</b><b style="color:#FFFFFF">.......................................................................</b><b style="color:#000000">....</b><b style="color:#FFFFFF">......</b><b style="color:#000000">.................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.......................................</b>
<b style="color:#000000">.......................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..</b><b style="color:#FFFFFF">......</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">....</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.</b><b style="color:#FFFFFF">....................................................................</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">....</b><b style="color:#000000">............................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">..</b><b style="color:#FFFFFF">..</b><b style="color:#000000">......................................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">......</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">...............................................................</b><b style="color:#000000">.................................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..........................................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">......</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">...........................................................</b><b style="color:#000000">..............................................................................................</b>
<b style="color:#000000">........................................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........................................</b><b style="color:#FFFFFF">............................................................</b><b style="color:#000000">.................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.....................................</b>
<b style="color:#000000">..........................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">..................................................</b><b style="color:#FFFFFF">.............................................................................</b><b style="color:#000000">.....................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">.......................................</b>
<b style="color:#000000">.............................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">........................................................</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..................................</b><b style="color:#000000">......................................................</b>
<b style="color:#000000">.............................................................</b><b style="color:#FFFFFF">............</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">.....................</b><b style="color:#000000">................</b><b style="color:#FFFFFF">........................</b><b style="color:#000000">...................................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">................</b><b style="color:#000000">.........................................</b>
<b style="color:#000000">.............................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">......</b><b style="color:#000000">..</b><b style="color:#FFFFFF">........</b><b style="color:#000000">.....</b><b style="color:#FFFFFF">...................</b><b style="color:#000000">................................................................................................................</b><b style="color:#FFFFFF">........</b><b style="color:#000000">.........................................</b>
<b style="color:#000000">............................</b><b style="color:#FFFFFF">........</b><b style="color:#000000">............</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">...........................................................................................................................................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.............................</b>
<b style="color:#000000">............................</b><b style="color:#FFFFFF">............</b><b style="color:#000000">.........</b><b style="color:#FFFFFF">..</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...</b><b style="color:#000000">....................................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................................................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">............................</b>
<b style="color:#000000">................................</b><b style="color:#FFFFFF">............</b><b style="color:#000000">....................................................................</b><b style="color:#FFFFFF">......................................................</b><b style="color:#000000">.</b><b style="color:#FFFFFF">........</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">...............</b><b style="color:#000000">...........................</b>
<b style="color:#000000">.....................................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.........................</b><b style="color:#FFFFFF">......................................................................................</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...............</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">........</b><b style="color:#000000">..................................</b>
<b style="color:#000000">.........................................</b><b style="color:#FFFFFF">........</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">.......................................</b><b style="color:#000000">...............................................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">....</b><b style="color:#FFFFFF">................</b><b style="color:#000000">..</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">....</b><b style="color:#FFFFFF">....</b><b style="color:#000000">.......................................</b>
<b style="color:#000000">.............................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">....</b><b style="color:#000000">....</b><b style="color:#FFFFFF">...........................</b><b style="color:#000000">...................................................................................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">............................................</b>
<b style="color:#000000">................................................</b><b style="color:#FFFFFF">...............</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">......</b><b style="color:#000000">.......................................................................................................................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">.....................</b>
<b style="color:#000000">........................</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">.....................</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...............................................................................................................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">....................</b>
<b style="color:#000000">.......................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">.................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">.................................................................................................</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">........................................................</b><b style="color:#FFFFFF">............</b><b style="color:#000000">...................</b>
<b style="color:#000000">.........................</b><b style="color:#FFFFFF">.............</b><b style="color:#000000">...........................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">............................................................</b><b style="color:#FFFFFF">....................................................</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">..</b><b style="color:#000000">..................</b><b style="color:#FFFFFF">..................</b><b style="color:#000000">...................</b>
<b style="color:#000000">.............................</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">..........</b><b style="color:#000000">..........</b><b style="color:#FFFFFF">..........................................................................</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">.................................</b><b style="color:#000000">.............</b><b style="color:#FFFFFF">.................</b><b style="color:#000000">........................</b>
<b style="color:#000000">..................................</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">..............</b><b style="color:#FFFFFF">......................................................................................</b><b style="color:#000000">..................................</b><b style="color:#FFFFFF">.................</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.............</b><b style="color:#000000">........</b><b style="color:#FFFFFF">.</b><b style="color:#000000">........................</b>
<b style="color:#000000">.............................................</b><b style="color:#FFFFFF">..</b><b style="color:#000000">...........</b><b style="color:#FFFFFF">.....</b><b style="color:#000000">........</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...................................................................................................................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">....</b><b style="color:#FFFFFF">........</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">.</b><b style="color:#000000">........................</b>
<b style="color:#000000">...............................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">.......</b><b style="color:#FFFFFF">....</b><b style="color:#000000">........................................................................................................................................</b><b style="color:#FFFFFF">......</b><b style="color:#000000">...............................................</b>
<b style="color:#000000">....................</b><b style="color:#FFFFFF">.</b><b style="color:#000000">...........................</b><b style="color:#FFFFFF">...........</b><b style="color:#000000">...........................................................................................................................................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...........................</b><b style="color:#FFFFFF">...</b><b style="color:#000000">...................</b>
<b style="color:#000000">...................</b><b style="color:#FFFFFF">.......</b><b style="color:#000000">.......................</b><b style="color:#FFFFFF">.........</b><b style="color:#000000">..............................................................................................</b><b style="color:#FFFFFF">........................</b><b style="color:#000000">...............................................</b><b style="color:#FFFFFF">........</b><b style="color:#000000">...................</b>
<b style="color:#000000">...................</b><b style="color:#FFFFFF">.............</b><b style="color:#000000">...................</b><b style="color:#FFFFFF">....</b><b style="color:#000000">..............................</b><b style="color:#FFFFFF">........................</b><b style="color:#000000">...........................</b><b style="color:#FFFFFF">...................................................</b><b style="color:#000000">..............................</b><b style="color:#FFFFFF">..............</b><b style="color:#000000">...................</b>
<b style="color:#000000">......................</b><b style="color:#FFFFFF">.................</b><b style="color:#000000">.........................</b><b style="color:#FFFFFF">...........................................................................................</b><b style="color:#000000">...............</b><b style="color:#FFFFFF">...........................</b><b style="color:#000000">............</b><b style="color:#FFFFFF">......................</b><b style="color:#000000">...................</b>
</pre>
`;

const converted = convertHtmlToDotSpace(html, 250);
console.log(converted);

export default WorkExperience;
