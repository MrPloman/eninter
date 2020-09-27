import { Component, OnInit } from "@angular/core";
import { ELEMENTS } from "src/app/models/header.config";
import { Users } from "../../models/users.config";
import { UserModel } from "../../models/users.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public elements: any;
  public users = Users;
  public userSelected: UserModel;
  error: boolean;
  constructor() {
    this.elements = ELEMENTS;
    this.elements[1].name = "FORM";
    this.userSelected = {
      firstName: "",
      lastName: "",
      gender: "",
      age: undefined,
      address: {
        streetAddress: "",
        city: "",
        state: "",
        postalCode: undefined,
      },
      phoneNumbers: [
        {
          type: "",
          number: undefined,
        },
      ],
    };
  }

  ngOnInit() {}
  public getUserSelected($event) {
    this.userSelected = $event;
  }
  public createUser() {
    if (
      this.userSelected.firstName === "" ||
      this.userSelected.lastName === "" ||
      this.userSelected.age === undefined ||
      this.userSelected.address.streetAddress === "" ||
      this.userSelected.address.city === "" ||
      this.userSelected.address.postalCode === undefined
    ) {
      this.error = true;
    } else {
      this.error = false;

      this.users.push(this.userSelected);
      this.userSelected = {
        firstName: "",
        lastName: "",
        gender: "",
        age: undefined,
        address: {
          streetAddress: "",
          city: "",
          state: "",
          postalCode: undefined,
        },
        phoneNumbers: [
          {
            type: "",
            number: undefined,
          },
        ],
      };
    }
  }
}
