export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class UserClass implements IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(model?: any) {
    model = model || {};
    this.id = model.id || null;
    this.name = model.name || null;
    this.username = model.username || null;
    this.email = model.email || null;
    this.address = model.address || {
      street: null,
      suite: null,
      city: null,
      zipcode: null,
      geo: {
        lat: null,
        lng: null,
      },
    };
    this.phone = model.phone || null;
    this.website = model.website || null;
    this.company = model.company || {
      name: null,
      catchPhrase: null,
      bs: null,
    };
  }
}
