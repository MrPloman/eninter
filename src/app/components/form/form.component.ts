import { Component, Input, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/users.model";
import { GENDER } from "../../models/gender.config";
import { PHONE } from "../../models/phone.config";
import { STATE } from "../../models/state.config";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() public user: UserModel;
  @Input() public disabled: boolean;
  public gender = GENDER;
  public phone = PHONE;
  public state = STATE;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes): void {
    console.log("algo cambia");
  }
  public selectGender(g) {
    this.user.gender = g;
    this.gender.forEach((gender) => {
      if (gender.value === g) {
        gender.selected = true;
      } else {
        gender.selected = false;
      }
    });
    console.log(this.user.gender);
    console.log(this.gender);
  }
  public selectPhone(p) {
    this.user.phoneNumbers[0].type = p;
    console.log(this.user.phoneNumbers);
  }

  public selectState(s) {
    this.user.address.state = s;
  }
}
