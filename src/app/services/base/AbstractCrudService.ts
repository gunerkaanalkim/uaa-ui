import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GlobalExceptionHandlerService} from "../global-exception-handler.service";
import {Store} from "@ngrx/store";
import {NgxSpinnerService} from "ngx-spinner";
import {catchError} from "rxjs";

export interface Upstream {
  getAll: string,
  getAllWithoutPage: string,
  getById: string,
  filter: string,
  create: string,
  createAll: string,
  edit: string,
  destroy: string
  destroyAll: string
}

@Injectable()
export abstract class AbstractCrudService<D, P, S> {

  protected constructor(
    protected readonly config: any,
    protected readonly httpClient: HttpClient,
    protected readonly globalExceptionHandlerService: GlobalExceptionHandlerService,
    protected readonly store: Store,
    protected readonly ngxSpinnerService: NgxSpinnerService
  ) {
  }

  abstract getRoutes(): Upstream;

  public getAll(pageNo: number) {
    return this.httpClient
      .get<P>(`${this.getRoutes().getAll}?pageNo${pageNo}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public getAllWithoutPage() {
    return this.httpClient
      .get<D[]>(`${this.getRoutes().getAllWithoutPage}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }
  public getById(id: number) {
    return this.httpClient
      .get<D>(`${this.getRoutes().getById}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public filter(searchFilterRequest: S) {
    return this.httpClient
      .post<P>(this.getRoutes().filter, searchFilterRequest)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public create(dto: D) {
    return this.httpClient
      .post<D>(this.getRoutes().create, dto)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public createAll(dtoList: D[]) {
    return this.httpClient
      .post<D>(this.getRoutes().createAll, dtoList)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public edit(dto: D) {
    return this.httpClient
      .put<D>(this.getRoutes().edit, dto)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public destroy(id: number) {
    return this.httpClient
      .delete<D>(`${this.getRoutes().destroy}/${id}`)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }

  public destroyAll(idList: number[]) {
    return this.httpClient
      .post<D>(`${this.getRoutes().destroyAll}`, idList)
      .pipe(catchError(this.globalExceptionHandlerService.handleError.bind({
        store: this.store,
        spinner: this.ngxSpinnerService
      })))
  }
}
