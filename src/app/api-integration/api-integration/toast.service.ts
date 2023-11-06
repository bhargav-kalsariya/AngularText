import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, {
      timeOut: 5000, // You can override the global options here
      closeButton: true,
      toastClass: 'custom-toast', // Apply custom CSS class
    });
  }
  showError(message: string, title: string) {
    this.toastr.error(message, title, {
      timeOut: 5000, // You can override the global options here
      closeButton: true,
      toastClass: 'custom-toast', // Apply custom CSS class
    });
  }
}
