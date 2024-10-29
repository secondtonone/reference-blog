import { useState } from 'react';
import { Flex } from '@semcore/flex-box';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Link from 'next/link';
import { NextPage } from 'next';

import SvgIcon from '~/components/containers/svg-icon';
import CustomSwitch from '~/components/molecules/custom-switch';
import Heading from './atoms/heading';

import {
  Columns,
  Column,
  ButtonUp,
  LinkButton,
  ButtonIcon,
  CarouselDots,
  InputCheckbox,
  Hint,
  LinkText,
  CarouselScroll,
  BoxAdaptive,
  Tooltip,
  TagControl,
  Button,
  SocialBlock,
  ButtonLink,
  InputField,
  TextareaField,
  TopicLink,
  TextContent,
  Spinner,
} from '~/components/atoms';

import socials from '~/__fixtures__/socials';

const resources = {
  ...socials,
  slack: '#',
  'circle-plus': '#',
  email: '#',
  'facebook-messenger': '#',
};

const PageStyleguide: NextPage = () => {
  const [checked, setChecked] = useState(true);
  const [checkedGreen, setCheckedGreen] = useState(true);
  const [checkedDefault, setCheckedDefault] = useState(false);
  const [switched, setSwitch] = useState(false);
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const gridStyle = { marginRight: 25, minWidth: 20, justifyContent: 'center' };

  return (
    <>
      <TextContent
        level={1}
        fontSize={{
          _: 8,
          x: 10,
          sm: 26,
          md: 35,
        }}
        textAlign="center"
        zIndex={14}
      >
        Welcome to{' '}
        <span style={{ color: '#0070f3' }}>
          <Link href="playground">
            <a className="title-link">blog</a>
          </Link>
        </span>
      </TextContent>
      <Styleguide>
        <Columns>
          <Column>
            <div>
              <Heading>Button</Heading>
              <p>
                <Button w={200}>Subscribe</Button>
              </p>
              <p>
                <Button w={200} disabled>
                  Subscribe
                </Button>
              </p>
            </div>
            <br />
            <div>
              <Heading>Ghost Button</Heading>
              <p>
                <Button w={200} use="secondary">
                  Subscribe
                </Button>
              </p>
              <p>
                <Button w={200} use="secondary" disabled>
                  Subscribe
                </Button>
              </p>
            </div>
            <br />
            <div>
              <Heading>Content Links</Heading>
              <Flex style={{ fontSize: 20, color: '#fff' }} direction="column">
                <div>
                  <LinkText>link to page</LinkText>
                </div>
                <br />
                <div style={{ maxWidth: 200 }}>
                  <BoxAdaptive
                    mr={30}
                    p={20}
                    bg="#FF642D"
                    color="#fff"
                    style={{ borderRadius: 10 }}
                  >
                    <LinkText currentColor>link to page</LinkText>
                  </BoxAdaptive>
                  <br />
                  <BoxAdaptive mr={30} p={20} bg="#421983" style={{ borderRadius: 10 }}>
                    <LinkText currentColor>link to page</LinkText>
                  </BoxAdaptive>
                  <br />
                  <BoxAdaptive
                    mr={30}
                    p={20}
                    bg="#E9EBEF"
                    style={{ borderRadius: 10, color: '#171A22' }}
                  >
                    <LinkText currentColor>link to page</LinkText>
                  </BoxAdaptive>
                </div>
              </Flex>
              <br />
              <br />
              <br />
            </div>
            <div>
              <Heading>Topic</Heading>
              <p>
                <TopicLink href="/article/1">How To Write a Blog Post</TopicLink>
              </p>
              <p>
                <ButtonLink href="#top" w={250}>
                  Its Link
                </ButtonLink>
              </p>
            </div>
            <div>
              <Heading>Button Links</Heading>
              <Flex direction="column">
                <div style={{ maxWidth: 200 }}>
                  <p>
                    <ButtonLink href="#top" w={250}>
                      Its Link
                    </ButtonLink>
                  </p>
                  <p>
                    <ButtonLink href="#top" w={250} selected>
                      Its Link
                    </ButtonLink>
                  </p>
                  <p>
                    <ButtonLink href="#top" w={250} disabled>
                      Its Link
                    </ButtonLink>
                  </p>
                  <p>
                    <ButtonLink href="#top" w={250} use="secondary">
                      Its Link
                    </ButtonLink>
                  </p>
                  <p>
                    <ButtonLink href="#top" w={250} use="secondary" border>
                      Its Link
                    </ButtonLink>
                  </p>
                  <p>
                    <ButtonLink href="#top" w={250} use="secondary" border disabled>
                      Its Link
                    </ButtonLink>
                  </p>
                </div>
              </Flex>
            </div>
          </Column>
          <div>
            <BoxAdaptive pb={5}>
              <Heading>Input</Heading>
              <div style={{ maxWidth: 310 }}>
                <InputField
                  placeholder="Email"
                  onChange={(value) => setEmail(value)}
                  value={email}
                  state="normal"
                />
                <br />
                <br />
                <TextareaField
                  placeholder="Question"
                  onChange={(value) => setQuestion(value)}
                  value={question}
                  state="normal"
                />
              </div>
            </BoxAdaptive>
            <div>
              <Heading>Mobile Scroll</Heading>
              <br />
              <br />
              <div
                style={{
                  width: '200px',
                  height: '20px',
                  position: 'relative',
                }}
              >
                <CarouselScroll>
                  <div className="swiper-scrollbar-drag" />
                </CarouselScroll>
              </div>
              <Heading>Slider Desktop Main</Heading>
              <div
                style={{
                  width: '200px',
                  height: '20px',
                  position: 'relative',
                  marginLeft: '-5px',
                }}
              >
                <br />
                <br />
                <CarouselDots>
                  <span />
                  <span className="-active" />
                  <span />
                  <span />
                </CarouselDots>
              </div>
              <Heading>Checkbox</Heading>
              <BoxAdaptive pb={5}>
                <InputCheckbox
                  checked={checked}
                  onCheckboxChange={setChecked}
                  maxWidth={280}
                  label="I consent to example using my contact data for newsletter purposes"
                  variant="success"
                />
                <div>
                  <InputCheckbox
                    checked={false}
                    disabled
                    onCheckboxChange={() => false}
                    maxWidth={280}
                    label="I consent to example using my contact data for newsletter purposes"
                  />
                </div>
              </BoxAdaptive>
              <Columns>
                <Column>
                  <Heading>Show more info</Heading>
                  <p>
                    <Hint>View all summary</Hint>
                  </p>
                  <p>
                    <Hint>More</Hint>
                  </p>
                  <br />
                  <Heading>Link</Heading>
                  <div>
                    <p>
                      <LinkText href="#">Link Text</LinkText>
                    </p>
                    <p>
                      <LinkButton>Link Button</LinkButton>
                    </p>
                  </div>
                </Column>
                <Column>
                  <Heading>Tips</Heading>
                  <Tooltip content="Click to switch to Dark Side" direction="top">
                    tooltip top
                  </Tooltip>
                  <br />
                  <br />
                  <Tooltip content="Click to switch to Dark Side" direction="bottom">
                    tooltip bottom
                  </Tooltip>
                  <br />
                  <br />
                  <Tooltip content="Click to switch to Dark Side click to switch" direction="left">
                    tooltip left
                  </Tooltip>
                  <br />
                  <br />
                  <Tooltip
                    content="Click to switch to Dark Side click to switch"
                    direction="right"
                    isAccent
                  >
                    tooltip right warning
                  </Tooltip>
                  <br />
                  <br />
                  <Tooltip content="Click to switch to Dark Side" direction="left" isAccent>
                    tooltip left warning
                  </Tooltip>
                  <br />
                  <br />
                  <br />
                </Column>
                <Column>
                  <Heading>Tags</Heading>
                  <Flex alignItems="flex-start">
                    <BoxAdaptive mr={100}>
                      <TagControl>Tag-Tag</TagControl>
                      <p>
                        <TagControl href="/playground">Tag-link</TagControl>
                      </p>
                    </BoxAdaptive>
                    <div>
                      <ButtonUp />
                      <br />
                      <br />
                      <p>
                        <ButtonUp active />
                      </p>
                    </div>
                  </Flex>
                  <br />
                </Column>
              </Columns>
            </div>
          </div>
          <Column>
            <BoxAdaptive pt={5}>
              <Columns>
                <Column>
                  <Heading>Icons</Heading>
                  <Flex alignItems="center">
                    <>
                      {['search', 'burger'].map((code) => (
                        <Flex style={gridStyle} key={nanoid()}>
                          <SvgIcon code={code} />
                        </Flex>
                      ))}
                      <Flex style={gridStyle}>
                        <InputCheckbox
                          checked={checked}
                          gonCheckboxChange={setChecked}
                          maxWidth={100}
                        />
                      </Flex>
                      <Flex style={gridStyle}>
                        <InputCheckbox
                          checked={checkedDefault}
                          onCheckboxChange={setCheckedDefault}
                        />
                      </Flex>
                      <Flex style={gridStyle}>
                        <InputCheckbox
                          checked={checkedGreen}
                          onCheckboxChange={setCheckedGreen}
                          variant="success"
                        />
                      </Flex>
                    </>
                  </Flex>
                  <br />
                  <Flex alignItems="center">
                    {['user', 'heart-o', 'reply', 'share'].map((code) => (
                      <Flex style={gridStyle} key={nanoid()}>
                        <SvgIcon code={code} />
                      </Flex>
                    ))}
                  </Flex>
                  <br />
                  <Flex alignItems="center">
                    {['ogonek', 'heart', 'brand'].map((code) => (
                      <Flex style={gridStyle} key={nanoid()}>
                        <SvgIcon code={code} />
                      </Flex>
                    ))}
                  </Flex>
                  <br />
                  <Flex alignItems="center">
                    {['bullet', 'radio-active', 'check-mobile'].map((code) => (
                      <Flex style={gridStyle} key={nanoid()}>
                        <SvgIcon code={code} />
                      </Flex>
                    ))}
                  </Flex>
                  <br />
                  <Flex>
                    <p>
                      <span style={{ marginRight: '10px' }}>
                        <ButtonIcon code="share" border colored label="Share" />
                      </span>
                    </p>
                  </Flex>
                  <br />
                  <Flex>
                    {['plus', 'close'].map((code) => (
                      <span style={{ marginRight: '10px' }} key={nanoid()}>
                        <ButtonIcon code={code} border colored />
                      </span>
                    ))}
                  </Flex>
                  <br />
                  <br />
                  <BoxAdaptive display="flex" alignItems="flex-start">
                    <Spinner />
                  </BoxAdaptive>
                </Column>
                <Column>
                  <Heading>Social Block</Heading>
                  <BoxAdaptive maxWidth={240}>
                    <SocialBlock resources={resources} />
                  </BoxAdaptive>
                  <br />
                  <Heading>Switch</Heading>
                  <div>
                    <CustomSwitch
                      checked={switched}
                      onChange={(value) => setSwitch(value)}
                      slider={(value) => value && <SvgIcon code="moon" />}
                    />
                  </div>
                </Column>
              </Columns>
            </BoxAdaptive>
          </Column>
        </Columns>
      </Styleguide>
    </>
  );
};

const Styleguide = styled.div`
  padding: 100px 30px;
  height: 100%;
  flex: 1;
  text-align: left;
  width: 100%;

  & p {
    padding: 0 0 20px 0;
  }
`;

export default {
  title: 'Styleguide/components',
};

export const Yo = PageStyleguide;

Yo.storyName = 'yo';
