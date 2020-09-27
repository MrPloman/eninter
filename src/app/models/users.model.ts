export class UserModel {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: {
    streetAddress: number;
    city: string;
    state: string;
    postalCode: number;
  };
  phoneNumbers: [
    {
      type: string;
      number: number;
    }
  ];
}
