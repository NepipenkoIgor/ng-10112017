import {
  Component, ComponentFactory, ComponentFactoryResolver,
  ComponentRef, HostListener, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'course-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public isOpen: boolean = false;
  // tslint:disable-next-line
  private _modalContext: ComponentRef<any>;

  @ViewChild('modalContent', { read: ViewContainerRef })
  private _modal: ViewContainerRef;


  public constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  public ngOnInit(): void {
    this._modalService.modalSequence$
      // tslint:disable-next-line
      .subscribe((item: { component: any, context: any } | null) => {
        if (!item) {
          this.close();
          return;
        }
        this.isOpen = true;
        // tslint:disable-next-line
        const componentFactory: ComponentFactory<any> =
          this._componentFactoryResolver.resolveComponentFactory(item.component);

        this._modalContext = this._modal.createComponent(componentFactory);

        Object.keys(item.context)
          .forEach((key: string) => this._modalContext.instance[key] = item.context[key]);

      });

  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    this._modalContext && this._modalContext.destroy();
    this.isOpen = false;
  }

}
