declare interface IHellowWorldStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'hellowWorldStrings' {
  const strings: IHellowWorldStrings;
  export = strings;
}
