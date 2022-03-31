import {
  ActionButton,
  ActionGroup,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Checkbox,
  Content,
  Dialog,
  DialogTrigger,
  Divider,
  Flex,
  Form,
  Grid,
  Heading,
  IllustratedMessage,
  Image,
  Item,
  Link,
  ListBox,
  LogicButton,
  Menu,
  MenuTrigger,
  Meter,
  Picker,
  ProgressBar,
  ProgressCircle,
  Radio,
  RadioGroup,
  SearchField,
  Section,
  StatusLight,
  Switch,
  Text,
  TextField,
  ToggleButton,
  View,
  Well
} from '@adobe/react-spectrum';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import { ReactNode } from 'react';

const sections = [
  {
    name: 'Animals',
    children: [{ name: 'Aardvark' }, { name: 'Kangaroo' }, { name: 'Snake' }]
  },
  { name: 'People', children: [{ name: 'Danni' }, { name: 'Devon' }, { name: 'Ross' }] }
];

interface SectionProps {
  title: string;
  children: ReactNode | ReactNode[];
}

const PageSection = ({ children, title }: SectionProps) => (
  <section title={title}>
    <Heading UNSAFE_className="text-2xl pt-8" level={2}>
      {title}
    </Heading>
    <Divider marginBottom="size-175" size="S" />
    <View padding="size-250">{children}</View>
  </section>
);

const GridLayout = () => (
  <Grid
    areas={{
      base: ['header', 'nav', 'content', 'footer'],
      M: ['header   header', 'nav      content', 'nav      content', 'footer   footer'],
      L: [
        'header header  header',
        'nav    content toc',
        'nav    content toc',
        'footer footer  footer'
      ]
    }}
    columns={{
      M: ['size-2000', '1fr'],
      L: ['size-2000', '1fr', 'size-2000']
    }}
    gap="size-100"
  >
    <View backgroundColor="celery-600" gridArea="header" height="size-1000" />
    <View backgroundColor="blue-600" gridArea="nav">
      <Flex direction={{ base: 'row', M: 'column' }} gap="size-100" margin="size-100">
        <View backgroundColor="static-gray-50" height="size-250" minWidth="size-900" />
        <View backgroundColor="static-gray-50" height="size-250" minWidth="size-900" />
        <View backgroundColor="static-gray-50" height="size-250" minWidth="size-900" />
      </Flex>
    </View>
    <View backgroundColor="purple-600" gridArea="content" height="size-4600" />
    <View
      backgroundColor="magenta-600"
      gridArea="toc"
      minHeight="size-1000"
      isHidden={{ base: true, L: false }}
    />
    <View backgroundColor="seafoam-600" gridArea="footer" height="size-1000" />
  </Grid>
);

