import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class locationsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/locations/:id', this.GpDelete);
this.router.get('/locations', this.GpGetAllValues);
this.router.post('/locations', this.GpCreate);
this.router.put('/locations', this.GpUpdate);
this.router.get('/locations/get/search', this.GpSearch);
this.router.put('/locations/get/update', this.GpSearchForUpdate);
this.router.get('/locations/:id', this.GpGetNounById);
this.router.get('/locations/userid/created_by', this.GpGetNounCreatedBy);
        //#@gepdelimeterone@#
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpDelete');
        new ApiAdapter().delete(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpCreate');
        new ApiAdapter().post(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpUpdate');
        new ApiAdapter().put(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpSearch');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into locationsController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from locationsController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#

    //#@apifacebooklogin@#

    //#@apigithublogin@#








}

