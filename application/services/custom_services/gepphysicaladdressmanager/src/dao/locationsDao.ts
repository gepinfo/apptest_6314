import * as mongoose from "mongoose";
import PhysicalAddressModel from "../models/PhysicalAddress";
import { CustomLogger } from "../config/Logger";

export class PhysicalAddressDao {
  private PhysicalAddress = PhysicalAddressModel;
  constructor() {}

  public async GpDelete(PhysicalAddressId, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpDelete"
    );

    this.PhysicalAddress.findByIdAndRemove(PhysicalAddressId)
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpDelete"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async GpSearch(PhysicalAddressData, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpSearch"
    );

    let andkey;
    let and_obj = {};
    let orkey;
    let or_obj = {};

    Object.entries(PhysicalAddressData).forEach(([key, value]) => {
      if (value !== "") {
        andkey = key;
        and_obj[andkey] = value;
      } else {
        orkey = key;
        or_obj[orkey] = { $ne: "" };
      }
    });
    this.PhysicalAddress.find({
      $and: [
        {
          $or: [or_obj],
        },
        and_obj,
      ],
    })
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpSearch"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  // public async GpCities(PhysicalAddressData, callback) {
  //   new CustomLogger().showLogger(
  //     "info",
  //     "Enter into PhysicalAddressDao.ts: GpCities"
  //   );

  //   let andkey;
  //   let and_obj = {};
  //   let orkey;
  //   let or_obj = {};

  //   Object.entries(PhysicalAddressData).forEach(([key, value]) => {
  //     if (value !== "") {
  //       andkey = key;
  //       and_obj[andkey] = value;
  //     } else {
  //       orkey = key;
  //       or_obj[orkey] = { $ne: "" };
  //     }
  //   });
  //   this.PhysicalAddress
  //     .find({
  //       $and: [
  //         {
  //           $or: [or_obj],
  //         },
  //         and_obj,
  //       ],
  //     })
  //     .then((result) => {
  //       new CustomLogger().showLogger(
  //         "info",
  //         "Exit from PhysicalAddressDao.ts: GpCities"
  //       );

  //       callback(result);
  //     })
  //     .catch((error) => {
  //       callback(error);
  //     });
  // }
  public async GpSearchForUpdate(PhysicalAddressData, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpSearchForUpdate"
    );

    this.PhysicalAddress.findOneAndUpdate(
      { _id: PhysicalAddressData._id },
      PhysicalAddressData,
      {
        new: true,
      }
    )
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpSearchForUpdate"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async GpUpdate(PhysicalAddressData, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpUpdate"
    );

    this.PhysicalAddress.findOneAndUpdate(
      { _id: PhysicalAddressData._id },
      PhysicalAddressData,
      {
        new: true,
      }
    )
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpUpdate"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async GpGetNounById(PhysicalAddressId, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpGetNounById"
    );

    this.PhysicalAddress.findById(PhysicalAddressId)
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpGetNounById"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async GpGetAllValues(callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpGetAllValues"
    );

    this.PhysicalAddress.find()
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpGetAllValues"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async GpCreate(PhysicalAddressData, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressDao.ts: GpCreate"
    );

    let temp = new PhysicalAddressModel(PhysicalAddressData);

    temp
      .save()
      .then((result) => {
        new CustomLogger().showLogger(
          "info",
          "Exit from PhysicalAddressDao.ts: GpCreate"
        );

        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  }
  public async() {
    new CustomLogger().showLogger("info", "Enter into PhysicalAddressDao.ts: ");
  }
}
