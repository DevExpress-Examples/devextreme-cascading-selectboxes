import { Injectable } from "@angular/core";

export class State {
  ID: number;
  Name: string;
}

export class City {
  ID: number;
  Name: string;
  StateID: number;
}

export class Address {
  StateID: number;
  CityID: number;
}

let states: State[] = [
  {
    ID: 1,
    Name: "Alabama"
  },
  {
    ID: 2,
    Name: "Alaska"
  },
  {
    ID: 3,
    Name: "Arizona"
  },
  {
    ID: 4,
    Name: "Arkansas"
  },
  {
    ID: 5,
    Name: "California"
  }
];

let cities: City[] = [
  {
    ID: 1,
    Name: "Tuscaloosa",
    StateID: 1
  },
  {
    ID: 2,
    Name: "Hoover",
    StateID: 1
  },
  {
    ID: 3,
    Name: "Dothan",
    StateID: 1
  },
  {
    ID: 4,
    Name: "Decatur",
    StateID: 1
  },
  {
    ID: 5,
    Name: "Anchorage",
    StateID: 2
  },
  {
    ID: 6,
    Name: "Fairbanks",
    StateID: 2
  },
  {
    ID: 7,
    Name: "Juneau",
    StateID: 2
  },
  {
    ID: 8,
    Name: "Avondale",
    StateID: 3
  },
  {
    ID: 9,
    Name: "Buckeye",
    StateID: 3
  },
  {
    ID: 10,
    Name: "Carefree",
    StateID: 3
  },
  {
    ID: 11,
    Name: "Springdale",
    StateID: 4
  },
  {
    ID: 12,
    Name: "Rogers",
    StateID: 4
  },
  {
    ID: 13,
    Name: "Sherwood",
    StateID: 4
  },
  {
    ID: 14,
    Name: "Jacksonville",
    StateID: 4
  },
  {
    ID: 15,
    Name: "Cabot",
    StateID: 4
  },
  {
    ID: 16,
    Name: "Adelanto",
    StateID: 5
  },
  {
    ID: 17,
    Name: "Glendale",
    StateID: 5
  },
  {
    ID: 18,
    Name: "Moorpark",
    StateID: 5
  },
  {
    ID: 19,
    Name: "Needles",
    StateID: 5
  },
  {
    ID: 20,
    Name: "Ontario",
    StateID: 5
  }
];

let address: Address = { StateID: null, CityID: null };

@Injectable()
export class Service {
  getStates() {
    return states;
  }
  getCities() {
    return cities;
  }
  getAddress(){
    return address;
  }
}
