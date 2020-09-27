import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UserModel } from "../../models/users.model";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() public users: UserModel[];
  @Output() emitUserSelected = new EventEmitter<UserModel>();
  constructor() {}

  ngOnInit() {}

  public getUserSelected(user) {
    this.emitUserSelected.emit(user);
  }
}
