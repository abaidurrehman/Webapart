import * as ko from 'knockout';
import styles from './HellowWorld.module.scss';
import { IHelloWorldWebPartProps } from './IHellowWorldWebPartProps';

export interface IHellowWorldBindingContext extends IHelloWorldWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class HellowWorldViewModel {
  public description: KnockoutObservable<string> = ko.observable('');
 
 public comments: KnockoutObservable<string> = ko.observable('');

  public labelClass: string = styles.label;
  public helloWorldClass: string = styles.helloWorld;
  public containerClass: string = styles.container;
  public rowClass: string = `ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`;
  public buttonClass: string = `ms-Button ${styles.button}`;

  constructor(bindings: IHellowWorldBindingContext) {
    this.description(bindings.description);
 this.comments(bindings.comments);
    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
    
  }
}
