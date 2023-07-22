declare module "*.svg" {
  const content: any;
  export default content;
}

interface Transition {
  id: string;
  name: string;
  from: string;
  to: string;
}
