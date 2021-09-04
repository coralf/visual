export interface Menu {
  key: string;
  icon: (props: any) => JSX.Element;
  component?: React.ReactElement;
}
