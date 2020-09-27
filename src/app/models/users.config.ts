import { UserModel } from "./users.model";
export const Users: UserModel[] = [
  {
    firstName: "Rack",
    lastName: "Jackon",
    gender: "man",
    age: 24,
    address: {
      streetAddress: "123",
      city: "San Jone",
      state: "CATALONIA",
      postalCode: 1111,
    },
    phoneNumbers: [
      {
        type: "HOME",
        number: 1111,
      },
    ],
  },
  {
    firstName: "Pol",
    lastName: "Plana",
    gender: "man",
    age: 22,
    address: {
      streetAddress: "2323",
      city: "San Jone",
      state: "CATALONIA",
      postalCode: 1111,
    },
    phoneNumbers: [
      {
        type: "HOME",
        number: 1111,
      },
    ],
  },
];
