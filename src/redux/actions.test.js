import { setVenues, SET_VENUES } from "./actions";

describe("actions", () => {
  it("should create an action to set venues", () => {
    const venues = [{ id: 1, name: "Venue 1" }];
    const expectedAction = {
      type: SET_VENUES,
      payload: venues,
    };
    expect(setVenues(venues)).toEqual(expectedAction);
  });
});
