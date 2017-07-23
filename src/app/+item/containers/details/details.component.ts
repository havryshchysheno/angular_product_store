import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../shared/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CartItem } from '../../../interfaces/cart-item';

@Component({
    selector: 'item-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit, OnDestroy {
    public item: CartItem;
    public state: string = 'view';
    public edit: boolean = false;
    public cartForm: FormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required]
    });
    public confirm: boolean = false;
    private subscriber: Subscription;
    private defaultItem: CartItem = {
        title: '',
        description: '',
        image: './assets/img/default-image.png',
        price: 0
    };

    constructor(private sharedService: SharedService,
                private route: ActivatedRoute,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    public ngOnInit() {
        this.subscriber = this.route.queryParams.subscribe((params) => {
            const id = +params['id'];
            if (!id) {
                this.state = 'new';
                this.edit = true;
                this.item = this.defaultItem;
                this.updateForm(this.defaultItem);
            } else {
                this.item = this.sharedService.getItemById(id);
                this.updateForm(this.item);
                this.edit = false;
                this.state = 'view';
            }
        });
    }

    public ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

    public toggleEditState() {
        this.edit = true;
    }

    public saveChanges() {
        const newItem = {
            ...this.item,
            ...this.cartForm.value
        };

        if (this.cartForm.valid) {
            this.sharedService.editItemById(newItem)
                .then(() => {
                    this.edit = false;
                });
        }
    }

    public uploadHandler(file) {
        this.sharedService.loadItemImage(file)
            .then((res) => {
                this.item.image = `${res}`;
            });
    }

    public showConfirm() {
        this.confirm = true;
    }

    public createNewItem() {
        const newItem = {
            ...this.item,
            ...this.cartForm.value
        };

        if (this.cartForm.valid) {
            this.sharedService.createItem(newItem)
                .then((res) => {
                    this.router.navigate(['/detail'], {queryParams: {id: res.id}});
                });
        }
    }

    public removeItem(state) {
        if (state) {
            this.sharedService.removeItem(this.item)
                .then(() => {
                    this.router.navigate(['/']);
                });
        } else {
            this.confirm = false;
        }
    }

    private updateForm(item: CartItem) {
        this.cartForm.patchValue({
            title: item.title,
            price: item.price,
            description: item.description
        });
    }
}