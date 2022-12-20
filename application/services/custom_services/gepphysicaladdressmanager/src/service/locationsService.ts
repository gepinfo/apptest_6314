import { Request, Response } from "express";
import { PhysicalAddressDao } from "../dao/locationsDao";
import { CustomLogger } from "../config/Logger";
import * as jwt from "jsonwebtoken";
let PhysicalAddress = new PhysicalAddressDao();

export class PhysicalAddressService {
  constructor() {}

  public GpDelete(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpDelete"
    );
    let PhysicalAddressId = req.params.id;
    PhysicalAddress.GpDelete(PhysicalAddressId, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpDelete"
      );
      callback(response);
    });
  }

  public GpSearch(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpSearch"
    );
    let PhysicalAddressData = req.query;
    PhysicalAddress.GpSearch(PhysicalAddressData, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpSearch"
      );
      callback(response);
    });
  }

  // public GpCities(req: Request, callback) {
  //   new CustomLogger().showLogger(
  //     "info",
  //     "Enter into PhysicalAddressService.ts: GpSearch"
  //   );
  //   let PhysicalAddressData = req.query;
  //   PhysicalAddress.GpCities(PhysicalAddressData, (response) => {
  //     new CustomLogger().showLogger(
  //       "info",
  //       "Exit from PhysicalAddressService.ts: GpSearch"
  //     );
  //     callback(response);
  //   });
  // }

  public GpSearchForUpdate(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpSearchForUpdate"
    );
    let PhysicalAddressData = req.body;
    PhysicalAddress.GpSearchForUpdate(PhysicalAddressData, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpSearchForUpdate"
      );
      callback(response);
    });
  }

  public GpUpdate(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpUpdate"
    );
    let PhysicalAddressData = req.body;
    PhysicalAddress.GpUpdate(PhysicalAddressData, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpUpdate"
      );
      callback(response);
    });
  }

  public GpGetNounById(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpGetNounById"
    );
    let PhysicalAddressId = req.params.id;
    PhysicalAddress.GpGetNounById(PhysicalAddressId, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpGetNounById"
      );
      callback(response);
    });
  }

  public GpGetAllValues(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpGetAllValues"
    );

    PhysicalAddress.GpGetAllValues((response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpGetAllValues"
      );
      callback(response);
    });
  }

  public GpCreate(req: Request, callback) {
    new CustomLogger().showLogger(
      "info",
      "Enter into PhysicalAddressService.ts: GpCreate"
    );
    let PhysicalAddressData = req.body;
    PhysicalAddress.GpCreate(PhysicalAddressData, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressService.ts: GpCreate"
      );
      callback(response);
    });
  }

  // public  (req: Request, callback){
  //     new CustomLogger().showLogger('info', 'Enter into PhysicalAddressService.ts: ')

  //      PhysicalAddress.(()=>{
  //              new CustomLogger().showLogger('info', 'Exit from PhysicalAddressService.ts: ')
  //          callback();
  //          });
  //     }
}
