import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() course: Course;

  @Output() courseSelected = new EventEmitter<Course>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewed() {
    console.log("button clicked");
    this.courseSelected.emit(this.course);
  }
}
