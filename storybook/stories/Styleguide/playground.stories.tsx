import { NextPage } from 'next';

import {
  LinkText,
  LinkButton,
  InputField,
  TextareaField,
  Button,
  Tooltip,
  Hint,
  Container,
  ButtonLink,
  Spinner,
} from '~/components/atoms';

const PagePlayground: NextPage = () => (
  <>
    <Container>
      <br />
      <Spinner />
      <br />
      {/* {message.open && <p>{message.text}</p>} */}
      <LinkText href="#" active>
        LinkText
      </LinkText>
      <br />
      <LinkText>LinkText</LinkText>
      <div
        style={{
          color: '#FFF',
          background: '#000',
          padding: '20px 0',
          margin: '20px 0',
        }}
      >
        <LinkText href="#" currentColor>
          LinkText
        </LinkText>
        <br />
        <br />
        <LinkText currentColor>LinkText</LinkText>
      </div>
      <br />
      <br />
      <ButtonLink href="#top" w={310}>
        Its Link
      </ButtonLink>
      <br />
      <ButtonLink href="#top" w={310} selected>
        Its Link
      </ButtonLink>
      <br />
      <ButtonLink href="#top" w={310} disabled>
        Its Link
      </ButtonLink>
      <br />
      <ButtonLink href="#top" w={310} use="secondary">
        Its Link
      </ButtonLink>
      <br />
      <ButtonLink href="#top" w={310} use="secondary" border>
        Its Link
      </ButtonLink>
      <br />
      <ButtonLink href="#top" w={310} use="secondary" border disabled>
        Its Link
      </ButtonLink>
      <br />
      <br />
      Text with
      <Hint>Hint</Hint>
      <br />
      {/* <LinkButton onClick={message.toggle}>Link like button</LinkButton> */}
      <br />
      <LinkButton
        // onClick={message.toggle}
        disabled
      >
        Link like button
      </LinkButton>
      <br />
      <Button
        // onClick={message.toggle}
        w={310}
      >
        Toggle state
      </Button>
      <br />{' '}
      <Button
        // onClick={message.toggle}
        w={310}
        disabled
      >
        Toggle state
      </Button>
      <br />{' '}
      <Button
        // onClick={message.toggle}
        w={310}
        loading
      >
        Toggle state
      </Button>
      <br />
      <InputField w={310} placeholder="Email" />
      <br />
      <TextareaField w={310} placeholder="Question" />
      <br />
      <div>
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          disabled
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          loading
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          border
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Tooltip content="Click to switch to Dark Side">
          <Button
            // onClick={message.toggle}
            use="secondary"
            selected
          >
            top right tooltip
          </Button>
        </Tooltip>
        <br />
        <br />
        <div>
          <LinkButton
            // onClick={message.toggle}
            disabled
          >
            Link like button
          </LinkButton>
        </div>
        <br />
        <Button
          // onClick={message.toggle}
          w={310}
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          w={310}
          disabled
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          w={310}
          loading
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          disabled
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          loading
        >
          Toggle state
        </Button>
        <br />
        <br />
        <Button
          // onClick={message.toggle}
          use="secondary"
          w={310}
          border
        >
          Toggle state
        </Button>
        <br />
        <br />
        <br />
        <Tooltip content="Click to switch to Dark Side">
          <Button
            // onClick={message.toggle}
            use="secondary"
            selected
          >
            tooltip auto
          </Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Click to switch to Dark Side" direction="left">
          <Button
            // onClick={message.toggle}
            use="secondary"
            selected
          >
            tooltip left
          </Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Click to switch to Dark Side click to switch" direction="right" isAccent>
          <Button
            // onClick={message.toggle}
            use="secondary"
            selected
          >
            tooltip right warning
          </Button>
        </Tooltip>
        <br />
        <br />
        <Tooltip content="Click to switch to Dark Side" direction="bottom" isAccent>
          <Button
            // onClick={message.toggle}
            use="secondary"
            selected
          >
            tooltip bottom warning
          </Button>
        </Tooltip>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  </>
);

export default {
  title: 'Styleguide/playground',
};

export const Playground = PagePlayground;

Playground.storyName = 'playground';
