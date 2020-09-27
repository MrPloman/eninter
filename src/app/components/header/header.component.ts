import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { ElementHeader } from "../../models/element.model";
import { element } from "protractor";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() public elements: ElementHeader[];
  constructor(public router: Router, public translate: TranslateService) {}

  ngOnInit() {
    console.log(this.elements);
  }

  public goHome() {
    this.router.navigate(["/", "home"]);
  }
  public selectLang(lang: string) {
    let selected = lang.toLowerCase();
    this.translate.use(selected);
    localStorage.setItem("userLanguage", selected);
  }
}
