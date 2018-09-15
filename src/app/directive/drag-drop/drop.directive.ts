import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {DragData, DragDropService} from '../drag-drop.service';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {
  @Output() dropped: EventEmitter<DragData> = new EventEmitter();
  @Input() dragEnterClass = '';
  @Input() dropTags: string[] = [];
  private drag$: Observable<DragData | null>;

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private service: DragDropService) {
    this.drag$ = this.service.getDragData().pipe(take(1));
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event) {
    ev.preventDefault();
    if (this.el.nativeElement === ev.target) {
      ev.stopPropagation();
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(this.el.nativeElement, 'dataTransfer.dropEffect', 'move');
        }
      });

    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event) {
    ev.preventDefault();
    if (this.el.nativeElement === ev.target) {
      ev.stopPropagation();
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
        } else {
          this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
          this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event) {
    ev.preventDefault();
    if (this.el.nativeElement === ev.target) {
      ev.stopPropagation();
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(<string>dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event) {
    ev.preventDefault();
    if (this.el.nativeElement === ev.target) {
      ev.stopPropagation();
      this.drag$.subscribe(dragData => {
        if (dragData && this.dropTags.indexOf(dragData.tag) > -1) {
          this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
          this.dropped.emit(dragData);
          this.service.clearDragData();
        }
      });
    }

  }
}

