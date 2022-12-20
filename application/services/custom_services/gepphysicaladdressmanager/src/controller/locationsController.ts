import { Request, Response } from "express";
import { PhysicalAddressService } from "../service/locationsService";
import { CustomLogger } from "../config/Logger";
let PhysicalAddress = new PhysicalAddressService();

export class PhysicalAddressController {
  constructor() {}

  public GpDelete(req: Request, res: Response) {
    PhysicalAddress.GpDelete(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpDelete"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpDelete"
      );
    });
  }
  public GpSearch(req: Request, res: Response) {
    PhysicalAddress.GpSearch(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpSearch"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpSearch"
      );
    });
  }
  // public GpCities(req: Request, res: Response) {
  //   PhysicalAddress.GpCities(req, (response) => {
  //     new CustomLogger().showLogger(
  //       "info",
  //       "Enter into PhysicalAddressController.ts: GpCities"
  //     );
  //     res.status(200);
  //     res.json(response);
  //     new CustomLogger().showLogger(
  //       "info",
  //       "Exit from PhysicalAddressController.ts: GpCities"
  //     );
  //   });
  // }
  public GpSearchForUpdate(req: Request, res: Response) {
    PhysicalAddress.GpSearchForUpdate(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpSearchForUpdate"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpSearchForUpdate"
      );
    });
  }
  public GpUpdate(req: Request, res: Response) {
    PhysicalAddress.GpUpdate(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpUpdate"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpUpdate"
      );
    });
  }
  public GpGetNounById(req: Request, res: Response) {
    PhysicalAddress.GpGetNounById(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpGetNounById"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpGetNounById"
      );
    });
  }
  public GpGetAllValues(req: Request, res: Response) {
    PhysicalAddress.GpGetAllValues(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpGetAllValues"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpGetAllValues"
      );
    });
  }
  public GpCreate(req: Request, res: Response) {
    PhysicalAddress.GpCreate(req, (response) => {
      new CustomLogger().showLogger(
        "info",
        "Enter into PhysicalAddressController.ts: GpCreate"
      );
      res.status(200);
      res.json(response);
      new CustomLogger().showLogger(
        "info",
        "Exit from PhysicalAddressController.ts: GpCreate"
      );
    });
  }
  // public GpSEF(req: Request, res: Response) {
  // PhysicalAddress.GpSEF(req, (response) => {
  //                 new CustomLogger().showLogger('info', 'Enter into PhysicalAddressController.ts: GpSEF');
  //      res.status(200);
  //      res.json(response);
  //                 new CustomLogger().showLogger('info', 'Exit from PhysicalAddressController.ts: GpSEF');
  //     })}
}
