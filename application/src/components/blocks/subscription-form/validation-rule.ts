export default {
  required: (value: string) => (value ? '' : 'Required your email'),
  email: (value: string) => (value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter valid email'),
};
