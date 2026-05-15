import { ArgTypes, Canvas, Controls, Description, Primary, Subtitle, Title } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { dropdownFieldArgTypes } from './dropdown-field.argtypes';
import { DropdownFieldComponent } from './dropdown-field.component';

// ─── helpers ────────────────────────────────────────────────────────────────

const Code = ({ children }: { children: string }) => (
  <pre
    style={{
      background: '#1e1e2e',
      color: '#cdd6f4',
      borderRadius: 8,
      padding: '16px 20px',
      fontSize: 13,
      lineHeight: 1.6,
      overflowX: 'auto',
      margin: '12px 0 20px',
      fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
    }}
  >
    <code>{children.trim()}</code>
  </pre>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ marginTop: 40, marginBottom: 8, fontSize: 22, fontWeight: 700 }}>{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ marginTop: 28, marginBottom: 6, fontSize: 17, fontWeight: 600 }}>{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: '0 0 12px', lineHeight: 1.7, color: '#444' }}>{children}</p>
);

const Hr = () => <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '32px 0' }} />;

// ─── custom docs page ───────────────────────────────────────────────────────

const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />

    <H2>Usage</H2>
    <P>
      Import the component and provide an <code>options</code> array. Manage the selected value with your own state.
    </P>
    <Code>{`
import { DropdownFieldComponent } from 'sevago-library';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

function Example() {
  const [value, setValue] = React.useState<string | null>(null);

  return (
    <DropdownFieldComponent
      label="Select field"
      placeholder="Select option"
      options={options}
      value={value}
      onChange={(v) => setValue(v as string)}
    />
  );
}
    `}</Code>

    <Primary />

    <Hr />

    <H2>Props</H2>
    <ArgTypes />

    <Hr />

    <H2>Getting started</H2>

    <H3>With a pre-selected value</H3>
    <P>
      Pass <code>value</code> matching one of the option values to pre-select it.
    </P>
    <Code>{`<DropdownFieldComponent label="Select field" options={options} value="b" onChange={setValue} />`}</Code>
    <Canvas of={WithSelectedValue} />

    <Hr />

    <H3>Required field</H3>
    <P>
      Add <code>required</code> to show an asterisk <code>*</code> next to the label.
    </P>
    <Code>{`<DropdownFieldComponent label="Select field" options={options} required value={value} onChange={setValue} />`}</Code>
    <Canvas of={Required} />

    <Hr />

    <H3>Disabled state</H3>
    <Code>{`<DropdownFieldComponent label="Select field" options={options} value="a" disabled />`}</Code>
    <Canvas of={Disabled} />

    <Hr />

    <H3>Error state</H3>
    <P>
      Set <code>error</code> and pass <code>errorMessage</code> to display an error below the dropdown.
    </P>
    <Code>{`
<DropdownFieldComponent
  label="Select field"
  options={options}
  value={value}
  onChange={setValue}
  error
  errorMessage="This field is required."
/>
    `}</Code>
    <Canvas of={ErrorState} />

    <Hr />

    <H3>Success state</H3>
    <P>
      Set <code>success</code> and pass <code>successMessage</code> to confirm a valid selection.
    </P>
    <Code>{`
<DropdownFieldComponent
  label="Select field"
  options={options}
  value="a"
  onChange={setValue}
  success
  successMessage="Looks good!"
/>
    `}</Code>
    <Canvas of={SuccessState} />

    <Hr />

    <H3>Helper text</H3>
    <P>
      Use <code>helperText</code> for neutral guidance below the dropdown.
    </P>
    <Code>{`
<DropdownFieldComponent
  label="Select field"
  options={options}
  value={value}
  onChange={setValue}
  helperText="Please choose one of the available options."
/>
    `}</Code>
    <Canvas of={WithHelperText} />

    <Hr />

    <H3>Pill / rounded shape</H3>
    <P>
      Set <code>borderRadius="max"</code> for a fully-rounded pill shape.
    </P>
    <Code>{`<DropdownFieldComponent label="Pill shape dropdown" options={options} value={value} onChange={setValue} borderRadius="max" />`}</Code>
    <Canvas of={PillShape} />

    <Hr />

    <H2>Option variants</H2>

    <H3>With icons</H3>
    <P>Add an icon string (Material icon name) to each option.</P>
    <Code>{`
const options = [
  { label: 'Home',     value: 'home',     icon: 'home' },
  { label: 'Settings', value: 'settings', icon: 'settings' },
  { label: 'Person',   value: 'person',   icon: 'person' },
];
    `}</Code>
    <Canvas of={WithIcons} />

    <Hr />

    <H3>With avatars</H3>
    <P>Add an avatar URL to each option to show a circular avatar image.</P>
    <Code>{`
const options = [
  { label: 'Alice',   value: 'alice',   avatar: 'https://i.pravatar.cc/64?img=1' },
  { label: 'Bob',     value: 'bob',     avatar: 'https://i.pravatar.cc/64?img=2' },
  { label: 'Charlie', value: 'charlie', avatar: 'https://i.pravatar.cc/64?img=3' },
];
    `}</Code>
    <Canvas of={WithAvatars} />

    <Hr />

    <H3>With status indicator</H3>
    <P>
      Add <code>statusIndicator: true</code> to show a green dot before the option label.
    </P>
    <Code>{`
const options = [
  { label: 'Online', value: 'online', statusIndicator: true },
  { label: 'Busy',   value: 'busy',   statusIndicator: true },
  { label: 'Away',   value: 'away',   statusIndicator: true },
];
    `}</Code>
    <Canvas of={WithStatusIndicator} />

    <Hr />

    <H2>Interactive controls</H2>
    <P>Use the controls below to experiment with all props in real time.</P>
    <Canvas of={Default} />
    <Controls of={Default} />
  </>
);