export const MockArticle = () => (
  <div className="relative py-16 overflow-hidden">
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg
          className="absolute top-12 left-full transform translate-x-32"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-content"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg
          className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-content"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg
          className="absolute bottom-12 left-full transform translate-x-32"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
        >
          <defs>
            <pattern
              id="d3eb07ae-5182-43e6-857d-35c643af9034"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-content"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="prose text-lg max-w-prose mx-auto">
        <h1>
          <span className="block text-base text-center text-accent font-semibold tracking-wide uppercase">
            Introducing
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-base-content-300 sm:text-4xl">
            JavaScript for Beginners
          </span>
        </h1>
        <p className="mt-8 text-xl text-base-content leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
          nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
          at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
        </p>
      </div>
      <div className="mt-6 prose prose-indigo prose-lg text-base-content mx-auto">
        <p>
          Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed{' '}
          <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id.
          Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat
          velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
          <a className="link" href="#">
            Mattis mauris semper
          </a>{' '}
          sed amet vitae sed turpis id.
        </p>
        <ul role="list">
          <li>Quis elit egestas venenatis mattis dignissim.</li>
          <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
          <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
        </ul>
        <p>
          Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo
          sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis
          elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
          Amet, duis sed elit interdum dignissim.
        </p>
        <h2>From beginner to expert in 30 days</h2>
        <p>
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu
          ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate
          nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
          cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed
          convallis diam.
        </p>
        <blockquote>
          <p className="text-secondary">
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
            consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.
          </p>
        </blockquote>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit.
        </p>
        <figure>
          <img
            className="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt="stock photo"
            width={1310}
            height={873}
          />
          <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
        </figure>
        <h2>Everything you need to get up and running</h2>
        <p>
          Purus morbi dignissim senectus mattis{' '}
          <a className="link" href="#">
            adipiscing
          </a>
          . Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
          cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
          fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
          congue erat ac. Cras fermentum convallis quam.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
          semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus
          viverra tellus varius sit neque erat velit.
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="p-4 lg:p-12">
      <Heading UNSAFE_className="text-4xl text-bolder" marginBottom="size-600" level={1}>
        Design System
      </Heading>

      <PageSection title="Atoms">
        <Flex direction="column" alignItems="center" gap="size-250">
          <Form width={300}>
            <Flex>
              <TextField label="First Name" placeholder="John" marginEnd="size-100" />
              <TextField label="Last Name" placeholder="Smith" />
            </Flex>
            <TextField label="Street Address" placeholder="123 Any Street" />
            <TextField label="Zip code" placeholder="12345" />
            <Picker label="Items" items={sections}>
              {(section) => (
                <Section key={section.name} items={section.children} title={section.name}>
                  {(item) => <Item key={item.name}>{item.name}</Item>}
                </Section>
              )}
            </Picker>
            <RadioGroup label="Favorite pet">
              <Radio value="dogs">Dogs</Radio>
              <Radio value="cats">Cats</Radio>
              <Radio value="dragons">Dragons</Radio>
            </RadioGroup>
            <Divider />
            <Switch>Time machine</Switch>
            <Checkbox>Test</Checkbox>
            <SearchField label="Search" placeholder="What are you looking for?" />
          </Form>
          <StatusLight variant="celery">Valid</StatusLight>
          <View marginBottom="size-250">
            <ButtonGroup>
              <Button variant="cta">Submit</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </ButtonGroup>
          </View>
          <View marginBottom="size-250">
            <ButtonGroup orientation="vertical">
              <Button variant="cta">Submit</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </ButtonGroup>
          </View>
          <ActionButton>Action!</ActionButton>
          <ActionButton isQuiet>Quiet Action!</ActionButton>
          <LogicButton variant="and">AND</LogicButton>
          <LogicButton variant="or">OR</LogicButton>
          <ToggleButton>Toggle me</ToggleButton>
          <ToggleButton isQuiet>Toggle me</ToggleButton>
          <ToggleButton isEmphasized>Toggle me</ToggleButton>
          <Well>Well well well</Well>
          <ProgressBar label="Progress" value={33} />
          <ProgressBar aria-label="Progress" isIndeterminate />
          <ProgressCircle aria-label="Loading" value={33} />
          <ProgressCircle aria-label="Loading" isIndeterminate />
          <Meter label="Progress" variant="positive" value={33} />
          <ActionGroup>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </ActionGroup>
          <Breadcrumbs>
            <Item>One</Item>
            <Item>Two</Item>
            <Item>Three</Item>
          </Breadcrumbs>
          <Flex marginTop="size-250" gap="size-100">
            <DialogTrigger isDismissable>
              <ActionButton>Modal</ActionButton>
              <Dialog>
                <Image
                  slot="hero"
                  alt="cover"
                  src="https://i.imgur.com/Z7AzH2c.png"
                  objectFit="cover"
                />
                <Heading>Heading</Heading>
                <Divider />
                <Content>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                    tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. In condimentum
                    imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id
                    velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc
                    vestibulum sapien pellentesque lectus commodo ornare.
                  </Text>
                </Content>
              </Dialog>
            </DialogTrigger>
            <DialogTrigger type="popover">
              <ActionButton>Popover</ActionButton>
              <Dialog>
                <Heading>Heading</Heading>
                <Divider />
                <Content>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                    tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. In condimentum
                    imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id
                    velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc
                    vestibulum sapien pellentesque lectus commodo ornare.
                  </Text>
                </Content>
              </Dialog>
            </DialogTrigger>
            <DialogTrigger type="tray">
              <ActionButton>Tray</ActionButton>
              <Dialog>
                <Heading>Heading</Heading>
                <Divider />
                <Content>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                    tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus. In condimentum
                    imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id
                    velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc
                    vestibulum sapien pellentesque lectus commodo ornare.
                  </Text>
                </Content>
              </Dialog>
            </DialogTrigger>
          </Flex>
          <View width={200}>
            <IllustratedMessage>
              <NotFound />
              <Heading>No Results</Heading>
              <Content>
                See{' '}
                <Link>
                  <a
                    className="link"
                    href="https://watheia.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    the docs
                  </a>
                </Link>{' '}
                for info.
              </Content>
            </IllustratedMessage>
          </View>
          <View borderColor="gray-500" borderWidth="thin" width={200}>
            <ListBox items={sections} maxHeight={200}>
              {(section) => (
                <Section key={section.name} items={section.children} title={section.name}>
                  {(item) => <Item key={item.name}>{item.name}</Item>}
                </Section>
              )}
            </ListBox>
          </View>
          <MenuTrigger>
            <ActionButton>Menu</ActionButton>
            <Menu>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
            </Menu>
          </MenuTrigger>
        </Flex>
      </PageSection>

      <PageSection title="Layout">
        <Heading UNSAFE_className="text-xl pb-4" level={3}>
          Flex Layout
        </Heading>
        <Flex direction="column" width="size-2000" gap="size-100">
          <View backgroundColor="celery-600" height="size-800" />
          <View backgroundColor="blue-600" height="size-800" />
          <View backgroundColor="magenta-600" height="size-800" />
        </Flex>
        <Heading UNSAFE_className="text-xl pt-12 pb-4" level={3}>
          Grid Layout
        </Heading>
        <GridLayout />
      </PageSection>

      <PageSection title="Typogrophy">
        <MockArticle />
      </PageSection>
    </main>
  );
}
