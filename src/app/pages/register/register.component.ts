import { Component, OnInit } from "@angular/core";
import { ELEMENTS } from "src/app/models/header.config";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public elements: any;
  constructor() {
    this.elements = ELEMENTS;
    this.elements[1].name = "FORM";
  }

  ngOnInit() {}
}
