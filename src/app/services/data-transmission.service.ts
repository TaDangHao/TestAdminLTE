import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './../user.model';

const apiUrl = 'http://118.70.175.108:8834/ipcms/icp/filter/1?user_id=HIEP_ADMIN&fid=F15&id_number&full_name&phone_number&type_of_loan&product_loan&loan_form&form_payment&type_customer&create_from=2021-02-03&create_to=2021-03-04&classify_cutomer&secret_token=3cedd16f0e7f081a2cde8d7a13a3fe8971c9fc5462bf450f12adeadac14b8ae3&fbclid=IwAR3Uyrx1IR4dE256qSzsAm9EW767vGMbtxIu90IYTzunX6Mawa2VN-CvOy4';

@Injectable({
  providedIn: 'root'
})
export class DataTransmissionService {
  private messageSource = new BehaviorSubject('Hello Bống');
  currentMessage = this.messageSource.asObservable();
  constructor(
    private httpClient: HttpClient
  ) { }
  changeMessage(message: string): void {
    this.messageSource.next(message);
  }
  getData(): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append(data.userId, data.source);
    return this.httpClient.get(apiUrl);
  }
  createData(data: UserModel): Observable<any> {
    return this.httpClient.post(apiUrl, data);
  }
}
