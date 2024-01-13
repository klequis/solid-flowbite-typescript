import Alert from './components/Alert';

export default function AlertTry() {
  return (
    <>
    <Alert
      title="This is the title"
      // type="info" is the default, so we don't need to specify it.
    >
      <p>This is the new alert</p>
    </Alert>
    <Alert
      title="This is the title"
      type="danger"
    >
      <p>This is the new alert</p>
    </Alert>
    <Alert
      title="This is the title"
      type="success"
    >
      <p>This is the new alert</p>
    </Alert>
    <Alert
      title="This is the title"
      type="warning"
    >
      <p>This is the new alert</p>
    </Alert>
    <Alert
      title="This is the title"
      type="primary"
    >
      <p>This is the new alert</p>
    </Alert>
    <Alert
      title="This is the title"
      type="dark"
    >
      <p>This is the new alert</p>
    </Alert>
    </>
  );
}