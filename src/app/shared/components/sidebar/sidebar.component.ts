import { Component, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  })
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  
  onClickTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}

