
import React from 'react';
import cxs from "cxs";
import {
  withTheme,
  A,
  Alert,
  Background,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Checkbox,
  Input,
  Label,
  Radio,
  Select,
  Option,
  Textarea
} from '../src';

const TestComponent = props => {
  return (
    <Background>
      <h1>Anchor tag</h1>
      <A>Link</A>

      <h1>Alert</h1>
      <Alert type="primary">Primary</Alert>
      <Alert type="secondary">Secondary</Alert>
      <Alert type="tertiary">Tertiary</Alert>
      <Alert type="success">Success</Alert>
      <Alert type="error">Error</Alert>
      <Alert type="warning">Warning</Alert>

      <h1>Breadcrumbs</h1>

      <h1>Button</h1>
      <div className={cxs({ display: 'flex', justifyContent: 'flex-start' })}>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="tertiary">Tertiary</Button>
        <Button type="success">Success</Button>
        <Button type="error">Error</Button>
        <Button type="warning">Warning</Button>
      </div>

      <h1>Card</h1>
      <Card styles={{width: '400px'}}>
        <CardHeader>
          Header
        </CardHeader>
        <CardContent>
          Content
        </CardContent>
        <CardFooter>
          Footer
        </CardFooter>
      </Card>

      <h1>Checkbox</h1>
      <Checkbox
        checked={true}
        onChange={() => {}}
      />

      <h1>Drawer</h1>

      <h1>Input</h1>
      <Input
        value="Hello"
        onChange={() => {}}
      />

      <h1>Label</h1>
      <Label htmlFor="testLabel">
        <b>Hello </b>
      </Label>
      <Input
        id="testLabel"
        value="Hello"
        onChange={() => {}}
      />

      <h1>Menu</h1>

      <h1>Radio</h1>
      <Radio
        checked={true}
        onChange={() => {}}
      />

      <h1>Select</h1>
      <Select
        onChange={() => {}}
      >
        <Option id="test1" value="test1">Test 1</Option>
        <Option id="test1" value="test2">Test 2</Option>
      </Select>

      <h1>Textarea</h1>
      <Textarea
        value="Hello"
        onChange={() => {}}
      />

      <h1>Tooltip</h1>
    </Background>
  );
};

export default withTheme(TestComponent);
