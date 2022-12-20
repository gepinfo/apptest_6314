import { Request, Response, NextFunction } from "express";
import { PhysicalAddressController } from "../controller/locationsController";

export class Routes {
  private PhysicalAddress: PhysicalAddressController =
    new PhysicalAddressController();

  public routes(app): void {
    app.route("/health/entity-service").get((req: Request, res: Response) => {
      res.status(200).send({
        status: "up",
      });
    });
    app.route("/locations/:id").delete(this.PhysicalAddress.GpDelete);
    app.route("/locations/get/search").get(this.PhysicalAddress.GpSearch);
    // app.route("/PhysicalAddress/get/search/countries").get(this.PhysicalAddress.GpCities);
    app.route("/locations/get/update").put(this.PhysicalAddress.GpSearchForUpdate);
    app.route("/locations").put(this.PhysicalAddress.GpUpdate);
    app.route("/locations/:id").get(this.PhysicalAddress.GpGetNounById);
    app.route("/locations").get(this.PhysicalAddress.GpGetAllValues);
    app.route("/locations").post(this.PhysicalAddress.GpCreate);
  }
}
