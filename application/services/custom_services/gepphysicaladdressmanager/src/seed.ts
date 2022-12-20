import mongoose = require("mongoose");
import { PhysicalAddressSchema } from "./models/PhysicalAddress";
import { india } from "./assets/india";
import { US } from "./assets/us";

const PhysicalAddressmodel = mongoose.model(
  "PhysicalAddress",
  PhysicalAddressSchema
);

export class SeedService {
  constructor() { }

  public create(): void {
    india.forEach((something) => {
      console.log("enter into seed resurce name", something);
      PhysicalAddressmodel.findOneAndUpdate(
        { name: something["name"] },
        something,
        { new: true },
        (err, data) => {
          console.log("recheck data create", data);
          if (data === null) {
            let screenroute = new PhysicalAddressmodel(something);
            console.log("data a save", screenroute);
            screenroute.save();
          }
        }
      );
    });
    US.forEach((something) => {
      console.log("enter into seed resurce name", something);
      PhysicalAddressmodel.findOneAndUpdate(
        { name: something["name"] },
        something,
        { new: true },
        (err, data) => {
          console.log("recheck data create", data);
          if (data === null) {
            let screenroute = new PhysicalAddressmodel(something);
            console.log("data a save", screenroute);
            screenroute.save();
          }
        }
      );
    });
  }
}