// ─── meta ────────────────────────────────────────────────────────────────────

const DEFAULT_OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

const meta: Meta<typeof DropdownFieldComponent> = {
  title: 'Components/DropdownField',
  component: DropdownFieldComponent,
  tags: ['autodocs'],
  args: {
    label: 'Select field',
    placeholder: 'Select option',
    value: null,
    disabled: false,
    error: false,
    success: false,
    errorMessage: '',
    successMessage: '',
    helperText: 'Helper text',
    borderRadius: 6,
    required: false,
    options: DEFAULT_OPTIONS,
  },
  parameters: {
    layout: 'padded',
    docs: {
      page: DocsPage,
      description: {
        component:
          'A controlled select/dropdown component built on MUI `Select`. Supports labels, placeholder, helper/error/success messages, icons, avatars, status indicators, and customisable border radius.',
      },
    },
  },
  argTypes: dropdownFieldArgTypes,
};

export default meta;
type Story = StoryObj<typeof DropdownFieldComponent>;

// ─── controlled render wrapper ───────────────────────────────────────────────

const ControlledRender: Story['render'] = args => {
  const [value, setValue] = React.useState<string | number | null>(args.value ?? null);

  return (
    <DropdownFieldComponent
      {...args}
      value={value}
      onChange={v => {
        setValue(v);
        args.onChange?.(v);
      }}
    />
  );
};

// ─── stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: ControlledRender,
};

export const WithSelectedValue: Story = {
  render: ControlledRender,
  args: { value: 'b' },
};

export const WithoutLabel: Story = {
  render: ControlledRender,
  args: { label: '' },
};

export const Required: Story = {
  render: ControlledRender,
  args: { required: true },
};

export const Disabled: Story = {
  render: ControlledRender,
  args: { disabled: true, value: 'a' },
};

export const ErrorState: Story = {
  render: ControlledRender,
  args: { error: true, errorMessage: 'This field is required.', helperText: '' },
};

export const SuccessState: Story = {
  render: ControlledRender,
  args: { success: true, value: 'a', successMessage: 'Looks good!', helperText: '' },
};

export const PillShape: Story = {
  render: ControlledRender,
  args: { borderRadius: 'max', label: 'Pill shape dropdown' },
};

export const WithIcons: Story = {
  render: ControlledRender,
  args: {
    label: 'Select with icons',
    options: [
      { label: 'Home', value: 'home', icon: 'home' },
      { label: 'Settings', value: 'settings', icon: 'settings' },
      { label: 'Person', value: 'person', icon: 'person' },
    ],
  },
};

export const WithAvatars: Story = {
  render: ControlledRender,
  args: {
    label: 'Select user',
    options: [
      { label: 'Alice', value: 'alice', avatar: 'https://i.pravatar.cc/64?img=1' },
      { label: 'Bob', value: 'bob', avatar: 'https://i.pravatar.cc/64?img=2' },
      { label: 'Charlie', value: 'charlie', avatar: 'https://i.pravatar.cc/64?img=3' },
    ],
  },
};

export const WithStatusIndicator: Story = {
  render: ControlledRender,
  args: {
    label: 'Select status',
    options: [
      { label: 'Online', value: 'online', statusIndicator: true },
      { label: 'Busy', value: 'busy', statusIndicator: true },
      { label: 'Away', value: 'away', statusIndicator: true },
    ],
  },
};

export const WithHelperText: Story = {
  render: ControlledRender,
  args: { helperText: 'Please choose one of the available options.' },
};

export const NumericValues: Story = {
  render: ControlledRender,
  args: {
    label: 'Select number',
    options: [
      { label: 'One', value: 1 },
      { label: 'Two', value: 2 },
      { label: 'Three', value: 3 },
    ],
    value: null,
  },
};
