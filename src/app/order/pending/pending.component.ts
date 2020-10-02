import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerService, NzTableComponent } from 'ng-zorro-antd';
import { DetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-pending',
    templateUrl: './pending.component.html',
    styleUrls: ['./pending.component.less']
})
export class PendingComponent implements OnInit {

    constructor(private fb: FormBuilder, private drawerService: NzDrawerService) { }

    scrollOpt = { y: '240px' }

    validateForm!: FormGroup;

    @ViewChild('content') elementView: ElementRef;

    listOfData = [];

    contentHeight;

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [null, [Validators.required]],
            password: [null, [Validators.required]],
            remember: [true]
        });

        // <th>P.O.</th>
        //         <th>Invoice</th>
        //         <th>Customer</th>
        //         <th>Code</th>
        //         <th>Branch (Address)</th>
        //         <th>Contact Person</th>
        //         <th>Contact Number</th>
        //         <th>Action</th>

        for (let i = 0; i < 100; i ++) {
            this.listOfData.push({
                po: 555000222 + i + '',
                invoice: '',
                customer: 'Old Street Bak Kut Teh . You Tiao . Soya Milk',
                calculateInvoice: i % 2 != 0,
                branch: '【WESTGATE】- CRYSTAL JADE DINING PLACE (WG) PTE. LTD. - #04-42, Westgate, 608532',
                address: 'London No. 1 Lake Park',
                contact: 'Saliuy',
                number: '93871234'
            });
        }
    }

    ngAfterViewInit() {
        this.contentHeight = this.elementView.nativeElement.offsetHeight - 70;
        this.scrollOpt = { y: this.contentHeight + 'px' };
    }

    openComponent(): void {
        const drawerRef = this.drawerService.create<DetailComponent, { value: string }, string>({
          nzTitle: 'Component',
          nzContent: DetailComponent,
          nzPlacement: 'bottom',
          nzWrapClassName: 'inner-content',
          nzHeight: '90%',
          nzOffsetY: -64,
          nzContentParams: {
            value: "parameters"
          }
        });
    
        drawerRef.afterOpen.subscribe(() => {
          console.log('Drawer(Component) open');
        });
    
        drawerRef.afterClose.subscribe(data => {
          console.log(data);
          if (typeof data === 'string') {
            // this.value = data;
          }
        });
      }
}
