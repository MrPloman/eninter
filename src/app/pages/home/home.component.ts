import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ELEMENTS } from "../../models/header.config";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public elements: any = ELEMENTS;

  constructor(public translate: TranslateService) {
    this.elements[1].name = "HOME";
    this.elements[1].description = "HOME";
  }

  ngOnInit() {}
}
