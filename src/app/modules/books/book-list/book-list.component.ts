import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() category: string;
  public selectedCategory: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedCategory = this.route.snapshot.paramMap.get("category")
    console.log(this.selectedCategory)
  }

}
